import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Huntington (Suffolk County, North Shore).
 *
 * Every claim below is backed by a URL in `sources`. Housing-age figures are
 * ACS-derived tabulations for the Huntington CDP; historic-district facts come
 * from the National Register listings; pest drivers come from Cornell
 * Cooperative Extension / the Northeastern IPM Center / county vector control.
 *
 * distanceMi/direction are deliberately absent: they cannot be computed until
 * business.address is supplied.
 */
export const huntington: MarketResearch = {
  verified: true,
  housing:
    'Huntington CDP has a median construction year of 1956, with roughly a fifth of its housing built in 1939 or earlier and about a third built in the 1950s alone — a pre-war village core wrapped in a large post-war ring. Detached single-family houses make up about four fifths of the stock, and the town itself dates to 1653, so the oldest surviving fabric predates any modern building code by centuries.',
  structuralNotes: [
    'The pre-1940 share concentrates in and around the historic village — the Old Town Green and Old Town Hall districts, both listed on the National Register in 1985, contain colonial-era and nineteenth-century buildings on Park Avenue, West Main Street and Stewart Avenue.',
    'Post-war stock from the 1950s and 1960s dominates by volume, which means slab and shallow-crawlspace construction with utility penetrations that were sleeved but rarely sealed.',
    'Early frame construction here is cedar-shingled over hand-framed timber — the 1816 Walt Whitman farmhouse in West Hills is the surviving example — a wall assembly with no sheathing membrane and generous cavities behind the shingle course.',
    'Halesite sits at an elevation of about 26 feet directly on Huntington Harbor, so its low-lying frame houses carry harbor-side groundwater and crawlspace humidity that inland Huntington does not.',
  ],
  pestPressures: [
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Soil-to-wood contact and chronic foundation moisture. Cornell Cooperative Extension notes termites need a reliable moisture source and that any wood close to or in contact with soil is susceptible.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Decaying wood is easier to excavate and the moisture helps larvae survive, so damp sills, porch framing and window and door sills become nest sites; foragers range up to 300 feet from the nest.',
      season: 'Spring through late summer',
    },
    {
      pest: 'House mice',
      driver:
        'Gaps at utility penetrations, sills and garage jambs on the large 1950s and 1960s detached stock; mice nest in dark, undisturbed, warm voids near appliances and cabinetry.',
      season: 'Ingress peaks in autumn as temperatures drop',
    },
    {
      pest: 'Norway rats',
      driver:
        'Harbor-side commercial frontage at Halesite and the Route 25A village corridor, with older sewer and drain connections beneath them.',
      season: 'Pressure builds late summer into winter',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Suffolk County vector control treats catch basins and tidal wetland as the two principal larval habitats; harbor-fringe properties sit close to both.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'Heckscher Park and the Heckscher Museum of Art',
    'Old Town Green Historic District',
    'Old Town Hall Historic District',
    'Walt Whitman Birthplace State Historic Site, West Hills',
    'Mill Dam Road and the Nathan Hale marker, Halesite',
    'Route 25A / Main Street village corridor',
  ],
  waterways: [
    'Huntington Harbor',
    'Huntington Bay',
    'Long Island Sound',
    'The pond at Heckscher Park',
  ],
  neighborhoods: [
    'Huntington Village',
    'Halesite',
    'Huntington Station',
    'South Huntington',
    'West Hills',
    'Greenlawn',
    'Centerport',
    'Cold Spring Harbor',
    'Dix Hills',
    'Melville',
    'Elwood',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Huntington,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Huntington-Demographics.html',
    'https://en.wikipedia.org/wiki/Old_Town_Green_Historic_District',
    'https://en.wikipedia.org/wiki/Old_Town_Hall_Historic_District_(Huntington,_New_York)',
    'https://en.wikipedia.org/wiki/Heckscher_Park_(Huntington,_New_York)',
    'https://en.wikipedia.org/wiki/Halesite,_New_York',
    'https://en.wikipedia.org/wiki/Walt_Whitman_Birthplace_State_Historic_Site',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
