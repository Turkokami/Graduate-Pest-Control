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

const li = (
  slug: string,
  name: string,
  county: string,
  cluster: Cluster
): Market => ({
  slug,
  name,
  region: 'long-island',
  county,
  cluster,
  services: cluster === 'full' ? LI_FULL : cluster === 'triple' ? LI_TRIPLE : [],
  research: null,
});

/** A hamlet or village inside the Town of Huntington hub. */
const HAMLET = (slug: string, name: string, county: string, cluster: Cluster): Market => ({
  ...li(slug, name, county, cluster),
  parent: 'huntington',
});

const nyc = (
  slug: string,
  name: string,
  county: string,
  cluster: Cluster
): Market => ({
  slug,
  name,
  region: 'nyc',
  county,
  cluster,
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
  { ...li('huntington', 'Town of Huntington', 'Suffolk', 'full'), shortName: 'Huntington', isTownHub: true },
  li('great-neck', 'Great Neck', 'Nassau', 'full'),
  li('manhasset', 'Manhasset', 'Nassau', 'full'),
  li('port-washington', 'Port Washington', 'Nassau', 'full'),
  li('garden-city', 'Garden City', 'Nassau', 'full'),

  HAMLET('northport', 'Northport', 'Suffolk', 'triple'),
  HAMLET('cold-spring-harbor', 'Cold Spring Harbor', 'Suffolk', 'triple'),
  HAMLET('lloyd-harbor', 'Lloyd Harbor', 'Suffolk', 'triple'),
  li('oyster-bay', 'Oyster Bay', 'Nassau', 'triple'),
  li('syosset', 'Syosset', 'Nassau', 'triple'),
  li('commack', 'Commack', 'Suffolk', 'triple'), // straddles the Huntington/Smithtown line — not a hamlet of either
  li('glen-cove', 'Glen Cove', 'Nassau', 'triple'),
  li('roslyn', 'Roslyn', 'Nassau', 'triple'),
  li('locust-valley', 'Locust Valley', 'Nassau', 'triple'),

  HAMLET('asharoken', 'Asharoken', 'Suffolk', 'single'),
  li('brookville', 'Brookville', 'Nassau', 'single'),
  HAMLET('centerport', 'Centerport', 'Suffolk', 'single'),
  HAMLET('east-northport', 'East Northport', 'Suffolk', 'single'),
  HAMLET('eatons-neck', 'Eatons Neck', 'Suffolk', 'single'),
  HAMLET('greenlawn', 'Greenlawn', 'Suffolk', 'single'),
  li('kings-point', 'Kings Point', 'Nassau', 'single'),
  li('lattingtown', 'Lattingtown', 'Nassau', 'single'),
  li('old-westbury', 'Old Westbury', 'Nassau', 'single'),
  li('sands-point', 'Sands Point', 'Nassau', 'single'),
  li('sea-cliff', 'Sea Cliff', 'Nassau', 'single'),

  // Q18/Q19 — hamlets Ryan named inside the Town of Huntington, plus the
  // priority growth towns from "I want to win my own backyard".
  HAMLET('halesite', 'Halesite', 'Suffolk', 'single'),
  HAMLET('huntington-station', 'Huntington Station', 'Suffolk', 'triple'),
  HAMLET('dix-hills', 'Dix Hills', 'Suffolk', 'triple'),
  HAMLET('melville', 'Melville', 'Suffolk', 'triple'),
  li('fort-salonga', 'Fort Salonga', 'Suffolk', 'single'),
  li('smithtown', 'Smithtown', 'Suffolk', 'triple'),
  li('kings-park', 'Kings Park', 'Suffolk', 'single'),

  // ---- NYC · 17 ----
  nyc('upper-east-side', 'Upper East Side', 'New York', 'full'),
  nyc('brooklyn-heights', 'Brooklyn Heights', 'Kings', 'full'),
  nyc('park-slope', 'Park Slope', 'Kings', 'full'),

  nyc('tribeca', 'Tribeca', 'New York', 'triple'),
  nyc('soho', 'SoHo', 'New York', 'triple'),
  nyc('greenwich-village', 'Greenwich Village', 'New York', 'triple'),
  nyc('williamsburg', 'Williamsburg', 'Kings', 'triple'),
  nyc('upper-west-side', 'Upper West Side', 'New York', 'triple'),

  nyc('astoria', 'Astoria', 'Queens', 'single'),
  nyc('central-park-south', 'Central Park South', 'New York', 'single'),
  nyc('cobble-hill', 'Cobble Hill', 'Kings', 'single'),
  nyc('dumbo', 'Dumbo', 'Kings', 'single'),
  nyc('flatiron-nomad', 'Flatiron / NoMad', 'New York', 'single'),
  nyc('hudson-yards', 'Hudson Yards', 'New York', 'single'),
  nyc('malba', 'Malba', 'Queens', 'single'),
  nyc('noho', 'NoHo', 'New York', 'single'),
  nyc('whitestone', 'Whitestone', 'Queens', 'single'),
];

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
