/**
 * business.ts — the global constants file.
 *
 * Keystone Part 7A / Part 15: every NAP, phone, license, credential and social
 * string on this site reads from here.
 *
 * UPDATED from Ryan Katz's completed build questionnaire (Aug 2026). Facts that
 * are confirmed are now real values; facts he flagged [TO CONFIRM] stay PENDING.
 * Nothing here is ever a plausible placeholder — doctrine #4, never fabricate.
 */

export const PENDING = Symbol('pending-client-input');
export type Pending = typeof PENDING;
export type Maybe<T> = T | Pending;

export function has<T>(v: Maybe<T>): v is T {
  return v !== PENDING;
}

export function require_<T>(v: Maybe<T>, field: string): T {
  if (!has(v)) {
    throw new Error(
      `[business.ts] "${field}" is still PENDING client input and a page that ` +
        `requires it is being built. Either supply the value or gate the page.`
    );
  }
  return v;
}

/**
 * The canonical origin. Every absolute schema @id, every canonical tag and
 * every og:url reads from this, so it has to be right per deployment.
 *
 * On a Vercel PREVIEW deployment it resolves to that preview's own hostname.
 * That matters more than it looks: a staging copy of a 211-page site that
 * canonicalises to the live domain is a staging copy telling Google it IS the
 * live domain. Paired with NOINDEX below, a preview can neither be indexed nor
 * claim the production URLs.
 *
 * NOTE: astro.config.mjs computes `site` with the same logic. It runs in Node
 * before Vite loads, so it cannot import this file — the two are deliberately
 * duplicated. Change one, change the other.
 */
const PRODUCTION_ORIGIN = 'https://graduatepestcontrol.com';

export const SITE_URL: string =
  process.env.VERCEL_ENV === 'production'
    ? PRODUCTION_ORIGIN
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : PRODUCTION_ORIGIN;

/**
 * True only on a Vercel deployment that is NOT production — preview branches
 * and the first look at this build.
 *
 * Deliberately false for a local build. The acceptance harness (Part 9) exempts
 * noindex pages from the M1/M5 contract, so if a local build set this the gate
 * would pass by checking nothing at all. It has to be a deployment-time fact,
 * not a build-time one.
 */
export const NOINDEX: boolean =
  process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== 'production';

export const business = {
  name: 'Graduate Pest Control',
  legalName: 'Graduate Pest Control, Inc.',
  foundedYear: 1983,

  /**
   * Q38: the philosophy is Ryan's and is the real one. But he is explicit —
   * "we do not use slogans or taglines." Render this as a STATED POSITION in
   * body copy, never as marketing type over a hero image.
   */
  position: 'Pest problems are building problems, and they need permanent structural solutions.',

  founder: {
    name: 'Arnold Katz',
    credential: 'B.S. Entomology, University of Georgia',
    role: 'Founder',
    /** Q8: still active. This is a present-tense fact, not a history note. */
    stillActive: true,
    currentRole: 'Senior technician and supervisor',
    contribution:
      'Provides entomological identification and diagnostic support on complex accounts. Built the firm’s source-and-structure methodology before IPM existed as a named discipline.',
  },

  namedExpert: {
    name: 'Ryan Katz',
    role: 'Owner',
    slug: 'ryan-katz',
    generation: 'second-generation',
    email: 'ryan@graduatepestcontrol.com',

    /** Q6: NY certified applicator. Publish verbatim, no added dashes/spaces. */
    licenseNumber: 'C1822141' as Maybe<string>,
    licenseCategories: ['7A', '7F', '8'] as Maybe<string[]>,

    /**
     * Q8, CRITICAL: Ryan does NOT hold an entomology degree. Never state or
     * imply that he does. Arnold holds the degree. What Ryan has instead:
     */
    hasDegree: false,
    training: [
      'Every entomology class offered at SUNY Farmingdale',
      'Professional rodent academies over 25 years, including the Bobby Corrigan Rodent Academy',
      'Ongoing training through Purdue’s pest management conference and PestWorld',
      '25 years of field experience, raised in the business by a practicing entomologist',
    ],
  },

  /** Q6: the business registration, distinct from the personal applicator licence. */
  businessRegistration: '03298' as Maybe<string>,

  // -------------------------------------------------------------------------
  // NAP
  // -------------------------------------------------------------------------
  /** Q3: exact format. Do not reformat, anywhere. */
  phone: '(631) 212-9601',
  phoneE164: '+16312129601',

  /** Q4: publish this one only. info@ is NOT live yet — do not add it. */
  email: 'ryan@graduatepestcontrol.com',
  secondaryEmail: PENDING as Maybe<string>,

  /**
   * Q1/Q2: real address, but the business runs out of the home and there is no
   * premises a customer can visit. Graduate is a SERVICE-AREA business.
   * Use the address for GBP verification, schema and citations ONLY.
   * `displayAddress: false` — never render the street on the site.
   */
  address: {
    street: '641 6th Ave. W.' as Maybe<string>,
    locality: 'East Northport' as Maybe<string>,
    region: 'NY',
    postalCode: '11731' as Maybe<string>,
    country: 'US',
  },
  displayAddress: false,
  serviceAreaBusiness: true,

  geo: {
    latitude: PENDING as Maybe<number>,
    longitude: PENDING as Maybe<number>,
  },

  /**
   * Q33: Ryan reports 56 reviews, all five star. Recorded, but NOT emitted as
   * aggregateRating markup — Part 5.3 requires values pulled from a verified
   * GBP, and GBP access is still [TO BE GRANTED] (Q32). Display the real
   * reviews as content once the profile is connected; the site never emits
   * review markup for its own business regardless.
   */
  reportedReviews: { count: 56, rating: 5.0, source: 'Google Business Profile, per client' },
  aggregateRating: PENDING as Maybe<{ ratingValue: number; reviewCount: number }>,

  sameAs: PENDING as Maybe<string[]>,
  googleBusinessProfile: PENDING as Maybe<string>,

  /**
   * Q9/Q10: NO guarantee or warranty. This is policy, not an oversight.
   * Never write "guarantee", "warranty", "lifetime" or "corrected at no charge"
   * anywhere, including FAQs and meta descriptions. The trust substitutes are
   * the licence numbers, the entomologist on staff, 1983, and the review count.
   */
  guarantee: null as null,

  /** Q13: financing page dropped. Do not build it, do not reference terms. */
  offersFinancing: false,

  /** Q5: 24 hours. */
  openingHours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00', closes: '23:59' },
  ] as Maybe<Array<{ days: string[]; opens: string; closes: string }>>,

  /**
   * Q12: free consultation, NOT free estimate. State this plainly on the site —
   * it explains why Graduate is not the cheap quote.
   */
  pricingPolicy: {
    freeConsultation: true,
    freeEstimate: false,
    writtenProposalIsBilled: true,
    proposalFeeCreditedOnProceed: true,
    canineInspectionsBilled: 'per unit',
    publishPrices: false,
    /** Q11: never publish a flat per-apartment or per-unit exclusion rate. */
    neverPublishFlatUnitRate: true,
  },
} as const;

// ---------------------------------------------------------------------------
// Affiliations — Q7, corrected and expanded from Ryan's answers.
// Three kinds of thing, still never presented as one badge row.
// ---------------------------------------------------------------------------

export type AffiliationKind = 'certification' | 'membership' | 'audit-scheme' | 'platform';

export interface Affiliation {
  abbr: string;
  name: string;
  kind: AffiliationKind;
  heldBy: Maybe<string>;
  verified: boolean;
  note?: string;
}

export const affiliations: Affiliation[] = [
  { abbr: 'PCQI', name: 'Preventive Controls Qualified Individual',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true },
  { abbr: 'HACCP', name: 'Hazard Analysis Critical Control Point',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true },
  { abbr: 'TWIC', name: 'Transportation Worker Identification Credential',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    note: 'Issued by TSA and the Coast Guard. Required for unescorted access to secure port and maritime facilities.' },
  { abbr: 'HUET', name: 'Helicopter Underwater Escape Training',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    note: 'Required for offshore helicopter transport to platforms and rigs. Tier 1 offshore also held.' },
  { abbr: 'SQF', name: 'Safe Quality Food',
    kind: 'audit-scheme', heldBy: 'Ryan Katz', verified: true,
    note: 'SQF credentialed. Graduate services SQF-audited food manufacturing facilities under contract.' },
  { abbr: 'RelyOn', name: 'RelyOn',
    kind: 'platform', heldBy: PENDING, verified: true,
    note: 'The platform through which Graduate’s offshore and industrial compliance credentials are verified.' },
  // Q7: still awaiting a straight yes/no on current membership.
  { abbr: 'NPMA', name: 'National Pest Management Association',
    kind: 'membership', heldBy: PENDING, verified: false },
  { abbr: 'NYPMA', name: 'New York Pest Management Association',
    kind: 'membership', heldBy: PENDING, verified: false },
];

/** Only individual certifications may appear in a Person node's hasCredential. */
export const credentialsForSchema = () =>
  affiliations.filter((a) => a.kind === 'certification' && a.verified);

export const badgeGroups = () => ({
  certifications: affiliations.filter((a) => a.kind === 'certification' && a.verified),
  memberships: affiliations.filter((a) => a.kind === 'membership' && a.verified),
  auditSchemes: affiliations.filter((a) => a.kind === 'audit-scheme' && a.verified),
  platforms: affiliations.filter((a) => a.kind === 'platform' && a.verified),
});

// ---------------------------------------------------------------------------
// Speaking and field training — Q27. Ryan: treat as a HEADLINE credential,
// not a line on the About page.
// ---------------------------------------------------------------------------

export const speaking = {
  headline: true,
  engagements: [
    { country: 'Mexico', body: 'Mexican pest management association (ACPUB)',
      detail: 'Spoke at the ACPUB Congreso Regional in Querétaro, and helped set up and run a rodent safari taking over 100 association members into the field for hands-on instruction.',
      year: PENDING as Maybe<number> },
    { country: 'Nigeria', body: 'Pest Management Association of Nigeria',
      detail: 'Speaking and teaching on rodent work and exclusion.',
      // Ryan: "Nigeria specifically, never Africa."
      year: PENDING as Maybe<number> },
    { country: 'United States', body: 'Invited speaker on rodent exclusion',
      detail: '', year: PENDING as Maybe<number> },
  ],
} as const;

// ---------------------------------------------------------------------------
// Brand assets — M7
// ---------------------------------------------------------------------------

export const brandAssets = {
  logo: {
    src: '/img/graduate-pest-control-logo.webp',
    alt: business.name,
    width: 1166,
    height: 390,
  },
  socialImage: {
    src: '/img/graduate-pest-control-social.webp',
    alt: 'Graduate Pest Control logo on a blue and green background',
    width: 1200,
    height: 630,
  },
} as const;

// ---------------------------------------------------------------------------
// Readiness report — what is still owed after the completed questionnaire.
// ---------------------------------------------------------------------------

export function pendingReport(): string[] {
  const out: string[] = [];
  if (!has(business.geo.latitude)) out.push('geo coordinates — derive from the confirmed address');
  if (!has(business.aggregateRating)) out.push('GBP access — 56/5.0 reported; pull real values before any display');
  if (!has(business.sameAs)) out.push('social + directory profiles (Q36)');
  const unconfirmed = affiliations.filter((a) => !a.verified).map((a) => a.abbr);
  if (unconfirmed.length) out.push(`membership confirmation: ${unconfirmed.join(', ')} (Q7)`);
  // Q13 table, both halves answered August 2026.
  //  · termite-control: "I don't do termites." Retired, not pending — see
  //    retiredServices in services.ts. Nothing further is owed on it except the
  //    301s at cutover, which are listed in retiredServiceUrls there.
  //  · wildlife-management: confirmed and offered. The removal step is carried
  //    out by licensed nuisance wildlife partner firms Graduate coordinates;
  //    the exclusion afterwards is Graduate's own work. What is still genuinely
  //    open is the partner side of that answer, which the copy currently
  //    describes without naming anyone.
  out.push(
    'wildlife partner firms (Q13 follow-up) — which licensed operators carry out the removal, ' +
      'and whether any of them may be named on the site'
  );
  out.push('mosquito commercial scope — 3A boundary to confirm (Q13 table)');
  out.push('top 8 markets by billing (Q17); competitor list (Q24)');
  out.push('job photos (Q28); case-study detail (Q30); ACPUB year (Q27)');
  return out;
}
