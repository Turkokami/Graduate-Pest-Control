#!/usr/bin/env node
/**
 * build-coverage-geometry.mjs — generates src/data/coverage-geometry.ts.
 *
 * WHY A GENERATOR AND NOT A HAND-DRAWN SVG
 * ----------------------------------------
 * A coverage map has to be honest geography, not an illustrator's impression
 * of Long Island. Two public datasets are projected here at BUILD TIME and
 * emitted as plain SVG path strings:
 *
 *   · the shoreline — @geo-maps/earth-coastlines-500m (MIT, OpenStreetMap
 *     derived). This is what gives the map the real silhouette: the North
 *     Shore necks, Huntington and Northport bays, the harbour, the barrier
 *     beaches. Every visible edge on the finished map comes from here.
 *   · county boundaries — U.S. Census Bureau cartographic boundaries via the
 *     `us-atlas` package (public domain). Used ONLY to answer one yes/no
 *     question per landmass: is this island one Graduate works on?
 *
 * Both are devDependencies. Nothing from either reaches the browser — the
 * output of this script is a TypeScript module of literal path data.
 *
 * WHY CLASSIFY WHOLE LANDMASSES INSTEAD OF INTERSECTING POLYGONS
 * -------------------------------------------------------------
 * The obvious approach — boolean-intersect the shoreline with the county
 * polygons — mixes two datasets an order of magnitude apart in resolution, so
 * the coarse county outline ends up deciding where the coast is. It is also
 * the kind of operation that fails on real-world coastline data (it did:
 * polygon-clipping threw on the American mainland ring).
 *
 * It is unnecessary here. Every landmass in this window is wholly served or
 * wholly not: Long Island is Kings, Queens, Nassau and Suffolk end to end;
 * Manhattan is New York County; the mainland in frame is the Bronx,
 * Westchester, Rockland, New Jersey and Connecticut, none of them served; and
 * Staten Island is Richmond, which Ryan does not work in. So each landmass is
 * classified once by a point-in-polygon test and drawn whole, at the
 * shoreline dataset's own precision, with no boundary ever approximated.
 *
 * The Mercator is implemented inline rather than pulled from a projection
 * library on purpose. It is nine lines, and it has to be byte-identical to the
 * `project()` function this script emits for pin placement — two
 * implementations of the same projection is precisely how a pin drifts off its
 * own coastline.
 *
 * Run: node scripts/build-coverage-geometry.mjs   (idempotent)
 */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';

const require = createRequire(import.meta.url);
const counties10m = require('us-atlas/counties-10m.json');
const coastlines = require('@geo-maps/earth-coastlines-500m')();

// ---------------------------------------------------------------------------
// The viewport.
//
// Deliberately NOT the bounding box of Suffolk County: Suffolk runs east to
// Montauk at 72.0°W, and fitting to it would squeeze all 49 markets into the
// left eighth of the frame. This box is the SERVICE AREA — every market plus
// a margin — which is what a coverage map is supposed to show.
// ---------------------------------------------------------------------------
const WEST = -74.13, EAST = -73.1, SOUTH = 40.56, NORTH = 41.0;
const WIDTH = 1000;

/** The five counties Graduate works in. Richmond is deliberately not here. */
const SERVED = ['36059', '36103', '36061', '36047', '36081'];

// --- projection ------------------------------------------------------------
const RAD = Math.PI / 180;
const mx = (lon) => lon * RAD;
const my = (lat) => -Math.log(Math.tan(Math.PI / 4 + (lat * RAD) / 2));

const K = WIDTH / (mx(EAST) - mx(WEST));
const TX = -K * mx(WEST);
const TY = -K * my(NORTH);
const HEIGHT = Math.round(K * (my(SOUTH) - my(NORTH)));

// One unit on this canvas is about 90 m of ground. Emitted paths keep at most
// one decimal — finer than the map is ever rendered at, and orders of
// magnitude coarser than anything that could identify an individual building.
const px = (lon) => K * mx(lon) + TX;
const py = (lat) => K * my(lat) + TY;

const toMulti = (geom) =>
  geom.type === 'Polygon' ? [geom.coordinates] : geom.type === 'MultiPolygon' ? geom.coordinates : [];

function bbox(ring) {
  let w = Infinity, e = -Infinity, s = Infinity, n = -Infinity;
  for (const [lon, lat] of ring) {
    if (lon < w) w = lon;
    if (lon > e) e = lon;
    if (lat < s) s = lat;
    if (lat > n) n = lat;
  }
  return { w, e, s, n };
}

// ---------------------------------------------------------------------------
// Window clip.
//
// The coastline file is a single global MultiPolygon whose largest ring is the
// whole American mainland, reaching Panama. Rings are cut to a small margin
// around the window with a Sutherland–Hodgman scanline clip.
//
// S-H leaves zero-AREA bridges where a concave ring re-enters the window. That
// is why nothing in this map ever strokes a land path: filled, the bridges are
// invisible and the shape is exact; stroked, they would draw as hairlines
// across open water. The components render land as fill only, and the boundary
// between land and water is produced by the fill edge itself.
// ---------------------------------------------------------------------------
const PAD = 0.02;
const CW = WEST - PAD, CE = EAST + PAD, CS = SOUTH - PAD, CN = NORTH + PAD;
const insideEdge = (p, e) => (e === 0 ? p[0] >= CW : e === 1 ? p[0] <= CE : e === 2 ? p[1] >= CS : p[1] <= CN);

function crossEdge(a, b, e) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  if (e === 0 || e === 1) {
    const x = e === 0 ? CW : CE;
    return [x, y1 + ((y2 - y1) * (x - x1)) / (x2 - x1)];
  }
  const y = e === 2 ? CS : CN;
  return [x1 + ((x2 - x1) * (y - y1)) / (y2 - y1), y];
}

function clipRing(ring) {
  let out = ring;
  for (let e = 0; e < 4; e++) {
    const input = out;
    out = [];
    if (input.length === 0) break;
    for (let i = 0; i < input.length; i++) {
      const cur = input[i];
      const prev = input[(i + input.length - 1) % input.length];
      const curIn = insideEdge(cur, e);
      const prevIn = insideEdge(prev, e);
      if (curIn) {
        if (!prevIn) out.push(crossEdge(prev, cur, e));
        out.push(cur);
      } else if (prevIn) {
        out.push(crossEdge(prev, cur, e));
      }
    }
  }
  return out.length >= 4 ? out : null;
}

// --- point in polygon (ray casting) ----------------------------------------
function inRing(pt, ring) {
  const [x, y] = pt;
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

const inPolygon = (pt, poly) => inRing(pt, poly[0]) && !poly.slice(1).some((h) => inRing(pt, h));

/**
 * A point guaranteed to be inside the ring. The vertex mean is inside for most
 * shapes but not for a crescent, so fall back to a grid scan rather than
 * silently classifying a landmass from a point out at sea.
 */
function representativePoint(ring) {
  let sx = 0, sy = 0;
  for (const [x, y] of ring) { sx += x; sy += y; }
  const mean = [sx / ring.length, sy / ring.length];
  if (inRing(mean, ring)) return mean;
  const b = bbox(ring);
  for (let i = 1; i < 12; i++) {
    for (let j = 1; j < 12; j++) {
      const p = [b.w + ((b.e - b.w) * i) / 12, b.s + ((b.n - b.s) * j) / 12];
      if (inRing(p, ring)) return p;
    }
  }
  return null;
}

// --- simplification --------------------------------------------------------
/**
 * Ramer–Douglas–Peucker in projected units. A nearest-neighbour cull would not
 * help: the shoreline source already sits about 500 m between vertices, which
 * is ~5.5 units on this canvas, so every vertex survives a distance test.
 * Thinning a coastline without destroying its shape needs the perpendicular
 * error test.
 */
function simplify(pts, tol) {
  if (pts.length < 5 || tol <= 0) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = 1;
  keep[pts.length - 1] = 1;
  const t2 = tol * tol;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [lo, hi] = stack.pop();
    if (hi - lo < 2) continue;
    const [ax, ay] = pts[lo];
    const [bx, by] = pts[hi];
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy;
    let worst = -1;
    let worstD = 0;
    for (let i = lo + 1; i < hi; i++) {
      const [cx, cy] = pts[i];
      let d2;
      if (len2 === 0) {
        d2 = (cx - ax) ** 2 + (cy - ay) ** 2;
      } else {
        let t = ((cx - ax) * dx + (cy - ay) * dy) / len2;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        d2 = (cx - (ax + t * dx)) ** 2 + (cy - (ay + t * dy)) ** 2;
      }
      if (d2 > worstD) { worstD = d2; worst = i; }
    }
    if (worstD > t2 && worst > 0) {
      keep[worst] = 1;
      stack.push([lo, worst], [worst, hi]);
    }
  }
  const out = [];
  for (let i = 0; i < pts.length; i++) if (keep[i]) out.push(pts[i]);
  return out;
}

/** Shoelace area, in projected units². Used to drop specks. */
function area(pts) {
  let a = 0;
  for (let i = 0, n = pts.length; i < n; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % n];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a / 2);
}

/**
 * Polygons (lon/lat, [exterior, ...holes]) → one SVG path string.
 * Exteriors and holes are sibling subpaths; render with fill-rule="evenodd"
 * so bays and inland water read as water.
 */
function toPath(polys, { tol, minArea, dp = 1 }) {
  const q = 10 ** dp;
  const fmt = (v) => String(Math.round(v * q) / q);
  let d = '';
  let rings = 0;
  let pts = 0;
  for (const poly of polys) {
    for (let r = 0; r < poly.length; r++) {
      const s = simplify(poly[r].map(([lon, lat]) => [px(lon), py(lat)]), tol);
      if (s.length < 4) continue;
      if (area(s) < minArea) continue;
      rings++;
      pts += s.length;
      d += 'M' + s.map(([x, y]) => `${fmt(x)},${fmt(y)}`).join('L') + 'Z';
    }
  }
  return { d, rings, pts };
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------
const countyFeatures = feature(counties10m, counties10m.objects.counties).features;
const byId = new Map(countyFeatures.map((f) => [f.id, f]));
const servedPolys = SERVED.flatMap((id) => {
  const f = byId.get(id);
  if (!f) throw new Error(`[coverage-geometry] county ${id} is not present in us-atlas`);
  return toMulti(f.geometry);
});

const landGeoms = coastlines.type === 'GeometryCollection' ? coastlines.geometries : [coastlines];

const covered = [];
const other = [];
let unclassified = 0;

for (const poly of landGeoms.flatMap(toMulti)) {
  const b = bbox(poly[0]);
  if (b.e < CW || b.w > CE || b.n < CS || b.s > CN) continue;

  // Classify from the FULL ring, before the window cut: a landmass sliced by
  // the frame edge must be judged on where it really is, not on the fragment
  // that happens to be in view.
  const rep = representativePoint(poly[0]);
  if (!rep) { unclassified++; continue; }
  const isServed = servedPolys.some((cp) => inPolygon(rep, cp));

  const clipped = poly.map(clipRing).filter(Boolean);
  if (!clipped.length || !clipped[0]) continue;
  (isServed ? covered : other).push(clipped);
}

if (!covered.length) throw new Error('[coverage-geometry] no served landmass found — the county or coastline source changed');
if (!other.length) throw new Error('[coverage-geometry] no context landmass found — the classifier is wrong');
if (unclassified) console.warn(`  ! ${unclassified} landmass(es) could not be classified and were dropped`);

// minArea 40 units² ≈ 0.33 km²: keeps Governors Island, City Island and the
// barrier beaches; drops the marsh specks in Jamaica Bay and the Great South
// Bay, which cost bytes and read as visual noise rather than as coverage.
const coverage = toPath(covered, { tol: 2.5, minArea: 40 });
const context = toPath(other, { tol: 2.5, minArea: 40 });

// A second, coarser cut for the footer map, which renders about 380 px wide.
// A 3-unit tolerance is a little over one pixel of error at that size and
// integer coordinates are 0.4 px — both invisible there, and together they are
// what makes putting a map on 211 pages affordable. The detailed cut is
// reserved for the maps that render large.
const coverageSmall = toPath(covered, { tol: 4, minArea: 130, dp: 0 });
const contextSmall = toPath(other, { tol: 4, minArea: 130, dp: 0 });

const out = `/**
 * coverage-geometry.ts — GENERATED FILE. Do not edit by hand.
 *
 * Sources, both build-time only:
 *   · shoreline — @geo-maps/earth-coastlines-500m (MIT, OpenStreetMap derived)
 *   · county boundaries — U.S. Census Bureau cartographic boundaries via
 *     \`us-atlas\` v3 (public domain)
 *
 * Projected (spherical Mercator), clipped to the service-area window and
 * simplified by scripts/build-coverage-geometry.mjs.
 *
 * Every path here is FILL-ONLY geometry. Do not stroke a land path: the window
 * clip leaves zero-area bridges that are invisible when filled and would draw
 * as hairlines across open water if stroked.
 *
 * Regenerate with: node scripts/build-coverage-geometry.mjs
 */

/** The SVG viewBox these paths are drawn in: "0 0 \${VIEW.w} \${VIEW.h}". */
export const VIEW = { w: ${WIDTH}, h: ${HEIGHT} } as const;

/** The geographic window the projection was fitted to. */
export const BOUNDS = { west: ${WEST}, east: ${EAST}, south: ${SOUTH}, north: ${NORTH} } as const;

/**
 * The land Graduate works on: Long Island end to end — Kings, Queens, Nassau
 * and Suffolk — plus Manhattan and the rest of New York County.
 * Render with fill-rule="evenodd".
 */
export const COVERAGE = ${JSON.stringify(coverage.d)};

/**
 * Every other landmass in frame, drawn neutral and never labelled: the Bronx,
 * Westchester, Rockland, New Jersey, Connecticut — and Richmond County, which
 * belongs here and only here. Ryan does not work on Staten Island, so it is
 * never in the coverage layer; it is still drawn, because punching a hole in
 * the harbour would be its own kind of dishonesty.
 * Render with fill-rule="evenodd".
 */
export const CONTEXT_LAND = ${JSON.stringify(context.d)};

/** The same two layers, simplified for small renders. Used by the footer map. */
export const COVERAGE_SMALL = ${JSON.stringify(coverageSmall.d)};
export const CONTEXT_LAND_SMALL = ${JSON.stringify(contextSmall.d)};

/**
 * lon/lat -> viewBox units, using the SAME spherical Mercator that drew the
 * coastline above. Every pin on every map goes through this one function, so
 * there is no second transform to drift out of sync with the geography.
 */
export function project(lon: number, lat: number): { x: number; y: number } {
  const RAD = Math.PI / 180;
  const x = ${K} * (lon * RAD) + ${TX};
  const y = ${K} * -Math.log(Math.tan(Math.PI / 4 + (lat * RAD) / 2)) + ${TY};
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}
`;

fs.writeFileSync('src/data/coverage-geometry.ts', out);
console.log(
  `wrote src/data/coverage-geometry.ts — viewBox 0 0 ${WIDTH} ${HEIGHT}\n` +
    `  coverage  ${covered.length} landmasses, ${coverage.rings} rings / ${coverage.pts} pts / ${coverage.d.length} B (small ${coverageSmall.d.length} B)\n` +
    `  context   ${other.length} landmasses, ${context.rings} rings / ${context.pts} pts / ${context.d.length} B (small ${contextSmall.d.length} B)`
);
