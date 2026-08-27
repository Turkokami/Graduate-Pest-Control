/**
 * markets.ts — the geographic data layer.
 *
 * Keystone Part 6.3: "Differentiation is data-driven." Each market row carries
 * the facts that make its copy vary on its own, and a `cluster` field decides
 * how many pages that market earns. Scaling the geo layer is a data edit, not
 * new code.
 *
 * Keystone Part 13 / Phase 3: the capacity gate. A market only builds at its
 * assigned cluster once `research` is filled with real, sourced local facts.
 * Until then `effectiveCluster()` downgrades it. This is the M1 uniqueness
 * floor expressed in code — a thin geo page is worse than no geo page.
 */

export type Region = 'long-island' | 'nyc';
export type Cluster = 'full' | 'triple' | 'single' | 'area';

/**
 * Real local facts, gathered before a word of copy is written (Part 6.2).
 * Every field here must be verifiable. `sources` is not optional — Part 1
 * doctrine #6: honesty is architecture.
 */
export interface MarketResearch {
  /** Distance and bearing from the operating base. OPTIONAL because it cannot
   *  be computed until business.address is supplied — do not invent it. */
  distanceMi?: number;
  direction?: string;
  /** Set true only once every fact below has been checked against a real
   *  source by the writer. Research seeded from general knowledge starts
   *  false and does NOT clear the capacity gate. */
  verified: boolean;
  /** Dominant housing stock and era. The single most useful differentiator for
   *  a building-science operator: pre-war co-op vs. brownstone vs. estate vs.
   *  waterfront cottage are four completely different exclusion problems. */
  housing: string;
  /** Construction details that actually change the treatment approach. */
  structuralNotes: string[];
  /** Pest pressures genuinely characteristic of this place and why. */
  pestPressures: Array<{ pest: string; driver: string; season: string }>;
  landmarks: string[];
  waterways: string[];
  neighborhoods: string[];
  sources: string[];
}

export interface Market {
  slug: string;
  name: string;
  /**
   * WGS84 decimal degrees for the locality center. See the SOURCES block at
   * the bottom of this file. Not one of these is estimated, interpolated or
   * eyeballed off a map: a market pinned in the wrong place is worse than a
   * market with no pin, and the guard below is what makes that a build error
   * rather than something a visitor finds.
   *
   * These are LOCALITY coordinates. Nothing in this file is finer than a
   * hamlet center, and nothing anywhere on this site is finer than that —
   * Graduate is a service-area business and the street address is never
   * displayed (Q1/Q2).
   */
  lat: number;
  lon: number;
  /** Conversational form used in body copy and service titles. Defaults to
   *  `name`; set where the formal name reads badly mid-sentence. */
  shortName?: string;
  region: Region;
  county: string;
  /** Intended cluster. Aspirational until research lands — see effectiveCluster(). */
  cluster: Cluster;
  /** Money services for this market's matrix pages. Market-matched, not uniform. */
  services: string[];
  /** null until the Phase 3 research step fills it. Never invented. */
  research: MarketResearch | null;
  /**
   * Q18 — the Town of Huntington restructure. Ryan lives and works in the town
   * and wants it treated as a home market, not one row in a list of 44:
   * one authoritative town hub, with genuinely distinct hamlets and villages
   * underneath it. A hamlet sets `parent` to its town hub's slug.
   */
  parent?: string;
  /** True for a market that acts as a hub for its hamlets. */
  isTownHub?: boolean;
}

/**
 * Q18 — RETIRED SLUGS. Huntington Bay and Huntington Village were competing
 * with Huntington for the same searches; Ryan: "that is the wrong division…
 * effectively the same place in a customer's head." Folded into the town hub.
 * Neither had a page yet, so nothing is lost — but the live site has these
 * URLs, so they need 301s at cutover.
 */
export const retiredMarketSlugs: Array<{ from: string; to: string }> = [
  { from: '/locations/huntington-bay/', to: '/locations/huntington/' },
  { from: '/locations/huntington-village/', to: '/locations/huntington/' },
];

/** Money-service sets, matched to what actually sells in each metro. */
//
// August 2026: 'termite-control' was the first entry in both sets until Ryan
// answered the outstanding question with "I don't do termites." It is gone from
// the service tree entirely (see retiredServices in services.ts).
//
// 'ant-control' takes the vacated slot rather than the sets simply shrinking.
// That is deliberate, not filler: carpenter ants are the wood-destroying insect
// Graduate actually treats under 7A, and they are what a Long Island homeowner
// is usually looking at when they think they have found termites. The traffic
// the termite pages were chasing is better served by the page that can help.
const LI_FULL = [
  // 'ant-control', not 'carpenter-ant-control': the latter is a problem micro
  // page hanging off this spoke, not a service in its own right. Referencing it
  // here made five matrix routes silently fail to generate — no error, just
  // missing pages. Part 9: no silent caps.
  'ant-control',
  'rodent-control',
  'bed-bug-treatment',
  'structural-exclusion',
  'mosquito-management',
  'wildlife-management',
];
const LI_TRIPLE = ['rodent-control', 'structural-exclusion', 'ant-control'];

const NYC_FULL = [
  'rodent-control',
  'cockroach-control',
  'bed-bug-treatment',
  'structural-exclusion',
  'wildlife-management',
  'ant-control',
];
const NYC_TRIPLE = ['rodent-control', 'cockroach-control', 'bed-bug-treatment'];

/** [latitude, longitude] in WGS84 decimal degrees. Required — see `Market`. */
type At = readonly [number, number];

const li = (
  slug: string,
  name: string,
  county: string,
  cluster: Cluster,
  at: At
): Market => ({
  slug,
  name,
  region: 'long-island',
  county,
  cluster,
  lat: at[0],
  lon: at[1],
  services: cluster === 'full' ? LI_FULL : cluster === 'triple' ? LI_TRIPLE : [],
  research: null,
});

/** A hamlet or village inside the Town of Huntington hub. */
const HAMLET = (slug: string, name: string, county: string, cluster: Cluster, at: At): Market => ({
  ...li(slug, name, county, cluster, at),
  parent: 'huntington',
});

const nyc = (
  slug: string,
  name: string,
  county: string,
  cluster: Cluster,
  at: At
): Market => ({
  slug,
  name,
  region: 'nyc',
  county,
  cluster,
  lat: at[0],
  lon: at[1],
  services: cluster === 'full' ? NYC_FULL : cluster === 'triple' ? NYC_TRIPLE : [],
  research: null,
});

/**
 * The 44 markets.
 *
 * Cluster assignment is a PROVISIONAL hypothesis based on market
 * characteristics and the density of the existing site's coverage. Ryan's
 * revenue-by-market data is the only input that should decide the eight
 * anchors — when it arrives, this table is re-tiered before Phase 3 begins.
 */
export const markets: Market[] = [
  // ---- Long Island · 27 ----
  { ...li('huntington', 'Town of Huntington', 'Suffolk', 'full', [40.86815, -73.42568]), shortName: 'Huntington', isTownHub: true },
  li('great-neck', 'Great Neck', 'Nassau', 'full', [40.80066, -73.72846]),
  li('manhasset', 'Manhasset', 'Nassau', 'full', [40.79788, -73.69957]),
  li('port-washington', 'Port Washington', 'Nassau', 'full', [40.82566, -73.69819]),
  li('garden-city', 'Garden City', 'Nassau', 'full', [40.72677, -73.6343]),

  HAMLET('northport', 'Northport', 'Suffolk', 'triple', [40.90093, -73.34317]),
  HAMLET('cold-spring-harbor', 'Cold Spring Harbor', 'Suffolk', 'triple', [40.87149, -73.45679]),
  HAMLET('lloyd-harbor', 'Lloyd Harbor', 'Suffolk', 'triple', [40.90343, -73.45984]),
  li('oyster-bay', 'Oyster Bay', 'Nassau', 'triple', [40.86565, -73.53207]),
  li('syosset', 'Syosset', 'Nassau', 'triple', [40.82621, -73.50207]),
  li('commack', 'Commack', 'Suffolk', 'triple', [40.84288, -73.29289]), // straddles the Huntington/Smithtown line — not a hamlet of either
  li('glen-cove', 'Glen Cove', 'Nassau', 'triple', [40.86232, -73.63374]),
  li('roslyn', 'Roslyn', 'Nassau', 'triple', [40.79982, -73.65096]),
  li('locust-valley', 'Locust Valley', 'Nassau', 'triple', [40.87593, -73.59707]),

  HAMLET('asharoken', 'Asharoken', 'Suffolk', 'single', [40.9375, -73.38333]),
  li('brookville', 'Brookville', 'Nassau', 'single', [40.81316, -73.56735]),
  HAMLET('centerport', 'Centerport', 'Suffolk', 'single', [40.88538, -73.37623]),
  HAMLET('east-northport', 'East Northport', 'Suffolk', 'single', [40.87676, -73.32456]),
  HAMLET('eatons-neck', 'Eatons Neck', 'Suffolk', 'single', [40.93065, -73.40151]),
  HAMLET('greenlawn', 'Greenlawn', 'Suffolk', 'single', [40.86899, -73.36512]),
  li('kings-point', 'Kings Point', 'Nassau', 'single', [40.81982, -73.73513]),
  li('lattingtown', 'Lattingtown', 'Nassau', 'single', [40.89538, -73.60096]),
  li('old-westbury', 'Old Westbury', 'Nassau', 'single', [40.78871, -73.59957]),
  li('sands-point', 'Sands Point', 'Nassau', 'single', [40.85177, -73.71874]),
  li('sea-cliff', 'Sea Cliff', 'Nassau', 'single', [40.84899, -73.64485]),

  // Q18/Q19 — hamlets Ryan named inside the Town of Huntington, plus the
  // priority growth towns from "I want to win my own backyard".
  HAMLET('halesite', 'Halesite', 'Suffolk', 'single', [40.88843, -73.4154]),
  HAMLET('huntington-station', 'Huntington Station', 'Suffolk', 'triple', [40.85343, -73.41151]),
  HAMLET('dix-hills', 'Dix Hills', 'Suffolk', 'triple', [40.80482, -73.33623]),
  HAMLET('melville', 'Melville', 'Suffolk', 'triple', [40.79343, -73.41512]),
  li('fort-salonga', 'Fort Salonga', 'Suffolk', 'single', [40.9126, -73.30095]),
  li('smithtown', 'Smithtown', 'Suffolk', 'triple', [40.85593, -73.20067]),
  li('kings-park', 'Kings Park', 'Suffolk', 'single', [40.88621, -73.25734]),

  // ---- NYC · 17 ----
  nyc('upper-east-side', 'Upper East Side', 'New York', 'full', [40.769, -73.966]),
  nyc('brooklyn-heights', 'Brooklyn Heights', 'Kings', 'full', [40.69538, -73.99375]),
  nyc('park-slope', 'Park Slope', 'Kings', 'full', [40.6701, -73.98597]),

  nyc('tribeca', 'Tribeca', 'New York', 'triple', [40.718, -74.008]),
  nyc('soho', 'SoHo', 'New York', 'triple', [40.723, -74.0]),
  nyc('greenwich-village', 'Greenwich Village', 'New York', 'triple', [40.733611, -74.002778]),
  nyc('williamsburg', 'Williamsburg', 'Kings', 'triple', [40.71427, -73.95347]),
  nyc('upper-west-side', 'Upper West Side', 'New York', 'triple', [40.787, -73.975]),

  nyc('astoria', 'Astoria', 'Queens', 'single', [40.77205, -73.93014]),
  nyc('central-park-south', 'Central Park South', 'New York', 'single', [40.76429, -73.973038]),
  nyc('cobble-hill', 'Cobble Hill', 'Kings', 'single', [40.688194, -73.995941]),
  nyc('dumbo', 'Dumbo', 'Kings', 'single', [40.704167, -73.990278]),
  nyc('flatiron-nomad', 'Flatiron / NoMad', 'New York', 'single', [40.740278, -73.99]),
  nyc('hudson-yards', 'Hudson Yards', 'New York', 'single', [40.756111, -74.000557]),
  nyc('malba', 'Malba', 'Queens', 'single', [40.79, -73.81]),
  nyc('noho', 'NoHo', 'New York', 'single', [40.727222, -73.993611]),
  nyc('whitestone', 'Whitestone', 'Queens', 'single', [40.79455, -73.81847]),
];

// ---------------------------------------------------------------------------
// The coordinate guard — mandate: a wrong pin fails the build
//
// This is the direct fix for the failure on the current live site, where a
// Leaflet map loads on a Long Island pest control page and renders centered on
// Saskatchewan. Nothing in that build could tell it had gone wrong, because
// nothing in that build ever looked at the number.
//
// The box below is generous — roughly Trenton to New Haven, Sandy Hook to
// Poughkeepsie — because its job is not to police cartographic precision. Its
// job is to catch the four mistakes that actually happen:
//
//   · a transposed pair, where longitude lands in the latitude slot. Every
//     coordinate on this site has a positive latitude near 41 and a negative
//     longitude near -74, so a swap fails immediately and loudly.
//   · a dropped or misplaced minus sign, which throws a market into China.
//   · a digit typed wrong in the degrees place.
//   · a row copied and not edited, which the duplicate check below catches
//     even when both coordinates are individually valid.
//
// It runs at module scope, so it runs on every build of every page. There is
// no flag to turn it off and no way to ship past it.
// ---------------------------------------------------------------------------

/** Roughly the New York metropolitan area, with room to spare. */
export const METRO_BBOX = { south: 40.4, north: 41.3, west: -74.5, east: -72.8 } as const;

{
  const seen = new Map<string, string>();
  for (const m of markets) {
    if (typeof m.lat !== 'number' || typeof m.lon !== 'number' || !Number.isFinite(m.lat) || !Number.isFinite(m.lon)) {
      throw new Error(`[markets] ${m.slug} has no usable coordinates. Every market carries a real, sourced lat/lon.`);
    }
    if (m.lat < METRO_BBOX.south || m.lat > METRO_BBOX.north || m.lon < METRO_BBOX.west || m.lon > METRO_BBOX.east) {
      throw new Error(
        `[markets] ${m.slug} is at ${m.lat}, ${m.lon} — outside the New York metropolitan area ` +
          `(lat ${METRO_BBOX.south}..${METRO_BBOX.north}, lon ${METRO_BBOX.west}..${METRO_BBOX.east}). ` +
          `A transposed or mistyped pair fails the build rather than shipping a pin in the wrong place.`
      );
    }
    const key = `${m.lat},${m.lon}`;
    const prior = seen.get(key);
    if (prior) {
      throw new Error(
        `[markets] ${m.slug} and ${prior} carry identical coordinates (${key}). ` +
          `That is a copied row, not two places.`
      );
    }
    seen.set(key, m.slug);
  }
}

// Attach researched facts from src/data/research/. A market with no entry keeps
// research: null and stays gated.
import { research as researchIndex } from './research/index';
for (const m of markets) {
  const r = researchIndex[m.slug];
  if (r) m.research = r;
}

// ---------------------------------------------------------------------------
// The capacity gate (Part 13, Phase 3)
// ---------------------------------------------------------------------------

/**
 * A market builds at its assigned cluster ONLY when it has real research behind
 * it. Without research there is no way to write 3,000 unique local words, so
 * the market downgrades rather than shipping filler.
 */
export function effectiveCluster(m: Market): Cluster {
  // Unresearched, or researched from general knowledge but not yet fact-checked
  // against real sources — either way it cannot support 3,000 unique local words.
  if (!m.research || !m.research.verified) return 'area';
  return m.cluster;
}

/** Markets that currently earn a full city page. */
export const buildableMarkets = () =>
  markets.filter((m) => effectiveCluster(m) !== 'area');

/** Every city × service matrix route the build should generate. */
export function matrixRoutes(): Array<{ city: string; service: string }> {
  const out: Array<{ city: string; service: string }> = [];
  for (const m of markets) {
    const c = effectiveCluster(m);
    if (c === 'full' || c === 'triple') {
      const n = c === 'full' ? 6 : 3;
      for (const service of m.services.slice(0, n)) out.push({ city: m.slug, service });
    }
  }
  return out;
}

/** Siblings for the lateral links required by mandate M3. */
export function siblingsOf(slug: string, limit = 6): Market[] {
  const self = markets.find((m) => m.slug === slug);
  if (!self) return [];
  return markets
    .filter((m) => m.slug !== slug && m.region === self.region && m.county === self.county)
    .slice(0, limit);
}

/** Hamlets belonging to a town hub, for the hub's own "areas we serve" block. */
export const hamletsOf = (hubSlug: string) => markets.filter((m) => m.parent === hubSlug);

/** The town hub a market belongs to, if any. */
export const townHubOf = (m: Market) =>
  m.parent ? markets.find((x) => x.slug === m.parent) : undefined;

/** The form to use mid-sentence and in service titles. */
export const marketLabel = (m: Market) => m.shortName ?? m.name;

export const marketsByRegion = (region: Region) =>
  markets.filter((m) => m.region === region);

/** Build-time coverage report — what the capacity gate is currently blocking. */
export function coverageReport() {
  const researched = markets.filter((m) => m.research).length;
  const intended = markets.reduce(
    (n, m) => n + (m.cluster === 'full' ? 6 : m.cluster === 'triple' ? 3 : 0),
    0
  );
  return {
    markets: markets.length,
    researched,
    awaitingResearch: markets.length - researched,
    matrixIntended: intended,
    matrixBuildable: matrixRoutes().length,
  };
}


// ---------------------------------------------------------------------------
// SOURCES — where the 49 coordinate pairs came from
//
// Part 1 doctrine #4: never fabricate. Coordinates are the easiest data on a
// site to invent convincingly, so every pair here was taken from a named
// gazetteer and none was estimated, interpolated or read off a map.
//
// · 36 markets — the GeoNames geographical database (CC BY 4.0), which is the
//   gazetteer behind most place lookups and carries every Long Island hamlet
//   and CDP in this table as its own record. Read at build-preparation time
//   from the `all-the-cities` package, which is a straight GeoNames extract,
//   and spot-checked against the Wikipedia infobox coordinate for Northport,
//   East Northport, Garden City and Great Neck — agreement to four decimals.
//
// · 12 markets — Wikipedia's own geographic coordinates, retrieved as
//   structured data from DBpedia (geo:lat / geo:long), which extracts them
//   from the article infobox rather than re-deriving them. These are the
//   New York City neighborhoods and Asharoken, none of which clear the
//   population floor GeoNames' distributed extracts are cut at.
//
// · 1 market — central-park-south. Wikipedia has no article for the strip
//   under that name; it redirects to "59th Street (Manhattan)", which is the
//   street that IS Central Park South, and that article's coordinate
//   (40.76429, -73.973038) sits at its Fifth Avenue end. Recorded here rather
//   than quietly averaged with something, because a reader deserves to know
//   which of these is a neighborhood centroid and which is a street.
//
// Two caveats worth stating rather than hiding:
//   · `huntington` is the Town of Huntington but its coordinate is the
//     GeoNames record for the hamlet of Huntington — the town center, not the
//     town's geometric centroid. For a map of where work happens that is the
//     more useful of the two, and it is the point a reader would expect.
//   · NYC neighborhood coordinates are a single agreed point inside an area
//     with no legal boundary. They are a marker, not a claim about extent.
// ---------------------------------------------------------------------------
