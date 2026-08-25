/**
 * robots.txt — generated, not static, because it has to differ per deployment.
 *
 * Production serves the normal allow-all plus the sitemap. Any preview
 * deployment serves a blanket disallow: this build is a 211-page mirror of a
 * live business, and a crawlable staging copy is a duplicate-content problem
 * with the client's own domain.
 */
import type { APIRoute } from 'astro';
import { SITE_URL, NOINDEX } from '../data/business';

export const GET: APIRoute = () => {
  const body = NOINDEX
    ? ['# Preview deployment — not for indexing.', 'User-agent: *', 'Disallow: /', ''].join('\n')
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_URL}/sitemap-index.xml`, ''].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
