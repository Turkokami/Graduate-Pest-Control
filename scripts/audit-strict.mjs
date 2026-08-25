#!/usr/bin/env node
/**
 * audit-strict.mjs — the two checks the main harness was too loose to catch.
 *
 * Check 3 in verify.mjs flags a sentence only once it appears on THREE pages.
 * That threshold was chosen for the legitimate survivors — the NAP line, legal
 * statements, headings — but it means a sentence copied from one page to
 * exactly one other passes the gate. Every writer on this build was asked to
 * scan pairwise by hand for that reason. This makes it a machine check.
 *
 * The second check is the client's own prohibition list. These are not style
 * preferences: "no guarantee language" is a policy about what the business
 * offers, and "never subcontract" and "no degree for Ryan" are statements of
 * fact. A phrase-level grep is a blunt instrument and will not catch a
 * paraphrase, but it catches the literal regressions, and those are the ones
 * that survive a careless edit.
 *
 * Run: node scripts/audit-strict.mjs [src/content]
 */
import fs from 'node:fs';
import path from 'node:path';

const CONTENT = process.argv[2] ?? 'src/content';
const SRC = 'src';

function walk(dir, ext, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, ext, out);
    else if (e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

let failures = 0;
const fail = (c, m) => { failures++; console.log(`  ✗ [${c}] ${m}`); };

const mdFiles = walk(CONTENT, '.md');

// ---------------------------------------------------------------------------
// A · Pairwise duplicate sentences — threshold TWO, not three
// ---------------------------------------------------------------------------
console.log(`\nA · Pairwise duplicate scan (threshold 2 files) — ${mdFiles.length} files`);
{
  // Legitimate survivors: statements that would be WRONG if reworded.
  const allowed = [
    /pest problems are building problems/i,
    /B\.S\. in Entomology/i,
    /University of Georgia/i,
    /C1822141/,
    /26-gauge/i,
    /minimum of (three|3) inches between wood/i,
    /take, possess, transport or release/i,
    // A `sources:` frontmatter entry is a citation, not prose. A citation title
    // cannot be reworded without misciting the document it points at. The
    // Housing Maintenance Code is the governing instrument for the NYC hub, the
    // commercial hub and the exclusion service page alike, so all three cite it
    // under its real name. Anchored on the `- name:` key so this exempts the
    // citation line only, never a prose sentence that happens to sit near one.
    /-\s*name:\s*NYC Housing Maintenance Code \(Title 27/i,
  ];
  const map = new Map();
  for (const f of mdFiles) {
    const body = fs.readFileSync(f, 'utf8')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
    for (const raw of body.split(/(?<=[.!?])\s+/)) {
      const s = raw.replace(/\s+/g, ' ').trim();
      if (s.split(/\s+/).length < 10) continue;
      if (allowed.some((re) => re.test(s))) continue;
      if (!map.has(s)) map.set(s, new Set());
      map.get(s).add(path.relative(CONTENT, f));
    }
  }
  let n = 0;
  for (const [s, files] of map) {
    if (files.size >= 2) {
      n++;
      fail('dedup-2', `${[...files].join(' + ')}\n        "${s.slice(0, 90)}…"`);
    }
  }
  console.log(`  ${map.size} long sentences scanned, ${n} on 2+ pages`);
}

// ---------------------------------------------------------------------------
// B · Client prohibitions
// ---------------------------------------------------------------------------
console.log('\nB · Client prohibitions');
{
  const banned = [
    { re: /\bsub-?contract\w*/gi, why: 'Ryan: never the word subcontract, in any form. Partner firms are partners.' },
    { re: /\b(guarantee[sd]?|guaranteed|warrant(y|ies)|lifetime warranty)\b/gi, why: 'Graduate offers no warranty. Policy, not oversight.' },
    { re: /\bStaten Island\b/g, why: 'Ryan does not work there.' },
    // Naming the 3A boundary is CORRECT and appears on every mosquito page.
    // What must never appear is a claim to hold it.
    { re: /\b(hold|holds|holding|carr(y|ies)|certified|licen[cs]ed)\b[^.]{0,60}\b3A\b/gi, why: 'Ryan does not hold 3A. Naming the boundary is fine; claiming the category is not.' },
    { re: /\bfree estimate\b/gi, why: 'Free consultation, NOT a free estimate. A written proposal is billed.' },
    { re: /641\s*6th\s*Ave/gi, why: 'Service-area business. The street address is never displayed.' },
    { re: /\/pest-control\/[a-z-]*\/?termite-control\//g, why: 'Termite control is retired. Ryan: "I don\'t do termites."' },
  ];
  const files = [...walk(CONTENT, '.md'), ...walk(SRC, '.astro')];
  for (const f of files) {
    const text = fs.readFileSync(f, 'utf8');
    for (const { re, why } of banned) {
      for (const m of text.matchAll(re)) {
        // Code comments are not copy. A comment explaining WHY the site has no
        // guarantee block is the opposite of a violation.
        const lineStart = text.lastIndexOf('\n', m.index) + 1;
        const line = text.slice(lineStart, text.indexOf('\n', m.index));
        if (/^\s*(\*|\/\/|\/\*)/.test(line)) continue;
        // "no guarantee", "we do not guarantee" and similar negations are the
        // correct way to state the policy — read the 40 chars in front.
        const before = text.slice(Math.max(0, m.index - 40), m.index).toLowerCase();
        if (/\b(no|not|never|without|don't|do not|cannot|isn't|aren't)\b[^.]*$/.test(before)) continue;
        fail('prohibition', `${f}: "${m[0]}" — ${why}`);
      }
    }
  }
}

console.log(`\n${'─'.repeat(60)}`);
console.log(`${failures} failure(s)`);
process.exit(failures > 0 ? 1 : 0);
