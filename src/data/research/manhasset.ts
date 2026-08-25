import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Manhasset (Nassau County, Cow Neck Peninsula).
 *
 * The stand-out fact: Manhasset CDP's median construction year is 1942 and
 * nearly half its housing units date from 1939 or earlier — the oldest housing
 * profile of the five North Shore markets researched in this wave. Everything
 * below is sourced.
 */
export const manhasset: MarketResearch = {
  verified: true,
  housing:
    'Manhasset CDP has a median construction year of 1942, and about 47 per cent of its roughly 2,870 housing units were built in 1939 or earlier — the oldest profile of the North Shore markets in this set. Around 72 per cent are detached houses, with a further 17 per cent in buildings of twenty units or more, and roughly a quarter of occupied units are rented rather than owned.',
  structuralNotes: [
    'Manhasset is an unincorporated hamlet administered by the Town of North Hempstead; repeated incorporation attempts through the 1940s and again in 2016 failed, so building fabric here was never shaped by a single village architectural review board.',
    'Munsey Park was laid out by the Olmsted Brothers in 1927 under Edward Clark Whiting, with tree-lined interior streets curving to the natural topography and building standards that specified Colonial Revival; 162 houses were complete by 1930, and the interior streets are named for American artists.',
    'Plandome Heights, built on the former Benjamin Duke estate, retains a small group of Spanish-style houses with white stucco walls and red tile roofs — an assembly whose parapets, tile courses and stucco-to-frame transitions behave nothing like clapboard.',
    'The hamlet sits on the Harbor Hill Moraine at an elevation of about 95 feet, and the moraine forms the major drainage divide in Nassau County, so ground here falls away toward Manhasset Bay rather than sitting flat.',
    'Leeds Pond and Whitney Pond are both drainage features within the Manhasset Bay watershed, which also takes in Mitchell Creek and Sheets Creek — standing fresh water inside a developed hamlet.',
  ],
  pestPressures: [
    {
      pest: 'Carpenter ants',
      driver:
        'A pre-1940 majority of frame houses with porch framing, window sills and door sills that have taken eighty-plus years of weather; carpenter ants excavate decaying wood because it is easier to work and the moisture helps larvae survive.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Mature plantings against foundations, buried construction debris and insufficient wood-to-soil clearance on long-established lots — conditions Cornell Cooperative Extension names directly.',
      season: 'Swarms March through June',
    },
    {
      pest: 'House mice',
      driver:
        'Old fieldstone and block foundations, and the sill-plate junction on eighty-year-old frame houses, where settlement has opened a continuous gap behind the siding.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Norway rats',
      driver:
        'The Plandome Road and Northern Boulevard retail spine — including the Miracle Mile — concentrates food waste and older drainage in a narrow commercial corridor bordered by houses.',
      season: 'Pressure rises through autumn and winter',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Whitney Pond, Leeds Pond and the street basins and sumps that Nassau County monitors for larvae, all within a short flight of residential streets.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'The Miracle Mile and Americana Manhasset on Northern Boulevard',
    'Manhasset Quaker Meeting House, built 1719',
    'Valley Road Historic District',
    'Horatio Gates Onderdonk House',
    'North Hempstead Town Hall on Plandome Road, opened 1907',
    'Shelter Rock, the glacial boulder that gives North Hills its name',
  ],
  waterways: ['Manhasset Bay', 'Leeds Pond', 'Whitney Pond', 'Long Island Sound'],
  neighborhoods: [
    'Munsey Park',
    'Plandome',
    'Plandome Heights',
    'Plandome Manor',
    'Flower Hill',
    'North Hills',
    'Strathmore',
    'Strathmore Village',
    'Strathmore–Vanderbilt',
    'Manhasset Park',
    'Norgate',
    'Bayview',
    'Shorehaven',
    'Terrace Manor',
    'Spinney Hill',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Manhasset,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Manhasset-Demographics.html',
    'https://newyork.hometownlocator.com/ny/nassau/manhasset.cfm',
    'https://www.manhassetchamber.com/villages-of-manhasset',
    'https://www.tclf.org/munsey-park',
    'https://en.wikipedia.org/wiki/Miracle_Mile_(Manhasset)',
    'https://en.wikipedia.org/wiki/Manhasset_Bay',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
  ],
};
