import type { MarketResearch } from '../markets';

/**
 * RESEARCH — SoHo (New York County).
 *
 * The stand-out fact: 81.3 per cent of the residential stock predates 1940 and
 * 89.9 per cent of it is classified as large apartment buildings — but the
 * buildings themselves are cast-iron-fronted store-and-loft structures whose
 * cellars run out under the pavement behind glass vault lights. Ground-floor
 * retail sits directly over that vault space, and the residential floors sit
 * directly over the retail.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const soho: MarketResearch = {
  verified: true,
  housing:
    'NeighborhoodScout records 81.3 per cent of SoHo residential real estate as built in 1939 or earlier and classifies 89.9 per cent of it as large apartment buildings, with 92.2 per cent of units studios or one- to two-bedroom, a density of 59,678 people per square mile and a vacancy rate of 26 per cent. The stock is overwhelmingly converted manufacturing loft space. Artists began occupying manufacturing lofts illegally in the 1960s for the floor area, the tall ceilings, the big windows and the low rents; a 1971 amendment to the Zoning Resolution created the M1-5A and M1-5B districts allowing certified artists to live in lofts under 3,600 square feet; the 1982 Loft Law legalised what was already there. The SoHo/NoHo rezoning adopted by the City Council in December 2021 replaced those manufacturing districts across 56 blocks with paired manufacturing-residential districts and a Special SoHo-NoHo Mixed Use District.',
  structuralNotes: [
    'SoHo holds the greatest collection of cast-iron architecture in the world. Roughly 250 cast-iron buildings survive citywide and most of them are here, built at the peak of the material between 1840 and 1880. The SoHo-Cast Iron Historic District was designated by the Landmarks Preservation Commission in 1973, covering 26 blocks and about 500 buildings, and received National Register and National Historic Landmark status in 1978. The Extension, designated 11 May 2010, added approximately 135 properties on the west side of West Broadway and the east side of Crosby Street and parts of Lafayette, Howard and Centre Streets.',
    'Cast iron was cheaper than carved stone and could be cast from reusable ornamental moulds, so a facade went up fast — some buildings were finished in four months. In most cases the iron is a bolted front rather than the frame; the E. V. Haughwout Building of 1857 at Broadway and Broome Street is the exception, where the cast iron was used as structural support rather than hung from brickwork.',
    'Cast iron buckles in heat and cracks when hit with cold water, and an 1899 building code responded by requiring masonry backing behind cast-iron fronts. The practical consequence for later work is that the visible front and the wall behind it are two different assemblies with a joint between them.',
    'Sidewalks throughout the district are vaulted: the cellar extends out beneath the pavement, and daylight reached the workers below through vault lights, small circular glass prisms set into iron panels, an idea patented by Thaddeus Hyatt in 1854. Electric light made them redundant and many were filled with concrete or stone or covered over with diamond-plate steel; since the 1973 designation the Landmarks Preservation Commission reviews exterior repairs and requires preservation or restoration where possible.',
    'The E. V. Haughwout Building is five storeys and 79 feet tall, and on 23 March 1857 it received the world\'s first successful passenger elevator, a hydraulic lift by Elisha Graves Otis driven from a steam engine in the basement. Vertical service cores in this district are that old in concept, and every one of them is a shaft through a masonry building.',
    'Streets in the historic district retain Belgian block paving, which is a joint pattern rather than a continuous surface at kerb and doorway level.',
    'The 2021 rezoning replaced M1-5A and M1-5B — districts that had precluded ordinary residential use and severely restricted ground-floor uses — with six paired manufacturing-residential districts, permitting residential, commercial, community facility and manufacturing uses as of right, with Mandatory Inclusionary Housing applying to most new residential development, enlargement and conversion.',
    'Under Article 7-C of the Multiple Dwelling Law, a qualifying loft unit must be at least 400 square feet and cannot be in a cellar, which keeps the cellar and vault level of these buildings in service use.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'Vaulted sidewalks give a continuous void beneath the pavement along whole blockfronts, with the retail and restaurant waste of a major shopping district set out above it. NYC Health guidance is that rats need food, water, shelter and safe ways to move around, and a vaulted sidewalk under a commercial street supplies the last three at once.',
      season: 'Year-round; complaint volume rises in autumn',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Ground-floor food and retail tenancies sit directly below residential loft floors and share the building\'s drainage and riser runs. A kitchen at street level and a converted loft four floors up are on the same vertical services.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'House mice',
      driver:
        'Loft floorplates were single undivided rooms. Later partitions rarely reach the structure above, and the original goods shafts and stair enclosures run the full height of the building, so an interior population is not confined to a floor.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'Oriental and American cockroaches',
      driver:
        'Vault space and cellars that are damp by construction — a cellar that extends under a public sidewalk is below the water table\'s reach in wet weather and is served by drainage laid in the nineteenth century.',
      season: 'Year-round below grade; movement upward in warm weather',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Large converted buildings with small units — 92.2 per cent of the stock is studio to two-bedroom — and a high vacancy and turnover rate. Multiple dwellings, cooperatives and condominiums must file a bedbug annual report with HPD each December.',
      season: 'Year-round',
    },
  ],
  landmarks: [
    'The SoHo-Cast Iron Historic District',
    'The E. V. Haughwout Building at Broadway and Broome Street',
    'The cast-iron blockfronts of Greene and Mercer Streets',
    'Belgian block paving on the side streets',
    'The Broadway retail corridor',
    'West Broadway',
    'Canal Street, the southern boundary',
    'Houston Street, the northern boundary',
  ],
  waterways: ['Hudson River', 'Upper New York Bay'],
  neighborhoods: [
    'Broadway',
    'West Broadway',
    'Greene Street',
    'Mercer Street',
    'Wooster Street',
    'Crosby Street',
    'Lafayette Street',
    'Thompson Street',
    'Prince Street',
    'Spring Street',
    'Grand Street',
    'Howard Street',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/SoHo,_Manhattan',
    'https://www.neighborhoodscout.com/ny/new-york/soho',
    'https://s-media.nyc.gov/agencies/lpc/lp/2362.pdf',
    'https://sohobroadway.org/let-there-be-light-the-vaulted-sidewalks-of-soho-broadway/',
    'https://en.wikipedia.org/wiki/E._V._Haughwout_Building',
    'https://www.hsfkramer.com/insights/2021-12/city-council-adopts-soho-noho-rezoning-plan',
    'https://www.nyc.gov/site/loftboard/about/about.page',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://nyc.gov/bins',
    'https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-57400',
    'https://news.cornell.edu/stories/2018/02/national-program-stops-pests-public-housing',
  ],
};
