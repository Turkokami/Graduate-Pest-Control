#!/usr/bin/env node
/**
 * build-redirects.mjs — generates the `redirects` array in vercel.json.
 *
 * WHY THIS IS A GENERATOR AND NOT A HAND-MAINTAINED LIST
 *
 * Three separate files know about a URL that has to move:
 *   · markets.ts        retiredMarketSlugs   — Huntington Bay/Village, folded into the town hub
 *   · services.ts       retiredServiceSlugs  — termite control, retired when Ryan said he does not do it
 *   · legacy-redirects.ts legacyRedirects    — the live site's 353 URLs, from a crawl of graduatepestcontrol.com
 *
 * Those are the sources of truth and they are where the reasoning lives. Copying
 * ~370 pairs into vercel.json by hand and hoping the two stay in step is the
 * kind of thing that is fine for a week and then quietly wrong forever.
 *
 * WHY THE OUTPUT IS COMMITTED RATHER THAN BUILT
 *
 * Vercel reads vercel.json from the repository BEFORE it runs the build, so a
 * file this script wrote during `astro build` would arrive too late to route
 * anything. The generated file therefore has to be committed. That creates the
 * obvious drift risk, which is why `--check` exists and why the gate runs it:
 * if vercel.json and the data disagree, the build fails and names the
 * difference. Generate, commit, and let the harness keep them honest.
 *
 * ORDERING
 *
 * Vercel evaluates vercel.json `redirects` before it applies the trailingSlash
 * normalisation in the filesystem phase. That ordering is load-bearing here:
 * every live URL lacks a trailing slash and every new URL has one, so if
 * normalisation ran first, /locations/huntington-bay would become
 * /locations/huntington-bay/ and 404 instead of landing on the town hub.
 * Verify it with curl after the first deploy — DEPLOY.md says how.
 *
 * Run:  npm run redirects          (rewrite vercel.json)
 *       npm run redirects:check    (fail if vercel.json has drifted)
 */
import fs from 'node:fs';
import { retiredMarketSlugs } from '../src/data/markets.ts';
import { retiredServiceSlugs } from '../src/data/services.ts';
import { legacyRedirects } from '../src/data/legacy-redirects.ts';

const CHECK = process.argv.includes('--check');
const VERCEL_JSON = 'vercel.json';
const DIST = 'dist';

// Precedence, most specific first. A `from` claimed by an earlier source wins:
// the retired-slug files carry decisions we made deliberately, and the crawl
// file is a best reading of somebody else's site.
const SOURCES = [
  ['retiredMarketSlugs', retiredMarketSlugs],
  ['retiredServiceSlugs', retiredServiceSlugs],
  ['legacyRedirects', legacyRedirects],
];

const seen = new Map();
const rows = [];
const shadowed = [];

for (const [origin, list] of SOURCES) {
  for (const r of list) {
    const from = r.from.replace(/\/+$/, '') || '/';
    if (seen.has(from)) {
      shadowed.push(`${from} (${origin}, already claimed by ${seen.get(from)})`);
      continue;
    }
    seen.set(from, origin);
    rows.push({ source: from, destination: r.to, statusCode: 301 });
  }
}

// Two different things look identical in the data and must not be treated the
// same way.
//
// 1 · A PURE SLASH FIX. Every live URL lacks a trailing slash, every new URL
//     has one, so 110 of the crawled rows are /foo → /foo/ where /foo/ is a
//     page we build. Vercel already does that: `trailingSlash: true` makes the
//     platform 308 a slashless request onto the canonical path. Emitting our
//     own row for it is a second redirect doing the platform's job, and every
//     redundant rule is one more thing that can be wrong later. Dropped.
//
// 2 · A REAL CLASH. A row whose source resolves to a page we build but whose
//     destination is somewhere else entirely. The route wins, the redirect
//     never fires, and nothing looks broken. This is the case that bites when a
//     market clears the research gate and a URL we retired quietly comes back
//     to life. Hard failure.
const built = new Set();
if (fs.existsSync(DIST)) {
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = `${d}/${e.name}`;
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html') built.add(p.slice(DIST.length, -'index.html'.length));
    }
  };
  walk(DIST);
} else {
  console.error('✗ dist/ missing — build first, or neither guard can run.');
  process.exit(1);
}

const isBuilt = (path) => built.has(path.endsWith('/') ? path : path + '/');

const clashes = rows.filter((r) => isBuilt(r.source) && r.destination !== r.source + '/');
if (clashes.length) {
  console.error(
    `\n✗ ${clashes.length} redirect source(s) are ALSO pages this build emits, pointing\n` +
      `  somewhere else. The route wins and the redirect never fires:\n` +
      clashes.map((c) => `    ${c.source} → ${c.destination}`).join('\n') +
      `\n\n  Fix the data, or stop generating the page. Do not ship both.\n`
  );
  process.exit(1);
}

const redundant = rows.filter((r) => isBuilt(r.source) && r.destination === r.source + '/');
const kept = rows.filter((r) => !redundant.includes(r));

const config = JSON.parse(fs.readFileSync(VERCEL_JSON, 'utf8'));
const next = { ...config, redirects: kept };
const serialised = JSON.stringify(next, null, 2) + '\n';

if (CHECK) {
  const current = fs.readFileSync(VERCEL_JSON, 'utf8');
  if (current !== serialised) {
    const have = (config.redirects ?? []).length;
    console.error(
      `\n✗ vercel.json has drifted from the redirect data.\n` +
        `  vercel.json holds ${have} redirect(s); the data yields ${kept.length}.\n` +
        `  Run: npm run redirects   — then commit vercel.json.\n`
    );
    process.exit(1);
  }
  console.log(`✓ vercel.json matches the data — ${kept.length} redirects.`);
  process.exit(0);
}

fs.writeFileSync(VERCEL_JSON, serialised);
console.log(`✓ wrote ${kept.length} redirects to ${VERCEL_JSON}`);
console.log(`    ${redundant.length} pure slash-fix row(s) dropped — trailingSlash:true already handles those`);
for (const [origin, list] of SOURCES) {
  console.log(`    ${list.length.toString().padStart(4)} from ${origin}`);
}
if (shadowed.length) {
  console.log(`\n  ${shadowed.length} duplicate source(s) dropped by precedence:`);
  for (const s of shadowed) console.log(`    ${s}`);
}
