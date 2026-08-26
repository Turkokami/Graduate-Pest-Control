// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Astro 7 (Rust compiler, Sätteri markdown, Vite 8).
 *
 * Keystone Part 7A deployment checklist:
 *  · `site` must be the canonical https domain — every absolute schema @id
 *    reads from it. On a preview deployment it becomes that preview's own
 *    hostname, so staging never canonicalises to the live domain. The same
 *    logic lives in src/data/business.ts (SITE_URL); this file runs in Node
 *    before Vite, so it cannot import it. Change one, change the other.
 *  · Static output; the Vercel Framework Preset must ALSO be set explicitly in
 *    the dashboard, or every route returns a platform 404 even on a green build.
 *  · trailingSlash 'always' matches the URL taxonomy locked in Phase 1.
 */
const PRODUCTION_ORIGIN = 'https://graduatepestcontrol.com';

const site =
  process.env.VERCEL_ENV === 'production'
    ? PRODUCTION_ORIGIN
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : PRODUCTION_ORIGIN;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      /**
       * A noindex page in the sitemap is a contradiction: the sitemap says
       * "index this", the page says "do not". /contact/thank-you/ is the only
       * page on the site carrying a per-page noindex — it is a step in the form
       * flow, not a destination — so it is the only exclusion here.
       *
       * Note that /contact/ ITSELF is deliberately absent from this list. It was
       * noindex until it was rebuilt on the design system, and being exempt from
       * the audit is what let it ship broken. It is indexable now and it faces
       * the full page contract.
       */
      filter: (page) => !page.endsWith('/contact/thank-you/'),
    }),
  ],
  build: { format: 'directory' },
});
