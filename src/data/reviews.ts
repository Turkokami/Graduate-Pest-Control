/**
 * reviews.ts — the Google reviews shown on the site, in the customer's words.
 *
 * Ryan, September 2026: "exact wording, typos and all — polished reviews read
 * as fake." So quotes are transcribed verbatim from the Google profile. Do not
 * fix spelling, punctuation or grammar in `quote`, ever.
 *
 * WHAT MAY GO IN HERE. Only a review that is actually on the public Google
 * profile, attributed the way Google shows it: first name and last initial.
 * Never invent one, never compose one out of several, and never soften one.
 * `town` is the market the job was in, which is what makes a review worth
 * putting on that town's page.
 *
 * The site does NOT emit aggregateRating or Review structured data for its own
 * business. Google does not show star ratings in search results for reviews a
 * business publishes about itself, and marking them up invites a manual
 * action. These are here to be read by the person on the page.
 */
export interface Review {
  /** Verbatim. Never edited. */
  quote: string;
  /** As Google shows it: first name, last initial. */
  name: string;
  /** Market slug this job was in, matching markets.ts, or null if unknown. */
  town: string | null;
  /** Display label for the town, e.g. "Huntington". */
  townLabel?: string;
  rating: 5;
}

/**
 * EMPTY UNTIL RYAN SENDS THE TEXT. The strip renders nothing while this is
 * empty, so the site never ships a heading with no reviews under it. Three is
 * the display count; more can live here and the strip takes the first three.
 */
export const reviews: Review[] = [];

/** Reviews for a market, newest first, falling back to the general set. */
export function reviewsFor(townSlug?: string, count = 3): Review[] {
  if (!townSlug) return reviews.slice(0, count);
  const local = reviews.filter((r) => r.town === townSlug);
  return local.length ? local.slice(0, count) : reviews.slice(0, count);
}
