import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Port Washington (Nassau County, Cow Neck Peninsula).
 *
 * Water on two sides, 270 feet of relief across a single hamlet, and a
 * hundred-plus years of sand mining that physically rebuilt the ground. All
 * claims sourced below.
 */
export const portWashington: MarketResearch = {
  verified: true,
  housing:
    'Port Washington CDP has a median construction year of 1953, with about a third of its units built in 1939 or earlier and another 29 per cent in the 1950s — a pre-war harbor village with a large post-war ring built onto it. Roughly 72 per cent of units are detached houses and about 11 per cent sit in buildings of fifty units or more, giving a mixed envelope profile inside one hamlet.',
  structuralNotes: [
    'The hamlet occupies the Cow Neck Peninsula with Manhasset Bay on the west and Hempstead Harbor on the east, so almost every property is within a short distance of tidal water on one side or the other.',
    'Relief is severe for Long Island: Beacon Hill reaches roughly 270 feet while the Town Dock sits at sea level, so drainage runs hard downhill and the bottom of a street collects what the top of it sheds.',
    'The peninsula sits on the Harbor Hill Moraine, the terminal moraine of the last glaciation, and sand was mined from the western shore of Hempstead Harbor from 1865 until 1989 — around 140 million cubic yards of it — so parts of the ground surface are engineered rather than original.',
    'Four incorporated villages sit wholly inside greater Port Washington — Baxter Estates, Flower Hill, Manorhaven and Sands Point — plus Port Washington North, incorporated 1932, whose Soundview Village section began construction in 1959.',
    'Sands Point holds heavy masonry Gold Coast fabric: Castle Gould (1902), the 50,000-square-foot Tudor Hempstead House with its 60-foot entry foyer, and the 1923 French-Norman Falaise, all on the 216-acre preserve above Long Island Sound.',
    'The oldest surviving fabric is seventeenth century in origin — the Baxter Homestead of 1673 stood at Central Drive and Shore Road overlooking Manhasset Bay until fire destroyed it in 2017.',
  ],
  pestPressures: [
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Chronic foundation moisture on downhill and shoreline lots, plus soil-to-wood contact; Cornell Cooperative Extension notes termites need a reliable moisture source and favor heat from furnaces, chimneys and hot water pipes in winter.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Wind-driven rain off Manhasset Bay and Hempstead Harbor keeps trim, sills and porch framing wet on exposed elevations, and damp wood is what carpenter ants excavate.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Norway rats',
      driver:
        'The Main Street and Town Dock waterfront, its marina and restaurant frontage and the older drainage running down to Manhasset Bay.',
      season: 'Autumn and winter pressure on adjacent residential blocks',
    },
    {
      pest: 'House mice',
      driver:
        'Post-war 1950s stock on sloping lots, where a foundation that is fully buried at the back of the house is exposed at the front and the sill line is reachable from grade.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Mill Pond and the ponds of the Manhasset Bay watershed, plus the street basins and sumps Nassau County monitors for larvae as a routine part of its surveillance program.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'Port Washington Town Dock, opened 1908 on Manhasset Bay',
    'Sands Point Preserve — Castle Gould, Hempstead House and Falaise',
    'Bar Beach and North Hempstead Beach Park on Hempstead Harbor',
    'Main Street, so named since 1912',
    'Mill Pond and the Mill Pond historic area in Port Washington North',
    'Harbor Links, the golf course built on the former sand mines',
  ],
  waterways: ['Manhasset Bay', 'Hempstead Harbor', 'Long Island Sound', 'Mill Pond'],
  neighborhoods: [
    'Baxter Estates',
    'Manorhaven',
    'Port Washington North',
    'Sands Point',
    'Flower Hill',
    'Beacon Hill',
    'Soundview',
    'Harbor Acres',
    'Manhasset Bay Estates',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Port_Washington,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Port-Washington-Demographics.html',
    'https://portwashingtonnorth.org/history-timeline/',
    'https://en.wikipedia.org/wiki/Hempstead_Harbor',
    'https://en.wikipedia.org/wiki/Manhasset_Bay',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://en.wikipedia.org/wiki/Baxter_Homestead',
    'https://www.sandspointpreserveconservancy.org/about/mission-history/',
    'https://maggiekeats.com/neighborhoods/port-washington-new',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
  ],
};
