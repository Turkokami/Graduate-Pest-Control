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
  /** The owner's reply on Google, verbatim, where there is one. */
  response?: string;
  /** How Google dates it, for our own reference; not displayed. */
  seen?: string;
}

/**
 * EMPTY UNTIL RYAN SENDS THE TEXT. The strip renders nothing while this is
 * empty, so the site never ships a heading with no reviews under it. Three is
 * the display count; more can live here and the strip takes the first three.
 */
/**
 * September 18 2026, from the review share links Ryan's office sent. Each
 * `quote` is two or three WHOLE CONSECUTIVE sentences copied exactly as they
 * appear on Google (his spec: "two or three sentences in the customer's own
 * words"). Nothing is reworded, joined across a gap, or corrected: Sara's
 * lowercase "graduate pest control" is hers. None of the three names a town,
 * so `town` is null and the card shows no town rather than a guessed one.
 * "Gemoney" is the reviewer's Google display name, shown as Google shows it.
 */
export const reviews: Review[] = [
  {
    quote:
      'Graduate Pest Control is absolutely amazing. They’re professional, efficient, reliable, and always get the job done right. Ryan especially is incredible — he’s always spot-on when identifying the problem and knows exactly what needs to be done to take care of it.',
    name: 'Vincent D.',
    town: null,
    rating: 5,
    seen: 'September 2026',
  },
  {
    quote:
      'Ryan at graduate pest control was so professional and thorough. He explained the whole process to me and made me feel at ease and completely took care of our pest problem. I highly recommend them and would definitely use them again!',
    name: 'Sara D.',
    town: null,
    rating: 5,
    response:
      'Thank you for the kind words and recommendation. I’m glad I could walk you through the process and get the issue taken care of. I truly appreciate your trust and support.',
    seen: 'February 2026',
  },
  {
    quote:
      'I felt welcomed, respected, and truly cared for. The attention to detail and willingness to go above and beyond made a real difference. You can tell they genuinely care about the people they serve, not just the service they provide.',
    name: 'Gemoney',
    town: null,
    rating: 5,
    response:
      'Thank you so much for this wonderful review! We are thrilled to hear that you had such a positive experience with us. Your kind words motivate us to keep delivering the best service possible. We look forward to continuing to serve you!',
    seen: 'August 2026',
  },
];

/** Reviews for a market, newest first, falling back to the general set. */
export function reviewsFor(townSlug?: string, count = 3): Review[] {
  if (!townSlug) return reviews.slice(0, count);
  const local = reviews.filter((r) => r.town === townSlug);
  return local.length ? local.slice(0, count) : reviews.slice(0, count);
}
