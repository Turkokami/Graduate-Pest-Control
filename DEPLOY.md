# Deploying this build to Vercel

This is a static Astro 7 site. **211 pages, ~865,000 words.** It is a complete
rebuild of Graduate Pest Control (graduatepestcontrol.com), and it has never
been seen rendered by anyone. The goal of this deployment is a private preview
URL to look at — nothing more.

---

## Read this before you run anything

**Do not attach the domain `graduatepestcontrol.com`.** That domain is serving
the client's live, working business site right now. This build replaces it only
after the client has reviewed it and said so. Deploy to the `*.vercel.app` URL
Vercel assigns and stop there.

**Do not set `VERCEL_ENV=production`.** It is a system variable Vercel sets
itself, and the build reads it. If it is `production`, the site canonicalises
every page to `graduatepestcontrol.com` and drops the noindex. On any other
value the site canonicalises to the preview hostname and serves
`Disallow: /`. That is the safety mechanism that keeps a 211-page staging
mirror from competing with the client's live domain in search. Leave it alone.

If you are asked to deploy as a Production deployment in Vercel's own sense
(the default for a `vercel --prod` or a push to the default branch), that is
fine and normal — `VERCEL_ENV` will be `production`, canonicals will point at
`graduatepestcontrol.com`, and the site will be indexable at a `.vercel.app`
address. **That is not what we want yet.** Deploy as a preview.

---

## Prerequisites

- Node **20.11 or newer** (`.nvmrc` pins 22; Vercel reads it).
- A Vercel account, logged in: `npx vercel login`.

---

## Steps

```bash
# 1 · Install and confirm the build is green locally first.
npm install
npm run build          # expect: 211 page(s) built
npm run gate           # expect: GATE: PASSED, 0 failures, 0 warnings

# 2 · Link the project. Answer: set up a new project; keep the defaults;
#     do NOT override the build command or output directory.
npx vercel link

# 3 · Deploy a preview.
npx vercel
```

`vercel` prints a URL like `https://graduate-pest-control-xxxx.vercel.app`.
That is the deliverable. Hand it back.

### If you deploy through the Vercel dashboard instead of the CLI

Set the **Framework Preset to Astro explicitly.** Vercel's autodetection has
been known to miss it on this config, and the symptom is nasty: the build goes
green, the deployment succeeds, and every single route returns a platform 404.
If you see that, this is the cause. `vercel.json` already declares
`"framework": "astro"`, which handles the CLI path.

---

## What is configured, and why

`vercel.json`
: Framework `astro`, build `npm run build`, output `dist`, and
  `"trailingSlash": true`. The trailing slash is not cosmetic — the whole URL
  taxonomy, every internal link, and every schema `@id` on the site assume it.
  Turning it off produces a redirect on all 11,130 internal links.

`astro.config.mjs`
: `output: 'static'`, `trailingSlash: 'always'`, `build.format: 'directory'`,
  and a `site` that resolves per deployment (see above). The sitemap
  integration reads `site`, so the generated sitemap follows the same rule.

`src/data/business.ts`
: Exports `SITE_URL` and `NOINDEX` with the same resolution logic. Astro's
  config runs in Node before Vite loads and cannot import a `.ts` file, so the
  logic is deliberately written out in both places. **If you change one, change
  the other.**

`src/pages/robots.txt.ts`
: Generated per deployment rather than a static file, because production and
  preview need opposite contents.

`.nvmrc`
: Node 22.

Playwright is **not** a dependency. It was used for local screenshots during
the build; its npm postinstall downloads browser binaries, which on Vercel is a
slow install and a plausible build failure. If you need the screenshot scripts
locally, `npm i -D playwright` and set `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` if
a browser is already present.

---

## Verifying the deployment

Once the preview URL is live, check these five things and report what you find:

1. `curl -s <url>/robots.txt` → must say `Disallow: /`. If it does not, the
   deployment is indexable and should be taken down and redeployed.
2. `curl -s <url>/ | grep -o '<link rel="canonical"[^>]*>'` → must point at the
   **preview** hostname, not `graduatepestcontrol.com`.
3. Load `/`, `/pest-control/structural-exclusion/`, `/locations/huntington/`
   and `/pest-control/huntington/rodent-control/`. Those four cover the four
   page templates.
4. `/sitemap-index.xml` resolves.
5. Fonts and the logo render — `/fonts/source-serif-4-latin.woff2` and
   `/img/graduate-pest-control-logo.svg` should both return 200.

---

## Known state, so you do not go looking for these

- **There are no photographs on any page.** Every page ships without a
  `primaryImage`. The only images sitewide are the logo, the brand mark, the
  social card, and three field photos used in specific places. This is the
  largest outstanding gap in the build and it needs the client's own job
  photos, not stock.
- **`gatePassed: false` on all 208 content files.** That flag is set by the
  Part 9 acceptance gate at cutover, not by writers. It does not affect the
  build.
- **`_retired/`** holds a service spoke and 18 pages for termite control, which
  the client confirmed he does not offer. Nothing there is built or linked. It
  is kept as a record, not as dead weight — see `_retired/README.md`.
- `npm run gate` runs the full acceptance harness: dead links, per-page SEO,
  duplicate sentences at both thresholds, word counts, image metadata, and the
  client's prohibition list. It is the thing to run after any content edit.
