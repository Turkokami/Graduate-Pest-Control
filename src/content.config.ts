/**
 * content.config.ts — the content collections.
 *
 * NOTE ON LOCATION: this file lives at `src/content.config.ts`, NOT
 * `src/content/config.ts`. The legacy location was removed in Astro v6 along
 * with the pre-Content-Layer API. Keystone Part 15's starter manifest still
 * lists `src/content/config.ts` and needs amending.
 *
 * Astro 7 conventions used here:
 *  · every collection declares a `loader` (glob)
 *  · no `type: 'content' | 'data'`
 *  · entries are keyed by `entry.id` (not `entry.slug`)
 *  · bodies render via the standalone `render(entry)` function
 *
 * Keystone Part 7A, the data/body split: data files drive routing and schema;
 * these collections hold the 3,000–5,000 word bodies, matched to a data row by
 * slug. The page renders the deep body when it exists and the route stands up
 * either way — so all routes can exist before the content is poured in.
 */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Shared frontmatter contract — the on-page mandates, enforced at parse time. */
const faqSchema = z
  .array(
    z.object({
      question: z.string().min(8),
      answer: z.string().min(40),
    })
  )
  // Part 4.1 block 5: six to eight questions, exactly one FAQ block per URL.
  .min(6, 'The on-page contract requires 6–8 FAQ questions')
  .max(8, 'The on-page contract requires 6–8 FAQ questions');

const imageSchema = z.object({
  src: z.string(),
  // M6: alt is never optional and never blank. Formula in CONTENT_BRIEF.md.
  alt: z.string().min(10).max(125),
  width: z.number().optional(),
  height: z.number().optional(),
});

const base = {
  /** Matches the slug in the corresponding data row. */
  slug: z.string(),
  title: z.string(),
  /** Doctrine #3 — 40–60 words, reused as meta description, first FAQ answer
   *  and Speakable target. Word count is validated in seo.ts at build time. */
  quickAnswer: z.string().min(200),
  metaTitleCore: z.string().max(60),
  metaDescription: z.string().min(110).max(165).optional(),
  faqs: faqSchema,
  primaryImage: imageSchema.optional(),
  /**
   * Further field photographs for this page, rendered below the body.
   *
   * primaryImage is the hero and there is only one of it; this is where the
   * rest of a page's evidence goes. Content files are .md and this project
   * ships no MDX integration, so a photograph cannot be dropped mid-prose —
   * a validated frontmatter list keeps the M6 alt contract enforced by the
   * schema rather than by whoever is writing the markdown.
   *
   * `caption` is the part that earns its place on this site: a reader looking
   * at a gap above a wall plate cannot tell why it matters, and the caption is
   * where the building-science reading gets said out loud.
   */
  gallery: z.array(imageSchema.extend({ caption: z.string().min(20).max(300) })).default([]),
  /** Real, verifiable sources. Required on compliance pages (T8). */
  sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
  datePublished: z.coerce.date().optional(),
  dateModified: z.coerce.date().optional(),
  /** Set true only after the page clears the Part 9 acceptance gate. */
  gatePassed: z.boolean().default(false),
};

const towns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/towns' }),
  schema: z.object({
    ...base,
    region: z.enum(['long-island', 'nyc']),
    neighborhoods: z.array(z.string()).default([]),
  }),
});

const servicePages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({ ...base }),
});

/**
 * Hubs — Part 3.1 cardinal rule: "build the hub before the spokes… with real
 * content (not a stub)." Hubs carry the site's heaviest inbound link load, so
 * they are held to the same M1 depth floor as everything else. Audit hubs by
 * inbound-link count, not by how they look.
 */
const hubs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hubs' }),
  schema: z.object({ ...base }),
});

const matrix = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/matrix' }),
  schema: z.object({
    ...base,
    city: z.string(),
    service: z.string(),
  }),
});

const library = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/library' }),
  schema: z.object({
    ...base,
    /** T6 contract: the profile hangs off a service spoke, never root-level. */
    parentService: z.string(),
    scientificName: z.string().optional(),
  }),
});

const compliance = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compliance' }),
  schema: z.object({
    ...base,
    jurisdiction: z.string(),
    /** T8 requires a citation and a review date on every compliance page.
     *  These are legal claims — Part 1.2: factual/legal claims carry source
     *  + review date. Both are required here, not optional. */
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).min(1),
    reviewedOn: z.coerce.date(),
  }),
});

const verticalPages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/verticals' }),
  schema: z.object({ ...base }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    ...base,
    /** T9: pest + property type + neighborhood + method + outcome. */
    pest: z.string(),
    propertyType: z.string(),
    market: z.string(),
    parentService: z.string(),
    /** Part 14: no client names published without permission. */
    clientNamePermitted: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    ...base,
    /** Part 3.4 #8: each cluster feeds exactly one service spoke. */
    cluster: z.string(),
  }),
});

export const collections = {
  towns,
  hubs,
  services: servicePages,
  matrix,
  library,
  compliance,
  verticals: verticalPages,
  caseStudies,
  blog,
};
