/**
 * blog.ts — the blog cluster taxonomy.
 *
 * Keystone Part 3.4 #8: **each cluster feeds exactly one service spoke.** That
 * sentence is the whole design. A post that feeds no spoke is a stray page with
 * a nice headline and nowhere to send the reader; a cluster that feeds two
 * spokes puts the same query in front of two of our own pages and lets Google
 * pick, which is the definition of cannibalisation.
 *
 * So the taxonomy is DATA, not a convention writers are asked to remember. A
 * cluster is a row here, with:
 *   · the single `parentService` slug it feeds,
 *   · a `belongs` description of the class of question it covers,
 *   · an `excludes` description of the neighboring questions it must not take.
 *
 * `belongs`/`excludes` are not decoration. Two clusters sitting next to each
 * other — moisture-and-wood and building-envelope, say — will drift into one
 * another the moment nobody can point at the line between them. The line is
 * written down here so a writer can check a draft against it, and so a reviewer
 * can say "that is a rodent-pressure post filed under building-envelope"
 * without it being a matter of taste.
 *
 * WHAT THIS FILE DELIBERATELY DOES NOT DO: it does not give every service spoke
 * a cluster. Eleven spokes are confirmed in services.ts and eight have a
 * cluster. `canine-rodent-detection`, `canine-bed-bug-detection` and
 * `exclusion-consulting` do not, because the rule runs one way — every cluster
 * feeds a spoke; a spoke does not owe anyone a cluster. Those three are answered
 * fully on their own service pages and inventing a blog cluster to sit on top of
 * each would produce posts written to fill a slot. Adding one later is an edit
 * to this array and nothing else.
 *
 * Astro 7 note: nothing here touches `astro:content`, so the guards can run at
 * module scope and fire the moment anything imports this file.
 */

import { services, retiredServices } from './services';

export interface BlogCluster {
  /** URL-safe key. Written verbatim into every post's `cluster:` frontmatter. */
  slug: string;
  /** Heading used on the hub and on the post's own page. */
  name: string;
  /**
   * The ONE service spoke this cluster feeds. Part 3.4 #8. Must be a confirmed
   * slug in services.ts, must not be retired, and must not be shared with
   * another cluster — all three are asserted below.
   */
  parentService: string;
  /** One line for the hub index and the post header. Plain, declarative. */
  summary: string;
  /** The class of question that belongs in this cluster. */
  belongs: string;
  /** The neighboring questions that do NOT, and where they go instead. */
  excludes: string;
}

// ---------------------------------------------------------------------------
// The clusters — eight, in hub display order.
//
// The order is not alphabetical and not arbitrary. Exclusion is what Graduate
// is rather than one of the things it does (client instruction, August 2026:
// "rodent exclusion is the core of the business and should be the predominant
// feature of the site"), so building-envelope leads and rodent-pressure follows
// it. The rest run down in rough order of how much of the year they matter.
// ---------------------------------------------------------------------------

export const blogClusters: BlogCluster[] = [
  {
    slug: 'building-envelope',
    name: 'The building envelope',
    parentService: 'structural-exclusion',
    summary:
      'How buildings are actually entered, what the gap looks like before it is a gap, and what closing one properly involves.',
    belongs:
      'The physical shell and the openings in it: sill plates, band joists, weep holes, garage door corners and bottom seals, utility penetrations, dryer and bath vents, soffit returns, foundation-to-siding transitions, below-grade slab edges. Materials and why one is chosen over another — 26-gauge galvanised sheet metal, cement and mortar, Xcluder fabric, door sweeps and the GEO below-grade barrier, copper and stainless mesh, hardware cloth. Sequencing: why a building is not sealed while animals are still inside it. Why foam is the industry default and why it fails.',
    excludes:
      'The animal itself — what it eats, when it breeds, how many there are. That is rodent-pressure or roofline-and-attic. Also excluded: exclusion designed into a building that is not built yet, which is consulting work and lives on the consulting service page rather than in a blog cluster.',
  },
  {
    slug: 'rodent-pressure',
    name: 'Rodent pressure and the evidence it leaves',
    parentService: 'rodent-control',
    summary:
      'Why one building on a block gets the rodents, what the droppings and rub marks are telling you, and why bait alone becomes a subscription.',
    belongs:
      'Reading a building for rodent activity: droppings by age and species, rub marks, gnaw damage, burrow entrances, runways, the difference between what a mouse does and what a Norway rat does. Seasonal pressure and what pushes animals indoors. Neighboring construction, refuse handling, and food-waste changes on a street. Why a program built on bait and traps alone recurs, and what interior work still has to happen before and after the envelope is closed.',
    excludes:
      'The sealing specification itself — the metal, the mortar, the sequencing — which is building-envelope. Detection work with dogs, which is answered on the canine service pages. Squirrels, raccoons and bats, which are roofline-and-attic.',
  },
  {
    slug: 'moisture-and-wood',
    name: 'Moisture and the insects that follow it',
    parentService: 'ant-control',
    summary:
      'Carpenter ants and their relatives are a water report before they are a pest report. This cluster reads the water.',
    belongs:
      'The moisture path and the insects that exploit it: failed flashing, gutter and leader discharge against a foundation, ice-dam damage, porch and deck ledger rot, wet sill plates and band joists, crawlspace humidity, condensation at rim joists, buried wood and wood-to-soil contact. Carpenter ants above all, plus carpenter bees, moisture ants and the general question of why a nuisance ant trail appears where it does.',
    excludes:
      'Termite treatment in every form. Graduate retired that service; the identification question — termite or carpenter ant — is answered in the pest library and this cluster links there rather than around it. Also excluded: standing water on the property outdoors, which is a mosquito question and belongs to standing-water.',
  },
  {
    slug: 'shared-walls',
    name: 'Shared walls and how pests move between units',
    parentService: 'bed-bug-treatment',
    summary:
      'In a multi-unit building the unit is not the problem and the unit is not the fix. What travels between apartments, and along what.',
    belongs:
      'Transmission paths inside multi-family and co-op buildings: party walls, shared chases, conduit and cable penetrations, baseboard voids, common corridors, laundry rooms and refuse rooms. Bed bugs first, because they are the pest that most punishes a unit-by-unit approach. Board and management coordination: inspection scope, adjacency treatment, resident preparation, notification duties and what a documented building-wide response looks like.',
    excludes:
      'German cockroach pressure in a building, which tracks plumbing and belongs to service-cores. Rodent movement between units, which is still an envelope question and belongs to building-envelope or rodent-pressure.',
  },
  {
    slug: 'service-cores',
    name: 'Plumbing chases, risers and service cores',
    parentService: 'cockroach-control',
    summary:
      'German cockroach pressure tracks the wet, warm, connected parts of a building far more reliably than it tracks housekeeping.',
    belongs:
      'The vertical and horizontal service runs and the rooms attached to them: risers, chases, escutcheon gaps, under-sink cabinets, dishwasher and refrigerator voids, motor housings, compactor and refuse rooms, commercial kitchen equipment lines and floor drains. Why sanitation advice on its own insults a clean kitchen and does not fix it. Monitoring, harborage reduction and what a documented commercial program records.',
    excludes:
      'Bed bug movement between apartments, which is shared-walls. Drain and moisture issues that produce ants rather than roaches, which is moisture-and-wood.',
  },
  {
    slug: 'roofline-and-attic',
    name: 'The roofline, the attic and the chimney',
    parentService: 'wildlife-management',
    summary:
      'Squirrels, raccoons and bats are exclusion problems with a legally constrained removal step in front of them.',
    belongs:
      'Everything above the gutter line: soffit returns and the open corner they nearly always have, fascia gaps, ridge and gable vents, roof-return valleys, chimney crowns and uncapped flues, dormer intersections, attic insulation damage and contamination. The removal step and who lawfully performs it, the timing constraints that come from dependent young, and the protected status that changes what may be done and when.',
    excludes:
      'Wasp and hornet nests found in the same soffit, which are nesting-season. Rodents in the same attic, which are rodent-pressure and building-envelope. The generic sealing specification, which is building-envelope.',
  },
  {
    slug: 'nesting-season',
    name: 'Stinging insects and the nesting season',
    parentService: 'wasp-hornet-removal',
    summary:
      'Where the nest goes is decided by the same envelope gaps as everything else, and when it is dealt with decides how hard it is.',
    belongs:
      'The stinging-insect year from overwintered queen to autumn peak, and where colonies concentrate: soffit returns, ridge vents, gable louvers, shutters, wall voids behind siding, ground nests in disturbed soil, sheds and play structures. Identification between yellowjackets, bald-faced hornets, paper wasps, carpenter bees and honey bees, and why the last of those changes the answer. What makes a nest in a wall void different from one on a branch, and why sealing an active entrance is the classic mistake.',
    excludes:
      'Carpenter bee damage to wood as a moisture and timber question, which is moisture-and-wood. Wildlife in the same soffit, which is roofline-and-attic.',
  },
  {
    slug: 'standing-water',
    name: 'Standing water and site drainage',
    parentService: 'mosquito-management',
    summary:
      'Mosquito pressure on a property is a drainage inventory, not a spray schedule. Most of the water that matters holds less than a cupful.',
    belongs:
      'Water that sits on the property and the containers that hold it: corrugated leader extensions, clogged gutters, catch basins, tarps, boat and furniture covers, planter saucers, tire swings, bird baths, tree holes, French drains that no longer drain, and low ground that stays wet after rain. Container-breeding species and their very short flight range. Source reduction as the program. The regulatory boundary is stated plainly and repeatedly in this cluster: category 8 public health work with FIFRA 25(b) minimum-risk exempt materials, no ornamental or turf work, and no aquatic use of minimum-risk products, which New York State DEC does not permit.',
    excludes:
      'Interior moisture and wet structural timber, which is moisture-and-wood. Anything touching ornamental plantings, turf or a commercial grounds program, which is category 3A work Graduate does not hold and does not do — it is out of scope for the firm, not merely out of scope for the cluster.',
  },
];

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export const clusterBySlug = (slug: string) => blogClusters.find((c) => c.slug === slug);

export const clusterForService = (serviceSlug: string) =>
  blogClusters.find((c) => c.parentService === serviceSlug);

/** Hub display order. The array order IS the order; this names it for the route. */
export const CLUSTER_ORDER: string[] = blogClusters.map((c) => c.slug);

// ---------------------------------------------------------------------------
// Build-time guards
// ---------------------------------------------------------------------------

/**
 * THE TAXONOMY GUARD.
 *
 * Four ways this table can be wrong, all of them silent without this:
 *
 *  1 A duplicate cluster slug. The second row wins in a lookup and the first
 *    cluster's posts quietly land under the wrong heading.
 *  2 A `parentService` that is not a real service. The hub renders a cluster
 *    whose "read the service page" link 404s, and the dead-link crawler only
 *    catches it after a full build.
 *  3 A `parentService` that is RETIRED. `termite-control` is the live case:
 *    Ryan does not do termite work, the spoke and its eighteen matrix pages are
 *    in `_retired/`, and a cluster pointing at it would rebuild a link to a
 *    service the firm does not offer. This is the guard that matters most.
 *  4 Two clusters on one spoke. Part 3.4 #8 reads one cluster, one spoke. Two
 *    clusters feeding `rodent-control` means two hub sections competing for the
 *    same query set and pointing at the same destination.
 */
export function assertClusterTaxonomy(): true {
  const problems: string[] = [];

  const seen = new Set<string>();
  for (const c of blogClusters) {
    if (seen.has(c.slug)) problems.push(`duplicate cluster slug "${c.slug}"`);
    seen.add(c.slug);
  }

  const confirmed = new Set(services.filter((s) => s.confirmed).map((s) => s.slug));
  const known = new Set(services.map((s) => s.slug));
  const retired = new Set<string>(retiredServices.map((r) => r.slug));

  for (const c of blogClusters) {
    if (retired.has(c.parentService)) {
      problems.push(
        `cluster "${c.slug}" points at retired service "${c.parentService}" — ` +
          `that service is not offered and must never be linked or implied`
      );
      continue;
    }
    if (!known.has(c.parentService)) {
      problems.push(`cluster "${c.slug}" points at unknown service "${c.parentService}"`);
      continue;
    }
    if (!confirmed.has(c.parentService)) {
      problems.push(
        `cluster "${c.slug}" points at unconfirmed service "${c.parentService}" — ` +
          `Part 14: an unconfirmed service must not be routed or promoted`
      );
    }
  }

  const byParent = new Map<string, string[]>();
  for (const c of blogClusters) {
    byParent.set(c.parentService, [...(byParent.get(c.parentService) ?? []), c.slug]);
  }
  for (const [parent, clusters] of byParent) {
    if (clusters.length > 1) {
      problems.push(
        `service "${parent}" is fed by ${clusters.length} clusters (${clusters.join(', ')}) — ` +
          `Part 3.4 #8: each cluster feeds exactly one spoke, and no spoke takes two`
      );
    }
  }

  if (problems.length) {
    throw new Error(
      `[blog] cluster taxonomy is invalid:\n  · ${problems.join('\n  · ')}\n` +
        `Fix src/data/blog.ts — the taxonomy is data, not a convention.`
    );
  }
  return true;
}

/**
 * Every post's `cluster` must name a declared cluster.
 *
 * The schema types the field as `z.string()`, which accepts a typo, a plural,
 * or a cluster somebody invented while drafting. Any of those produces a post
 * that builds its own page, is linked from nowhere, and is invisible on the hub
 * that carries the cluster's inbound links — the exact silent failure the
 * commercial hub's guard exists to prevent, one collection over.
 */
export function assertPostClusters(entries: Array<{ id: string; cluster: string }>): true {
  const declared = new Set(blogClusters.map((c) => c.slug));
  const strays = entries.filter((e) => !declared.has(e.cluster));
  if (strays.length) {
    throw new Error(
      `[blog] post(s) with an undeclared cluster:\n` +
        strays.map((s) => `  · ${s.id}.md → cluster: "${s.cluster}"`).join('\n') +
        `\nDeclared clusters: ${[...declared].join(', ')}.\n` +
        `Either fix the frontmatter or add the cluster to blogClusters in src/data/blog.ts.`
    );
  }
  return true;
}

// Fires as soon as anything imports this module, which the blog routes do.
assertClusterTaxonomy();
