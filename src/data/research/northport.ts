import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Northport (Suffolk County, Village in the Town of Huntington).
 *
 * The stand-out fact: Northport is an incorporated village (1894, the first in
 * the Town of Huntington) built around a working harbour, with 28.5 per cent of
 * its housing predating 1940 and a Board of Architectural and Historic Review
 * that governs exterior materials. Every claim below traces to a fetched source.
 */
export const northport: MarketResearch = {
  verified: true,
  housing:
    'The Northport census area records a median construction year of 1957 across roughly 3,230 housing units, but the distribution is bimodal rather than centred: about 920 units — 28.5 per cent — date from 1939 or earlier, and a further 584 were built in the 1950s. Around 80.6 per cent are detached single-family houses and 85.9 per cent are owner-occupied, leaving roughly 433 renter-occupied units concentrated near the village centre.',
  structuralNotes: [
    'Northport incorporated as a village in 1894, the first in the Town of Huntington to do so, and it still runs its own Board of Architectural and Historic Review; the review criteria name red common brick, clapboard, shingles and stone as the preferred materials and pitched, shingled roofs with dormers and gables as the traditional roofline.',
    'That review scheme explicitly exempts painting and door and window replacement, so the openings on a historic Northport house have often been swapped repeatedly without any record — and replacement openings in old frame walls are where the gaps are.',
    'The village sits on what the record describes as the low, steep hills of the Harbor Hill Moraine, so a lot can fall twenty feet from street to shoreline within a single parcel.',
    'By 1874 Northport carried three ship yards, five sets of marine railways, two hotels and at least six general stores; the shipbuilding stock and the commercial fabric left behind are timber-framed and were built to be worked in, not insulated.',
    'The Skidmore House of 1761 is the oldest house still standing in the village, and eighteenth-century frame construction sits within a few streets of post-war ranch stock.',
    'Trolley rails from the line that ran from 1902 to 1924 are still visible in the Main Street surface, a reminder that the street grid and its drainage were laid out for a different century of runoff volumes.',
    'The village runs two distinct commercial areas — the Main Street downtown district on the harbour and an uptown business district along Route 25A, Fort Salonga Road — which produces two separate rodent baselines rather than one.',
  ],
  pestPressures: [
    {
      pest: 'Carpenter ants',
      driver:
        'Nearly a third of the stock predates 1940 in a maritime microclimate with a seven-foot tidal range on the bay; the Northeastern IPM Center notes carpenter ants prefer hollow, decaying wood because it is easier to excavate and the moisture helps larvae survive, and they will forage as far as three hundred feet from the nest.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Long-established plantings and grade build-up against old foundations reduce the three inches of clearance between wood and soil that Cornell Cooperative Extension names as the minimum; mud tubes on foundation walls run from the size of a wheat straw to wider than a thumb.',
      season: 'Swarms March through June',
    },
    {
      pest: 'House mice',
      driver:
        'Rubble and early block foundations under pre-1940 frame houses, and the sill-plate junction where eight decades of settlement have opened a continuous line behind the siding. Cornell notes a single mouse produces fifty to sixty droppings a day, so evidence accumulates fast once a population establishes.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Norway rats',
      driver:
        'Two separate commercial concentrations — the harbourfront Main Street restaurant strip and the Route 25A uptown district — each with its own refuse handling and its own drainage laid long before the current volume.',
      season: 'Pressure rises through autumn and winter',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Northport Bay is a 2,370-acre habitat area with only a few pockets of undeveloped salt marsh remaining inside moderate to dense residential development; Suffolk County treats roughly 4,000 acres of grid-ditched salt marsh and has identified catch basins as problem breeding sites needing enhanced larviciding.',
      season: 'Late spring through early autumn',
    },
    {
      pest: 'Grey squirrels and raccoons',
      driver:
        'Mature street canopy over steep-pitched roofs with dormers and gables, which is exactly the roofline the village design criteria encourage; Cornell notes some species enter at the upper part of a building while others come in around the foundation.',
      season: 'Late winter and late summer denning',
    },
  ],
  landmarks: [
    'Northport Harbor and the Main Street downtown district',
    'Northport Memorial Park, created 1932 on the waterfront',
    'The Skidmore House of 1761, the oldest house standing in the village',
    'Trolley rails still set in Main Street from the 1902–1924 line',
    'Crab Meadow, with its golf course and boardwalk',
    'Makamah Nature Preserve and Fuchs Pond',
    'Scudder Beach and Asharoken Beach',
    'The Northport Power Station of 1967, whose four stacks stand 600 feet tall',
  ],
  waterways: [
    'Northport Harbor',
    'Northport Bay',
    'Duck Island Harbor',
    'Long Island Sound',
    'Fuchs Pond',
  ],
  neighborhoods: [
    'Northport Village',
    'Main Street and the harbourfront',
    'Uptown Northport along Fort Salonga Road',
    'Bayview',
    'Crab Meadow',
    'Vernon Valley',
    'Fresh Pond',
    'Makamah',
    'Scudder Beach',
    'Duck Island Harbor',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Northport,_New_York',
    'https://northportny.gov/sample-page/',
    'https://www.northportny.com/about-northport',
    'https://www.point2homes.com/US/Neighborhood/NY/Northport-Demographics.html',
    'https://newyork.hometownlocator.com/ny/suffolk/northport.cfm',
    'https://dos.ny.gov/system/files/documents/2020/03/northport_bay.pdf',
    'https://ecode360.com/8667984',
    'https://ecode360.com/14171186',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
  ],
};
