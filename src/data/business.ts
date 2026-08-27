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
    /** Ryan, August 2026: the title is Founder and Staff Entomologist. */
    role: 'Founder and Staff Entomologist',
    /** In the trade since 1975, entering it as a student at SUNY Farmingdale. */
    inTradeSince: 1975,
    degreeYear: 1978,
    /** Thesis subject, and worth stating: he wrote on the bed bug at a point
     *  when the insect had all but vanished from American homes. */
    thesisSubject: 'the bed bug',
    /** Q8: still active. This is a present-tense fact, not a history note. */
    stillActive: true,
    currentRole: 'Senior technician and staff entomologist',
    contribution:
      'Provides entomological identification and diagnostic support on complex accounts. Built the firm’s source-and-structure methodology before IPM existed as a named discipline, and trains every technician working under the Graduate name alongside Ryan Katz.',
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

/**
 * An affiliation is only worth publishing if you can say what it CHANGES.
 * Every entry therefore carries four researched fields on top of its name, and
 * the credentials page generates its copy from them rather than restating them
 * by hand:
 *
 *  · `requires`  — what it took to obtain. The requirement is the argument:
 *                  a credential means something because of what it costs to
 *                  get, and a reader who is not told the requirement has been
 *                  shown a badge, not evidence.
 *  · `maintains` — what it takes to keep. A credential with no renewal burden
 *                  is a one-off exam result; one with a CEU cycle is a
 *                  standing commitment, and the difference is publishable.
 *  · `enables`   — the commercial point. What door does it open that a firm
 *                  without it cannot walk through? TWIC is the clean case:
 *                  no TWIC, no unescorted access, so you cannot bid the work.
 *  · `boundary`  — what it is NOT. This is the honest half and it is not
 *                  optional. ACE is not a degree; a membership is not a
 *                  certification; SQF certifies sites, not contractors.
 *
 * `identifier` and `since` are Maybe<> on purpose. Doctrine #4: a certificate
 * number or a joining year that has not been supplied is PENDING and renders
 * as nothing. Never a plausible placeholder, never a year "about right".
 */
export interface Affiliation {
  abbr: string;
  name: string;
  kind: AffiliationKind;
  heldBy: Maybe<string>;
  verified: boolean;
  /** The body that issues, administers or benchmarks the thing. */
  issuer: string;
  /** What obtaining it demands. */
  requires: string;
  /** What keeping it demands, where there is a renewal burden. */
  maintains?: string;
  /** One sentence: what it lets the holder do that a firm without it cannot. */
  enables: string;
  /** One sentence: what it is not, so the reader cannot over-read it. */
  boundary?: string;
  /** Where a buyer can check it independently. */
  verifyAt?: { name: string; url: string };
  /** Certificate / membership number. PENDING until the client supplies it. */
  identifier?: Maybe<string>;
  /** Year obtained or joined, or the renewal year. PENDING until supplied. */
  since?: Maybe<number>;
  note?: string;
}

export const affiliations: Affiliation[] = [
  /**
   * ACE — confirmed August 2026, and the one that most needs writing carefully.
   *
   * ACE is the Entomological Society of America's certification for practising
   * professionals WITHOUT an entomology degree. That is not a footnote, it is
   * the whole point of the programme, and it is why the requirement matters so
   * much here: the degree route to ACE asks for 3 years of post-degree
   * experience (2 with a master's, 1 with a PhD), and the no-degree route asks
   * for FIVE years of verifiable US pest management experience. The experience
   * requirement is what the credential is made of.
   *
   * So: Ryan holds ACE. Ryan does not hold a degree in entomology. Both are
   * true at once, they are not in tension, and copy must never let the first
   * imply otherwise. Arnold Katz holds the B.S. in Entomology from the
   * University of Georgia. Do not blur the two men.
   *
   * Certificate number and renewal year were NOT supplied. Both stay PENDING
   * so that nothing invented can render. The credential still enters the
   * Person node — by name, without an identifier.
   */
  { abbr: 'ACE', name: 'Associate Certified Entomologist',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    identifier: PENDING as Maybe<string>,
    since: PENDING as Maybe<number>,
    issuer: 'Entomological Society of America',
    requires:
      'For an applicant without an entomology degree: a minimum of five years of verifiable pest management experience in the United States, a current state, military, territory or tribal licence permitting unsupervised pesticide application in urban, industrial or structural settings, two letters of professional reference, a passed examination in structural pest control, and adherence to the ACE Code of Ethics.',
    maintains:
      'A three-year renewal cycle carrying a minimum of eighteen continuing education units earned in the preceding three years, a re-signed code of ethics and a current applicator licence on file.',
    enables:
      'It puts a certified entomological credential behind the diagnosis on a job, held by the person actually doing the diagnosing, and ESA lists its credential holders in a public roster a buyer can search by name.',
    boundary:
      'ACE is a certification, not a degree, and it is not the Board Certified Entomologist credential. It certifies examined competence built on documented field experience. Arnold Katz holds the B.S. in Entomology, University of Georgia; Ryan Katz does not hold a degree in entomology and this site never says he does.',
    verifyAt: { name: 'ESA certification roster', url: 'https://entocert.org/roster' } },

  { abbr: 'PCQI', name: 'Preventive Controls Qualified Individual',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    issuer: 'A role defined by FDA under FSMA at 21 CFR 117.180',
    requires:
      'Training in the development and application of risk-based preventive controls at least equivalent to a standardised curriculum recognised as adequate by FDA, or job experience giving at least equivalent knowledge. The training itself has to be documented: date, type, and who was trained.',
    enables:
      'A PCQI does or oversees the food safety plan, validation of preventive controls, the review of monitoring and corrective-action records, and reanalysis of the plan — and the rule states plainly that this person need not be an employee of the facility.',
    boundary:
      'Holding PCQI does not make Graduate the plant’s PCQI of record, and it does not turn a pest programme into a preventive control. It means the pest side of the plan can be written, defended and reviewed in the language the plan is already written in.',
    verifyAt: {
      name: '21 CFR 117.180 — Requirements applying to a preventive controls qualified individual',
      url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117/subpart-C/section-117.180',
    } },

  { abbr: 'HACCP', name: 'Hazard Analysis Critical Control Point',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    issuer: 'The framework set out by the National Advisory Committee on Microbiological Criteria for Foods and published by FDA',
    requires:
      'Working command of the seven principles — hazard analysis, critical control point identification, critical limits, monitoring, corrective actions, verification, and record-keeping and documentation.',
    enables:
      'Pest control is a prerequisite programme sitting underneath a HACCP plan, so the programme has to be documented well enough to survive being read as part of it rather than filed beside it.',
    boundary:
      'HACCP is a system a facility operates, not a licence a contractor holds. What Graduate brings to it is a pest programme built to be auditable inside it.',
    verifyAt: {
      name: 'FDA — HACCP Principles and Application Guidelines',
      url: 'https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines',
    } },

  { abbr: 'TWIC', name: 'Transportation Worker Identification Credential',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    issuer: 'Transportation Security Administration, with the US Coast Guard',
    requires:
      'In-person enrolment, fingerprints and a facial photograph, proof of identity and immigration status, a fee, and a TSA security threat assessment — a federal background check. The card runs for five years.',
    maintains:
      'Renewal every five years, with a fresh security threat assessment. TSA advises enrolling at least sixty days before the card is needed.',
    enables:
      'It is required under the Maritime Transportation Security Act for access to secure areas of the nation’s maritime facilities and vessels. Without one, a contractor has to be escorted by facility staff at every moment on site — which most terminals will not staff, so the work cannot realistically be bid at all.',
    boundary:
      'A TWIC is an access credential. It says nothing about pest management competence and is never presented here as though it did.',
    verifyAt: { name: 'TSA — TWIC', url: 'https://www.tsa.gov/twic' },
    note: 'Issued by TSA and the Coast Guard. Required for unescorted access to secure port and maritime facilities.' },

  { abbr: 'HUET', name: 'Helicopter Underwater Escape Training',
    kind: 'certification', heldBy: 'Ryan Katz', verified: true,
    issuer: 'Accredited offshore safety training providers; Graduate’s record is held on the RelyOn platform',
    requires:
      'Practical training in escaping a helicopter that has ditched and inverted in water, carried out in a simulator, alongside the wider offshore survival syllabus.',
    maintains:
      'Periodic refresher training on the schedule the operator and the training standard require.',
    enables:
      'Offshore platforms and rigs are reached by helicopter over water, and nobody boards that aircraft without current escape training. It is the difference between being able to service an offshore asset and only being able to quote for one.',
    boundary:
      'HUET is a survival credential, not a pest management one. Tier 1 offshore is also held.',
    note: 'Required for offshore helicopter transport to platforms and rigs. Tier 1 offshore also held.' },

  { abbr: 'SQF', name: 'Safe Quality Food',
    kind: 'audit-scheme', heldBy: 'Ryan Katz', verified: true,
    issuer: 'SQF Institute, a division of FMI, benchmarked against the Global Food Safety Initiative',
    requires:
      'For a site: a documented system audited by a licensed certification body against the SQF code for its sector, with a qualified SQF practitioner on staff. For a pest management provider working inside one: a programme whose device maps, service records, trend analysis, corrective actions and chemical documentation stand up to that audit unedited.',
    enables:
      'A GFSI-benchmarked certificate is what many retail and manufacturing buyers accept in place of running their own supplier audits, so the certificate is what keeps a supplier on the shelf. The pest programme is one of the prerequisite programmes the auditor opens, and a weak one costs the site findings on an audit it cannot afford to fail.',
    boundary:
      'SQF certifies sites, not pest control companies. Graduate is SQF credentialed and services SQF-audited food manufacturing facilities under contract; it does not hold, and does not claim, a facility certificate of its own.',
    verifyAt: {
      name: 'SQF Institute — SQF Food Safety Code for Food Manufacturing, Edition 10',
      url: 'https://www.sqfi.com/the-sqf-code/choose-your-code/library-of-codes/food-manufacturing',
    },
    note: 'SQF credentialed. Graduate services SQF-audited food manufacturing facilities under contract.' },

  { abbr: 'RelyOn', name: 'RelyOn Nutec',
    kind: 'platform', heldBy: PENDING, verified: true,
    issuer: 'RelyOn Nutec, a global safety and competence training business headquartered in Copenhagen',
    requires:
      'That the underlying training is actually completed and recorded. The platform holds the record; it does not substitute for the course.',
    enables:
      'An operator checking a contractor at the gate or the heliport can verify current offshore and industrial compliance training against a live record rather than a laminated card, which is how access is granted on assets that will not take a paper claim.',
    boundary:
      'RelyOn is a training and verification platform, not a certifying body for pest management. It is listed here because it is how the offshore credentials above are checked.',
    verifyAt: { name: 'RelyOn Nutec', url: 'https://relyonnutec.com/about/' },
    note: 'The platform through which Graduate’s offshore and industrial compliance credentials are verified.' },

  /**
   * Q7 answered August 2026: both memberships confirmed current. They move to
   * verified, and they stay `kind: 'membership'` — which keeps them out of
   * credentialsForSchema() and therefore out of the Person node. A trade
   * association membership is a company affiliation, not a credential, and
   * schema'ing it as one is the exact misrepresentation the split exists to
   * prevent. Joining years were not supplied and stay PENDING.
   */
  { abbr: 'NPMA', name: 'National Pest Management Association',
    kind: 'membership', heldBy: business.legalName, verified: true,
    since: PENDING as Maybe<number>,
    issuer: 'National Pest Management Association, founded 1933, Fairfax, Virginia',
    requires:
      'A valid licence to operate in the company’s own locality, dues, and adherence to the association’s code of conduct and its anti-trust, anti-harassment and inclusivity policies.',
    enables:
      'It buys access to the industry’s technical apparatus — pest identification support, research reports and guidelines, model contract language, continuing education accepted across more than forty states and provinces, and legislative tracking that gives early sight of a rule change rather than late notice of it.',
    boundary:
      'Membership is a company affiliation and an indicator of engagement with the trade. It is not a certification of competence, nobody sat an examination for it, and it is never emitted as a credential in this site’s structured data.',
    verifyAt: { name: 'National Pest Management Association', url: 'https://www.npmapestworld.org/' } },

  { abbr: 'NYPMA', name: 'New York Pest Management Association',
    kind: 'membership', heldBy: business.legalName, verified: true,
    since: PENDING as Maybe<number>,
    issuer: 'New York Pest Management Association',
    requires:
      'Membership of the national association alongside the state one — NYPMA member companies join both — plus dues and adherence to the association’s standards of conduct and ethics.',
    enables:
      'It is the New York-specific half: DEC-certified training that carries the recertification credits a certified applicator needs to stay current, access to association staff entomologists, and representation in Albany when state pesticide rules are being written.',
    boundary:
      'A state trade association membership is not a state licence. The licence is C1822141, issued by the New York State Department of Environmental Conservation, and it is the licence that governs what may be done at a property.',
    verifyAt: { name: 'New York Pest Management Association', url: 'https://newyorkpma.com/about/' } },
];

/**
 * Only individual certifications may appear in a Person node's hasCredential.
 * Memberships, audit schemes and platforms are deliberately excluded: they are
 * held by a company, or they are somebody else's scheme, and a Person node
 * claiming them would be a false statement in machine-readable form.
 */
export const credentialsForSchema = () =>
  affiliations.filter((a) => a.kind === 'certification' && a.verified);

/**
 * Memberships belong on the ORGANISATION, expressed as memberOf — which is the
 * schema.org property that actually means "is a member of", as opposed to
 * hasCredential, which does not.
 */
export const membershipsForSchema = () =>
  affiliations.filter((a) => a.kind === 'membership' && a.verified);

export const badgeGroups = () => ({
  certifications: affiliations.filter((a) => a.kind === 'certification' && a.verified),
  memberships: affiliations.filter((a) => a.kind === 'membership' && a.verified),
  auditSchemes: affiliations.filter((a) => a.kind === 'audit-scheme' && a.verified),
  platforms: affiliations.filter((a) => a.kind === 'platform' && a.verified),
});

/** Lookup by abbreviation, for copy that needs to name one specific credential. */
export const affiliationByAbbr = (abbr: string): Affiliation | undefined =>
  affiliations.find((a) => a.abbr.toLowerCase() === abbr.toLowerCase());

/**
 * Everything a buyer can check for themselves, in one list. The licence rows
 * come first because they are the ones with real published numbers against
 * them; the rest are checked against the issuing body.
 */
export const verifiableRecords = () => {
  const rows: Array<{ what: string; heldBy: string; identifier?: string; where: string; url?: string }> = [];
  if (has(business.businessRegistration)) {
    rows.push({
      what: 'New York pesticide business registration',
      heldBy: business.legalName,
      identifier: business.businessRegistration,
      where: 'New York State Department of Environmental Conservation',
      url: 'https://dec.ny.gov/regulatory/find-permit-or-license/certification-categories-and-credit-requirements',
    });
  }
  const e = business.namedExpert;
  if (has(e.licenseNumber)) {
    rows.push({
      what: has(e.licenseCategories)
        ? `New York certified applicator, categories ${e.licenseCategories.join(', ')}`
        : 'New York certified applicator',
      heldBy: e.name,
      identifier: e.licenseNumber,
      where: 'New York State Department of Environmental Conservation',
      url: 'https://dec.ny.gov/regulatory/find-permit-or-license/certification-categories-and-credit-requirements',
    });
  }
  for (const a of affiliations) {
    if (!a.verified || !a.verifyAt) continue;
    rows.push({
      what: `${a.name} (${a.abbr})`,
      heldBy: has(a.heldBy) ? a.heldBy : '—',
      identifier: a.identifier && has(a.identifier) ? a.identifier : undefined,
      where: a.verifyAt.name,
      url: a.verifyAt.url,
    });
  }
  return rows;
};

// ---------------------------------------------------------------------------
// Speaking and field training — Q27. Ryan: treat as a HEADLINE credential,
// not a line on the About page.
// ---------------------------------------------------------------------------

export const speaking = {
  headline: true,
  /**
   * The one-line form, for the credential strip and for any page that needs to
   * state this without a paragraph. Deliberately says Nigeria, not Africa.
   */
  summary:
    'Invited to teach rodent work and exclusion by the national pest management association in Mexico and by the PestInsight Initiative in Nigeria, and an invited speaker in the United States.',
  /** Why it belongs among the credentials rather than in a biography. */
  whyItCounts:
    'The other entries on this page were awarded by a body that examines people. This one was awarded by rooms full of working practitioners who chose whom to ask.',
  engagements: [
    { country: 'Mexico', body: 'Mexican pest management association (ACPUB)',
      detail: 'Spoke at the ACPUB Congreso Regional in Querétaro, and helped set up and run a rodent safari taking over 100 association members into the field for hands-on instruction.',
      year: PENDING as Maybe<number> },
    { country: 'Nigeria', body: 'PestInsight Initiative',
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
  // Confirmed credentials whose identifying details were never supplied. These
  // are NOT blockers on publication — the credential renders by name — but the
  // number and the year stay blank until they arrive, and blank is the point.
  const missingId = affiliations
    .filter((a) => a.verified && a.identifier !== undefined && !has(a.identifier))
    .map((a) => a.abbr);
  if (missingId.length) out.push(`certificate numbers not supplied: ${missingId.join(', ')} — rendered as unpublished, never invented`);
  const missingYear = affiliations
    .filter((a) => a.verified && a.since !== undefined && !has(a.since))
    .map((a) => a.abbr);
  if (missingYear.length) out.push(`year obtained / joined not supplied: ${missingYear.join(', ')}`);
  out.push('ACE renewal year — needed before any "certified since" or renewal-cycle claim can be published');
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
