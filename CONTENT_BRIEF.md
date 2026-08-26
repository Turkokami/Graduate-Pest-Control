# CONTENT_BRIEF — Graduate Pest Control

**The highest-leverage file in this build.** Every writer reads it before writing a word. If something here conflicts with your instinct, this file wins. If something here is wrong, fix it here — not in your page.

**Build:** Track 7A (Astro static) · Tier 2.0 Regional · 203 indexable pages · NYC & Long Island
**Standard:** Keystone v1
**Status:** v1 — Phase 1

---

## 0 · Before you write anything

1. Read this whole file.
2. Read the **gold-standard exemplar**: `src/content/services/structural-exclusion.md`. Match its depth, structure and voice. It is the quality bar, not a suggestion.
3. Read your assigned page's data row (`src/data/markets.ts` or `src/data/services.ts`). That is your factual spine.
4. **Do the research step (§9) before drafting.** Writing first and researching after is what produces slop.
5. Check your slugs against §8. A link to a slug that isn't on the list is a dead link, and the harness will fail your batch.

---

## 1 · The seven mandates — every page, no exceptions

| | Mandate | What it means for you |
|---|---|---|
| **M1** | **3,000–5,000 words** | Unique, hyper-local, per page. Not padding. If you cannot find 3,000 words of *real* material, stop and say so — the page doesn't publish. A thin page is worse than no page. |
| **M2** | Max AEO / SEO / GEO | Quick Answer at top, question-formed H2s, full FAQ, geo signals in the copy. |
| **M3** | Spoke-and-wheel | Link **up** to parent, **in** to the hub, **laterally** to siblings. Nothing orphaned. |
| **M4** | Voice search | Handled by the components — just make sure your Quick Answer reads well *spoken aloud*. |
| **M5** | Title + meta | `metaTitleCore` ≤ 60 chars. Description 110–165, ends on a period. The build throws if you get this wrong. |
| **M6** | Image metadata | Every image gets a real alt (§10). Never blank, never keyword-stuffed. |
| **M7** | Brand image + logo | Handled by the layout. Don't fight it. |

---

## 2 · The business — verbatim facts

Use these exactly. Do not embellish them.

- **Graduate Pest Control**, founded **1983**.
- Founded by **Arnold Katz**, who holds a **B.S. in Entomology, University of Georgia**.
- Now run by his son, **Ryan Katz** — second generation.
- Phone: **(631) 212-9601** — see the addendum; never reformat.
- Serves **New York City and Long Island** — 44 markets, Nassau and Suffolk counties plus Manhattan, Brooklyn and Queens.
- Positioning, in Ryan's own words: **"We treat every job as a building problem, not a pest problem."** And: *"If you want someone to spray and leave, we are not the right fit."*

### Facts that do NOT exist yet — never invent these

These are `PENDING` in `src/data/business.ts`. If your draft needs one, leave a `TODO:` and flag it. **Writing a plausible placeholder is the single worst thing you can do in this build**, because plausible placeholders survive review.

- ❌ Street address · ❌ License numbers · ❌ Who holds ACE / PCQI
- ❌ Guarantee terms (so: **never write the word "guaranteed"** until the terms page exists)
- ❌ Review counts, star ratings, "hundreds of satisfied customers"
- ❌ Any price, any job count, any years-of-experience figure other than "since 1983"
- ❌ Any named client, property or address
- ❌ Any specific claim about Graduate's internal process that Ryan has not confirmed

---

## 3 · Brand voice

Ryan is a **building-science practitioner who happens to work on pests**. Write as that person.

**The voice is:**

- **Plain and declarative.** Short sentences. "A mouse needs a quarter-inch gap." Not "mice are capable of accessing structures through remarkably small apertures."
- **Explanatory, not promotional.** Teach the reader why the problem exists. The sale is a by-product of them understanding their building better than they did five minutes ago.
- **Willing to say unwelcome things.** "Spraying the perimeter will not fix this." "If the crawlspace stays wet, the ants come back." Confidence comes from candour, not adjectives.
- **First person plural, sparingly.** "We" for what the company does. Never "we pride ourselves on."
- **Specific about structures.** Sill plates, band joists, soffit returns, weep holes, chases, risers, party walls. This vocabulary *is* the differentiator — a competitor writing from a template cannot produce it.

**The voice is not:**

- Salesy ("Look no further!"), fear-based ("Don't let pests destroy your home!"), or padded ("In today's world, pest control is more important than ever").
- Ever starting a page with "Are you dealing with…" or "If you're like most homeowners…".
- Ever using "solutions," "state-of-the-art," "cutting-edge," "we're passionate about," "peace of mind," "rest assured," or "look no further."

**Reading level:** an intelligent homeowner or a co-op board member. Assume they are smart and uninformed, not stupid.

---

## 4 · The AEO Quick Answer — the most important 50 words on the page

Every page opens with one. It is **40–60 words** (the build throws outside that range) and it is written to be **quoted verbatim by an answer engine and read aloud by a voice assistant**.

Rules:

- Answer the page's core question **immediately**. No throat-clearing.
- Front-load the specific: the pest, the place, the mechanism.
- Self-contained — it must make sense with zero surrounding context.
- Ends on a complete sentence with a period.
- The same string becomes the meta description and the first FAQ answer. Write it once, well.

**Good:**

> Carpenter ants in Huntington homes are almost always a moisture signal rather than a hygiene problem. They excavate wood that is already water-damaged — typically sill plates, band joists and porch framing on older frame houses. Treating the ants without correcting the moisture path means the colony returns the following spring.

**Bad:**

> Are you dealing with carpenter ants in your Huntington home? Graduate Pest Control offers comprehensive carpenter ant solutions for homeowners throughout Long Island. Our experienced technicians use state-of-the-art methods to eliminate your pest problem and give you peace of mind.

---

## 5 · The anti-slop rules

These are the difference between 203 pages that rank and 203 pages Google declines to index.

1. **Real facts beat volume.** A page grounded in "the Pigeon River, the fieldstone foundations, the 1920s housing stock" cannot read as a template. A page grounded in "the beautiful community of X" is filler in a costume.
2. **No template variables in body copy.** The page title never appears verbatim inside a sentence. If you find yourself writing "When it comes to bed bug treatment in Manhasset, bed bug treatment in Manhasset requires…" — stop.
3. **Never repeat a sentence across pages.** The harness flags any 10+ word sentence appearing on 3 or more pages. Legitimate survivors are the NAP line, legal statements and headings. Everything else gets rewritten.
4. **Boilerplate lives in components, not bodies.** The CTA, the footer, the phone bar and the trust strip render automatically. Do not re-write them into your body copy — that is the single most common source of cross-page duplication.
5. **One idea per section, answer-first inside each.** Open each H2 by answering it, then explain.
6. **Question-formed H2s.** "Why do Northport homes get carpenter ants?" not "Carpenter Ants."
7. **Vary structure between pages, not just nouns.** If every city page has the identical seven H2s with the town name swapped, you have built 44 near-duplicates. The section *order* is fixed by the contract; the sections *within* the body are yours to shape around what that place actually needs.
8. **Word count is an outcome, not a target.** Write until the subject is genuinely covered. If that lands at 2,400 words, the problem is that you have not researched enough — not that you need 600 more words of filler.

---

## 6 · Frontmatter spec

Every content file starts with this. The schema in `src/content.config.ts` rejects anything malformed at build time.

```yaml
---
slug: structural-exclusion          # must match the data row
title: Structural Exclusion          # the H1
metaTitleCore: Structural Pest Exclusion   # ≤60 chars; brand appended automatically
quickAnswer: >-
  40–60 words. See §4.
metaDescription: >-                  # OPTIONAL — derived from quickAnswer if omitted
  110–165 chars, ends on a period.
faqs:                                # EXACTLY 6–8. Not 5, not 9.
  - question: Why do mice keep coming back after treatment?
    answer: Minimum 40 characters. A real answer, not a teaser.
sources:                             # REQUIRED on compliance pages, encouraged everywhere
  - name: NYC Housing Maintenance Code
    url: https://www.nyc.gov/...
primaryImage:                        # optional; alt is required if present
  src: /img/...
  alt: What is actually shown, ≤125 chars
gatePassed: false                    # you never set this true — the gate does
---
```

---

## 7 · Section order by page type

The block order is **fixed**. Do not reorder it per page. If a page type needs a block the contract lacks, we change the contract once, for every page of that type.

**Universal, every page:** Quick Answer → named-expert block → Q&A body sections → local proof → FAQ → CTA. The layout renders the expert block, FAQ and CTA; you write the Quick Answer and the body.

| Type | Your body sections, in order |
|---|---|
| **T2 Service spoke** | What's included → the method → what it costs *(omit until pricing is confirmed)* → problem-page links → local proof |
| **T3 Problem micro page** | Why this happens → what to do now → when to call → parent service link |
| **T4 City page** | Local conditions and pest pressure → services in this city → neighborhoods served → **community/local proof** → local proof |
| **T5 Neighborhood** | Neighborhood-specific conditions → parent city link → sibling links → service links |
| **T6 Pest library** | Identification → behavior and season → risk → signs of infestation → treatment approach → prevention → linked service spoke |
| **T7 Vertical** | The regulatory stake → what auditors look for → program structure → documentation and reporting → case proof |
| **T8 Compliance** | The rule stated plainly → who it applies to → obligations → penalties → how we help → **source citation and review date** |
| **T9 Case study** | Pest + property type + neighborhood + method + outcome |

---

## 8 · Internal linking — mandate M3

Every page links **up**, **in** and **laterally**. A page cut off from its cluster will not pull local rankings no matter how good it is.

| From | Must link to |
|---|---|
| Service spoke | ↑ `/pest-control/` · ↔ 2–3 sibling services · ↓ its problem pages · → 3–5 city pages where it's offered |
| City page | ↑ its regional hub · ↔ 4–6 neighbouring markets · ↓ its matrix pages · → `/pest-control/` |
| Matrix page | ↑ its city page **and** its service spoke · ↔ 2–3 sibling services in the same city |
| Library profile | ↑ its parent service spoke · ↔ 2–3 related pests |
| Compliance page | ↑ `/commercial/` · → the vertical it serves |
| Case study | ↑ its parent service spoke · → its city page · → `/commercial/` if applicable |

**Rules:** anchor text is descriptive, never "click here" and never a bare URL. Never link to a slug not on the valid list. Never link to a page whose `gatePassed` is still false — it may not exist yet.

### Valid slugs

**Services (10):** `ant-control` `bed-bug-treatment` `cockroach-control` `k9-detection-abatement`\* `mosquito-management` `rodent-control` `structural-exclusion` `termite-control` `wasp-hornet-removal` `wildlife-management`
\* *unconfirmed — do not link until Ryan confirms it is offered.*

**Problem pages (3):** `carpenter-ant-control` `norway-rat-control` `house-mouse-control`

**Verticals (5):** `restaurant-pest-control` `food-facility-ipm` `coop-condo-pest-control` `property-management-pest-control` `hotels-hospitality-pest-control`

**Markets (44):** see `src/data/markets.ts`. Long Island — asharoken, brookville, centerport, cold-spring-harbor, commack, east-northport, eatons-neck, garden-city, glen-cove, great-neck, greenlawn, huntington, huntington-bay, huntington-village, kings-point, lattingtown, lloyd-harbor, locust-valley, manhasset, northport, old-westbury, oyster-bay, port-washington, roslyn, sands-point, sea-cliff, syosset. NYC — astoria, brooklyn-heights, central-park-south, cobble-hill, dumbo, flatiron-nomad, greenwich-village, hudson-yards, malba, noho, park-slope, soho, tribeca, upper-east-side, upper-west-side, whitestone, williamsburg.

---

## 9 · The research step — this is the anti-slop engine

**Before drafting any geo page**, gather and record in the market's `research` object:

- **Housing stock and era.** The single most useful fact. Pre-war co-op, brownstone with shared party walls, post-war subdivision, waterfront colonial, estate property — each is a different pest problem.
- **Construction details that change the work.** Foundation type, crawlspace vs. slab vs. basement, siding, roof and soffit configuration.
- **Waterways, topography, drainage.** Moisture is the driver behind most structural pest activity.
- **Named landmarks and neighbourhoods** — real ones, spelled correctly.
- **Pest pressures characteristic of that place, with the driver and the season.** Not "ants are common" — *why* here, *when* here.
- **Sources.** Census/ACS housing-age data, municipal records, Cornell IPM and NYS DEC for pest distribution, local news for outbreaks.

Then set `verified: true` **only** when every claim has a source behind it. Until you do, the build will not generate that page. That is deliberate.

**If the research does not support 3,000 unique words, say so.** The market drops a tier rather than shipping filler. This is a correct outcome, not a failure.

---

## 10 · Imagery

- **Judge every image by sight, never by filename.** On sites like this, filenames are keyword-stuffed and routinely wrong — a file named `spider-control-15.jpg` is frequently a photo of a truck.
- **Alt formula:** `[what's shown] + [action/context] + [local, if the page is city-specific]`. Unique, ≤125 characters, natural language, no keyword stuffing. Alt text describes the *image*, not the target keyword.
- The logo's alt is always exactly `Graduate Pest Control`.
- **Never bake text into an image.**
- Placement: hero (on-topic) + roughly one inline image per 300–400 words.
- Real field photos — exclusion work, crawlspaces, rodent evidence, damage, technicians — are E-E-A-T gold. Use them wherever they exist. **We currently have none**; flag every image slot you need.

---

## 11 · Honesty — non-negotiable, and a legal matter

Fabrication is a ranking risk and a liability, not a shortcut.

- **Never invent reviews, ratings, testimonials, statistics, job counts, careers or pricing.**
- **Never write "guaranteed"** until `/our-guarantee/` exists with real terms. When it does, every use links to it. Never "lifetime," never unqualified.
- **Never claim a credential.** ACE and PCQI are individual certifications and we do not yet know who holds them. NPMA and NYPMA are trade *memberships*, not certifications — never describe them as credentials.
- **Never imply an inspection authority we may not hold.** If Ryan holds a treatment licence but not an inspector credential, no page — including FAQs — may imply inspection authority.
- **Legal and code claims carry a source and a review date.** Compliance pages (T8) require at least one real citation. Link the statute, don't paraphrase it from memory.
- **No named clients, properties or people** without written permission. Write "a co-op board in Brooklyn Heights," never the building.
- **Sensitive verticals** — childcare, schools, medical — need explicit sign-off before a page is written.

---

## 12 · Definition of done

Before you submit a page:

- [ ] 3,000–5,000 words of genuinely unique, local, researched content
- [ ] Quick Answer is 40–60 words and reads well aloud
- [ ] Exactly 6–8 FAQs, each a real answer
- [ ] `metaTitleCore` ≤ 60 chars; description 110–165 and ends on a period
- [ ] Question-formed H2s, answer-first inside each
- [ ] Links up, in and laterally — all to valid slugs
- [ ] Every image has a real, sighted alt ≤125 chars
- [ ] No invented facts, no "guaranteed," no unattributed credentials
- [ ] No sentence you have used on another page
- [ ] Sources recorded for every factual or legal claim
- [ ] `npm run build && node scripts/verify.mjs` passes

You do not set `gatePassed: true`. The acceptance gate does that.

---

# ADDENDUM — CLIENT ANSWERS, AUGUST 2026 (AUTHORITATIVE)

Ryan returned the build questionnaire. **Where this addendum conflicts with anything above, this wins.**

## Hard prohibitions — these are not style notes

- **No guarantee, warranty, "lifetime" or "corrected at no charge" language anywhere**, including FAQs and meta descriptions. Graduate offers no warranty. This is policy, not an oversight. The trust substitutes are the licence numbers, the entomologist on staff, 1983, and the review count.
- **We do not foam.** Not as a filler, not as backing, not as an air seal behind or over something better. Foam stays named as the industry's most common failure; it never appears as something Graduate uses in any role.
- **Never the word "subcontract"** in any form. Partner firms are partners.
- **Ryan Katz does not hold a degree.** Arnold Katz holds the B.S. in Entomology (University of Georgia). Never state or imply Ryan has one.
- **No ornamental or turf work.** Ryan does not hold the 3A category. Residential mosquito work is fine; ornamental plantings, turf and commercial grounds programmes are outside what he is licensed for.
- **No Staten Island.** He does not work there.
- **No em dashes in outbound email copy** (site copy is unaffected).

## Facts

- Phone renders exactly **(631) 212-9601**. Never reformat.
- **Service-area business.** The street address is used for Google verification, schema and citations only, and is never displayed on the site.
- Publish: **business registration 03298**; **Ryan Katz, certified applicator C1822141, categories 7A, 7F, 8.** Verbatim, no added dashes or spaces.
- Credentials held by Ryan personally: **PCQI, HACCP, TWIC, HUET, Tier 1 offshore, SQF credentialed.** NPMA/NYPMA membership still unconfirmed — do not mention.
- Hours: 24 hours.
- **56 Google reviews, all five star.** Do not put this in schema markup; it may be stated as fact in copy once the profile is connected.

## Pricing — state this plainly, do not hide it

**Free consultation. Not a free estimate.** The consultation is usually a phone call and most problems can be diagnosed that way. A **written proposal and plan carries a service fee**, because the documented plan is the deliverable — Ryan has had proposals handed to the next contractor to underbid. **If the client proceeds, the fee comes off the cost of the project.** Canine detection inspections are billed per unit.

Never publish a price. Never publish a flat per-apartment or per-unit exclusion rate. No financing — the page is dropped.

## Positioning

- The line the site is built around: **"Pest problems are building problems, and they need permanent structural solutions."** It is a **stated position, never a slogan or tagline** set in large type. "If you want someone to spray and leave, we're not the right fit" is accurate but reads as a swipe — use sparingly, if at all.
- **Rodent exclusion is the core of the business and should be the predominant feature of the site.** Everything else is a service; exclusion is what Graduate *is*.
- **The commercial work is the proof; the residential work is the growth.** Roughly 80% commercial / 20% residential today, and he wants far more residential. So: commercial pages carry the depth and the credibility, residential and town pages get the volume and do the converting. The argument for a homeowner is that the company running programmes for audited food plants and hospitals is doing your house.
- **IPM is not a modern selling phrase here.** Graduate built a food-safety pest programme in the mid-1990s that turned out to be exactly what SQF later required, unchanged. The industry named the practice about fifteen years ago; this is how the company has worked since 1983.

## Materials — the exclusion specification

Custom-fabricated **26-gauge galvanised sheet metal**, **cement and mortar**, and **Xcluder** material (door sweeps, fill fabric, GEO below-grade barrier) are the foundation of the exclusion programme. Copper and stainless mesh, hardware cloth and mechanical fasteners alongside.

## Photo captions

- Night shot of a technician holding two hornet nests: **that is Ryan**, removal work at night.
- Black dog at a gap: **Hugo**, one of Ryan's Patterdale Terriers, a working dog on a burrow. Caption as canine rodent detection.
- **Kona is a Boxer and a house dog with no working role. Never caption her as a working dog.**
- Barn and hay-bale photos are from the **ACPUB rodent safari in Querétaro, Mexico** — never presented as local job photos, but not filler either. Caption them for what they are.
- Imagery of taken rodents belongs on credential and field-training pages only, never the homepage or a residential service page.

## Speaking — treat as a headline credential

Ryan speaks and teaches on rodent work and exclusion for the **Mexican pest management association (ACPUB, Querétaro)** — where he also ran a rodent safari taking 100+ members into the field — and for the **PestInsight Initiative** in Nigeria (say *Nigeria*, never "Africa"), and is an invited speaker in the **United States**. Almost no competitor in this market is teaching rodent exclusion to professional bodies abroad.

## Still awaiting confirmation — do not publish these

Termite control and wildlife management (Y/N), commercial mosquito scope, NPMA/NYPMA membership, top markets by billing, competitor list, the ACPUB year, job photos and case-study detail.

---

# BUILD NOTE — BLOG CLUSTER TAXONOMY (August 2026)

**Posted for the writers working the first blog wave. The taxonomy is live in `src/data/blog.ts` and the build enforces it — a post whose `cluster:` is not on this list fails the build with a named error.**

Keystone Part 3.4 #8: each cluster feeds **exactly one** service spoke. Eight clusters, eight spokes. A spoke may have no cluster (three do not); a cluster may never have two spokes.

| `cluster:` value | Cluster name | Feeds spoke | Write here when the question is… |
|---|---|---|---|
| `building-envelope` | The building envelope | `structural-exclusion` | the shell and the openings in it — sill plates, weep holes, garage door corners, penetrations, materials, sequencing, why foam fails |
| `rodent-pressure` | Rodent pressure and the evidence it leaves | `rodent-control` | reading a building for rodent activity, seasonal pressure, why bait alone recurs |
| `moisture-and-wood` | Moisture and the insects that follow it | `ant-control` | the water path and what exploits it — carpenter ants, wet sills and band joists, flashing, crawlspaces |
| `shared-walls` | Shared walls and how pests move between units | `bed-bug-treatment` | multi-unit transmission, party walls and chases, board coordination, why unit-by-unit fails |
| `service-cores` | Plumbing chases, risers and service cores | `cockroach-control` | German cockroach pressure tracking risers, chases, kitchens and refuse rooms |
| `roofline-and-attic` | The roofline, the attic and the chimney | `wildlife-management` | everything above the gutter line — soffit returns, ridge vents, chimneys, the removal step and its timing |
| `nesting-season` | Stinging insects and the nesting season | `wasp-hornet-removal` | the stinging-insect year, where nests concentrate, wall-void nests, identification |
| `standing-water` | Standing water and site drainage | `mosquito-management` | the property's drainage inventory, container breeding, source reduction, the category 8 / 25(b) boundary |

**Each row in `src/data/blog.ts` carries a `belongs` and an `excludes` field. Read your cluster's `excludes` before you draft** — it names the neighbouring questions that must go to a different cluster, which is how two adjacent clusters stay distinct rather than merging over a few waves.

Rules that bite:

- `cluster:` is required frontmatter and must match a slug above **verbatim**.
- No cluster points at `termite-control`, ever. It is retired. `moisture-and-wood` handles the termite-or-carpenter-ant identification question by linking to `/pest-library/eastern-subterranean-termite/`, never to a service.
- Posts live at `/blog/<slug>/`; the hub is `/blog/`. Both are grouped and ordered from `blogClusters`, so a post appears on the hub automatically — and the build **throws** if its cluster is not in the declared order rather than letting it go missing.
- Everything else is the normal contract: 3,000–5,000 body words, 6–8 FAQs, `quickAnswer` 40–60 words, `metaTitleCore` ≤ 60, `metaDescription` 110–165 ending on a period, unique sitewide, `gatePassed: false`. The word-count auditor **warns** below 3,000 words and the gate requires zero warnings, so a short post fails the batch even though it is not a hard error.
- Link up to `/blog/`, across to a sibling post in the same cluster once one exists, and down to the cluster's parent spoke. The spoke links back up to the cluster from its own page, so the pair is closed in both directions.

**Build gotcha found while wiring this route.** Astro 7's content layer keeps its store in `node_modules/.astro/data-store.json`, and it does **not** reliably drop an entry when you delete or rename a markdown file — the deleted page keeps building from cache, and `rm -rf dist` does not clear it. If you rename a draft or remove one, run `rm -rf node_modules/.astro dist` before rebuilding, or the harness will audit a page whose source no longer exists.
