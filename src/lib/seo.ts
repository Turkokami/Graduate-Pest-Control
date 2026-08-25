/**
 * seo.ts — mandate M5 enforcement, in code.
 *
 * Keystone M5: "Title ≤ 60 characters, unique sitewide, keyword + city
 * front-loaded, brand appended only if it still fits, never cut mid-word.
 * Meta description 110–165 characters, benefit + local + CTA, ending on
 * punctuation. No page ships with a missing, duplicate or truncated
 * title/description."
 *
 * Part 12.3 records the failure this prevents: "Meta description ends
 * mid-word — long variable + fixed suffix overflow. Shorten the template; run
 * a dangling-ending validator on the full set."
 *
 * Everything here throws at build time. A malformed title cannot reach prod.
 */

import { business } from '../data/business';

export const TITLE_MAX = 60;
export const DESC_MIN = 110;
export const DESC_MAX = 165;

const BRAND = business.name;

// ---------------------------------------------------------------------------
// Title
// ---------------------------------------------------------------------------

/**
 * Build a title with the brand appended ONLY if it still fits under 60.
 * Never truncates mid-word — if the core alone exceeds the limit, that is an
 * authoring error and it throws rather than silently shipping a cut title.
 */
export function buildTitle(core: string): string {
  const trimmed = core.trim().replace(/\s+/g, ' ');
  if (trimmed.length > TITLE_MAX) {
    throw new Error(
      `[seo] title core is ${trimmed.length} chars, over the ${TITLE_MAX} limit ` +
        `and cannot be shortened automatically without cutting mid-word: "${trimmed}"`
    );
  }
  const withBrand = `${trimmed} | ${BRAND}`;
  return withBrand.length <= TITLE_MAX ? withBrand : trimmed;
}

// ---------------------------------------------------------------------------
// Meta description — the dangling-ending validator
// ---------------------------------------------------------------------------

const TERMINAL = /[.!?]$/;

/**
 * Validate a meta description against M5. Throws with a specific reason so the
 * author knows exactly what to fix.
 */
export function validateDescription(desc: string, path: string): string {
  const d = desc.trim().replace(/\s+/g, ' ');

  if (d.length < DESC_MIN) {
    throw new Error(`[seo] ${path}: description is ${d.length} chars, under the ${DESC_MIN} minimum`);
  }
  if (d.length > DESC_MAX) {
    throw new Error(`[seo] ${path}: description is ${d.length} chars, over the ${DESC_MAX} maximum`);
  }
  // The dangling-ending check (Part 12.3).
  if (!TERMINAL.test(d)) {
    throw new Error(
      `[seo] ${path}: description does not end on punctuation — it reads as truncated: "…${d.slice(-40)}"`
    );
  }
  // Catches the classic overflow: a sentence cut at a word boundary but with
  // the terminal period bolted on by a template.
  if (/\b(and|or|the|a|an|to|for|with|in|of|is|are|your|our)\.$/i.test(d)) {
    throw new Error(
      `[seo] ${path}: description ends on a stop word before its period — template overflow: "…${d.slice(-40)}"`
    );
  }
  return d;
}

/**
 * The AEO Quick Answer doubles as the meta description (doctrine #3: the same
 * string is reused three ways). This derives a compliant description from it
 * without ever cutting mid-word — it drops whole sentences, then whole words,
 * and re-terminates cleanly.
 */
export function descriptionFromQuickAnswer(quickAnswer: string, path: string): string {
  const qa = quickAnswer.trim().replace(/\s+/g, ' ');
  if (qa.length >= DESC_MIN && qa.length <= DESC_MAX && TERMINAL.test(qa)) {
    return validateDescription(qa, path);
  }

  // Too long: keep whole sentences while they fit.
  if (qa.length > DESC_MAX) {
    const sentences = qa.match(/[^.!?]+[.!?]+/g) ?? [qa];
    let out = '';
    for (const s of sentences) {
      if ((out + s).trim().length > DESC_MAX) break;
      out += s;
    }
    out = out.trim();
    if (out.length >= DESC_MIN) return validateDescription(out, path);

    // Single very long sentence: cut at the last word boundary that fits,
    // leaving room for the terminal period. Never mid-word.
    const room = DESC_MAX - 1;
    let cut = qa.slice(0, room);
    cut = cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\-–—]$/, '').trim();
    return validateDescription(`${cut}.`, path);
  }

  throw new Error(
    `[seo] ${path}: quick answer is ${qa.length} chars — too short to derive a ` +
      `${DESC_MIN}-char description. Write a longer Quick Answer (40–60 words).`
  );
}

// ---------------------------------------------------------------------------
// The AEO Quick Answer itself — doctrine #3, 40–60 words
// ---------------------------------------------------------------------------

export const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

export function validateQuickAnswer(qa: string, path: string): string {
  const n = wordCount(qa);
  if (n < 40 || n > 60) {
    throw new Error(
      `[seo] ${path}: AEO Quick Answer is ${n} words; doctrine #3 requires 40–60 ` +
        `so it can be quoted verbatim by an answer engine.`
    );
  }
  return qa.trim();
}

// ---------------------------------------------------------------------------
// Sitewide uniqueness — M5 "unique sitewide"
// ---------------------------------------------------------------------------

const seenTitles = new Map<string, string>();
const seenDescriptions = new Map<string, string>();

export function registerTitle(title: string, path: string) {
  const prior = seenTitles.get(title);
  if (prior && prior !== path) {
    throw new Error(`[seo] duplicate title "${title}" on both ${prior} and ${path}`);
  }
  seenTitles.set(title, path);
}

export function registerDescription(desc: string, path: string) {
  const prior = seenDescriptions.get(desc);
  if (prior && prior !== path) {
    throw new Error(`[seo] duplicate meta description on both ${prior} and ${path}`);
  }
  seenDescriptions.set(desc, path);
}

/** Full M5 pass for one page. Call from BaseLayout. */
export function seoFor(opts: {
  path: string;
  titleCore: string;
  quickAnswer: string;
  description?: string;
}) {
  const title = buildTitle(opts.titleCore);
  const quickAnswer = validateQuickAnswer(opts.quickAnswer, opts.path);
  const description = opts.description
    ? validateDescription(opts.description, opts.path)
    : descriptionFromQuickAnswer(quickAnswer, opts.path);

  registerTitle(title, opts.path);
  registerDescription(description, opts.path);

  return { title, description, quickAnswer };
}

export const seoStats = () => ({
  titles: seenTitles.size,
  descriptions: seenDescriptions.size,
});
