import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Syosset (Nassau County, hamlet and CDP, Town of Oyster Bay).
 *
 * The stand-out fact: 54.9 per cent of Syosset's housing units were built in a
 * single decade, the 1950s, and the CDP contains zero square miles of surface
 * water. It is the inland control case against four harbour communities.
 * Every claim below traces to a fetched source.
 */
export const syosset: MarketResearch = {
  verified: true,
  housing:
    'Syosset records a median construction year of 1958 across roughly 6,164 housing units, and the concentration is extreme: about 3,385 units — 54.9 per cent — were built between 1950 and 1959, with a further 926 in the 1960s. Only 222 units, 3.6 per cent, date from 1939 or earlier. Roughly 91.9 per cent are detached houses and 92.4 per cent are owner-occupied. The Locust Grove section alone, absorbed into Syosset for the 1990 census, holds about 1,465 units built in the 1950s and is 98.7 per cent detached houses.',
  structuralNotes: [
    'Syosset is an unincorporated hamlet in the Town of Oyster Bay covering 5.0 square miles — all land, with a water area of zero. It is the only market in this North Shore set with no shoreline, no harbour and no tidal influence.',
    'The 1950s concentration means a hamlet of near-identical assemblies: post-war capes, ranches and split-levels built to the same details, by the same trades, in the same few years. The failure points repeat from house to house.',
    'Houses of that era typically sit on a poured foundation with a shallow basement or a crawlspace, carry a low-slope or moderately pitched roof with a shallow soffit and continuous eave, and were built before any modern air-sealing practice — so the band joist at the top of the foundation wall is usually the first uncontrolled opening.',
    'Sixty to seventy years of retrofit sit on top of that original fabric: added insulation, replacement windows, upgraded services, finished basements, dormers and rear extensions. Each retrofit meets the 1950s structure at a seam.',
    'The land was farmland before it was subdivision — a pickle factory operated south of the railway station by 1890, with farmers profiting from cucumber and cabbage crops until a blight ended the industry, and Gold Coast estates occupied much of the rest until the Depression. The subdivisions were laid over that ground from the 1940s onward.',
    'The Long Island Rail Road opened a station on Jackson Avenue in 1854 and the name became official in 1855 with the first post office; the hamlet was originally called East Woods and was purchased from the Matinecock in 1648 by Robert Williams.',
    'Stillwell Woods Preserve, 270 acres of old field and oak barrens carrying the Nassau–Suffolk Greenbelt Trail, sits on the hamlet’s eastern edge — an unusually dry, sandy habitat pressed against post-war subdivision.',
    'Roughly 4.1 per cent of housing units are vacant, and the recent additions — 276 units built in the 2010s and 148 in the 2000s — are largely infill and townhouse product on a grid that was finished sixty years ago.',
  ],
  pestPressures: [
    {
      pest: 'House mice',
      driver:
        'A uniform stock of post-war houses whose band joist and utility penetrations were never sealed, on dry sandy ground with mature landscaping now grown against foundations. Cornell notes a mouse produces fifty to sixty droppings a day and leaves sebum marks along routes it uses frequently.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Seventy years of grade build-up, mulch beds, landscape timbers and deck posts on 1950s foundations that were built with minimal clearance to begin with; Cornell Cooperative Extension calls for at least three inches between wood siding or skirting and soil, and notes termites favour heat from furnaces, chimneys and hot water pipes in winter.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Shallow soffits and continuous eaves over 1950s framing, with mature canopy planted at subdivision time now overhanging roofs and loading gutters; the Northeastern IPM Center notes carpenter ants prefer hollow, decaying wood because it is easier to excavate and the moisture helps larvae survive.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Pavement and odorous house ants',
      driver:
        'Miles of 1950s concrete walkway, patio slab and driveway apron on sandy soil, with settlement joints that open over decades and give colonies a protected, warm, dry nesting substrate directly against the house.',
      season: 'Spring through autumn',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'With no surface water in the CDP, the habitat is entirely artificial: street basins, sumps, gutters, tarpaulins and containers on residential lots. Nassau County monitors thousands of street basins, sumps and ponds and runs 44 trap sites countywide for West Nile virus surveillance.',
      season: 'Late spring through early autumn',
    },
    {
      pest: 'Grey squirrels and raccoons',
      driver:
        'Sixty-year-old street trees now taller than the houses beneath them, with shallow soffit returns, roof vents and chimneys that were built without animal-resistant covers. Cornell recommends animal-resistant building vents and chimney covers as the durable fix.',
      season: 'Late winter denning and late summer dispersal',
    },
  ],
  landmarks: [
    'Syosset LIRR station, on the line whose Jackson Avenue station opened in 1854',
    'Stillwell Woods Preserve, 270 acres of old field and oak barrens on the Nassau–Suffolk Greenbelt Trail',
    'Syosset-Woodbury Community Park',
    'The Jericho Turnpike and Underhill Boulevard commercial corridors',
    'Robbins Lane Shopping Center and Syosset Plaza',
    'Syosset Public Library',
    'The Syosset Fire Department, founded in 1915',
  ],
  waterways: [
    'None within the CDP — Syosset has a water area of zero square miles',
    'Street basins and sumps monitored by Nassau County',
  ],
  neighborhoods: [
    'Locust Grove',
    'Berry Hill',
    'North Syosset',
    'Split Rock',
    'South Woods',
    'Jackson Avenue',
    'Underhill Boulevard',
    'Robbins Lane',
    'Cold Spring Road',
    'Syosset Woods',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Syosset,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Syosset-Demographics.html',
    'https://newyork.hometownlocator.com/ny/nassau/syosset.cfm',
    'https://www.longislandpress.com/2015/09/04/glimpse-syossets-storied-past/',
    'https://www.city-data.com/neighborhood/Locust-Grove-Syosset-NY.html',
    'https://www.nassaucountyny.gov/2908/Stillwell-Woods-Preserve',
    'https://syossetoysterbayneighborhood.org/living-in-syosset-ny-a-neighbor-s-guide-to-community-comfort-and-convenience/',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
  ],
};
