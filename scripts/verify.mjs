#!/usr/bin/env node
/**
 * The verification harness — Keystone Part 9.2.
 *
 * "Four small scripts, run between every content wave and before every push —
 * the reason builds ship with zero dead links and consistent metadata."
 *
 * Run:  node scripts/verify.mjs [dist] [src/content]
 * Exits non-zero if any gate item fails, so it can block a push in CI.
 *
 * The five checks:
 *   1 Dead-link crawler        — every internal href resolves to a built file
 *   2 Per-page SEO audit       — H1/title/description/alt/og/canonical
 *   3 Duplicate-sentence scan  — anti-slop (Part 6.3)
 *   4 Word-count auditor       — the M1 floor, measured on SOURCE not HTML
 *   5 Image-metadata integrity — M6/M7, alt preserved and never blanked
 *   6 Strict audit           — pairwise duplicates (threshold 2) + prohibitions
 *   7 Redirect drift         — vercel.json still matches the redirect data
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const DIST = process.argv[2] ?? 'dist';
const CONTENT = process.argv[3] ?? 'src/content';

const M1_FLOOR = 3000;
const M1_TARGET_MAX = 5000;
const TITLE_MAX = 60;
const DESC_MIN = 110;
const DESC_MAX = 165;

let failures = 0;
let warnings = 0;

const fail = (check, msg) => { failures++; console.log(`  ✗ [${check}] ${msg}`); };
const warn = (check, msg) => { warnings++; console.log(`  ! [${check}] ${msg}`); };

function walk(dir, ext, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, ext, out);
    else if (e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

const htmlFiles = walk(DIST, '.html');
const mdFiles = walk(CONTENT, '.md');

console.log(`\nVerification harness — ${htmlFiles.length} built pages, ${mdFiles.length} content files\n`);

// ---------------------------------------------------------------------------
// 0 · Freshness guard
//
// Learned the hard way: a failed `astro build` leaves the previous dist/ in
// place, and the harness then audits stale output and reports GATE: PASSED on
// a build that never succeeded. Keystone Part 9 — verify the real state, never
// trust that the previous step did what it said.
// ---------------------------------------------------------------------------
{
  if (!fs.existsSync(DIST)) {
    console.log('\n  \u2717 [freshness] dist/ does not exist — the build did not run.');
    console.log('GATE: FAILED\n');
    process.exit(1);
  }
  const built = walk(DIST, '.html').length;
  const sources = walk(CONTENT, '.md').length;
  if (sources > 0 && built < sources) {
    console.log(`\n  \u2717 [freshness] ${built} built pages for ${sources} content files — dist/ is stale or the build failed.`);
    console.log('GATE: FAILED\n');
    process.exit(1);
  }
  const newestSrc = Math.max(...walk('src', '.astro').concat(walk(CONTENT, '.md')).map((f) => fs.statSync(f).mtimeMs));
  const newestOut = Math.max(...walk(DIST, '.html').map((f) => fs.statSync(f).mtimeMs));
  if (newestSrc > newestOut) {
    console.log('\n  \u2717 [freshness] source is newer than dist/ — rebuild before gating.');
    console.log('GATE: FAILED\n');
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// 1 · Dead-link crawler
// ---------------------------------------------------------------------------
console.log('1 · Dead-link crawler');
{
  let checked = 0;
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8');
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (const h of hrefs) {
      if (/^(https?:|tel:|mailto:|#|data:)/.test(h)) continue;
      checked++;
      let t = h.split('#')[0].split('?')[0];
      if (!t) continue;
      t += t.endsWith('/') ? 'index.html' : path.extname(t) ? '' : '/index.html';
      const target = path.join(DIST, t);
      if (!fs.existsSync(target)) {
        fail('dead-link', `${path.relative(DIST, f)} → ${h} (404)`);
      }
    }
  }
  console.log(`  checked ${checked} internal links`);
}

// ---------------------------------------------------------------------------
// 2 · Per-page SEO audit
// ---------------------------------------------------------------------------
console.log('\n2 · Per-page SEO audit');
{
  const titles = new Map();
  const descs = new Map();
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8');
    const rel = '/' + path.relative(DIST, f).replace(/index\.html$/, '');

    // Deliberately noindex utility pages are exempt: M1/M5 govern INDEXABLE pages.
    if (/name="robots"[^>]*content="[^"]*noindex/.test(html)) {
      console.log(`  – ${rel}: noindex, exempt from the indexable-page contract`);
      continue;
    }

    const h1s = html.match(/<h1[\s>]/g) ?? [];
    if (h1s.length !== 1) fail('seo', `${rel}: ${h1s.length} H1 tags (exactly 1 required)`);

    const tm = html.match(/<title>(.*?)<\/title>/s);
    if (!tm) fail('seo', `${rel}: missing <title>`);
    else {
      const t = tm[1].replace(/&amp;/g, '&').trim();
      if (t.length > TITLE_MAX) fail('seo', `${rel}: title ${t.length} chars (max ${TITLE_MAX})`);
      if (titles.has(t)) fail('seo', `${rel}: duplicate title, also on ${titles.get(t)}`);
      titles.set(t, rel);
    }

    const dm = html.match(/name="description" content="(.*?)"/s);
    if (!dm) fail('seo', `${rel}: missing meta description`);
    else {
      const d = dm[1].replace(/&amp;/g, '&').trim();
      if (d.length < DESC_MIN || d.length > DESC_MAX)
        fail('seo', `${rel}: description ${d.length} chars (need ${DESC_MIN}–${DESC_MAX})`);
      if (!/[.!?]$/.test(d)) fail('seo', `${rel}: description does not end on punctuation (reads truncated)`);
      if (descs.has(d)) fail('seo', `${rel}: duplicate description, also on ${descs.get(d)}`);
      descs.set(d, rel);
    }

    if (!/rel="canonical"/.test(html)) fail('seo', `${rel}: missing canonical`);
    if (!/property="og:image"/.test(html)) fail('seo', `${rel}: missing og:image (M7)`);

    // M4 — Speakable hooks must exist for the schema selector to resolve.
    if (!/data-speakable/.test(html)) fail('seo', `${rel}: missing data-speakable hook (M4)`);

    // Leftover raster references the build should have converted.
    if (/\.jpg"/.test(html) && !/social/.test(html)) warn('seo', `${rel}: raw .jpg reference — should be WebP`);
  }
  console.log(`  ${titles.size} unique titles, ${descs.size} unique descriptions`);
}

// ---------------------------------------------------------------------------
// 3 · Duplicate-sentence scanner (anti-slop, Part 6.3)
// ---------------------------------------------------------------------------
console.log('\n3 · Duplicate-sentence scanner');
{
  const sentenceMap = new Map();
  for (const f of mdFiles) {
    const raw = fs.readFileSync(f, 'utf8');
    const body = raw.replace(/^---[\s\S]*?---/, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
    const sentences = body.split(/(?<=[.!?])\s+/).map((s) => s.replace(/\s+/g, ' ').trim());
    for (const s of sentences) {
      if (s.split(/\s+/).length < 10) continue;
      if (!sentenceMap.has(s)) sentenceMap.set(s, new Set());
      sentenceMap.get(s).add(f);
    }
  }
  let flagged = 0;
  for (const [s, files] of sentenceMap) {
    if (files.size >= 3) {
      flagged++;
      warn('dedup', `on ${files.size} pages: "${s.slice(0, 70)}…"`);
    }
  }
  console.log(`  ${sentenceMap.size} long sentences scanned, ${flagged} appearing on 3+ pages`);
  console.log('  (NAP line, legal statements and headings are legitimate survivors — do not chase those)');
}

// ---------------------------------------------------------------------------
// 4 · Word-count auditor — mandate M1
// ---------------------------------------------------------------------------
console.log('\n4 · Word-count auditor (M1: 3,000–5,000 words)');
{
  if (mdFiles.length === 0) {
    console.log('  no content files yet — nothing to audit');
  }
  for (const f of mdFiles) {
    const raw = fs.readFileSync(f, 'utf8');
    const fm = raw.match(/^---([\s\S]*?)---/);
    const gatePassed = fm && /gatePassed:\s*true/.test(fm[1]);
    // Measure the SOURCE, not rendered HTML — avoids nav/footer inflation.
    const body = raw.replace(/^---[\s\S]*?---/, '');
    const n = body.split(/\s+/).filter(Boolean).length;
    const rel = path.relative(CONTENT, f);
    if (n < M1_FLOOR) {
      // Only a hard failure once the page claims to have passed the gate.
      (gatePassed ? fail : warn)('word-count', `${rel}: ${n} words (floor ${M1_FLOOR})`);
    } else if (n > M1_TARGET_MAX) {
      warn('word-count', `${rel}: ${n} words (above the ${M1_TARGET_MAX} target band)`);
    }
  }
}

// ---------------------------------------------------------------------------
// 5 · Image-metadata integrity — M6 / M7
// ---------------------------------------------------------------------------
console.log('\n5 · Image-metadata integrity (M6/M7)');
{
  const SNAPSHOT = 'scripts/.image-metadata.json';
  const current = {};
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8');
    const rel = '/' + path.relative(DIST, f).replace(/index\.html$/, '');
    const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);

    for (const tag of imgs) {
      const src = tag.match(/src="([^"]*)"/)?.[1] ?? '(no src)';
      const alt = tag.match(/alt="([^"]*)"/)?.[1];
      if (alt === undefined) fail('media', `${rel}: <img src="${src}"> has no alt attribute`);
      else if (alt.trim() === '') fail('media', `${rel}: <img src="${src}"> has BLANK alt (M6)`);
      else if (alt.length > 125) fail('media', `${rel}: alt on ${src} is ${alt.length} chars (max 125)`);
      current[`${rel}|${src}`] = alt ?? '';
    }

    // M7 — the logo must render on every page.
    if (!/graduate-pest-control-logo/.test(html)) fail('media', `${rel}: brand logo missing (M7)`);
  }

  // Compare against the prior snapshot: a re-save that blanks metadata is a defect.
  if (fs.existsSync(SNAPSHOT)) {
    const prior = JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
    for (const [k, priorAlt] of Object.entries(prior)) {
      if (priorAlt && k in current && !current[k]) {
        fail('media', `alt LOST on re-save: ${k} (was: "${priorAlt.slice(0, 40)}…")`);
      }
    }
  }
  fs.writeFileSync(SNAPSHOT, JSON.stringify(current, null, 2));
  console.log(`  ${Object.keys(current).length} images checked, snapshot updated`);
}

// ---------------------------------------------------------------------------
// 6 · Strict audit — pairwise duplicates and client prohibitions
//
// Check 3 above flags a sentence only at THREE files, which is right for the
// legitimate survivors but lets a straight copy between two pages through. And
// nothing above checks the client's own prohibition list, which is the class of
// regression that does real damage: a guarantee sentence, the banned word, a
// claim to a licence category he does not hold. Both live in audit-strict.mjs
// and both are gating.
// ---------------------------------------------------------------------------
console.log('\n6 · Strict audit (pairwise duplicates + client prohibitions)');
{
  const r = spawnSync(process.execPath, ['scripts/audit-strict.mjs', CONTENT], { encoding: 'utf8' });
  const out = (r.stdout ?? '') + (r.stderr ?? '');
  if (r.status !== 0) {
    for (const line of out.split('\n')) if (line.includes('✗')) console.log('  ' + line.trim());
    fail('strict', `audit-strict.mjs reported failures (run it directly for the full report)`);
  } else {
    console.log('  ' + (out.match(/\d+ long sentences scanned[^\n]*/)?.[0] ?? 'clean'));
    console.log('  0 prohibition violations');
  }
}

// ---------------------------------------------------------------------------
// 7 · Redirect drift
//
// vercel.json has to be committed, because Vercel reads it before the build
// runs — so it is generated output living in the repo, which is exactly the
// shape of thing that drifts. This is the check that stops it: if the committed
// file and the redirect data disagree, the gate fails and says so. It also runs
// the clash guard, which catches a retired URL that has quietly become a real
// page again because a market cleared the research gate.
// ---------------------------------------------------------------------------
console.log('\n7 · Redirect drift (vercel.json vs. the redirect data)');
{
  // Invoked through node with tsx as a loader rather than through `npx`, for
  // the same reason check 6 uses process.execPath: on Windows the npm shims are
  // .cmd files, and spawnSync without a shell cannot run them — bare 'npx'
  // exits ENOENT and 'npx.cmd' exits EINVAL under Node's .cmd spawn guard.
  // Either way the check reported drift that was not there.
  const r = spawnSync(
    process.execPath,
    ['--import', 'tsx', 'scripts/build-redirects.mjs', '--check'],
    { encoding: 'utf8' }
  );
  const out = ((r.stdout ?? '') + (r.stderr ?? '')).trim();
  if (r.status !== 0) {
    for (const line of out.split('\n')) if (line.trim()) console.log('  ' + line.trim());
    fail('redirects', 'vercel.json is out of step with the redirect data — run `npm run redirects`');
  } else {
    console.log('  ' + (out.split('\n').find((l) => l.includes('✓')) ?? 'clean').trim());
  }
}

// ---------------------------------------------------------------------------
console.log(`\n${'─'.repeat(60)}`);
console.log(`${failures} failure(s), ${warnings} warning(s)`);
if (failures > 0) {
  console.log('GATE: FAILED — this batch does not ship.\n');
  process.exit(1);
}
console.log('GATE: PASSED\n');
