# Search Console: sitemap submission and indexing priority

Written 11 September 2026, the day the site went live on its own domain.

## The one thing to get right first

Add the property as **`https://www.graduatepestcontrol.com`** — the URL-prefix
property, with the `www.`

This matters more than it looks. The site canonicalises on `www`, and the bare
apex 308-redirects to it. A property registered on the apex would report almost
every page as "Page with redirect" and would show no data worth reading. If a
Domain property is used instead (the kind verified by a DNS record), it covers
both hosts — that is fine, but the URL-prefix property on `www` is the one whose
numbers will make sense.

Verified facts at the time of writing, all checked against the live site:

| Check | Value |
|---|---|
| Indexable URLs in the sitemap | 229 |
| Canonical on every page | `https://www.graduatepestcontrol.com/…` |
| robots.txt | `Allow: /`, names the www sitemap |
| Legacy redirects | 259, all confirmed resolving to a live page |
| Pages deliberately kept out | 1 — `/contact/thank-you/` |

## Step 1 — submit the sitemap

In Search Console: **Indexing → Sitemaps → Add a new sitemap**, enter:

```
sitemap-index.xml
```

The full address is `https://www.graduatepestcontrol.com/sitemap-index.xml`. It
is an index file pointing at `sitemap-0.xml`, which holds all 229 URLs. Submit
the index, not the child.

Expect "Success" and a discovered-URL count. It reads 0 for a while; that is
normal and is not a failure.

## Step 2 — request indexing, highest value first

Use **URL Inspection** (the search box at the top), paste the address, wait for
the check, then **Request Indexing**.

Google allows roughly 10 to 12 of these per property per day, then says "Quota
exceeded" for the rest of the day. So this list is arranged in batches of 10, in
descending order of commercial value. Work down it, one batch a day. Everything
not listed here still gets found through the sitemap — manual requests only
speed up the first look.

**A note on what to expect:** requesting indexing is a nudge, not a command.
Google decides. A brand-new site is normally indexed over days to weeks, and
some pages will be crawled but held back. That is not a fault in the site.

### Day 1 — the money pages

```
https://www.graduatepestcontrol.com/
https://www.graduatepestcontrol.com/contact/
https://www.graduatepestcontrol.com/pest-control/
https://www.graduatepestcontrol.com/pest-control/rodent-control/
https://www.graduatepestcontrol.com/pest-control/structural-exclusion/
https://www.graduatepestcontrol.com/pest-control/bed-bug-treatment/
https://www.graduatepestcontrol.com/pest-control/cockroach-control/
https://www.graduatepestcontrol.com/commercial/
https://www.graduatepestcontrol.com/locations/
https://www.graduatepestcontrol.com/ryan-katz/
```

Rodent control and structural exclusion lead the service pages because exclusion
is the core of the business and rodent work is what most people search for.
`/ryan-katz/` is here because the named entomologist is the site's trust signal.

### Day 2 — the rest of the services, and credentials

```
https://www.graduatepestcontrol.com/pest-control/ant-control/
https://www.graduatepestcontrol.com/pest-control/wildlife-management/
https://www.graduatepestcontrol.com/pest-control/wasp-hornet-removal/
https://www.graduatepestcontrol.com/pest-control/mosquito-management/
https://www.graduatepestcontrol.com/pest-control/exclusion-consulting/
https://www.graduatepestcontrol.com/pest-control/food-safety-consulting/
https://www.graduatepestcontrol.com/pest-control/rodent-program-consulting/
https://www.graduatepestcontrol.com/pest-control/canine-rodent-detection/
https://www.graduatepestcontrol.com/pest-control/canine-bed-bug-detection/
https://www.graduatepestcontrol.com/credentials/
```

### Day 3 — the two regional hubs, the library, and the people

```
https://www.graduatepestcontrol.com/locations/nyc/
https://www.graduatepestcontrol.com/locations/long-island/
https://www.graduatepestcontrol.com/pest-library/
https://www.graduatepestcontrol.com/blog/
https://www.graduatepestcontrol.com/arnold-katz/
https://www.graduatepestcontrol.com/partners/
https://www.graduatepestcontrol.com/pest-control/norway-rat-control/
https://www.graduatepestcontrol.com/pest-control/house-mouse-control/
https://www.graduatepestcontrol.com/pest-control/carpenter-ant-control/
https://www.graduatepestcontrol.com/commercial/coop-condo-pest-control/
```

### Day 4 — commercial verticals, where the contracts are

```
https://www.graduatepestcontrol.com/commercial/restaurant-pest-control/
https://www.graduatepestcontrol.com/commercial/food-facility-ipm/
https://www.graduatepestcontrol.com/commercial/food-safety-sqf/
https://www.graduatepestcontrol.com/commercial/property-management-pest-control/
https://www.graduatepestcontrol.com/commercial/multi-family-pest-control/
https://www.graduatepestcontrol.com/commercial/hotels-hospitality-pest-control/
https://www.graduatepestcontrol.com/commercial/medical-facility-pest-control/
https://www.graduatepestcontrol.com/commercial/schools-pest-control/
https://www.graduatepestcontrol.com/commercial/hoa-pest-control/
https://www.graduatepestcontrol.com/commercial/maritime-port-pest-control/
```

### Day 5 — the compliance pages

These answer statutory questions that co-op boards, landlords and managing
agents actually search for, and nobody else locally has written them.

```
https://www.graduatepestcontrol.com/compliance/nyc-local-law-55/
https://www.graduatepestcontrol.com/compliance/coop-condo-board-obligations/
https://www.graduatepestcontrol.com/compliance/landlord-tenant-pest-responsibilities/
https://www.graduatepestcontrol.com/compliance/nyc-housing-maintenance-code-pests/
https://www.graduatepestcontrol.com/compliance/ny-neighbor-notification-law/
https://www.graduatepestcontrol.com/compliance/nyc-local-law-36-pesticide-notification/
https://www.graduatepestcontrol.com/compliance/nys-pesticide-applicator-requirements/
https://www.graduatepestcontrol.com/compliance/choosing-a-pest-control-contractor/
https://www.graduatepestcontrol.com/commercial/childcare-pest-control/
https://www.graduatepestcontrol.com/commercial/government-pest-control/
```

### Day 6 — the highest-value neighborhoods

```
https://www.graduatepestcontrol.com/locations/upper-east-side/
https://www.graduatepestcontrol.com/locations/upper-west-side/
https://www.graduatepestcontrol.com/locations/tribeca/
https://www.graduatepestcontrol.com/locations/soho/
https://www.graduatepestcontrol.com/locations/park-slope/
https://www.graduatepestcontrol.com/locations/brooklyn-heights/
https://www.graduatepestcontrol.com/locations/williamsburg/
https://www.graduatepestcontrol.com/locations/greenwich-village/
https://www.graduatepestcontrol.com/locations/hudson-yards/
https://www.graduatepestcontrol.com/locations/dumbo/
```

### Day 7 — the Long Island markets

```
https://www.graduatepestcontrol.com/locations/huntington/
https://www.graduatepestcontrol.com/locations/garden-city/
https://www.graduatepestcontrol.com/locations/great-neck/
https://www.graduatepestcontrol.com/locations/manhasset/
https://www.graduatepestcontrol.com/locations/port-washington/
https://www.graduatepestcontrol.com/locations/syosset/
https://www.graduatepestcontrol.com/locations/northport/
https://www.graduatepestcontrol.com/locations/oyster-bay/
https://www.graduatepestcontrol.com/locations/smithtown/
https://www.graduatepestcontrol.com/locations/melville/
```

After Day 7 the remaining ~150 pages — the town-plus-service pages under
`/pest-control/<town>/<service>/`, the 20 pest profiles and the field notes —
are left to the sitemap. Manually requesting all of them is not a good use of
the quota, and Google treats a page crawled through the sitemap no differently.

## What is normal, and what is not

Leave these alone; they are expected on a new site:

- **"Discovered – currently not indexed"** — found, not yet crawled. Wait.
- **"Crawled – currently not indexed"** — crawled, held back for now. Wait.
- A sitemap reading **0 discovered URLs** for the first day or two.

These are worth telling me about:

- **"Page with redirect"** on a URL from the list above. Should not happen now
  that the site canonicalises on www; if it does, something regressed.
- **"Blocked by robots.txt"** or **"Excluded by 'noindex' tag"** on anything
  other than `/contact/thank-you/`. The deployment-wide noindex is supposed to
  apply to preview deployments only, so this would mean production is being
  treated as a preview.
- **"Alternate page with proper canonical tag"** in bulk.
- **"Not found (404)"** on any of the 259 legacy addresses.

## Two things not in Search Console, worth doing in the same sitting

1. **Bing Webmaster Tools** takes the same sitemap and can import the Search
   Console property wholesale. It feeds ChatGPT's web results, so it is worth
   the ten minutes.
2. **Google Business Profile** — the map listing. That drives more local pest
   control calls than organic results do. The site's address and phone number
   must match the profile exactly, character for character.
