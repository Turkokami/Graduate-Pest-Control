/**
 * services.ts — the service tree.
 *
 * Keystone Part 3.4: one page per money service, never a single mega page.
 * Problem-specific micro pages hang off their parent spoke and target
 * problem-aware queries ("why carpenter ants appear in moisture-damaged sills"),
 * not head terms.
 *
 * Part 14 guardrail: NEVER invent services. Every entry below was observed on
 * the live site. `confirmed` stays false until Ryan confirms the service is
 * genuinely offered — an unconfirmed service page is a liability, not an asset.
 */

export interface Service {
  slug: string;
  name: string;
  /** Short label for nav and cards. */
  shortName: string;
  /** Which metro this service actually sells in. Drives matrix eligibility. */
  markets: Array<'long-island' | 'nyc'>;
  /** The building-science angle — Ryan's differentiator, per service. */
  structuralAngle: string;
  confirmed: boolean;
  /** Owner returned [Y/N TO CONFIRM]. Built but MUST NOT be published until answered. */
  awaitingConfirmation?: boolean;
  /**
   * How the service is actually delivered, where that differs from what a
   * reader would assume. Written into the copy, not hidden in the data:
   * Part 1 doctrine #6, honesty is architecture.
   */
  scopeNote?: string;
}

export interface ProblemPage {
  slug: string;
  name: string;
  /** Parent service spoke. Part 3.4 #3 — never orphaned at root. */
  parent: string;
  confirmed: boolean;
}

export interface Vertical {
  slug: string;
  name: string;
  /** The regulatory stake — the T7 contract opens on this. */
  regulatoryStake: string;
  confirmed: boolean;
}

// ---------------------------------------------------------------------------
// Core service spokes — 10, observed on /pest-control/
// ---------------------------------------------------------------------------

export const services: Service[] = [
  {
    slug: 'ant-control',
    name: 'Ant Control',
    shortName: 'Ants',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'Ant activity is a moisture signal before it is a pest problem — colonies exploit damaged wood, failed flashing and wet sill plates.',
    confirmed: true,
  },
  {
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    shortName: 'Bed Bugs',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'In multi-unit buildings bed bugs move through shared walls, chases and conduit. Unit-by-unit treatment without a building plan fails.',
    confirmed: true,
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    shortName: 'Cockroaches',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'German cockroach pressure tracks plumbing chases and shared risers far more reliably than it tracks housekeeping.',
    confirmed: true,
  },
  {
    slug: 'mosquito-management',
    name: 'Mosquito Management',
    shortName: 'Mosquitoes',
    markets: ['long-island'],
    structuralAngle:
      'Mosquito pressure is a drainage and standing-water problem on the property, not a fogging schedule.',
    confirmed: true,
    scopeNote:
      'Source reduction is the program, not the preamble to one. Ryan Katz holds ' +
      'category 8, public health, and the materials used are FIFRA 25(b) minimum-risk ' +
      'exempt products. Ornamental plantings, turf and commercial grounds programs ' +
      'need category 3A, which he does not hold and does not work in.',
  },
  {
    slug: 'rodent-control',
    name: 'Rodent Control',
    shortName: 'Rodents',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'A mouse needs a quarter-inch gap and a rat needs a half-inch. Rodent work that does not close the building envelope is a subscription, not a solution.',
    confirmed: true,
  },
  {
    slug: 'structural-exclusion',
    name: 'Structural Exclusion',
    shortName: 'Exclusion',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'The service the whole practice is built on: seal the entry points, and the pest problem stops being recurring.',
    confirmed: true,
  },
  {
    slug: 'wasp-hornet-removal',
    name: 'Wasp & Hornet Removal',
    shortName: 'Wasps & Hornets',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'Nests concentrate at soffit returns, ridge vents and gable louvers — the same envelope gaps that let everything else in.',
    confirmed: true,
  },
  {
    slug: 'wildlife-management',
    name: 'Wildlife Management',
    shortName: 'Wildlife',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'Squirrels, raccoons and bats are exclusion problems with a humane-removal step in front of them.',
    confirmed: true,
    scopeNote:
      'The removal itself is carried out by licensed nuisance wildlife partner firms ' +
      'Graduate works with and coordinates. The permanent closure afterwards — the part ' +
      'that decides whether the animal comes back — is Graduate\'s own work. Say partner ' +
      'firm; the other word is banned sitewide.',
  },
  {
    slug: 'canine-rodent-detection',
    name: 'Canine Rodent Detection & Abatement',
    shortName: 'Canine Rodent',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'Hugo and Mia locate burrows and harborage that are not visible from the surface, including under dense groundcover where visual inspection simply fails.',
    confirmed: true,
  },
  {
    slug: 'canine-bed-bug-detection',
    name: 'Canine Bed Bug Detection',
    shortName: 'Canine Bed Bug',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'A NESDCA-certified handler team answers the question a board actually has: which units, and how far has it spread.',
    confirmed: true,
  },
  {
    slug: 'exclusion-consulting',
    name: 'Rodent Exclusion & Pest-Proofing Consulting',
    shortName: 'Consulting',
    markets: ['long-island', 'nyc'],
    structuralAngle:
      'Building exclusion into a structure at design, during construction, or as remediation afterwards — working alongside the architect, GC or engineer.',
    confirmed: true,
  },
];

// ---------------------------------------------------------------------------
// Problem micro pages — Part 3.4 #3. Commercial intent, problem-aware queries.
// Observed on the live site as matrix children.
// ---------------------------------------------------------------------------

export const problemPages: ProblemPage[] = [
  { slug: 'carpenter-ant-control', name: 'Carpenter Ant Control', parent: 'ant-control', confirmed: true },
  { slug: 'norway-rat-control', name: 'Norway Rat Control', parent: 'rodent-control', confirmed: true },
  { slug: 'house-mouse-control', name: 'House Mouse Control', parent: 'rodent-control', confirmed: true },
];

// ---------------------------------------------------------------------------
// Commercial verticals — T7 contract, observed on /commercial/
// ---------------------------------------------------------------------------

export const verticals: Vertical[] = [
  {
    slug: 'restaurant-pest-control',
    name: 'Restaurants & Food Service',
    regulatoryStake: 'NYC Health Department inspection scoring and the violations that close a dining room.',
    confirmed: true,
  },
  {
    slug: 'food-facility-ipm',
    name: 'Food Manufacturing & Processing',
    regulatoryStake: 'FSMA preventive controls and third-party audit schemes that require documented pest programs.',
    confirmed: true,
  },
  {
    slug: 'coop-condo-pest-control',
    name: 'Co-op & Condo Boards',
    regulatoryStake: 'Building-wide obligations under the NYC Housing Maintenance Code and Local Law 55.',
    confirmed: true,
  },
  {
    slug: 'property-management-pest-control',
    name: 'Property Management',
    regulatoryStake: 'Portfolio-wide compliance, tenant complaint response, and documentation that survives an audit.',
    confirmed: true,
  },
  {
    slug: 'hotels-hospitality-pest-control',
    name: 'Hotels & Hospitality',
    regulatoryStake: 'Bed bug liability, brand-standard audits, and the reputational cost of a single confirmed report.',
    confirmed: true,
  },
  {
    slug: 'food-safety-sqf',
    name: 'Food Safety & SQF Programs',
    regulatoryStake: 'A documented pest program that survives an SQF audit — Graduate built one in the mid-1990s that turned out to be what the standard later required.',
    confirmed: true,
  },
  {
    slug: 'schools-pest-control',
    name: 'Schools',
    regulatoryStake: 'IPM-mandated settings that buy on method rather than price, and are required to ask for exactly what this firm does.',
    confirmed: true,
  },
  {
    slug: 'childcare-pest-control',
    name: 'Childcare Facilities',
    regulatoryStake: 'The most sensitive environment there is, with the tightest constraints on what may be applied and where.',
    confirmed: true,
  },
  {
    slug: 'medical-facility-pest-control',
    name: 'Medical Facilities',
    regulatoryStake: 'Infection-control expectations and audit documentation, where a pest sighting is a reportable event.',
    confirmed: true,
  },
  {
    slug: 'hoa-pest-control',
    name: 'Homeowner Associations',
    regulatoryStake:
      'A volunteer board spending other owners\' money under a governing document, where the split between common elements and the individual owner decides who authorises the work.',
    confirmed: true,
  },
  {
    slug: 'multi-family-pest-control',
    name: 'Apartment Buildings & Rental Portfolios',
    regulatoryStake:
      'HPD violation classes and their correction clocks, the Local Law 55 annual inspection duty, and the Long Island equivalents under the Multiple Residence Law.',
    confirmed: true,
  },
  {
    slug: 'government-pest-control',
    name: 'Municipal, County & Public Facilities',
    regulatoryStake:
      'Procurement rules and prevailing wage exposure, limits on what may be applied in a public building, and records written to survive a public records request.',
    confirmed: true,
  },
  {
    slug: 'maritime-port-pest-control',
    name: 'Ports, Marine Terminals & Offshore',
    regulatoryStake:
      'MTSA facility security plans and the TWIC required for unescorted access to a secure area, alongside federal interest in pests arriving with vessels and cargo.',
    confirmed: true,
  },
];

// ---------------------------------------------------------------------------
// Lookups + build-time guards
// ---------------------------------------------------------------------------

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const confirmedServices = () => services.filter((s) => s.confirmed);
export const problemsFor = (parent: string) =>
  problemPages.filter((p) => p.parent === parent && p.confirmed);

/**
 * THE NAMESPACE GUARD.
 *
 * City slugs and service slugs share the /pest-control/{x}/ namespace. If the
 * two sets ever intersect, routing becomes ambiguous and one of the two pages
 * silently disappears. This throws at build time instead.
 *
 * Called from astro.config / the route files. Paired with
 * `dynamicParams = false` so anything off-list 404s cleanly rather than
 * becoming an accidental thin page (Part 7A).
 */
export function assertSlugNamespacesDisjoint(citySlugs: string[]) {
  const serviceSlugs = new Set([
    ...services.map((s) => s.slug),
    ...problemPages.map((p) => p.slug),
  ]);
  const collisions = citySlugs.filter((c) => serviceSlugs.has(c));
  if (collisions.length) {
    throw new Error(
      `[services] slug collision under /pest-control/: ${collisions.join(', ')}. ` +
        `A slug cannot be both a city and a service.`
    );
  }
  return true;
}

/** Every matrix service referenced by a market must actually exist. */
export function assertMatrixServicesExist(referenced: string[]) {
  const known = new Set([...services.map((s) => s.slug), ...problemPages.map((p) => p.slug)]);
  const unknown = [...new Set(referenced)].filter((s) => !known.has(s));
  if (unknown.length) {
    throw new Error(`[services] market matrix references unknown service(s): ${unknown.join(', ')}`);
  }
  return true;
}

/** Part 14: unconfirmed services must never reach a built page. */
export function assertNoUnconfirmedRoutes(slugs: string[]) {
  const unconfirmed = new Set(
    [...services, ...problemPages, ...verticals].filter((x) => !x.confirmed).map((x) => x.slug)
  );
  const leaked = slugs.filter((s) => unconfirmed.has(s));
  if (leaked.length) {
    throw new Error(
      `[services] unconfirmed service(s) routed: ${leaked.join(', ')}. ` +
        `Part 14 — never invent services. Confirm with the owner or drop the route.`
    );
  }
  return true;
}


// ---------------------------------------------------------------------------
// Canine programs — Q13/Q14. TWO distinct programs, each earning its own
// page. Different dogs, different discipline.
// ---------------------------------------------------------------------------

export const canineProgrammes = [
  {
    slug: 'canine-rodent-detection',
    name: 'Canine Rodent Detection & Abatement',
    dogs: 'Hugo and Mia, Patterdale Terriers, working with our canine partner team',
    detail:
      'Detection locates burrows and harborage not visible from the surface, including under dense groundcover where visual inspection fails. Abatement is the working removal that follows.',
    confirmed: true,
  },
  {
    slug: 'canine-bed-bug-detection',
    name: 'Canine Bed Bug Detection',
    dogs: 'A NESDCA-certified handler team',
    detail: 'Different dogs, different discipline from the rodent program.',
    confirmed: true,
  },
] as const;

/**
 * Q26: Kona is a Boxer and a house dog with NO working role. She must never be
 * captioned or described as a working dog anywhere on the site.
 */
export const nonWorkingDogs = ['Kona'] as const;

/**
 * Q14 — the biggest omission in the original scope. Ryan works with companies
 * to rodent-proof structures at three stages, alongside the client's architect,
 * GC or engineer. He asked for this as its own page and rates it one of the
 * strongest on the site. No competitor in this market offers it.
 */
export const consultingStages = [
  { stage: 'Preconstruction',  detail: 'Building exclusion into the design and specification before anything is poured.' },
  { stage: 'Mid-construction', detail: 'Catching penetrations and details while they are still open and cheap to correct.' },
  { stage: 'Post-construction', detail: 'Remediating a finished building that was never built to keep rodents out.' },
] as const;

/** Q16 — IPM-mandated settings Ryan confirmed and asked for pages on. */
export const institutionalVerticals = [
  { slug: 'schools-pest-control', name: 'Schools' },
  { slug: 'childcare-pest-control', name: 'Childcare Facilities' },
  { slug: 'medical-facility-pest-control', name: 'Medical Facilities' },
] as const;

/** Build-time report of everything the owner has not yet said yes or no to. */
export function awaitingOwnerConfirmation() {
  return services.filter((s) => s.awaitingConfirmation).map((s) => s.slug);
}

// ---------------------------------------------------------------------------
// Retired services
// ---------------------------------------------------------------------------

/**
 * August 2026, Ryan verbatim: **"I don't do termites."**
 *
 * Not pending — retired. The service spoke and eighteen city × service matrix
 * pages had already been written against it and are moved to `_retired/`
 * rather than deleted (Part 14: never permanently delete, move to a holding
 * location and let the client decide).
 *
 * Termites stay in the pest library as an IDENTIFICATION subject only. The
 * question a Long Island homeowner actually types is some form of "is this a
 * termite or a carpenter ant", and carpenter ants are work Graduate takes. A
 * page that answers that honestly — including the part where the answer is
 * "that is a termite, and we are not the firm for it" — earns its place. A page
 * that sells termite treatment does not.
 *
 * The live site has /pest-control/termite-control/ and its city variants, so
 * these need 301s at cutover, pointed at the pest-library profile rather than
 * at a service page that no longer exists.
 */
export const retiredServices = [
  {
    slug: 'termite-control',
    name: 'Termite Control',
    reason: 'Not offered. Client confirmed, August 2026.',
    redirectTo: '/pest-library/eastern-subterranean-termite/',
  },
] as const;

/**
 * Cities that had a `<city>-termite-control` matrix page on the live site.
 * Sourced from the eighteen files now sitting in `_retired/matrix/` — not from
 * markets.ts, because the retired set is a record of what was actually
 * published and the market table has since been re-tiered around it.
 */
export const retiredTermiteMatrixCities = [
  'cold-spring-harbor',
  'commack',
  'dix-hills',
  'garden-city',
  'glen-cove',
  'great-neck',
  'huntington',
  'huntington-station',
  'lloyd-harbor',
  'locust-valley',
  'manhasset',
  'melville',
  'northport',
  'oyster-bay',
  'port-washington',
  'roslyn',
  'smithtown',
  'syosset',
] as const;

/**
 * THE 301 MAP for the retired termite corpus.
 *
 * Same shape and same status as `retiredMarketSlugs` in markets.ts: a declared
 * data structure, deliberately NOT yet wired into a route or into vercel.json.
 * `retiredMarketSlugs` has no consumer either — the redirect mechanism for this
 * build is still a cutover decision, and inventing one here would put two
 * competing patterns in the codebase.
 *
 * Every entry points at the pest-library profile, which is the only page on the
 * site that still discusses termites. Nineteen rows: the retired service spoke
 * plus its eighteen city × service pages.
 */
export const retiredServiceSlugs: Array<{ from: string; to: string }> = [
  { from: '/pest-control/termite-control/', to: '/pest-library/eastern-subterranean-termite/' },
  ...retiredTermiteMatrixCities.map((city) => ({
    from: `/pest-control/${city}/termite-control/`,
    to: '/pest-library/eastern-subterranean-termite/',
  })),
];

/**
 * Guard: a retired URL must never also be a URL the build generates, or the
 * 301 and the route fight and the redirect silently loses. Call with the built
 * path list at cutover.
 */
export function assertRetiredUrlsNotBuilt(builtPaths: string[]) {
  const built = new Set(builtPaths);
  const clashes = retiredServiceSlugs.filter((r) => built.has(r.from)).map((r) => r.from);
  if (clashes.length) {
    throw new Error(
      `[services] retired URL(s) still being generated: ${clashes.join(', ')}. ` +
        `A 301 cannot cover a path the build also emits.`
    );
  }
  return true;
}

/**
 * Library-only grouping keys.
 *
 * A pest profile normally hangs off a service spoke (Part 3.4 #7). One does
 * not: the eastern subterranean termite, which survives as identification
 * material after the service was retired. Giving it a real service slug would
 * be a lie in the breadcrumb, in the "treatment is covered under…" block on
 * the profile, and in the group heading on /pest-library/. Giving it a key
 * that resolves to no service is the honest option, and every consumer of
 * `serviceBySlug` already degrades correctly when the lookup returns
 * undefined.
 */
export const libraryOnlyGroups: Record<string, { label: string; note: string }> = {
  'identification-only': {
    label: 'Identification only',
    note: 'Profiles kept because the identification question is worth answering. The work itself is not something Graduate takes on, and each page says so.',
  },
};

export const isLibraryOnlyGroup = (slug: string) => slug in libraryOnlyGroups;
