import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Commack (Suffolk County, hamlet and CDP straddling the Towns of
 * Huntington and Smithtown).
 *
 * The stand-out fact: 72.3 per cent of Commack's housing went up in two
 * decades, the 1950s and 1960s, and 44.1 per cent of it in the 1960s alone.
 * The hamlet went from fewer than 800 residents in 1954 to 38,000 by 1966
 * after the golden nematode ended potato farming. Twelve square miles, all
 * land, no surface water. Every claim below traces to a fetched source.
 */
export const commack: MarketResearch = {
  verified: true,
  housing:
    'Commack records a median construction year of 1964 across roughly 11,878 housing units, and the concentration sits a decade later than the rest of the North Shore: about 5,233 units — 44.1 per cent — were built between 1960 and 1969, with a further 3,353 units, 28.2 per cent, in the 1950s. Only 133 units, 1.1 per cent, predate 1940. Roughly 93.3 per cent are detached single-family houses and 93.7 per cent of occupied units are owner-occupied, leaving around 733 renter-occupied units in the whole hamlet. Vacancy runs at 2.0 per cent.',
  structuralNotes: [
    'Commack is an unincorporated hamlet and census-designated place, not a village and not a city, and it is split between two towns — the Town of Huntington and the Town of Smithtown — so building permits, code enforcement and property standards for two neighboring houses on the same street can sit with two different municipal building departments.',
    'The census area covers 12.0 square miles and the whole of it is land. There is no harbor, no tidal creek, no pond and no shoreline anywhere in the CDP, which removes the single largest moisture driver present in the North Shore harbor communities and replaces it with a purely rainfall-and-grading problem.',
    'Farming ended abruptly rather than gradually: USDA agricultural agents found the golden nematode in Commack potato fields in the early 1950s and put the growers out of the potato business, releasing large blocks of flat open farmland to subdivision all at once. About thirty farms had worked the area, ranging from forty or fifty acres to over two thousand.',
    'The build-out figures are extraordinary. In 1954 Commack had one school, 256 pupils and a total population of under 800. By 1966 it had 17 schools, 11,368 pupils and 38,000 residents. A hamlet of thirty-six thousand people was assembled in roughly twelve years.',
    'That speed is why the stock is so uniform. Capes, ranches and split-levels built by the same trades to the same details within a few seasons of each other fail in the same places, in the same order — the band joist at the top of the foundation wall, the garage-to-house junction, the utility penetrations cut in the field, the shallow soffit with a continuous eave.',
    'Sixty years of retrofit now sits on top of that original fabric. Dormers, rear extensions, finished basements, replacement windows, added insulation, upgraded services and converted garages all meet a 1960s frame at a seam, and the seam is the thing that leaks.',
    'The original settlement sat in a hollow formed by the gently rolling hills around the crossing of Jericho Turnpike and Commack Road / Townline Road, on flat land with rich soil and thick oak forest. A handful of pre-subdivision buildings survive inside the suburb: the Commack Methodist Church of 1789, described as the oldest Methodist church building in New York State, the Carll S. Burr Mansion of about 1830, remodelled 1881 to 1885, the Harned Brothers Sawmill of the 1840s, and the Marion Carll Farm, whose 1860 farmhouse and outbuildings — privy, garage, smokehouse, milk house, horse barn and carriage house, sheep barn and four smaller barns — were added to the National Register of Historic Places in 1979 and subsequently fell into disrepair.',
    'Commack sits on the sole-source aquifer system that supplies all of Nassau and Suffolk. Precipitation averaging about 44 inches a year infiltrates through hundreds of feet of closely packed sand, gravel and pebbles to reach the Upper Glacial aquifer, so on this ground water leaves the surface quickly where the soil is undisturbed and pools where sixty years of construction fill, patios and driveways have interrupted it.',
    'Roughly 74 per cent of Suffolk County remains unsewered, with about 360,000 cesspools and septic systems in the county. A large share of the mid-century residential stock therefore has an on-site wastewater system and a set of buried structures in the yard that a sewered village does not have.',
    'The commercial footprint is linear rather than clustered: Jericho Turnpike, Veterans Highway and Commack Road carry the shopping centers and food premises, and the hamlet is also cut by the Long Island Expressway, the Northern State Parkway and the Sunken Meadow State Parkway. The historic Long Island Motor Parkway ran through here too, its spur to NY 25 becoming Harned Road.',
    'Hoyt Farm Park Preserve covers 133 acres inside the hamlet, carrying dogwood, oak and hickory woodland, a restoration apple orchard, open fields and a vernal pond — a block of genuine habitat pressed directly against post-war subdivision.',
  ],
  pestPressures: [
    {
      pest: 'House mice',
      driver:
        'Eleven thousand near-identical post-war houses whose band joists and service penetrations were never sealed, with mature foundation plantings now grown tight against them. Cornell records that mice produce between 50 and 60 droppings a day and leave sebum marks — an oily brown residue — on pathways they use frequently, so a new population is legible within a fortnight.',
      season: 'Autumn ingress, October into December',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Six decades of grade build-up, mulch beds, landscape timbers, deck posts and buried construction debris on 1960s foundations. Cornell Cooperative Extension asks for 8 inches of clean concrete between baseboard and soil and a minimum of 3 inches between wood siding and soil, and notes termites favor heat from furnaces, chimneys and hot water pipes in winter — which on a slab-and-crawl suburb means the utility corner is the warm corner.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Not the pre-1940 problem it is in the harbor villages, but a real one on rear additions, deck ledgers and converted garages where an original wall was opened and the flashing improvised. The Northeastern IPM Center notes carpenter ants prefer hollow, decaying wood because it is easier to excavate, favor an entryway through a damp wooden window or door sill, and forage as far as 300 feet from the nest.',
      season: 'April through September',
    },
    {
      pest: 'Gray squirrels and raccoons',
      driver:
        'Mature planted street trees on a grid that was bare farmland in 1955 now overhang shallow post-war soffits, and Cornell notes many pests reach roofs by natural bridges from branches touching the building. Sixty-year-old aluminum soffit and fascia has usually lost its fixings at the corners.',
      season: 'Late winter and late summer denning',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'No marsh and no shoreline, so the sources are entirely artificial and local: Suffolk County has documented catch basins as problem mosquito breeding sites and its long-term plan calls for enhanced catch basin larviciding plus extensive source reduction to cut upland breeding of amplification and bridge vectors. On residential lots the containers are gutters, tarpaulins, pool covers, wheelbarrows and planter saucers.',
      season: 'Late May through September',
    },
    {
      pest: 'Norway rats',
      driver:
        'Concentrated along the Jericho Turnpike, Commack Road and Veterans Highway commercial strips rather than distributed through the residential grid — shopping-center refuse enclosures and food premises with their own service yards, backing directly onto houses.',
      season: 'Pressure rises through autumn and winter',
    },
  ],
  landmarks: [
    'Hoyt Farm Park Preserve, 133 acres of woodland, orchard and open field',
    'Commack Methodist Church and Cemetery of 1789',
    'The Marion Carll Farm, 1860 farmhouse and outbuildings, NRHP-listed 1979',
    'The Carll S. Burr Mansion, built about 1830 and remodelled 1881–1885',
    'The Harned Brothers Sawmill of the 1840s',
    'The Jericho Turnpike commercial corridor',
    'The former Long Island Motor Parkway alignment, surviving as Harned Road',
    'The site of the Long Island Arena, demolished 1996',
  ],
  waterways: [
    'None within the census area — 12.0 square miles, all land',
    'The Upper Glacial aquifer beneath the hamlet, part of the Nassau–Suffolk sole source aquifer system',
  ],
  neighborhoods: [
    'Commack Corners at Jericho Turnpike and Commack Road',
    'The Huntington-side streets west of Townline Road',
    'The Smithtown-side streets east of Townline Road',
    'Harned Road and the former Motor Parkway alignment',
    'The Veterans Highway corridor',
    'Hoyt Farm and the surrounding subdivisions',
    'Vanderbilt Parkway and the southern subdivisions',
    'The Jericho Turnpike commercial strip',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Commack,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Commack-Demographics.html',
    'https://newyork.hometownlocator.com/ny/suffolk/commack.cfm',
    'https://commackcommunityalliance.com/history-of-commack/',
    'https://cooperatornews.com/article/cross-roads-village-to-a-modern-suburbia',
    'https://en.wikipedia.org/wiki/Marion_Carll_Farm',
    'https://www.iloveny.com/listing/hoyt-farm-park-preserve/28807/',
    'https://en.wikipedia.org/wiki/Ronkonkoma_Moraine',
    'https://www.nswcawater.org/water_facts/our-long-island-aquifers-the-basics/',
    'https://www.pinebarrens.org/suffolk-officials-unveil-4-billion-plan-to-fight-nitrogen-pollution-in-surface-waters/',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
  ],
};
