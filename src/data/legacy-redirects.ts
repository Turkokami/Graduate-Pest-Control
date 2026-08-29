/**
 * legacy-redirects.ts — the cutover 301 map for the LIVE site.
 *
 * Scope. `retiredMarketSlugs` (markets.ts) and `retiredServiceSlugs`
 * (services.ts) cover only the URLs THIS build retired internally — 21 rows
 * between them. They do not cover graduatepestcontrol.com as it stands today.
 * This file does: every URL the live site publishes, mapped to the page in the
 * new taxonomy that inherits its content. Same shape, same status as those two
 * — declared data, not yet wired to a mechanism. The builder wiring the
 * redirect layer consumes all three.
 *
 * Enumeration method (August 2026, WebFetch + WebSearch on public URLs only):
 *   · /robots.txt names one sitemap and disallows /preview/ and /portal.
 *   · /sitemap.xml is a flat <urlset> (no sitemap index, no per-type children).
 *   · The home page, /pest-control, /locations/upper-east-side, /blog,
 *     /partners, /about and /nyc-rat-activity-report were crawled for links
 *     the sitemap might miss. They surfaced none.
 *   · site: search surfaced no URL that was not already in the sitemap.
 *
 * 353 live URLs found. 352 rows below; the home page is the 353rd and needs no
 * row because '/' is '/' in both builds.
 *
 * ---------------------------------------------------------------------------
 * THE TRAILING SLASH — read this before wiring anything
 * ---------------------------------------------------------------------------
 * The live site serves EVERY URL without a trailing slash. The new build emits
 * every URL with one. So the live URL set and the new URL set do not share a
 * single string outside the home page: /locations/northport and
 * /locations/northport/ are different URLs, and without a rule the first 404s.
 *
 * That is why rows below look redundant — 110 of them are "the same page, plus
 * a slash". They are listed anyway, explicitly, because a map that silently
 * relies on a normalisation rule existing elsewhere is a map that breaks when
 * someone changes that rule. If the redirect layer ends up doing a global
 * no-slash → slash normalisation first, these rows become no-ops and cost
 * nothing. If it does not, they are the only thing standing between 110 live
 * pages and a 404.
 *
 * Order matters at cutover: the specific rows here must be evaluated BEFORE any
 * global slash normalisation, or /locations/huntington-bay would normalise to
 * /locations/huntington-bay/ and 404 instead of landing on /locations/huntington/.
 * ---------------------------------------------------------------------------
 */

export const legacyRedirects: Array<{ from: string; to: string; note?: string }> = [

  // -------------------------------------------------------------------------
  // 1 · Section hubs. Same page, same section, slash added.
  // -------------------------------------------------------------------------
  { from: '/pest-control', to: '/pest-control/' },
  { from: '/locations', to: '/locations/' },
  { from: '/contact', to: '/contact/' },
  { from: '/commercial', to: '/commercial/' },

  // -------------------------------------------------------------------------
  // 2 · Service spokes that survived the rebuild unchanged. Eight of the live
  //     site's ten spokes carry straight over on the same slug.
  // -------------------------------------------------------------------------
  { from: '/pest-control/ant-control', to: '/pest-control/ant-control/' },
  { from: '/pest-control/bed-bug-treatment', to: '/pest-control/bed-bug-treatment/' },
  { from: '/pest-control/cockroach-control', to: '/pest-control/cockroach-control/' },
  { from: '/pest-control/mosquito-management', to: '/pest-control/mosquito-management/' },
  { from: '/pest-control/rodent-control', to: '/pest-control/rodent-control/' },
  { from: '/pest-control/structural-exclusion', to: '/pest-control/structural-exclusion/' },
  { from: '/pest-control/wasp-hornet-removal', to: '/pest-control/wasp-hornet-removal/' },
  { from: '/pest-control/wildlife-management', to: '/pest-control/wildlife-management/' },

  // -------------------------------------------------------------------------
  // 3 · Problem micro pages that survived. These three are the only species
  //     pages the new build kept as their own page (services.ts problemPages).
  // -------------------------------------------------------------------------
  { from: '/pest-control/carpenter-ant-control', to: '/pest-control/carpenter-ant-control/' },
  { from: '/pest-control/house-mouse-control', to: '/pest-control/house-mouse-control/' },
  { from: '/pest-control/norway-rat-control', to: '/pest-control/norway-rat-control/' },

  // -------------------------------------------------------------------------
  // 4 · The K9 page, split in two.
  //
  //     The live site sells one combined "K9 Detection & Abatement" page. The
  //     new build splits it into two programmes because they are two: different
  //     dogs, different discipline (services.ts canineProgrammes). The live
  //     page's own copy is Hugo, Mia and burrow work — the rodent programme —
  //     and "abatement" is a word that only applies to that side of it. So it
  //     points at canine-rodent-detection, and the bed bug programme is reached
  //     from there rather than being the target of a redirect it does not match.
  // -------------------------------------------------------------------------
  { from: '/pest-control/k9-detection-abatement', to: '/pest-control/canine-rodent-detection/', note: 'Live page is the combined K9 offer; its content is the rodent programme. The canine bed bug page is a sibling link, not a second redirect target.' },

  // -------------------------------------------------------------------------
  // 5 · Termite. RETIRED — Ryan, August 2026: "I don't do termites."
  //
  //     One live URL, not the nineteen retiredServiceSlugs in services.ts
  //     anticipates. The live sitemap carries /pest-control/termite-control and
  //     NO city x termite pages — the eighteen in _retired/matrix/ were written
  //     by this build and never published. retiredServiceSlugs is therefore
  //     correct but eighteen-nineteenths redundant, and harmless either way: a
  //     redirect rule for a URL that was never live simply never fires.
  //
  //     Destination is the identification-only library profile, never a service
  //     page. The page says outright that this is not work Graduate takes.
  // -------------------------------------------------------------------------
  { from: '/pest-control/termite-control', to: '/pest-library/eastern-subterranean-termite/', note: 'Service retired, not renamed. Identification-only profile is the only page on the site that still discusses termites.' },

  // -------------------------------------------------------------------------
  // 6 · Species-level SERVICE pages folded into their parent spoke.
  //
  //     The live site ran a service page per species. The new build keeps
  //     species at two levels only: three problem pages under /pest-control/
  //     (group 3 above) and identification profiles under /pest-library/.
  //     The six below have neither.
  //
  //     They go to the parent SERVICE spoke, not to the library profile, even
  //     where a profile exists (german-cockroach, american-cockroach,
  //     odorous-house-ant, pavement-ant and pharaoh-ant all have one). These
  //     were commercial-intent pages selling treatment; the library is
  //     identification. Sending "german cockroach control" to a page that
  //     identifies german cockroaches and does not sell the work loses the
  //     visit. The spoke sells the work and links to the profile.
  //
  //     citronella-ant-control has no library profile at all, which makes the
  //     spoke the only defensible target for it regardless.
  // -------------------------------------------------------------------------
  { from: '/pest-control/german-cockroach-control', to: '/pest-control/cockroach-control/', note: 'Species service page folded into the spoke. /pest-library/german-cockroach/ exists but is identification, not treatment.' },
  { from: '/pest-control/american-cockroach-control', to: '/pest-control/cockroach-control/', note: 'Species service page folded into the spoke. /pest-library/american-cockroach/ exists but is identification, not treatment.' },
  { from: '/pest-control/odorous-house-ant-control', to: '/pest-control/ant-control/', note: 'Species service page folded into the spoke. /pest-library/odorous-house-ant/ exists but is identification, not treatment.' },
  { from: '/pest-control/pavement-ant-control', to: '/pest-control/ant-control/', note: 'Species service page folded into the spoke. /pest-library/pavement-ant/ exists but is identification, not treatment.' },
  { from: '/pest-control/pharaoh-ant-control', to: '/pest-control/ant-control/', note: 'Species service page folded into the spoke. /pest-library/pharaoh-ant/ exists but is identification, not treatment.' },
  { from: '/pest-control/citronella-ant-control', to: '/pest-control/ant-control/', note: 'Species service page folded into the spoke. No citronella ant profile exists in the pest library either.' },

  // -------------------------------------------------------------------------
  // 7 · Location pages. 44 live, 42 carry over on the same slug.
  //
  //     Every live location slug exists in the new build except the two Q18
  //     retired the town restructure. Nothing else was dropped, and the new
  //     build adds seven markets the live site never had (dix-hills, melville,
  //     huntington-station, halesite, fort-salonga, smithtown, kings-park) plus
  //     the two regional hubs /locations/long-island/ and /locations/nyc/.
  // -------------------------------------------------------------------------
  { from: '/locations/great-neck', to: '/locations/great-neck/' },
  { from: '/locations/syosset', to: '/locations/syosset/' },
  { from: '/locations/manhasset', to: '/locations/manhasset/' },
  { from: '/locations/roslyn', to: '/locations/roslyn/' },
  { from: '/locations/garden-city', to: '/locations/garden-city/' },
  { from: '/locations/huntington', to: '/locations/huntington/' },
  { from: '/locations/lloyd-harbor', to: '/locations/lloyd-harbor/' },
  { from: '/locations/centerport', to: '/locations/centerport/' },
  { from: '/locations/northport', to: '/locations/northport/' },
  { from: '/locations/asharoken', to: '/locations/asharoken/' },
  { from: '/locations/eatons-neck', to: '/locations/eatons-neck/' },
  { from: '/locations/commack', to: '/locations/commack/' },
  { from: '/locations/east-northport', to: '/locations/east-northport/' },
  { from: '/locations/greenlawn', to: '/locations/greenlawn/' },
  { from: '/locations/cold-spring-harbor', to: '/locations/cold-spring-harbor/' },
  { from: '/locations/oyster-bay', to: '/locations/oyster-bay/' },
  { from: '/locations/locust-valley', to: '/locations/locust-valley/' },
  { from: '/locations/glen-cove', to: '/locations/glen-cove/' },
  { from: '/locations/sea-cliff', to: '/locations/sea-cliff/' },
  { from: '/locations/port-washington', to: '/locations/port-washington/' },
  { from: '/locations/sands-point', to: '/locations/sands-point/' },
  { from: '/locations/kings-point', to: '/locations/kings-point/' },
  { from: '/locations/old-westbury', to: '/locations/old-westbury/' },
  { from: '/locations/brookville', to: '/locations/brookville/' },
  { from: '/locations/lattingtown', to: '/locations/lattingtown/' },
  { from: '/locations/upper-east-side', to: '/locations/upper-east-side/' },
  { from: '/locations/upper-west-side', to: '/locations/upper-west-side/' },
  { from: '/locations/tribeca', to: '/locations/tribeca/' },
  { from: '/locations/greenwich-village', to: '/locations/greenwich-village/' },
  { from: '/locations/park-slope', to: '/locations/park-slope/' },
  { from: '/locations/astoria', to: '/locations/astoria/' },
  { from: '/locations/central-park-south', to: '/locations/central-park-south/' },
  { from: '/locations/hudson-yards', to: '/locations/hudson-yards/' },
  { from: '/locations/soho', to: '/locations/soho/' },
  { from: '/locations/noho', to: '/locations/noho/' },
  { from: '/locations/flatiron-nomad', to: '/locations/flatiron-nomad/' },
  { from: '/locations/dumbo', to: '/locations/dumbo/' },
  { from: '/locations/cobble-hill', to: '/locations/cobble-hill/' },
  { from: '/locations/brooklyn-heights', to: '/locations/brooklyn-heights/' },
  { from: '/locations/williamsburg', to: '/locations/williamsburg/' },
  { from: '/locations/whitestone', to: '/locations/whitestone/' },
  { from: '/locations/malba', to: '/locations/malba/' },

  //     The two folded hamlets. Same rows as retiredMarketSlugs in markets.ts,
  //     restated here without the trailing slash, because THAT is the form the
  //     live site actually serves and the form an inbound link carries.
  { from: '/locations/huntington-bay', to: '/locations/huntington/', note: 'Q18: huntington-bay folded into the Town of Huntington hub — same place in a customer\'s head.' },
  { from: '/locations/huntington-village', to: '/locations/huntington/', note: 'Q18: huntington-village folded into the Town of Huntington hub — same place in a customer\'s head.' },

  // =========================================================================
  // 8 · THE CITY x SERVICE MATRIX — 264 live URLs, the bulk of the live site.
  //
  //     Live: 44 markets x 6 services, uniformly. The six are rodent-control,
  //     bed-bug-treatment, house-mouse-control, norway-rat-control,
  //     carpenter-ant-control and ant-control. No other service has city pages
  //     on the live site — no city x termite, no city x cockroach, no city x
  //     structural-exclusion, no city x wildlife, no city x mosquito.
  //
  //     New: 102 matrix pages across 26 markets, because the capacity gate in
  //     markets.ts only lets a market build its matrix once its research is
  //     filled and verified. That gate is right and should not be relaxed to
  //     serve this file. It does mean 212 of the 264 live matrix URLs have no
  //     same-slug destination, so they need somewhere real to go.
  //
  //     Three rules, in order:
  //       a. Same city, same service, still built  -> identity + slash. 52 rows.
  //       b. Same city, PARENT service is built    -> the parent. 73 rows.
  //          house-mouse-control and norway-rat-control resolve to that city's
  //          rodent-control page; carpenter-ant-control to its ant-control
  //          page. The new build has no city-level page for any of those three
  //          species, but the parent covers the same pest in the same place,
  //          which keeps both signals a searcher gave us.
  //       c. Neither exists                        -> /locations/<market>/. 139 rows.
  //          The market page, never the service spoke and never the home page.
  //          Between "the right pest, wrong place" and "the right place, all
  //          the pests", the second wins for a service business: the market
  //          page is local, it lists what is offered there, and the pest is one
  //          click away. Sending 139 local pages to national spokes would throw
  //          away the geography that made them rank.
  // =========================================================================

  // 8a · Identity (plus slash). Market and service both survived. 52 rows.
  { from: '/pest-control/great-neck/rodent-control', to: '/pest-control/great-neck/rodent-control/' },
  { from: '/pest-control/great-neck/bed-bug-treatment', to: '/pest-control/great-neck/bed-bug-treatment/' },
  { from: '/pest-control/great-neck/ant-control', to: '/pest-control/great-neck/ant-control/' },
  { from: '/pest-control/syosset/rodent-control', to: '/pest-control/syosset/rodent-control/' },
  { from: '/pest-control/syosset/ant-control', to: '/pest-control/syosset/ant-control/' },
  { from: '/pest-control/manhasset/rodent-control', to: '/pest-control/manhasset/rodent-control/' },
  { from: '/pest-control/manhasset/bed-bug-treatment', to: '/pest-control/manhasset/bed-bug-treatment/' },
  { from: '/pest-control/manhasset/ant-control', to: '/pest-control/manhasset/ant-control/' },
  { from: '/pest-control/roslyn/rodent-control', to: '/pest-control/roslyn/rodent-control/' },
  { from: '/pest-control/roslyn/ant-control', to: '/pest-control/roslyn/ant-control/' },
  { from: '/pest-control/garden-city/rodent-control', to: '/pest-control/garden-city/rodent-control/' },
  { from: '/pest-control/garden-city/bed-bug-treatment', to: '/pest-control/garden-city/bed-bug-treatment/' },
  { from: '/pest-control/garden-city/ant-control', to: '/pest-control/garden-city/ant-control/' },
  { from: '/pest-control/huntington/rodent-control', to: '/pest-control/huntington/rodent-control/' },
  { from: '/pest-control/huntington/bed-bug-treatment', to: '/pest-control/huntington/bed-bug-treatment/' },
  { from: '/pest-control/huntington/ant-control', to: '/pest-control/huntington/ant-control/' },
  { from: '/pest-control/lloyd-harbor/rodent-control', to: '/pest-control/lloyd-harbor/rodent-control/' },
  { from: '/pest-control/lloyd-harbor/ant-control', to: '/pest-control/lloyd-harbor/ant-control/' },
  { from: '/pest-control/northport/rodent-control', to: '/pest-control/northport/rodent-control/' },
  { from: '/pest-control/northport/ant-control', to: '/pest-control/northport/ant-control/' },
  { from: '/pest-control/commack/rodent-control', to: '/pest-control/commack/rodent-control/' },
  { from: '/pest-control/commack/ant-control', to: '/pest-control/commack/ant-control/' },
  { from: '/pest-control/cold-spring-harbor/rodent-control', to: '/pest-control/cold-spring-harbor/rodent-control/' },
  { from: '/pest-control/cold-spring-harbor/ant-control', to: '/pest-control/cold-spring-harbor/ant-control/' },
  { from: '/pest-control/oyster-bay/rodent-control', to: '/pest-control/oyster-bay/rodent-control/' },
  { from: '/pest-control/oyster-bay/ant-control', to: '/pest-control/oyster-bay/ant-control/' },
  { from: '/pest-control/locust-valley/rodent-control', to: '/pest-control/locust-valley/rodent-control/' },
  { from: '/pest-control/locust-valley/ant-control', to: '/pest-control/locust-valley/ant-control/' },
  { from: '/pest-control/glen-cove/rodent-control', to: '/pest-control/glen-cove/rodent-control/' },
  { from: '/pest-control/glen-cove/ant-control', to: '/pest-control/glen-cove/ant-control/' },
  { from: '/pest-control/port-washington/rodent-control', to: '/pest-control/port-washington/rodent-control/' },
  { from: '/pest-control/port-washington/bed-bug-treatment', to: '/pest-control/port-washington/bed-bug-treatment/' },
  { from: '/pest-control/port-washington/ant-control', to: '/pest-control/port-washington/ant-control/' },
  { from: '/pest-control/upper-east-side/rodent-control', to: '/pest-control/upper-east-side/rodent-control/' },
  { from: '/pest-control/upper-east-side/bed-bug-treatment', to: '/pest-control/upper-east-side/bed-bug-treatment/' },
  { from: '/pest-control/upper-east-side/ant-control', to: '/pest-control/upper-east-side/ant-control/' },
  { from: '/pest-control/upper-west-side/rodent-control', to: '/pest-control/upper-west-side/rodent-control/' },
  { from: '/pest-control/upper-west-side/bed-bug-treatment', to: '/pest-control/upper-west-side/bed-bug-treatment/' },
  { from: '/pest-control/tribeca/rodent-control', to: '/pest-control/tribeca/rodent-control/' },
  { from: '/pest-control/tribeca/bed-bug-treatment', to: '/pest-control/tribeca/bed-bug-treatment/' },
  { from: '/pest-control/greenwich-village/rodent-control', to: '/pest-control/greenwich-village/rodent-control/' },
  { from: '/pest-control/greenwich-village/bed-bug-treatment', to: '/pest-control/greenwich-village/bed-bug-treatment/' },
  { from: '/pest-control/park-slope/rodent-control', to: '/pest-control/park-slope/rodent-control/' },
  { from: '/pest-control/park-slope/bed-bug-treatment', to: '/pest-control/park-slope/bed-bug-treatment/' },
  { from: '/pest-control/park-slope/ant-control', to: '/pest-control/park-slope/ant-control/' },
  { from: '/pest-control/soho/rodent-control', to: '/pest-control/soho/rodent-control/' },
  { from: '/pest-control/soho/bed-bug-treatment', to: '/pest-control/soho/bed-bug-treatment/' },
  { from: '/pest-control/brooklyn-heights/rodent-control', to: '/pest-control/brooklyn-heights/rodent-control/' },
  { from: '/pest-control/brooklyn-heights/bed-bug-treatment', to: '/pest-control/brooklyn-heights/bed-bug-treatment/' },
  { from: '/pest-control/brooklyn-heights/ant-control', to: '/pest-control/brooklyn-heights/ant-control/' },
  { from: '/pest-control/williamsburg/rodent-control', to: '/pest-control/williamsburg/rodent-control/' },
  { from: '/pest-control/williamsburg/bed-bug-treatment', to: '/pest-control/williamsburg/bed-bug-treatment/' },

  // 8b · Species page -> the same market's parent service page. 73 rows.
  //      Also covers huntington-bay and huntington-village, whose matrix pages
  //      land on the Town of Huntington equivalents rather than on the hub.
  { from: '/pest-control/great-neck/house-mouse-control', to: '/pest-control/great-neck/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/great-neck/norway-rat-control', to: '/pest-control/great-neck/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/great-neck/carpenter-ant-control', to: '/pest-control/great-neck/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/syosset/house-mouse-control', to: '/pest-control/syosset/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/syosset/norway-rat-control', to: '/pest-control/syosset/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/syosset/carpenter-ant-control', to: '/pest-control/syosset/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/manhasset/house-mouse-control', to: '/pest-control/manhasset/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/manhasset/norway-rat-control', to: '/pest-control/manhasset/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/manhasset/carpenter-ant-control', to: '/pest-control/manhasset/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/roslyn/house-mouse-control', to: '/pest-control/roslyn/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/roslyn/norway-rat-control', to: '/pest-control/roslyn/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/roslyn/carpenter-ant-control', to: '/pest-control/roslyn/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/garden-city/house-mouse-control', to: '/pest-control/garden-city/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/garden-city/norway-rat-control', to: '/pest-control/garden-city/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/garden-city/carpenter-ant-control', to: '/pest-control/garden-city/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/huntington/house-mouse-control', to: '/pest-control/huntington/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/huntington/norway-rat-control', to: '/pest-control/huntington/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/huntington/carpenter-ant-control', to: '/pest-control/huntington/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/huntington-bay/rodent-control', to: '/pest-control/huntington/rodent-control/', note: 'huntington-bay folded into huntington.' },
  { from: '/pest-control/huntington-bay/bed-bug-treatment', to: '/pest-control/huntington/bed-bug-treatment/', note: 'huntington-bay folded into huntington.' },
  { from: '/pest-control/huntington-bay/house-mouse-control', to: '/pest-control/huntington/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/huntington-bay/norway-rat-control', to: '/pest-control/huntington/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/huntington-bay/carpenter-ant-control', to: '/pest-control/huntington/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/huntington-bay/ant-control', to: '/pest-control/huntington/ant-control/', note: 'huntington-bay folded into huntington.' },
  { from: '/pest-control/huntington-village/rodent-control', to: '/pest-control/huntington/rodent-control/', note: 'huntington-village folded into huntington.' },
  { from: '/pest-control/huntington-village/bed-bug-treatment', to: '/pest-control/huntington/bed-bug-treatment/', note: 'huntington-village folded into huntington.' },
  { from: '/pest-control/huntington-village/house-mouse-control', to: '/pest-control/huntington/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/huntington-village/norway-rat-control', to: '/pest-control/huntington/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/huntington-village/carpenter-ant-control', to: '/pest-control/huntington/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/huntington-village/ant-control', to: '/pest-control/huntington/ant-control/', note: 'huntington-village folded into huntington.' },
  { from: '/pest-control/lloyd-harbor/house-mouse-control', to: '/pest-control/lloyd-harbor/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/lloyd-harbor/norway-rat-control', to: '/pest-control/lloyd-harbor/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/lloyd-harbor/carpenter-ant-control', to: '/pest-control/lloyd-harbor/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/northport/house-mouse-control', to: '/pest-control/northport/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/northport/norway-rat-control', to: '/pest-control/northport/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/northport/carpenter-ant-control', to: '/pest-control/northport/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/commack/house-mouse-control', to: '/pest-control/commack/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/commack/norway-rat-control', to: '/pest-control/commack/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/commack/carpenter-ant-control', to: '/pest-control/commack/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/cold-spring-harbor/house-mouse-control', to: '/pest-control/cold-spring-harbor/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/cold-spring-harbor/norway-rat-control', to: '/pest-control/cold-spring-harbor/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/cold-spring-harbor/carpenter-ant-control', to: '/pest-control/cold-spring-harbor/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/oyster-bay/house-mouse-control', to: '/pest-control/oyster-bay/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/oyster-bay/norway-rat-control', to: '/pest-control/oyster-bay/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/oyster-bay/carpenter-ant-control', to: '/pest-control/oyster-bay/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/locust-valley/house-mouse-control', to: '/pest-control/locust-valley/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/locust-valley/norway-rat-control', to: '/pest-control/locust-valley/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/locust-valley/carpenter-ant-control', to: '/pest-control/locust-valley/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/glen-cove/house-mouse-control', to: '/pest-control/glen-cove/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/glen-cove/norway-rat-control', to: '/pest-control/glen-cove/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/glen-cove/carpenter-ant-control', to: '/pest-control/glen-cove/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/port-washington/house-mouse-control', to: '/pest-control/port-washington/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/port-washington/norway-rat-control', to: '/pest-control/port-washington/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/port-washington/carpenter-ant-control', to: '/pest-control/port-washington/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/upper-east-side/house-mouse-control', to: '/pest-control/upper-east-side/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/upper-east-side/norway-rat-control', to: '/pest-control/upper-east-side/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/upper-east-side/carpenter-ant-control', to: '/pest-control/upper-east-side/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/upper-west-side/house-mouse-control', to: '/pest-control/upper-west-side/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/upper-west-side/norway-rat-control', to: '/pest-control/upper-west-side/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/tribeca/house-mouse-control', to: '/pest-control/tribeca/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/tribeca/norway-rat-control', to: '/pest-control/tribeca/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/greenwich-village/house-mouse-control', to: '/pest-control/greenwich-village/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/greenwich-village/norway-rat-control', to: '/pest-control/greenwich-village/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/park-slope/house-mouse-control', to: '/pest-control/park-slope/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/park-slope/norway-rat-control', to: '/pest-control/park-slope/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/park-slope/carpenter-ant-control', to: '/pest-control/park-slope/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/soho/house-mouse-control', to: '/pest-control/soho/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/soho/norway-rat-control', to: '/pest-control/soho/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/brooklyn-heights/house-mouse-control', to: '/pest-control/brooklyn-heights/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/brooklyn-heights/norway-rat-control', to: '/pest-control/brooklyn-heights/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/brooklyn-heights/carpenter-ant-control', to: '/pest-control/brooklyn-heights/ant-control/', note: 'carpenter-ant-control has no matrix page in the new build; nearest equivalent is the ant-control page for the same market.' },
  { from: '/pest-control/williamsburg/house-mouse-control', to: '/pest-control/williamsburg/rodent-control/', note: 'house-mouse-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },
  { from: '/pest-control/williamsburg/norway-rat-control', to: '/pest-control/williamsburg/rodent-control/', note: 'norway-rat-control has no matrix page in the new build; nearest equivalent is the rodent-control page for the same market.' },

  // 8c · No matrix page for this market in the new build -> its market page.
  //      139 rows. Every one of these markets DOES have a /locations/ page;
  //      not one of them falls through to the home page.
  { from: '/pest-control/syosset/bed-bug-treatment', to: '/locations/syosset/', note: 'No bed-bug-treatment matrix page for syosset (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/roslyn/bed-bug-treatment', to: '/locations/roslyn/', note: 'No bed-bug-treatment matrix page for roslyn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lloyd-harbor/bed-bug-treatment', to: '/locations/lloyd-harbor/', note: 'No bed-bug-treatment matrix page for lloyd-harbor (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/centerport/rodent-control', to: '/locations/centerport/', note: 'No rodent-control matrix page for centerport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/centerport/bed-bug-treatment', to: '/locations/centerport/', note: 'No bed-bug-treatment matrix page for centerport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/centerport/house-mouse-control', to: '/locations/centerport/', note: 'No rodent-control matrix page for centerport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/centerport/norway-rat-control', to: '/locations/centerport/', note: 'No rodent-control matrix page for centerport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/centerport/carpenter-ant-control', to: '/locations/centerport/', note: 'No ant-control matrix page for centerport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/centerport/ant-control', to: '/locations/centerport/', note: 'No ant-control matrix page for centerport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/northport/bed-bug-treatment', to: '/locations/northport/', note: 'No bed-bug-treatment matrix page for northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/asharoken/rodent-control', to: '/locations/asharoken/', note: 'No rodent-control matrix page for asharoken (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/asharoken/bed-bug-treatment', to: '/locations/asharoken/', note: 'No bed-bug-treatment matrix page for asharoken (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/asharoken/house-mouse-control', to: '/locations/asharoken/', note: 'No rodent-control matrix page for asharoken (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/asharoken/norway-rat-control', to: '/locations/asharoken/', note: 'No rodent-control matrix page for asharoken (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/asharoken/carpenter-ant-control', to: '/locations/asharoken/', note: 'No ant-control matrix page for asharoken (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/asharoken/ant-control', to: '/locations/asharoken/', note: 'No ant-control matrix page for asharoken (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/eatons-neck/rodent-control', to: '/locations/eatons-neck/', note: 'No rodent-control matrix page for eatons-neck (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/eatons-neck/bed-bug-treatment', to: '/locations/eatons-neck/', note: 'No bed-bug-treatment matrix page for eatons-neck (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/eatons-neck/house-mouse-control', to: '/locations/eatons-neck/', note: 'No rodent-control matrix page for eatons-neck (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/eatons-neck/norway-rat-control', to: '/locations/eatons-neck/', note: 'No rodent-control matrix page for eatons-neck (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/eatons-neck/carpenter-ant-control', to: '/locations/eatons-neck/', note: 'No ant-control matrix page for eatons-neck (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/eatons-neck/ant-control', to: '/locations/eatons-neck/', note: 'No ant-control matrix page for eatons-neck (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/commack/bed-bug-treatment', to: '/locations/commack/', note: 'No bed-bug-treatment matrix page for commack (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/east-northport/rodent-control', to: '/locations/east-northport/', note: 'No rodent-control matrix page for east-northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/east-northport/bed-bug-treatment', to: '/locations/east-northport/', note: 'No bed-bug-treatment matrix page for east-northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/east-northport/house-mouse-control', to: '/locations/east-northport/', note: 'No rodent-control matrix page for east-northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/east-northport/norway-rat-control', to: '/locations/east-northport/', note: 'No rodent-control matrix page for east-northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/east-northport/carpenter-ant-control', to: '/locations/east-northport/', note: 'No ant-control matrix page for east-northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/east-northport/ant-control', to: '/locations/east-northport/', note: 'No ant-control matrix page for east-northport (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenlawn/rodent-control', to: '/locations/greenlawn/', note: 'No rodent-control matrix page for greenlawn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenlawn/bed-bug-treatment', to: '/locations/greenlawn/', note: 'No bed-bug-treatment matrix page for greenlawn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenlawn/house-mouse-control', to: '/locations/greenlawn/', note: 'No rodent-control matrix page for greenlawn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenlawn/norway-rat-control', to: '/locations/greenlawn/', note: 'No rodent-control matrix page for greenlawn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenlawn/carpenter-ant-control', to: '/locations/greenlawn/', note: 'No ant-control matrix page for greenlawn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenlawn/ant-control', to: '/locations/greenlawn/', note: 'No ant-control matrix page for greenlawn (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cold-spring-harbor/bed-bug-treatment', to: '/locations/cold-spring-harbor/', note: 'No bed-bug-treatment matrix page for cold-spring-harbor (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/oyster-bay/bed-bug-treatment', to: '/locations/oyster-bay/', note: 'No bed-bug-treatment matrix page for oyster-bay (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/locust-valley/bed-bug-treatment', to: '/locations/locust-valley/', note: 'No bed-bug-treatment matrix page for locust-valley (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/glen-cove/bed-bug-treatment', to: '/locations/glen-cove/', note: 'No bed-bug-treatment matrix page for glen-cove (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sea-cliff/rodent-control', to: '/locations/sea-cliff/', note: 'No rodent-control matrix page for sea-cliff (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sea-cliff/bed-bug-treatment', to: '/locations/sea-cliff/', note: 'No bed-bug-treatment matrix page for sea-cliff (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sea-cliff/house-mouse-control', to: '/locations/sea-cliff/', note: 'No rodent-control matrix page for sea-cliff (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sea-cliff/norway-rat-control', to: '/locations/sea-cliff/', note: 'No rodent-control matrix page for sea-cliff (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sea-cliff/carpenter-ant-control', to: '/locations/sea-cliff/', note: 'No ant-control matrix page for sea-cliff (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sea-cliff/ant-control', to: '/locations/sea-cliff/', note: 'No ant-control matrix page for sea-cliff (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sands-point/rodent-control', to: '/locations/sands-point/', note: 'No rodent-control matrix page for sands-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sands-point/bed-bug-treatment', to: '/locations/sands-point/', note: 'No bed-bug-treatment matrix page for sands-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sands-point/house-mouse-control', to: '/locations/sands-point/', note: 'No rodent-control matrix page for sands-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sands-point/norway-rat-control', to: '/locations/sands-point/', note: 'No rodent-control matrix page for sands-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sands-point/carpenter-ant-control', to: '/locations/sands-point/', note: 'No ant-control matrix page for sands-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/sands-point/ant-control', to: '/locations/sands-point/', note: 'No ant-control matrix page for sands-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/kings-point/rodent-control', to: '/locations/kings-point/', note: 'No rodent-control matrix page for kings-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/kings-point/bed-bug-treatment', to: '/locations/kings-point/', note: 'No bed-bug-treatment matrix page for kings-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/kings-point/house-mouse-control', to: '/locations/kings-point/', note: 'No rodent-control matrix page for kings-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/kings-point/norway-rat-control', to: '/locations/kings-point/', note: 'No rodent-control matrix page for kings-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/kings-point/carpenter-ant-control', to: '/locations/kings-point/', note: 'No ant-control matrix page for kings-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/kings-point/ant-control', to: '/locations/kings-point/', note: 'No ant-control matrix page for kings-point (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/old-westbury/rodent-control', to: '/locations/old-westbury/', note: 'No rodent-control matrix page for old-westbury (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/old-westbury/bed-bug-treatment', to: '/locations/old-westbury/', note: 'No bed-bug-treatment matrix page for old-westbury (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/old-westbury/house-mouse-control', to: '/locations/old-westbury/', note: 'No rodent-control matrix page for old-westbury (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/old-westbury/norway-rat-control', to: '/locations/old-westbury/', note: 'No rodent-control matrix page for old-westbury (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/old-westbury/carpenter-ant-control', to: '/locations/old-westbury/', note: 'No ant-control matrix page for old-westbury (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/old-westbury/ant-control', to: '/locations/old-westbury/', note: 'No ant-control matrix page for old-westbury (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/brookville/rodent-control', to: '/locations/brookville/', note: 'No rodent-control matrix page for brookville (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/brookville/bed-bug-treatment', to: '/locations/brookville/', note: 'No bed-bug-treatment matrix page for brookville (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/brookville/house-mouse-control', to: '/locations/brookville/', note: 'No rodent-control matrix page for brookville (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/brookville/norway-rat-control', to: '/locations/brookville/', note: 'No rodent-control matrix page for brookville (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/brookville/carpenter-ant-control', to: '/locations/brookville/', note: 'No ant-control matrix page for brookville (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/brookville/ant-control', to: '/locations/brookville/', note: 'No ant-control matrix page for brookville (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lattingtown/rodent-control', to: '/locations/lattingtown/', note: 'No rodent-control matrix page for lattingtown (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lattingtown/bed-bug-treatment', to: '/locations/lattingtown/', note: 'No bed-bug-treatment matrix page for lattingtown (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lattingtown/house-mouse-control', to: '/locations/lattingtown/', note: 'No rodent-control matrix page for lattingtown (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lattingtown/norway-rat-control', to: '/locations/lattingtown/', note: 'No rodent-control matrix page for lattingtown (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lattingtown/carpenter-ant-control', to: '/locations/lattingtown/', note: 'No ant-control matrix page for lattingtown (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/lattingtown/ant-control', to: '/locations/lattingtown/', note: 'No ant-control matrix page for lattingtown (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/upper-west-side/carpenter-ant-control', to: '/locations/upper-west-side/', note: 'No ant-control matrix page for upper-west-side (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/upper-west-side/ant-control', to: '/locations/upper-west-side/', note: 'No ant-control matrix page for upper-west-side (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/tribeca/carpenter-ant-control', to: '/locations/tribeca/', note: 'No ant-control matrix page for tribeca (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/tribeca/ant-control', to: '/locations/tribeca/', note: 'No ant-control matrix page for tribeca (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenwich-village/carpenter-ant-control', to: '/locations/greenwich-village/', note: 'No ant-control matrix page for greenwich-village (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/greenwich-village/ant-control', to: '/locations/greenwich-village/', note: 'No ant-control matrix page for greenwich-village (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/astoria/rodent-control', to: '/locations/astoria/', note: 'No rodent-control matrix page for astoria (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/astoria/bed-bug-treatment', to: '/locations/astoria/', note: 'No bed-bug-treatment matrix page for astoria (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/astoria/house-mouse-control', to: '/locations/astoria/', note: 'No rodent-control matrix page for astoria (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/astoria/norway-rat-control', to: '/locations/astoria/', note: 'No rodent-control matrix page for astoria (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/astoria/carpenter-ant-control', to: '/locations/astoria/', note: 'No ant-control matrix page for astoria (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/astoria/ant-control', to: '/locations/astoria/', note: 'No ant-control matrix page for astoria (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/central-park-south/rodent-control', to: '/locations/central-park-south/', note: 'No rodent-control matrix page for central-park-south (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/central-park-south/bed-bug-treatment', to: '/locations/central-park-south/', note: 'No bed-bug-treatment matrix page for central-park-south (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/central-park-south/house-mouse-control', to: '/locations/central-park-south/', note: 'No rodent-control matrix page for central-park-south (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/central-park-south/norway-rat-control', to: '/locations/central-park-south/', note: 'No rodent-control matrix page for central-park-south (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/central-park-south/carpenter-ant-control', to: '/locations/central-park-south/', note: 'No ant-control matrix page for central-park-south (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/central-park-south/ant-control', to: '/locations/central-park-south/', note: 'No ant-control matrix page for central-park-south (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/hudson-yards/rodent-control', to: '/locations/hudson-yards/', note: 'No rodent-control matrix page for hudson-yards (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/hudson-yards/bed-bug-treatment', to: '/locations/hudson-yards/', note: 'No bed-bug-treatment matrix page for hudson-yards (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/hudson-yards/house-mouse-control', to: '/locations/hudson-yards/', note: 'No rodent-control matrix page for hudson-yards (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/hudson-yards/norway-rat-control', to: '/locations/hudson-yards/', note: 'No rodent-control matrix page for hudson-yards (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/hudson-yards/carpenter-ant-control', to: '/locations/hudson-yards/', note: 'No ant-control matrix page for hudson-yards (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/hudson-yards/ant-control', to: '/locations/hudson-yards/', note: 'No ant-control matrix page for hudson-yards (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/soho/carpenter-ant-control', to: '/locations/soho/', note: 'No ant-control matrix page for soho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/soho/ant-control', to: '/locations/soho/', note: 'No ant-control matrix page for soho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/noho/rodent-control', to: '/locations/noho/', note: 'No rodent-control matrix page for noho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/noho/bed-bug-treatment', to: '/locations/noho/', note: 'No bed-bug-treatment matrix page for noho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/noho/house-mouse-control', to: '/locations/noho/', note: 'No rodent-control matrix page for noho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/noho/norway-rat-control', to: '/locations/noho/', note: 'No rodent-control matrix page for noho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/noho/carpenter-ant-control', to: '/locations/noho/', note: 'No ant-control matrix page for noho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/noho/ant-control', to: '/locations/noho/', note: 'No ant-control matrix page for noho (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/flatiron-nomad/rodent-control', to: '/locations/flatiron-nomad/', note: 'No rodent-control matrix page for flatiron-nomad (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/flatiron-nomad/bed-bug-treatment', to: '/locations/flatiron-nomad/', note: 'No bed-bug-treatment matrix page for flatiron-nomad (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/flatiron-nomad/house-mouse-control', to: '/locations/flatiron-nomad/', note: 'No rodent-control matrix page for flatiron-nomad (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/flatiron-nomad/norway-rat-control', to: '/locations/flatiron-nomad/', note: 'No rodent-control matrix page for flatiron-nomad (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/flatiron-nomad/carpenter-ant-control', to: '/locations/flatiron-nomad/', note: 'No ant-control matrix page for flatiron-nomad (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/flatiron-nomad/ant-control', to: '/locations/flatiron-nomad/', note: 'No ant-control matrix page for flatiron-nomad (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/dumbo/rodent-control', to: '/locations/dumbo/', note: 'No rodent-control matrix page for dumbo (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/dumbo/bed-bug-treatment', to: '/locations/dumbo/', note: 'No bed-bug-treatment matrix page for dumbo (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/dumbo/house-mouse-control', to: '/locations/dumbo/', note: 'No rodent-control matrix page for dumbo (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/dumbo/norway-rat-control', to: '/locations/dumbo/', note: 'No rodent-control matrix page for dumbo (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/dumbo/carpenter-ant-control', to: '/locations/dumbo/', note: 'No ant-control matrix page for dumbo (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/dumbo/ant-control', to: '/locations/dumbo/', note: 'No ant-control matrix page for dumbo (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cobble-hill/rodent-control', to: '/locations/cobble-hill/', note: 'No rodent-control matrix page for cobble-hill (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cobble-hill/bed-bug-treatment', to: '/locations/cobble-hill/', note: 'No bed-bug-treatment matrix page for cobble-hill (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cobble-hill/house-mouse-control', to: '/locations/cobble-hill/', note: 'No rodent-control matrix page for cobble-hill (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cobble-hill/norway-rat-control', to: '/locations/cobble-hill/', note: 'No rodent-control matrix page for cobble-hill (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cobble-hill/carpenter-ant-control', to: '/locations/cobble-hill/', note: 'No ant-control matrix page for cobble-hill (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/cobble-hill/ant-control', to: '/locations/cobble-hill/', note: 'No ant-control matrix page for cobble-hill (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/williamsburg/carpenter-ant-control', to: '/locations/williamsburg/', note: 'No ant-control matrix page for williamsburg (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/williamsburg/ant-control', to: '/locations/williamsburg/', note: 'No ant-control matrix page for williamsburg (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/whitestone/rodent-control', to: '/locations/whitestone/', note: 'No rodent-control matrix page for whitestone (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/whitestone/bed-bug-treatment', to: '/locations/whitestone/', note: 'No bed-bug-treatment matrix page for whitestone (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/whitestone/house-mouse-control', to: '/locations/whitestone/', note: 'No rodent-control matrix page for whitestone (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/whitestone/norway-rat-control', to: '/locations/whitestone/', note: 'No rodent-control matrix page for whitestone (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/whitestone/carpenter-ant-control', to: '/locations/whitestone/', note: 'No ant-control matrix page for whitestone (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/whitestone/ant-control', to: '/locations/whitestone/', note: 'No ant-control matrix page for whitestone (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/malba/rodent-control', to: '/locations/malba/', note: 'No rodent-control matrix page for malba (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/malba/bed-bug-treatment', to: '/locations/malba/', note: 'No bed-bug-treatment matrix page for malba (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/malba/house-mouse-control', to: '/locations/malba/', note: 'No rodent-control matrix page for malba (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/malba/norway-rat-control', to: '/locations/malba/', note: 'No rodent-control matrix page for malba (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/malba/carpenter-ant-control', to: '/locations/malba/', note: 'No ant-control matrix page for malba (market not yet research-gated in). Market page is the nearest local equivalent.' },
  { from: '/pest-control/malba/ant-control', to: '/locations/malba/', note: 'No ant-control matrix page for malba (market not yet research-gated in). Market page is the nearest local equivalent.' },

  // -------------------------------------------------------------------------
  // 9 · THE BLOG — 7 posts and an index.
  //
  //     MOVING TARGET, checked twice. On the first pass the new build had no
  //     blog at all. Mid-task another builder added src/pages/blog/index.astro,
  //     src/pages/blog/[post].astro and the cluster taxonomy in blog.ts; a
  //     rebuild confirms /blog/ now builds, so the index has a real home.
  //
  //     src/content/blog/ is EMPTY. [post].astro generates zero pages, by its
  //     own design note ("generates zero pages when the collection is empty,
  //     which is a clean build and not an error"). So the hub exists and not
  //     one of the seven posts does. Each post is therefore still sent to the
  //     page that covers its subject, chosen from the post's content rather
  //     than its slug — not to the empty hub, which would be a worse landing
  //     than a topical page for every one of them.
  //
  //     RECHECK BEFORE CUTOVER. If posts land in src/content/blog/ carrying
  //     these slugs, the matching rows below become redirects away from pages
  //     that now exist and must be deleted. Group 9 is the one group in this
  //     file another builder can invalidate without touching this file.
  // -------------------------------------------------------------------------
  { from: '/blog', to: '/blog/', note: 'The new blog hub builds. Slash only.' },
  { from: '/blog/the-ants-are-coming-how-to-manage-ant-infestations-this-spring', to: '/blog/how-wood-gets-wet/', note: 'Superseded by our own post on how wood gets wet enough for carpenter ants. Better match than the spoke.' },
  { from: '/blog/not-all-effective-pest-control-looks-like-spray-and-pray', to: '/blog/why-buildings-open-up/', note: 'The methodology argument, now made properly at post length.' },
  { from: '/blog/rodenticides-a-tool-not-the-strategy', to: '/pest-control/rodent-control/', note: 'Rodenticide policy within a rodent programme.' },
  { from: '/blog/cockroach-control-new-york-winter-activity', to: '/blog/cockroach-source-apartment/', note: 'Superseded by the post on tracing a cockroach line back to its source apartment.' },
  { from: '/blog/cockroach-infestations-new-york', to: '/commercial/property-management-pest-control/', note: 'Written for property managers and headlined as such — the commercial vertical, not the consumer spoke.' },
  { from: '/blog/understanding-rat-behavior-in-winter-how-they-burrow-and-thrive', to: '/pest-library/norway-rat/', note: 'Behaviour and biology rather than treatment — the library profile, not the service spoke.' },
  { from: '/blog/yellowjackets-wasps', to: '/blog/overwintering-wasp-queens/', note: 'Superseded by the overwintering-queens post, which explains what sets next summer nest counts.' },

  // -------------------------------------------------------------------------
  // 10 · THE NYC RAT ACTIVITY REPORT — 11 URLs. Nothing in the new build.
  //
  //      A real annual data asset: 311 rodent complaint counts for NYC, a
  //      five-year trend, a page per borough, a worst-neighbourhoods ranking,
  //      and an archive page per year back to 2021. This is the single most
  //      valuable thing on the live site that the new build does not reproduce,
  //      and it is the kind of page that earns links on its own. See the orphan
  //      block below — it should be rebuilt, not redirected away.
  //
  //      Until it is, everything points at /locations/nyc/, the NYC regional
  //      hub. It is the only page in the new build that is about rodents in
  //      New York City as a place. Note that two of the borough pages cover
  //      boroughs the new build has no market in at all.
  // -------------------------------------------------------------------------
  { from: '/nyc-rat-activity-report', to: '/locations/nyc/', note: 'Data asset with no equivalent in the new build. NYC regional hub is the nearest subject match. REBUILD CANDIDATE.' },
  { from: '/nyc-rat-activity-report/worst-neighborhoods', to: '/locations/nyc/', note: 'Neighbourhood ranking; no equivalent.' },
  { from: '/nyc-rat-activity-report/manhattan', to: '/locations/nyc/', note: 'Borough breakdown; no borough-level page exists in the new build.' },
  { from: '/nyc-rat-activity-report/brooklyn', to: '/locations/nyc/', note: 'Borough breakdown; no borough-level page exists in the new build.' },
  { from: '/nyc-rat-activity-report/queens', to: '/locations/nyc/', note: 'Borough breakdown; no borough-level page exists in the new build.' },
  { from: '/nyc-rat-activity-report/bronx', to: '/locations/nyc/', note: 'The new build has no Bronx market at all.' },
  { from: '/nyc-rat-activity-report/staten-island', to: '/locations/nyc/', note: 'The new build has no Staten Island market at all.' },
  { from: '/nyc-rat-activity-report/2021', to: '/locations/nyc/', note: '2021 archive edition; no equivalent.' },
  { from: '/nyc-rat-activity-report/2022', to: '/locations/nyc/', note: '2022 archive edition; no equivalent.' },
  { from: '/nyc-rat-activity-report/2023', to: '/locations/nyc/', note: '2023 archive edition; no equivalent.' },
  { from: '/nyc-rat-activity-report/2024', to: '/locations/nyc/', note: '2024 archive edition; no equivalent.' },

  // -------------------------------------------------------------------------
  // 11 · About and Partners.
  //
  // /partners is no longer here. It was mapped to /credentials/ and flagged in
  // the orphan notes below as the weakest row in this file; the page it wanted
  // now exists at /partners/, so the row would resolve to a page this build
  // emits and the clash guard in build-redirects.mjs would stop the build —
  // correctly. trailingSlash normalisation takes /partners to /partners/ on its
  // own, so no redirect is needed for it at all.
  // -------------------------------------------------------------------------
  { from: '/about', to: '/ryan-katz/', note: 'The live About page is company history (Arnold Katz, 1983, entomology degree) plus owner bio. /ryan-katz/ carries both; /credentials/ carries the credential list it ends on and should be linked from there.' },
];


/* ===========================================================================
 * FLAGS FOR WHOEVER RUNS THE CUTOVER
 * ===========================================================================
 *
 * ---------------------------------------------------------------------------
 * A · NOT REACHED, AND WHY
 * ---------------------------------------------------------------------------
 * /preview/  and  /portal
 *   Both are Disallow: in the live robots.txt. Not fetched — the brief was
 *   public pages only, and a Disallow is the site telling crawlers not to.
 *   Neither appears in the sitemap and neither is linked from any page crawled.
 *   /portal in particular reads like a customer login. UNMAPPED on purpose:
 *   find out from Ryan what they are before deciding. If /portal is a live
 *   customer login backed by a third-party system, it may need to keep
 *   resolving at cutover rather than being redirected anywhere.
 *
 * Sitemap element count
 *   The sitemap is a single flat <urlset> too large to extract in one pass, so
 *   it was read in slices (by section, then by service). Counts returned by
 *   successive reads disagreed by one or two on four of the six matrix
 *   services, and one read did not show /pest-control/great-neck/rodent-control
 *   while another showed great-neck for all five other services.
 *
 *   Resolved by mapping the FULL 44 x 6 grid rather than the observed set. A
 *   redirect rule whose source URL never existed never fires, so an extra row
 *   is free; a missing row is a 404 on a page that was ranking. If one or two
 *   of the 264 matrix rows are for URLs the live site never served, that is the
 *   intended trade and not an error.
 *
 * ---------------------------------------------------------------------------
 * B · ORPHANS — live content with no home in the new build
 *     This is the part worth acting on, not just wiring.
 * ---------------------------------------------------------------------------
 * 1. THE NYC RAT ACTIVITY REPORT (11 URLs). The biggest gap by a distance.
 *    An annual 311-data report with borough pages, a neighbourhood ranking and
 *    four years of archives. It is genuinely useful, it is not marketing copy,
 *    and it is exactly the sort of page local press and other sites link to.
 *    Nothing in the new build resembles it. Everything currently lands on
 *    /locations/nyc/, which is honest but is a demotion from a data report to a
 *    service page. RECOMMENDATION: rebuild it before cutover if there is time,
 *    or immediately after, and restore the original URLs rather than new ones.
 *
 * 2. THE SEVEN BLOG POSTS. The hub was rescued mid-task — /blog/ now builds —
 *    but src/content/blog/ is empty, so every one of the seven live posts is
 *    still homeless. Several are the firm's actual argument in its own voice
 *    ("Rodenticides: A Tool, Not The Strategy", "Not All Effective Pest Control
 *    Looks Like Spray And Pray"). Group 9 sends each somewhere defensible, but
 *    the writing itself is lost unless it is ported.
 *    RECOMMENDATION: the seven map cleanly onto the eight clusters in blog.ts —
 *    rodent-pressure, building-envelope, nesting-season and service-cores
 *    between them cover all seven subjects. Porting them is a content job, not
 *    a taxonomy problem, and it would let seven rows come out of group 9.
 *
 * 3. /partners. Names three specific firms and what each one does: Coastal
 *    Canine and Pest Solutions (trains and supports Hugo and Mia), New York
 *    Exterminating (interior insect work in Brooklyn), and Xcluder (exclusion
 *    materials). The new build mentions "partner firm" as a category in the
 *    wildlife and rodent copy and mentions Xcluder as a material, but names no
 *    firm and has no page for this. Given Part 1 doctrine on honesty, a page
 *    saying who actually does the interior insect work is arguably load-bearing
 *    rather than optional. RECOMMENDATION: raise it. Currently mapped to
 *    /credentials/, which is the weakest surviving row in this file.
 *
 * ---------------------------------------------------------------------------
 * C · WHAT THE LIVE SITE COVERS THAT THE NEW BUILD DOES NOT
 * ---------------------------------------------------------------------------
 * · Species-level ANT and COCKROACH service pages. The live site sells
 *   odorous house ant, pavement ant, pharaoh ant, citronella ant, german
 *   cockroach and american cockroach as their own service pages. The new build
 *   has none of them as services. Four of the six have library profiles;
 *   citronella ant has nothing anywhere. If any of these were earning traffic,
 *   the new build's problemPages list is one entry (carpenter-ant-control)
 *   where the live site had five ant pages.
 *
 * · A CANINE BED BUG page has no live predecessor. Not a loss — a gain — but
 *   worth knowing that nothing redirects into it, so it starts from zero.
 *
 * · TWO NYC BOROUGHS. The rat report has pages for the Bronx and Staten
 *   Island. The new build has 17 NYC markets and not one in either borough.
 *   That may be correct (they may not be served), but the live site was
 *   publishing content about them, so it should be a decision rather than an
 *   omission.
 *
 * · GEOGRAPHY IS OTHERWISE A NET GAIN. Every live market except the two Q18
 *   folds survives, and the new build adds seven Huntington-area and Suffolk
 *   markets the live site never had. Nothing was dropped.
 *
 * · The live home page and /about both say "27 locations served" while the
 *   live site publishes 44 location pages. Not a redirect problem, but the
 *   number is wrong on the live site today and should not be carried over.
 *
 * ---------------------------------------------------------------------------
 * D · URL-STRUCTURE COMPLICATIONS
 * ---------------------------------------------------------------------------
 * 1. TRAILING SLASHES. Covered at the top of this file. Every live URL lacks
 *    one, every new URL has one, so nothing matches without a rule. 110 of the
 *    352 rows here exist purely to survive that. Whatever global normalisation
 *    the redirect layer applies, the specific rows in this file must be
 *    evaluated first, or the two Huntington folds and every group 8b/8c row
 *    will normalise into a 404 instead of matching.
 *
 * 2. THE NAMESPACE IS SHARED. /pest-control/<x> is a service on the live site
 *    and /pest-control/<city>/<service> is a matrix page, exactly as in the new
 *    build. assertSlugNamespacesDisjoint() in services.ts already guards this
 *    for the new build. It matters here too: a redirect written as a wildcard
 *    over /pest-control/:slug would swallow both. Match on full paths.
 *
 * 3. THE MATRIX IS 264 ROWS AND WILL GROW BACK. 139 of them point at market
 *    pages today only because those markets have not cleared the research gate.
 *    As markets are researched and their matrix pages build, those rows become
 *    wrong — they will redirect away from a page that now exists. Re-derive
 *    group 8 from the built path list on every deploy that adds research, or
 *    add a build-time guard in the shape of assertRetiredUrlsNotBuilt() in
 *    services.ts, which is exactly the failure mode it was written for.
 *
 * 4. NO www / non-www EVIDENCE EITHER WAY. Only the apex was tested. Confirm
 *    which host is canonical today and that both still resolve after cutover.
 *
 * 5. EVERY DESTINATION IN THIS FILE WAS CHECKED AGAINST dist/, TWICE. The
 *    second check followed a rebuild after another builder added the blog
 *    route mid-task, which turned one row from a compromise into an exact
 *    match. 352 rows, 352 destinations that exist, zero duplicate sources, and
 *    zero rows whose `from` collides with a path the build emits — that last
 *    one matters, because a redirect that shadows a real page is the failure
 *    assertRetiredUrlsNotBuilt() exists to catch. Re-run those four checks
 *    against dist/ immediately before cutover; the build is a moving target
 *    and this file is a snapshot of it.
 *
 *    The check, in full:
 *      · every `to` is in the built path set
 *      · no `to` is a 404
 *      · no `from` appears twice
 *      · no `from` is itself a built path
 * ===========================================================================
 */

