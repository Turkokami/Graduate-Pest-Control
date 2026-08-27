import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Upper West Side (New York County).
 *
 * The stand-out fact: 94.4 per cent of the residential real estate is
 * classified as apartment complexes or high-rise apartments and 76 per cent of
 * it predates 1940, at 122,677 people per square mile. This is the tallest,
 * densest and most vertically serviced of the researched markets — steam
 * risers, compactor chutes and abandoned dumbwaiter shafts run floor to floor
 * through buildings holding hundreds of households each.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const upperWestSide: MarketResearch = {
  verified: true,
  housing:
    'NeighborhoodScout records 76.0 per cent of Upper West Side residential real estate as built in 1939 or earlier and classifies 94.4 per cent of it as apartment complexes or high-rise apartments, at 122,677 people per square mile with a 12.3 per cent vacancy rate. The NYU Furman Center puts Manhattan Community District 7 at 197,826 residents in 2021 and 124,080 housing units in 2022, with a 37.1 per cent homeownership rate, a 6.6 per cent rental vacancy rate, 42.8 serious housing code violations and 150.5 total violations per 1,000 privately owned rental units, and 244 subsidised properties including 21 public housing developments holding 4,729 units and 11 Mitchell-Lama properties holding 1,758. The Landmarks Preservation Commission describes the Upper West Side/Central Park West Historic District as covering the last period of rowhouse development in Manhattan alongside apartment houses built largely before and after the First World War, an area substantially built out by the 1930s.',
  structuralNotes: [
    'The neighborhood runs from Central Park on the east to the Hudson River on the west and from West 59th Street to West 110th Street, crossed north to south by Riverside Drive, West End Avenue, Broadway, Amsterdam Avenue, Columbus Avenue and Central Park West.',
    'It carries an unusual concentration of landmark designations. Riverside–West 105th Street and Central Park West–76th Street were designated 19 April 1973, Central Park West–West 73rd–74th Street on 12 July 1977, West End–Collegiate on 3 January 1984, Riverside Drive–West 80th–81st Street on 26 March 1985, West 71st Street on 29 August 1989, Riverside–West End on 19 December 1989, Upper West Side/Central Park West on 24 April 1990, Manhattan Avenue on 15 May 2007, Riverside–West End Extension I on 26 June 2012, West End–Collegiate Extension on 25 June 2013 and Riverside–West End Extension II on 23 June 2015.',
    'The Upper West Side/Central Park West Historic District sits between Central Park and Amsterdam Avenue from West 62nd to West 96th Street and holds both speculatively built brownstone rowhouses on the side streets and substantial apartment houses on the avenues, including the twin- and triple-towered buildings on Central Park West raised between the late 1890s and the Depression.',
    'The scale of a single pre-war apartment house here is worth stating concretely. The Ansonia, built 1899–1903 and opened 16 April 1904 on Broadway between West 73rd and West 74th Streets, is seventeen stories and roughly 200 feet square, arranged around light courts on each side that give it an irregular H plan, with masonry walls between one and three feet thick. It originally held about 2,500 rooms in 340 apartments, later reconfigured to 425, and converted to condominium in 1992.',
    'About 75 per cent of New York multifamily buildings use steam heat according to a 2019 report, and the pre-war systems here were sized on an unusual brief: after the 1918 influenza epidemic the city Board of Health required both a minimum indoor temperature and open windows in heated apartments, so radiators and boilers were sized to heat a building on the coldest day of the year with the windows open. Every one of those radiators is fed by a riser that penetrates each floor slab it passes.',
    'Dumbwaiters carried food, laundry, coal and firewood between service levels in buildings of this era, and where they have been taken out of service the shaft frequently remains as a continuous vertical cavity. Fire safety guidance is to strip doors and moldings and close the shaft with double layers of sheetrock, because an open shaft behaves as a flue.',
    'Buildings with refuse chutes fall under NYC rule section 25-211: brick masonry at least eight inches thick or reinforced concrete at least six inches, straight and plumb, a minimum 24-inch inside dimension, extending at least six feet above the roof, with approved self-closing hoppers at each intake and a refuse room with a concrete floor sloped to a drain. The chute, the room and their appurtenances must be maintained clean, sanitary and free of vermin, and the owner must run a treatment program and keep records of it.',
    'Lincoln Square occupies the southern end between about West 58th and West 65th Streets, Manhattan Valley lies north of 96th Street east of Broadway, and Bloomingdale runs from 96th to 110th west of Amsterdam — three sub-areas with visibly different building ages and heights.',
    'Under the DSNY containerisation program, buildings of ten to thirty units may choose between official NYC Bins and stationary Empire Bins, and buildings of thirty-one units or more move to Empire Bins assigned to the building, opened with key cards and serviced by automated side-loading trucks, phased in by community district with a citywide rollout planned by 2032.',
  ],
  pestPressures: [
    {
      pest: 'House mice',
      driver:
        'Steam risers penetrating every floor slab, disused dumbwaiter shafts, and the chases cut for later plumbing, electrical and telecommunications work in buildings finished before any of those services existed in their present form. A population in a cellar reaches the top floor without crossing an apartment.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Compactor chutes and chute rooms serving every floor, plus kitchens stacked on shared risers. The chute is the one place in a pre-war apartment house where organic waste from every household in the line passes the same wall twice a day.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Buildings holding hundreds of units, a 6.6 per cent rental vacancy rate and continuous structural connections between apartments. Owners of multiple dwellings, cooperatives and condominiums included, must file a bedbug annual report with HPD each December covering units infested, treated and reinfested.',
      season: 'Year-round',
    },
    {
      pest: 'Norway rats',
      driver:
        'Interior courtyards and light courts, service entries and areaways, refuse room thresholds, and the park edges at Riverside Park and Central Park. NYC Health guidance is that owners are legally required to keep rats out and that exposed garbage will attract them.',
      season: 'Year-round; most visible autumn and winter',
    },
    {
      pest: 'American and Oriental cockroaches',
      driver:
        'Boiler rooms, refuse rooms and the old house drains under buildings whose cellars have been repeatedly cut into for services. These are drainage and damp populations rather than kitchen populations.',
      season: 'Year-round below grade, moving upward in summer',
    },
  ],
  landmarks: [
    'Central Park along the eastern boundary',
    'Riverside Park and the Hudson River shoreline',
    'The Ansonia on Broadway at West 73rd Street',
    'The twin-towered apartment houses of Central Park West',
    'The American Museum of Natural History',
    'The Upper West Side/Central Park West Historic District',
    'The West End–Collegiate Historic District',
    'Riverside Drive and its West End Avenue parallel',
  ],
  waterways: ['Hudson River'],
  neighborhoods: [
    'Lincoln Square',
    'Manhattan Valley',
    'Bloomingdale',
    'Central Park West',
    'Columbus Avenue',
    'Amsterdam Avenue',
    'Broadway',
    'West End Avenue',
    'Riverside Drive',
    'The West 70s',
    'The West 80s',
    'The West 90s',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Upper_West_Side',
    'https://www.neighborhoodscout.com/ny/new-york/upper-west-side',
    'https://furmancenter.org/neighborhoods/view/upper-west-side',
    'https://hdc.org/borough/upper-west-side/',
    'https://architecturaltrust.org/easements/about-the-trust/trust-protected-communities/historic-districts-in-new-york/upper-west-sidecentral-park-west-historic-district/',
    'https://en.wikipedia.org/wiki/The_Ansonia',
    'https://www.vitalcitynyc.org/radiator-steam-heat-history-nyc/',
    'https://www.brickunderground.com/live/dumb-waiter-fire-safety-townhouse-multi-family-nyc',
    'https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-57400',
    'https://nyc.gov/bins',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
  ],
};
