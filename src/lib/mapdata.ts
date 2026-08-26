/**
 * mapdata.ts — everything a map component needs, resolved once at build time.
 *
 * The map components draw. This file decides what they draw and asserts that
 * it is drawable. Keeping the two apart means a bad coordinate fails here,
 * with a message naming the market, rather than rendering a pin in the ocean.
 *
 * Part 12.3 applies: no non-null assertions, no silent caps. Every market that
 * cannot be placed throws.
 */

import { markets, effectiveCluster, marketLabel, type Market, type Region } from '../data/markets';
import { COVERAGE, VIEW, BOUNDS, project } from '../data/coverage-geometry';

export interface Pin {
  slug: string;
  /** The form used mid-sentence — "Huntington", not "Town of Huntington". */
  label: string;
  region: Region;
  county: string;
  /** viewBox coordinates, from the same projection that drew the coastline. */
  x: number;
  y: number;
  /** True when /locations/<slug>/ actually exists in this build. */
  buildable: boolean;
  href: string;
}

/**
 * The operating base, marked at LOCALITY level and nothing finer.
 *
 * Q1/Q2: Graduate is a service-area business. The street address exists for
 * Google verification, schema and citations and is never displayed — and a pin
 * dropped on a street address displays it just as surely as printing it does.
 * So the base is the hamlet of East Northport, drawn at the same size and in
 * the same style as any other market, on a map whose whole width is 85 km.
 * There is no zoom level in this system at which a building is identifiable,
 * because there is no building data in this system.
 */
export const BASE_SLUG = 'east-northport';

// ---------------------------------------------------------------------------
// Build-time assertions
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Is this pin actually on land we serve?
//
// The bounding box in markets.ts catches a coordinate in the wrong part of the
// world. The viewport check below catches one outside the frame. Neither
// catches the subtler and more embarrassing error: a coordinate that is
// plausible, in frame, and three miles out in Long Island Sound.
//
// So every pin is tested against the coverage polygon itself — the same path
// the map draws — by ray casting. The generated path is only ever
// `M x,y L x,y … Z`, so it parses without a path library.
// ---------------------------------------------------------------------------
const coverageRings: Array<Array<[number, number]>> = COVERAGE.split('M')
  .filter(Boolean)
  .map((sub) =>
    sub
      .replace(/Z$/, '')
      .split('L')
      .map((pair) => {
        const [x, y] = pair.split(',').map(Number);
        return [x, y] as [number, number];
      })
  )
  .filter((ring) => ring.length >= 4);

function inRing(x: number, y: number, ring: Array<[number, number]>): boolean {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i] as [number, number];
    const [xj, yj] = ring[j] as [number, number];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

/** even-odd, matching the fill-rule the map renders with. */
const onCoverage = (x: number, y: number) =>
  coverageRings.reduce((n, ring) => n + (inRing(x, y, ring) ? 1 : 0), 0) % 2 === 1;

function distanceToCoverage(x: number, y: number): number {
  let best = Infinity;
  for (const ring of coverageRings) {
    for (const [px, py] of ring) {
      const d = Math.hypot(px - x, py - y);
      if (d < best) best = d;
    }
  }
  return best;
}

/**
 * How far off the drawn coastline a pin may sit before it counts as an error.
 *
 * 15 viewBox units is about 1.35 km here. That is not slack for a bad
 * coordinate — it is the known error budget of the map itself: a 500 m source
 * coastline, generalised again at build time, will cut inside a waterfront
 * neighbourhood. Dumbo is the real case: it sits on the East River bulkhead
 * and lands 0.33 km outside the simplified shore. A pin in the Sound, in New
 * Jersey, or on Staten Island misses by an order of magnitude more than this
 * and fails.
 */
const SHORE_TOLERANCE = 15;

/**
 * Every market must project inside the drawn viewport.
 *
 * This is the second half of the guard that starts in markets.ts. That one
 * rejects a coordinate outside the New York metropolitan area — a transposed
 * or mistyped pair. This one rejects a coordinate that is plausible for the
 * region but still falls outside the frame this map draws, which would render
 * as a pin clamped to the edge or clipped away without any error at all.
 *
 * Between them they are the direct fix for the failure on the current live
 * site, where a Leaflet map renders centred on Saskatchewan.
 */
function assertOnMap(m: Market, x: number, y: number): void {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    throw new Error(`[mapdata] ${m.slug} projected to a non-finite point — check its coordinates.`);
  }
  if (x < 0 || x > VIEW.w || y < 0 || y > VIEW.h) {
    throw new Error(
      `[mapdata] ${m.slug} (${m.lat}, ${m.lon}) projects to ${x},${y}, outside the ` +
        `${VIEW.w}x${VIEW.h} coverage viewport. Either the coordinate is wrong or the ` +
        `viewport in scripts/build-coverage-geometry.mjs needs to grow to include it ` +
        `(currently ${BOUNDS.west}..${BOUNDS.east} lon, ${BOUNDS.south}..${BOUNDS.north} lat).`
    );
  }
  if (!onCoverage(x, y)) {
    const off = distanceToCoverage(x, y);
    if (off > SHORE_TOLERANCE) {
      throw new Error(
        `[mapdata] ${m.slug} (${m.lat}, ${m.lon}) plots ${(off * 0.09).toFixed(1)} km off the ` +
          `land Graduate serves — in open water, or in a county that is not on the list. ` +
          `Check the coordinate against its source before touching this tolerance.`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Pins
// ---------------------------------------------------------------------------

const allPins: Pin[] = markets.map((m) => {
  const { x, y } = project(m.lon, m.lat);
  assertOnMap(m, x, y);
  const buildable = effectiveCluster(m) !== 'area';
  return {
    slug: m.slug,
    label: marketLabel(m),
    region: m.region,
    county: m.county,
    x,
    y,
    buildable,
    href: `/locations/${m.slug}/`,
  };
});

/** Two pins on the same spot means a row was copied and not edited. */
{
  const seen = new Map<string, string>();
  for (const p of allPins) {
    const key = `${p.x},${p.y}`;
    const prior = seen.get(key);
    if (prior) {
      throw new Error(
        `[mapdata] ${p.slug} and ${prior} project to the same point (${key}). ` +
          `Two markets cannot share a coordinate — one of the rows in markets.ts was copied.`
      );
    }
    seen.set(key, p.slug);
  }
}

export const pins = (): Pin[] => allPins;

export const pinsIn = (region: Region): Pin[] => allPins.filter((p) => p.region === region);

export function pinFor(slug: string): Pin | undefined {
  return allPins.find((p) => p.slug === slug);
}

/**
 * The pins to draw for a town page: the market itself, then the markets a
 * reader would actually think of as next door — same region and county first,
 * nearest by straight-line distance. Everything else still draws, quieter, so
 * the town reads in the context of the whole service area rather than floating
 * on its own.
 */
export function neighboursOf(slug: string, limit = 8): Pin[] {
  const self = pinFor(slug);
  if (!self) return [];
  return allPins
    .filter((p) => p.slug !== slug && p.region === self.region)
    .map((p) => ({ p, d: (p.x - self.x) ** 2 + (p.y - self.y) ** 2, sameCounty: p.county === self.county }))
    .sort((a, b) => (a.sameCounty === b.sameCounty ? a.d - b.d : a.sameCounty ? -1 : 1))
    .slice(0, limit)
    .map((x) => x.p);
}

// ---------------------------------------------------------------------------
// Region labels
//
// Placed in viewBox units rather than derived from the pins: a label wants to
// sit in clear water or empty land, which is a typographic judgement, not a
// centroid. Both sit well outside any market cluster.
// ---------------------------------------------------------------------------
export const REGION_LABELS: ReadonlyArray<{ text: string; x: number; y: number; anchor: 'start' | 'middle' | 'end' }> = [
  { text: 'LONG ISLAND', x: 700, y: 300, anchor: 'middle' },
  { text: 'NEW YORK CITY', x: 190, y: 470, anchor: 'middle' },
];

// ---------------------------------------------------------------------------
// Attribution
//
// Both sources permit commercial use and neither needs an API key. The credit
// is rendered visibly under every map, not buried in a comment — see the note
// in CoverageMap.astro on why there is no tile provider to credit.
// ---------------------------------------------------------------------------
export const MAP_CREDIT = 'Coastline: OpenStreetMap contributors. Boundaries: U.S. Census Bureau.';

/** The one-line description that is the map's text alternative. */
export function coverageAltText(scope?: Region): string {
  const n = scope ? pinsIn(scope).length : allPins.length;
  if (scope === 'nyc') return `Map of ${n} New York City neighbourhoods Graduate Pest Control serves.`;
  if (scope === 'long-island') return `Map of ${n} Long Island markets Graduate Pest Control serves.`;
  return `Map of the ${n} markets Graduate Pest Control serves across Long Island and New York City.`;
}
