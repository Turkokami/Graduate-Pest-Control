# Deploying this build to Vercel

This is a static Astro 7 site. **217 pages, ~870,000 words**, plus one
serverless function for the contact form. It is a complete
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

## Environment variables — REQUIRED for the contact form

`/contact/` posts to a Vercel Function at `api/inquiry.js`, which delivers the
enquiry by email through [Resend](https://resend.com). **Without these variables
the form cannot deliver anything.**

Set them in the Vercel dashboard under **Project → Settings → Environment
Variables**, for every environment you want the form to work in (Preview as well
as Production — a client testing the preview URL will try the form).

| Variable | Required | What it is |
|---|---|---|
| `RESEND_API_KEY` | **Yes** | A Resend API key with send permission. Create it at resend.com → API Keys. |
| `INQUIRY_TO` | **Yes** | The address enquiries are delivered to. `ryan@graduatepestcontrol.com` unless told otherwise. |
| `INQUIRY_FROM` | No | The envelope sender. Defaults to `inquiries@graduatepestcontrol.com`. It **must** be an address on a domain verified in Resend, or the provider will reject every message. Set this only if a different verified sender is used. |

Nothing else on the site reads an environment variable except the two Vercel
sets itself, `VERCEL_ENV` and `VERCEL_URL` (see above). There is no `.env` file
in the repo and there should not be one — the key is a secret and belongs in the
dashboard.

### What happens when they are not set

This is the important half, and it is deliberate. **The endpoint fails loudly.**

- With `RESEND_API_KEY` or `INQUIRY_TO` missing, `api/inquiry.js` returns **503**
  before it tries to send anything. It never returns a success page and never
  redirects to `/contact/thank-you/`.
- A visitor with JavaScript sees the error summary above the form: the form was
  not delivered, call (631) 212-9601 or email `ryan@graduatepestcontrol.com`.
- A visitor without JavaScript gets a full HTML failure page from the function
  saying the same thing, with the phone number and a link back to `/contact/`.
- The same is true if Resend is unreachable (**502**) or rejects the message
  (**502**). A message that was not delivered never produces a confirmation.

A form that silently drops enquiries is the worst possible outcome for a
business this size, because nothing about it looks broken. If you are changing
this endpoint, that is the invariant to preserve: **never a success response for
a message the provider did not accept.**

### Privacy

`api/inquiry.js` writes nothing identifying to the platform log. Not the message
body, not the name, not the phone number, not the email address — on success or
on failure. The only things logged are which failure occurred and, where the
provider returned one, its HTTP status code. Vercel function logs are retained
and readable; enquiry contents do not belong in them. Keep it that way.

### Verifying the endpoint after deployment

```bash
# 1 · GET is not a page. Expect 303 to /contact/.
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' <url>/api/inquiry/

# 2 · A real POST. With the variables set, expect a 303 to /contact/thank-you/;
#     with them missing, expect 503 and an HTML page that says so.
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' -X POST <url>/api/inquiry \
  --data-urlencode 'name=Deployment check' \
  --data-urlencode 'phone=6312129601' \
  --data-urlencode 'email=you@example.com' \
  --data-urlencode 'property_type=Residential' \
  --data-urlencode 'market=East Northport' \
  --data-urlencode 'seeing=Deployment check, please ignore.' \
  --data-urlencode 'where=Deployment check, please ignore.' \
  --data-urlencode 'duration=A few days'

# 3 · Load /contact/ with JavaScript disabled and submit the form by hand.
#     It must navigate to a real /contact/thank-you/ page, not stall.
```

Then check the inbox at `INQUIRY_TO`. **If a test message does not arrive, the
form is broken regardless of what the browser showed.**

### How the function is deployed, and the trailing-slash detail

Vercel deploys any file in a top-level `/api` directory as a function,
independently of the framework build; the static Astro output in `dist/` is
untouched by it and no Astro adapter is needed. `api/inquiry.js` is plain ESM
using the current Web Handler signature (`export async function POST(request)`
returning a `Response`), which is what Vercel documents for non-Next projects.
It has no dependencies, so nothing was added to `package.json`.

`vercel.json` sets `"trailingSlash": true`, which 308-redirects `/api/inquiry`
to `/api/inquiry/`. A 308 preserves both the method and the body, so the form's
POST arrives intact either way; the form posts to the slashless path because
that is the form that survives both possible platform behaviours. **Do not add
`rewrites` to `vercel.json` to tidy this up** — Vercel's own Astro guidance is
that `vercel.json` rewrites produce inconsistent behaviour on Astro projects and
are not supported there.

If step 2 above ever returns a platform 404 rather than a 303 or a 503, the
function was not detected. Check that `api/inquiry.js` is present in the
deployment source and that nothing has added a `functions` or `rewrites` block
to `vercel.json`.

---

## Prerequisites

- Node **20.11 or newer** (`.nvmrc` pins 22; Vercel reads it).
- A Vercel account, logged in: `npx vercel login`.

---

## Steps

```bash
# 1 · Install and confirm the build is green locally first.
npm install
npm run build          # expect: 217 page(s) built
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

`api/inquiry.js`
: The only dynamic route on the site — the contact form endpoint. Deployed as a
  Vercel Function from the top-level `api/` directory, alongside the static
  build and without an Astro adapter. It needs the environment variables above
  and nothing else; it has no npm dependencies. See the section on environment
  variables for what it does when it is not configured.

`.nvmrc`
: Node 22.

Playwright is **not** a dependency. It was used for local screenshots during
the build; its npm postinstall downloads browser binaries, which on Vercel is a
slow install and a plausible build failure. If you need the screenshot scripts
locally, `npm i -D playwright` and set `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` if
a browser is already present.

---

## Verifying the deployment

Once the preview URL is live, check these seven things and report what you find:

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
6. Load `/contact/`. It must render in the site's own design — petrol hero band,
   serif headings, the enquiry form, the map and the credential strip. If it
   looks like a plain browser default page, something has reverted.
7. Submit the form, then check the inbox at `INQUIRY_TO`. Do it once with
   JavaScript on and once with it off. See the endpoint checks above.

---

## Known state, so you do not go looking for these

- **There are no photographs on any page.** Every page ships without a
  `primaryImage`. The only images sitewide are the logo, the brand mark, the
  social card, and three field photos used in specific places. This is the
  largest outstanding gap in the build and it needs the client's own job
  photos, not stock.
- **`gatePassed: false` on all 214 content files.** That flag is set by the
  Part 9 acceptance gate at cutover, not by writers. It does not affect the
  build.
- **`_retired/`** holds a service spoke and 18 pages for termite control, which
  the client confirmed he does not offer. Nothing there is built or linked. It
  is kept as a record, not as dead weight — see `_retired/README.md`.
- **`/contact/` is indexable and `/contact/thank-you/` is not.** The contact
  page was noindex until it was rebuilt, and being noindex is exactly what let
  it ship for weeks without the design system: the harness exempts noindex
  pages from the page contract, so nothing checked it. It now faces the full
  audit. The confirmation page is the only page carrying a per-page noindex,
  and the reason is written into the top of `src/pages/contact/thank-you.astro`.
- `npm run gate` runs the full acceptance harness: dead links, per-page SEO,
  duplicate sentences at both thresholds, word counts, image metadata, and the
  client's prohibition list. It is the thing to run after any content edit.

---

## Redirects

`vercel.json` carries **260 permanent redirects**, generated from three data
files and committed. Do not hand-edit them.

- `src/data/markets.ts` → `retiredMarketSlugs` — Huntington Bay and Huntington
  Village, folded into the town hub.
- `src/data/services.ts` → `retiredServiceSlugs` — termite control and its 18
  city variants, retired when Ryan confirmed he does not do termite work. All
  point at the identification-only library profile.
- `src/data/legacy-redirects.ts` → `legacyRedirects` — the 353 URLs found on the
  live graduatepestcontrol.com, each mapped to its destination in the new
  taxonomy, with the reasoning written into the file.

### Working on them

```bash
npm run redirects         # regenerate vercel.json from the data, then COMMIT it
npm run redirects:check   # fail if vercel.json has drifted (the gate runs this)
```

The output is committed rather than built because **Vercel reads `vercel.json`
before it runs the build** — a file written during `astro build` arrives too
late to route anything. That makes drift the obvious risk, so `npm run gate`
runs the check as step 7 and fails the build if the committed file and the data
disagree.

The generator also refuses to emit a redirect whose source is a page the build
actually serves. A route always beats a redirect, so that pairing produces a
rule that silently never fires — and it is how a retired URL comes back to life
unnoticed when a market clears the research gate and starts generating pages
again.

110 rows were deliberately **dropped**: pure `/foo` → `/foo/` slash fixes for
pages that exist. `"trailingSlash": true` already makes the platform do that,
and a second rule doing the platform's job is one more thing to get wrong.

### Verify after the first deploy that has them

Ordering is the thing to confirm. Every live URL lacks a trailing slash and
every new URL has one, so these rules only work if Vercel evaluates
`redirects` **before** it applies trailing-slash normalisation. It does — but
check it rather than trust it:

```bash
# A folded market. Must land on /locations/huntington/, NOT 404.
curl -sI https://<deployment>/locations/huntington-bay | head -n 2

# A retired service. Must land on the library profile.
curl -sI https://<deployment>/pest-control/termite-control | head -n 2

# A superseded blog post. Must land on the new post.
curl -sI https://<deployment>/blog/yellowjackets-wasps | head -n 2
```

Each should return `301` with a `location:` header pointing at the new path. A
`308` to the slashed original followed by a `404` means normalisation is running
first, and the fix is to make the sources slash-agnostic — not to delete rows.

### One group needs re-deriving over time

139 rows point a live `city × service` URL at `/locations/<market>/` only
because that market has not cleared the research gate yet and its matrix pages
do not exist. As research lands, those pages start building — and the generator
will then refuse to ship, naming each one, because the source has become a real
page. That failure is the feature. Re-derive the group when it fires.
