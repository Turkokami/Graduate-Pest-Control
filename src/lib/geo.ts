/**
 * geo.ts — differentiated geo copy, with a fallback that is never a template.
 *
 * Keystone Part 7A: "A geo helper (lib/geo.ts) that derives differentiated FAQ
 * + copy so even the fallback isn't identical."
 *
 * Part 12.3 failure this prevents: "Build stops after a partial page set — a
 * non-null assertion on an optional data field. Provide a genericLocal()
 * fallback everywhere; never !-assert optional data."
 *
 * IMPORTANT: the fallback here exists to keep ROUTES from breaking, not to
 * make thin pages publishable. Mandate M1 still applies — a market without
 * research does not get an indexable city page at all (see the capacity gate
 * in markets.ts). The fallback covers nav, link surfaces and areaServed
 * mentions only.
 */

import type { Market, MarketResearch } from '../data/markets';
import { markets, siblingsOf, effectiveCluster } from '../data/markets';
import { serviceBySlug } from '../data/services';
import { business } from '../data/business';

// ---------------------------------------------------------------------------
// Safe accessors — no non-null assertions anywhere in this file
// ---------------------------------------------------------------------------

export function marketBySlug(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}

/** Region label used in copy and breadcrumbs. */
export function regionLabel(m: Market): string {
  return m.region === 'nyc' ? 'New York City' : 'Long Island';
}

export function regionPath(m: Market): string {
  return m.region === 'nyc' ? '/locations/nyc/' : '/locations/long-island/';
}

/**
 * The fallback. Deliberately structural rather than descriptive: it states only
 * what is verifiably true from the data row (name, county, region) and makes no
 * claim about housing stock, pest pressure or landmarks — because those are
 * exactly the facts that have not been researched yet.
 *
 * Doctrine #4: never fabricate. A fallback that invents local color is worse
 * than one that says less.
 */
export function genericLocal(m: Market): {
  intro: string;
  areaLine: string;
  hasRealContent: false;
} {
  return {
    intro: `${business.name} serves ${m.name} in ${m.county} County, ${regionLabel(m)}.`,
    areaLine: `${m.name}, NY`,
    hasRealContent: false,
  };
}

/**
 * Derived, differentiated copy for a researched market. Every sentence is built
 * from a real data field, so no two markets produce the same prose.
 */
export function localCopy(m: Market):
  | { hasRealContent: true; research: MarketResearch; intro: string; areaLine: string; conditions: string; structural: string }
  | { hasRealContent: false; intro: string; areaLine: string } {
  const r = m.research;
  if (!r) return genericLocal(m);

  const pressures = r.pestPressures.map((p) => p.pest);
  const pressureList = listSentence(pressures);
  const water = r.waterways.length ? ` and ${listSentence(r.waterways)}` : '';

  // Distance/bearing are only stated when they are actually known. They depend
  // on business.address, which is still PENDING — never invent them.
  const placement =
    r.distanceMi !== undefined && r.direction
      ? `${m.name} sits ${r.distanceMi} miles ${r.direction} of our base in ${m.county} County.`
      : `${m.name} is in ${m.county} County, on ${regionLabel(m) === 'Long Island' ? "Long Island's North Shore" : 'the New York City side of our service area'}.`;

  return {
    hasRealContent: true,
    research: r,
    areaLine: `${m.name}, NY`,
    intro: `${placement} ${r.housing}`,
    conditions:
      `Local pest pressure here is driven by the housing stock${water}. ` +
      `The problems we are called for most often in ${m.name} are ${pressureList}.`,
    structural: r.structuralNotes.join(' '),
  };
}

/**
 * Differentiated FAQ seeds. These are STARTING POINTS for a writer, not
 * finished copy — each one is grounded in a real data field so the questions
 * differ per market rather than being the same six questions re-skinned.
 */
export function faqSeeds(m: Market): Array<{ question: string; grounding: string }> {
  const out: Array<{ question: string; grounding: string }> = [];
  const r = m.research;

  out.push({
    question: `Do you service ${m.name}?`,
    grounding: `Confirm coverage, name the neighboring markets served, link to siblings.`,
  });

  if (r) {
    for (const p of r.pestPressures.slice(0, 3)) {
      out.push({
        question: `Why do ${m.name} homes get ${p.pest.toLowerCase()}?`,
        grounding: `Driver: ${p.driver}. Season: ${p.season}.`,
      });
    }
    if (r.structuralNotes.length) {
      out.push({
        question: `What makes ${m.name} homes hard to pest-proof?`,
        grounding: r.structuralNotes[0],
      });
    }
    if (r.waterways.length) {
      out.push({
        question: `Does being near ${r.waterways[0]} affect pest activity in ${m.name}?`,
        grounding: `Moisture, harborage and seasonal movement tied to ${r.waterways[0]}.`,
      });
    }
  }

  return out;
}

/** Lateral sibling links — mandate M3 requires these on every page. */
export function siblingLinks(slug: string) {
  return siblingsOf(slug).map((s) => ({
    name: s.name,
    path: `/locations/${s.slug}/`,
    buildable: effectiveCluster(s) !== 'area',
  }));
}

/** Services offered in a given market, resolved safely against the registry. */
export function servicesFor(m: Market) {
  return m.services
    .map((slug) => serviceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .filter((s) => s.confirmed && s.markets.includes(m.region));
}

/** Breadcrumb trail for a market page — mirrors the URL taxonomy exactly. */
export function marketBreadcrumbs(m: Market) {
  return [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/locations/' },
    { name: regionLabel(m), path: regionPath(m) },
    { name: m.name, path: `/locations/${m.slug}/` },
  ];
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function listSentence(items: string[]): string {
  const c = items.map((s) => s.toLowerCase()).filter(Boolean);
  if (c.length === 0) return '';
  if (c.length === 1) return c[0] ?? '';
  if (c.length === 2) return `${c[0]} and ${c[1]}`;
  const last = c[c.length - 1] ?? '';
  return `${c.slice(0, -1).join(', ')} and ${last}`;
}
