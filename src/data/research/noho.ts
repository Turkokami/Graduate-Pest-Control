import type { MarketResearch } from '../markets';

/**
 * RESEARCH — NoHo (New York County, Manhattan).
 *
 * The stand-out fact: NoHo is a very small district in which almost every
 * period of Manhattan's first hundred years stands attached to the next. A
 * three-and-a-half-story Federal house of 1830 shares a party line with a
 * twelve-story steel-frame loft of 1899. And because the zoning that governed
 * these blocks for fifty years barred residential occupancy below the second
 * floor, the residential population sits directly above ground-floor and cellar
 * commerce in nearly every building on the block.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const noho: MarketResearch = {
  verified: true,
  housing:
    'NeighborhoodScout records 71.6 per cent of NoHo residential real estate as built in 1939 or earlier, classifies 90.8 per cent of it as apartment complexes or high-rise apartments, and puts 86.8 per cent of units at studio to two-bedroom size, with most property renter-occupied, a vacancy rate of 18.8 per cent and a density of 43,867 people per square mile. The density figure is the one that repays attention: it is markedly lower than the neighboring downtown districts, because a substantial part of NoHo\'s floor area is not housing at all. The Landmarks Preservation Commission\'s designation report describes the district as a commercial quarter developed between the early 1850s and the 1910s, holding early-nineteenth-century Federal and Greek Revival residences of 1822 to 1833, marble and cast-iron-fronted store-and-loft buildings from 1853 onward, institutional buildings from 1823 to the 1880s, and office and warehouse buildings of the 1870s to the 1910s. Residential occupancy arrived last, as artists took vacant manufacturing floors, and was legalised by the 1982 Loft Law.',
  structuralNotes: [
    'The NoHo Historic District was designated on 29 June 1999 and covers approximately 125 buildings, running north from Houston Street to East 9th Street and east from Broadway and Mercer Street to Lafayette Street and the west side of Cooper Square. Two further designations completed the coverage: the NoHo East Historic District on 24 June 2003, taking in blocks around Bleecker, Bond, Mulberry and Elizabeth Streets and the Bowery, and the NoHo Historic District Extension on 13 May 2008, covering 56 buildings between East 4th Street and Bleecker Street from Lafayette Street to the Bowery.',
    'The Extension report records that nineteen of the area\'s twenty-five store-and-loft buildings were put up between 1890 and 1900. So on those blocks a decade of construction produced most of the commercial fabric, and it was inserted into a street of houses that were already sixty years old.',
    'The oldest layer is genuinely residential and genuinely intact. 26 Bond Street is a Federal house of about 1830, three and a half stories with a peaked roof and a Gibbs surround at the door, built for James Roosevelt and sold to Alfred De Forest in 1831. 52 Bond Street is Greek Revival of about 1836-38. The Merchant\'s House Museum at 29 East Fourth Street, built 1831-32 with a Federal exterior and a Greek Revival interior, is the only nineteenth-century residence in Manhattan with both its exterior and its interior intact — a four-story rowhouse with a raised basement, party walls shared with the houses beside it, the family room and kitchen in the basement, a rear wood-frame annex added in 1850, and a cistern in the yard with a 4,000-gallon capacity.',
    'Bond Street was originally a single uninterrupted block running one thousand feet from Broadway to the Bowery, lined with Federal-era marble rowhouses. By the 1840s and 1850s those residences were being subdivided into apartments and boarding rooms and converted commercially. The pattern of the whole neighborhood is in that sentence: subdivision first, commerce second, manufacturing third, lofts fourth.',
    'The LPC report records that many of the store and lofts were erected with vaults under the sidewalk, covered with granite slabs, prism glass, and later concrete. Three coverings in sequence over the same void means three generations of bedding joints, and the concrete is usually the newest and the least documented.',
    'Shinbone Alley, also called Jones Alley, originally provided access to the stables behind the houses on Broadway, Bond Street and Bleecker Street. It is a mid-block service route through the interior of a block that is otherwise built solid, and it is the reason the rear condition of a NoHo building is frequently not a yard at all but a paved alley shared with the backs of three streets.',
    'The report also describes how the earliest buildings were converted: by installing ground-level storefronts into what had been houses. Purpose-built commercial buildings that followed carried a trabeated cast-iron storefront at the base. Either way, the ground floor of a NoHo building has been a shop for a hundred and fifty years, and the structure above it has been something else.',
    'The zoning made that permanent. Under the M1-5B regulations at Zoning Resolution 42-315, joint living-work quarters for artists could not occupy space below the second floor without a certification from the Chairperson of the City Planning Commission, lot coverage for a qualifying building was capped at 5,000 square feet and at 3,600 square feet on Broadway frontage, occupants had to be artists certified by the Department of Cultural Affairs, and the building had to predate 1961. Residential occupancy was, in law, an upstairs use.',
    'The SoHo/NoHo rezoning adopted by the City Council on 15 December 2021 replaced the M1-5A and M1-5B districts across a 56-block area with paired manufacturing-residential districts — M1-5/R7D, M1-5/R7X, M1-5A/R9A, M1-5/R9X, M1-5/R10 and M1-6/R10 — inside a new Special SoHo-NoHo Mixed Use District, and permitted a mix of residential, commercial, community facility and manufacturing uses as of right. Ground-floor retail, which under the previous rules had been permitted only on small lots in a limited part of the area, is now allowed far more broadly. Mandatory Inclusionary Housing applies to most residential development.',
    'The tallest and the shortest buildings in the district are attached to each other. The Bayard-Condict Building at 65 Bleecker Street, Louis Sullivan\'s only New York building, was built 1897-99 to twelve stories and 162 feet on a steel skeleton, faced in white glazed terracotta at the front and red brick on the other three sides, and designed for offices or light manufactures. It stands in a street of buildings a quarter of its height.',
    'Colonnade Row, or LaGrange Terrace, was built in 1831-33 as nine marble-fronted houses at 418-426 Lafayette Place. Four survive, at 428 to 434 Lafayette Street; more than half were demolished for Wanamaker\'s warehouse, and the survivors were subdivided into apartments and commercial space. A terrace that has lost five of its nine houses has end walls that were never designed to be end walls.',
    'Lafayette Street itself is a twentieth-century construction. It was created in the early 1900s by extending the former Lafayette Place south and combining it with the roadbeds of the former Marion and Elm Streets. A street assembled out of three older streets does not produce a regular block interior behind it.',
    'The district also holds converted stables — the Italianate stable building at 31-33 Great Jones Street dates from 1871 — and institutional structures including Fire Engine Company 33 of 1898-99 at 42-44 Great Jones Street and the New York Free Circulating Library\'s first branch at 49 Bond Street, converted around 1882. Stable buildings have deep ground floors, drainage laid for washing down, and hay lofts above.',
    'Because the ground floor is commercial and the floors above are residential, two legal standards for the same fabric apply in one building. NYC Health Code section 81.23 requires a food service establishment to fit exterior doors with barriers leaving gaps no larger than one-eighth of an inch, to seal cracks and gaps, to inspect the premises and incoming supplies daily, to retain a pest management professional licensed by the New York State Department of Environmental Conservation, and to keep records of that professional\'s name, address, license number, services and contract dates. Local Law 55 of 2018 separately requires the owner of the multiple dwelling above to investigate for indoor allergen hazards at least annually, seal holes, gaps and cracks with durable materials, and fit door sweeps reducing gaps to no more than a quarter of an inch, and states that pesticide use does not substitute for those measures.',
    'NoHo is not inside a designated Rat Mitigation Zone; the four zones are the Grand Concourse, Harlem, the East Village and Chinatown, and Bedford-Stuyvesant with Bushwick. The East Village and Chinatown zone begins a short distance east of the Bowery. Between January and June 2025 the four zones produced 36,263 initial inspections and 6,583 Commissioner\'s Orders to Abate, an 18 per cent failure rate, and 7,142 summonses from 10,540 compliance inspections.',
    'Waste on these blocks is set out by businesses as much as by households. Food-related businesses have had to use rigid, lidded containers since 1 August 2023, chain businesses since 5 September 2023 and all businesses since 1 March 2024, with fines of $50, $100 and $200 for successive offenses, and recyclables and loading-dock collection excluded from the requirement.',
  ],
  pestPressures: [
    {
      pest: 'German cockroaches',
      driver:
        'Ground-floor and cellar food service under residential floors in nearly every building on the block, a condition the zoning enforced for fifty years by barring living quarters below the second story. The kitchen and the apartments are on the same retrofitted drainage and the same riser runs.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'House mice',
      driver:
        'Party lines between buildings of wildly different age and structural system — a three-and-a-half-story Federal house of 1830 against a twelve-story steel-frame loft of 1899 — where the joist pockets, the abutment detail and the stepped roof junction were built by different trades seventy years apart. Cornell records one mouse producing 50 to 60 droppings a day, so evidence appears suddenly in a building where the population has been resident in the wall for years.',
      season: 'Autumn ingress; resident populations year-round',
    },
    {
      pest: 'Norway rats',
      driver:
        'A mid-block service alley, Shinbone Alley, running behind the houses of three streets, alongside sidewalk vaults covered in granite, prism glass and later concrete, and commercial waste set out at the curb on narrow lots with no service yard. NYC Health states that property owners are legally required to keep rats out and that exposed garbage attracts them.',
      season: 'Year-round, complaint volume rising in autumn',
    },
    {
      pest: 'Oriental and American cockroaches',
      driver:
        'Vaults and cellars under the sidewalk that are damp by construction and drained through nineteenth-century connections, beneath a food-service ground floor that adds grease and standing water to the same drainage.',
      season: 'Year-round below grade; upward movement in warm weather',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Renter-majority occupancy with 86.8 per cent of units at studio to two-bedroom size and a vacancy rate of 18.8 per cent, in buildings where the partitions dividing former loft floorplates rarely reach the structure above. Multiple dwellings, cooperatives and condominiums included, file a bedbug annual report with HPD each December.',
      season: 'Year-round',
    },
    {
      pest: 'Pavement ants and odorous house ants',
      driver:
        'Joints at vault edges, areaways, stoop cheeks and the alley paving for pavement ants; odorous house ants follow moisture indoors from a leaking retrofitted stack or a wet party-wall abutment.',
      season: 'Spring through autumn',
    },
  ],
  landmarks: [
    'The Merchant\'s House Museum at 29 East Fourth Street, built 1831-32',
    'Colonnade Row, or LaGrange Terrace, of 1831-33 on Lafayette Street',
    'The Bayard-Condict Building at 65 Bleecker Street, 1897-99',
    'The former Bond Street Savings Bank of 1873-74, later the Bouwerie Lane Theater',
    'Fire Engine Company 33 at 42-44 Great Jones Street, 1898-99',
    'The Public Theater in the former Astor Library on Lafayette Street',
    'Shinbone Alley, also called Jones Alley',
    'Cooper Square and Astor Place at the northern edge',
  ],
  waterways: [
    'No open watercourse — the district drains entirely to the combined sewer system',
    'Sidewalk vault coverings of granite, prism glass and concrete as the principal surface-water route into the cellar fabric',
    'The paved surface of Shinbone Alley and the rear yards it replaced',
  ],
  neighborhoods: [
    'Bond Street',
    'Great Jones Street',
    'Bleecker Street',
    'East Fourth Street',
    'Lafayette Street',
    'Broadway between Houston and Astor Place',
    'Mercer Street',
    'Crosby Street north of Houston',
    'The Bowery frontage',
    'Cooper Square',
    'Astor Place',
    'Shinbone Alley',
  ],
  sources: [
    'https://s-media.nyc.gov/agencies/lpc/lp/2039.pdf',
    'https://media.villagepreservation.org/wp-content/uploads/2020/03/15123023/NoHo-Historic-District-Extension-NYC-LPC-Designation-Report.pdf',
    'https://www.villagepreservation.org/2022/06/29/noho-historic-district-becomes-a-reality/',
    'https://www.villagepreservation.org/2024/05/13/exploring-the-noho-historic-district-extension/',
    'https://www.nyc.gov/assets/lpc/downloads/pdf/maps/HistoricDistrictMaps/Manhattan/NoHo_East.pdf',
    'https://www.neighborhoodscout.com/ny/new-york/noho',
    'https://zoningresolution.planning.nyc.gov/article-iv/chapter-2/42-315',
    'https://sohobroadway.org/what-are-m1-5b-and-jlwqa/',
    'https://www.hsfkramer.com/insights/2021-12/city-council-adopts-soho-noho-rezoning-plan',
    'https://en.wikipedia.org/wiki/Merchant%27s_House_Museum',
    'https://en.wikipedia.org/wiki/Colonnade_Row',
    'https://en.wikipedia.org/wiki/Bayard%E2%80%93Condict_Building',
    'https://forgotten-ny.com/2013/03/lafayette-street-noho/',
    'https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-46269',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://a816-dohbesp.nyc.gov/IndicatorPublic/data-features/rat-mitigation-zones',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://www.nyc.gov/site/dsny/news/014-23/following-21-510-warnings-single-month-all-food-related-businesses-can-face-fines-failure',
  ],
};
