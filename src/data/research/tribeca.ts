import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Tribeca (New York County).
 *
 * The stand-out fact: this is not housing that was built as housing. Four
 * Landmarks Preservation Commission historic districts cover a district of
 * store-and-loft buildings and warehouses raised between roughly 1860 and 1910
 * for the dry goods and textile trade, later cut into apartments. The pest
 * geography follows the freight geography — hoistways, sidewalk vaults, loading
 * bays and 25-foot fire partitions — not the domestic geography.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const tribeca: MarketResearch = {
  verified: true,
  housing:
    'NeighborhoodScout puts 67.3 per cent of Tribeca residential real estate at 1939 or earlier and classifies 90.7 per cent of it as apartment complexes or high-rise apartments, at a density of 48,953 people per square mile and a vacancy rate of 20.4 per cent. Almost none of that stock began life as housing. The area was the centre of the dry goods and textile trades from the 1840s, and its warehouses and store-and-loft buildings were converted to living space by artists from the late 1960s onward, a model borrowed from SoHo and later formalised by the 1982 Loft Law. The four historic districts covering the neighbourhood hold buildings mostly dating from about 1860 to 1910.',
  structuralNotes: [
    'Four Landmarks Preservation Commission historic districts cover the neighbourhood: Tribeca West, designated 7 May 1991 with approximately 220 buildings between Hubert and Reade Streets from Greenwich Street to West Broadway; Tribeca North, Tribeca East and Tribeca South, all designated 8 December 1992, the North district holding sixty-seven buildings and three undeveloped lots and the South district seventy buildings across just over four blocks.',
    'Store-and-loft buildings in the West district run typically five storeys and twenty-five or fifty feet wide; warehouses are larger, with facades at least eighty feet long and heights of six to ten storeys. Tribeca North warehouses are at least fifty feet wide and five to seven storeys, mostly built between 1880 and 1910.',
    'An 1871 building regulation required fireproof partition walls every twenty-five feet. Developers responded by building narrow structures that "often appear as a single structure" from the street — so what reads as one wide building can be several, each with its own masonry division, and what reads as separate addresses can share a cellar.',
    'Structural systems changed across the period. Mid-nineteenth-century loft buildings used cast-iron columns set in rows perpendicular to the facade carrying yellow pine girders and beams; rolled iron and then steel replaced them as loads rose; a 1903–05 warehouse on Hubert Street is steel-framed, and reinforced concrete floors appear in later Greenwich Street buildings. Brick masonry walls — common red brick, sometimes glazed tan and yellow brick — form the envelope.',
    'Goods moved vertically through open hoistways before elevators were installed, with stairs pushed to the side walls. The Landmarks reports identify separately articulated single-bay openings on these facades as exterior elevator-door surrounds — the freight shaft is legible from the street.',
    'Cellars extend out beneath the sidewalk as vaults, covered in the sidewalk area by granite slabs and in front of the building by a stepped form sheathed in iron diamond plate and iron-framed glass lens panels. Nineteenth-century photographs show goods being moved across those stepped vaults.',
    'The 1982 Loft Law, Article 7-C of the New York State Multiple Dwelling Law, created the NYC Loft Board to oversee conversion of interim multiple dwellings from commercial and manufacturing space to rent-stabilised residences. Qualifying units must be at least 400 square feet and cannot be in cellars — which is why the cellar and vault level of a converted loft building is almost always service space rather than living space.',
    'NYC rule section 25-211 requires refuse chutes and refuse rooms in buildings that have them to be maintained free of vermin, and puts the owner under a duty to establish a treatment programme and keep records of it.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'Sidewalk vaults extending under the pavement, loading-bay thresholds, and cellar drainage laid under a nineteenth-century commercial street grid. The Health Department states plainly that property owners are legally required to keep rats out of homes and that any exposed garbage will attract them.',
      season: 'Year-round, with the clearest evidence in autumn and winter',
    },
    {
      pest: 'House mice',
      driver:
        'Former freight hoistways and elevator shafts running the full height of the building, plus open loft floorplates where a single floor was one room and later partitions stop short of the structure. A shaft is a vertical highway between a service cellar and a top-floor apartment.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Loft conversion put kitchens and bathrooms into buildings that had neither, which means new wet stacks were cut through timber and concrete floors decades after construction. Those retrofitted risers are the shared route between units on a line.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'Oriental and American cockroaches',
      driver:
        'Damp vault and cellar space below grade, old house drains, and the ground-floor commercial units that occupy the original store level in most of these buildings.',
      season: 'Year-round below grade, surfacing into occupied floors in summer',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Structural continuity between converted units — retrofitted conduit runs, unfinished shaft walls and the deep floor cavities of heavy-timber construction. Owners of multiple dwellings, cooperatives and condominiums included, must file a bedbug annual report with HPD each December.',
      season: 'Year-round',
    },
  ],
  landmarks: [
    'Duane Park',
    'Bogardus Plaza',
    'The former New York Mercantile Exchange',
    'The Powell Building of 1890',
    'The Tribeca Film Center',
    'The site of the Washington Market, opened 1813',
    'The Hudson River waterfront along West Street',
    'Canal Street, the northern boundary',
  ],
  waterways: ['Hudson River', 'Upper New York Bay'],
  neighborhoods: [
    'Tribeca West',
    'Tribeca North',
    'Tribeca East',
    'Tribeca South',
    'Duane Park',
    'Greenwich Street',
    'Hudson Street',
    'North Moore Street',
    'Franklin Street',
    'Laight Street',
    'West Broadway',
    'Chambers Street',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Tribeca',
    'https://en.wikipedia.org/wiki/Tribeca_West_Historic_District',
    'https://architecturaltrust.org/wp-content/uploads/2013/06/Report_LPC_Tribeca_West.pdf',
    'https://architecturaltrust.org/wp-content/uploads/2013/06/Report_LPC_Tribeca_North.pdf',
    'https://medium.com/culturally-inclined/a-brief-history-of-tribecas-historic-districts-1541880a8f0d',
    'https://www.neighborhoodscout.com/ny/new-york/tribeca',
    'https://www.nyc.gov/site/loftboard/about/about.page',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-57400',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://nyc.gov/bins',
  ],
};
