import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Greenwich Village (New York County).
 *
 * The stand-out fact: the Greenwich Village Historic District, designated 29
 * April 1969, covers over 2,000 buildings across 65 blocks and remains the
 * largest historic district in New York City. The fabric is low — Federal and
 * Greek Revival rowhouses of two and a half to three stories standing beside
 * five- and six-story pre-law, old-law and new-law tenements on twenty- to
 * twenty-five-foot lots.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const greenwichVillage: MarketResearch = {
  verified: true,
  housing:
    'NeighborhoodScout records 77.9 per cent of Greenwich Village residential real estate as built in 1939 or earlier, 97.8 per cent of it classified as apartment complexes or high-rise apartments and 95.6 per cent of units studios or one- to two-bedroom, at 86,549 people per square mile with 87.4 per cent renter occupancy and a 20.5 per cent vacancy rate. Behind those apartment classifications is a very low-rise fabric: the Landmarks Preservation Commission district reports describe Federal and Greek Revival rowhouses of the 1810s to 1850s standing two and a half to three stories over basements, twenty-five to thirty feet tall on lots twenty to twenty-five feet wide, alongside pre-law tenements of the 1860s and 1870s at five stories and twenty-five feet wide, old-law dumbbell tenements after 1879, and new-law tenements after 1901 on footprints of thirty-five feet and more. The NYU Furman Center records Manhattan Community District 2 at 146,667 residents, 97,721 housing units, a 34.6 per cent homeownership rate and 39.1 serious housing code violations per 1,000 privately owned rental units in 2022.',
  structuralNotes: [
    'The Greenwich Village Historic District was designated 29 April 1969, covering over 2,000 buildings across 65 blocks — the largest district designated at the time and still the largest in the city. Extension I followed in 2006 with 46 buildings on three blocks, and Extension II was designated 22 June 2010 with approximately 235 buildings, its larger section running eleven blocks between West 4th Street, West Houston Street, Seventh Avenue South and Sixth Avenue. The National Register listing came on 19 June 1979.',
    'The street pattern predates the 1811 Commissioners\' Plan because the Village was a rural hamlet when the grid was laid out. Streets are named rather than numbered, and Sixth and Seventh Avenues were driven diagonally through the existing plan in the early twentieth century — which is why West 4th Street runs north–south and crosses West 10th through West 13th. Avenue cuts left irregular lots, odd party-wall geometry and a large number of buildings with more than two exposed elevations.',
    'Federal and Greek Revival rowhouses in the district are typically three bays wide in red brick with stone trim, with stoops, wrought-iron railings and dormers, and their rear yards originally held cisterns and privies — buried voids and abandoned drainage that persist under later paving and planting.',
    'Pre-law tenements of the 1860s and 1870s stand five stories on a twenty-five-foot lot, held ten to twenty families, and had minimal light and ventilation; some had a single water line with a tap in the hall on each floor, with water and toilets in the shallow backyard.',
    'The 1879 Tenement House Act required every habitable room to have a window opening to plain air. James E. Ware\'s dumbbell plan answered it by indenting the sides of the building about three feet to form an air shaft between adjoining structures. Standard lots were 25 feet by 100 feet, with four apartments per floor in railroad layout; a six-story dumbbell could hold 300 people in 84 units, and by 1900 roughly 82,000 old-law tenement buildings stood citywide, over half of them in Manhattan.',
    'Those air shafts were as little as 28 inches wide, gave almost no light or air, and filled with refuse — the Tenement House Committee heard them called foul air shafts, and the 1901 commission called them the most serious evil of the tenement. Where a shaft was later roofed, floored or built against, it becomes a sealed vertical void shared between two buildings.',
    'The Tenement House Act of 1901 ended the dumbbell. New-law buildings run about six stories on wider footprints, arranged as an H, C, I or L in plan around interior light courts, with a toilet inside every apartment and lot coverage capped at 70 per cent. That change moved the plumbing from the yard into stacked vertical lines inside the building.',
    'The district also contains stables converted to garages after the First World War, Romanesque Revival factory lofts with ribbon windows, and buildings converted between residential, commercial and institutional use repeatedly — every conversion cut new penetrations through floors and party walls.',
    'Since 1 June 2026 residential buildings with one to nine units must use official NYC Bins for trash set out, with a warning period to 7 September 2026 and full enforcement from 8 September 2026 — a rule that lands squarely on Village rowhouses and small tenements.',
  ],
  pestPressures: [
    {
      pest: 'German cockroaches',
      driver:
        'Pre-law and old-law tenement plans stack kitchens and bathrooms on one wet line for the whole building. Treating the apartment that complained leaves the rest of the line untouched, and Cornell\'s work in multifamily housing is blunt that monthly spraying is a poor substitute for prevention and non-chemical control.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'House mice',
      driver:
        'Party walls between attached buildings on twenty-five-foot lots, joist pockets inside them, disused dumbwaiter shafts and the boxed-in remains of nineteenth-century air shafts. A mouse crosses between buildings inside the wall without ever going outdoors.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'Norway rats',
      driver:
        'Rear yards that were originally privy and cistern ground, small-building waste storage now regulated under the NYC Bin rule, and nineteenth-century house drains under an irregular street plan. NYC Health is direct that any exposed garbage will attract rats and that owners are legally required to keep them out.',
      season: 'Year-round; most visible autumn and winter',
    },
    {
      pest: 'Bed bugs',
      driver:
        'An 87.4 per cent renter share and near-total concentration of small units means high turnover in buildings whose walls, shafts and conduit runs are structurally continuous between apartments.',
      season: 'Year-round',
    },
    {
      pest: 'Oriental and American cockroaches',
      driver:
        'Shallow cellars under low buildings, old house drains and yard drainage, and the damp that collects where a rowhouse cellar has soil contact on two sides.',
      season: 'Year-round below grade; surfacing in summer',
    },
  ],
  landmarks: [
    'Washington Square Park, 9.75 acres at the foot of Fifth Avenue',
    'The Washington Square Arch, Tuckahoe marble, 77 feet, erected 1892',
    'The Greenwich Village Historic District',
    'St. Luke\'s Place',
    'The Meatpacking District',
    'Sixth and Seventh Avenues, cut diagonally through the old street plan',
    'West 4th Street where it crosses West 10th to West 13th',
    'The Hudson River waterfront at the western edge',
  ],
  waterways: ['Hudson River'],
  neighborhoods: [
    'Washington Square',
    'The West Village',
    'The South Village',
    'The Meatpacking District',
    'Bleecker Street',
    'MacDougal Street',
    'Christopher Street',
    'Hudson Street',
    'Greenwich Avenue',
    'University Place',
    'St. Luke\'s Place',
    'West Houston Street',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Greenwich_Village',
    'https://home4.nyc.gov/site/lpc/about/pr2019/greenwich-village-hd-anniversary-story-map.page',
    'https://s-media.nyc.gov/agencies/lpc/lp/2366.pdf',
    'https://www.nps.gov/places/greenwich-village-historic-district.htm',
    'https://www.neighborhoodscout.com/ny/new-york/greenwich-village',
    'https://furmancenter.org/neighborhoods/view/greenwich-village-soho',
    'https://en.wikipedia.org/wiki/Old_Law_Tenement',
    'https://villagepreservation.org/2016/04/11/tenement-house-act-of-1901/',
    'https://www.6sqft.com/a-short-history-of-new-york-citys-foul-air-shafts/',
    'https://en.wikipedia.org/wiki/Washington_Square_Park',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://nyc.gov/bins',
    'https://news.cornell.edu/stories/2018/02/national-program-stops-pests-public-housing',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
  ],
};
