import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Brooklyn Heights (Kings County).
 *
 * The stand-out fact: over six hundred pre-Civil War houses, one of the largest
 * such ensembles in the country, and roughly 78.6 per cent of the residential
 * stock built in 1939 or earlier. This is the oldest continuously occupied
 * housing fabric in the markets researched so far, and it is almost entirely
 * attached — meaning every party wall is shared with a neighbor.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const brooklynHeights: MarketResearch = {
  verified: true,
  housing:
    'Brooklyn Heights holds more than six hundred pre-Civil War houses, one of the largest ensembles of such housing anywhere in the United States, and NeighborhoodScout puts about 78.6 per cent of its residential stock at 1939 or earlier. Despite the rowhouse reputation, roughly 80.4 per cent of the real estate is classified as apartment buildings — because a large share of those nineteenth-century houses were long ago converted into multiple units, and because apartment houses were built among them through the twentieth century. The neighborhood is compact, with a 2020 population of 25,092.',
  structuralNotes: [
    'Brooklyn Heights was designated New York City\'s first historic district in November 1965, made a National Historic Landmark District in January 1965 and added to the National Register in October 1966; the district runs from Atlantic Avenue to Fulton Street and from the East River to Court Street.',
    'The stock spans Federal, Greek Revival, Italianate, Second Empire, Victorian Gothic, Romanesque, Neo-Grec and Classical Revival, including a small number of two-and-a-half story late Federal houses — so a single blockfront can hold five different wall assemblies with five different failure patterns.',
    'The dominant facing material was brownstone, a reddish-brown Jersey freestone quarried in Passaic County, New Jersey. The Landmarks Preservation Commission rowhouse manual explains that because veneer was usually set with the grain vertical rather than horizontal, trapped water freezes between the bedding layers and forces the stone apart — spalling — which opens the facade to further water.',
    'A typical brownstone rowhouse is three or four stories with the main floor raised above street level and reached by a stoop, which puts a cellar or basement story partly below grade behind an areaway at the front and a garden at the rear.',
    'Where there were only seven houses on the Heights in 1807, by 1860 there were over six hundred — the neighborhood built out as an early commuter suburb after ferry service to Manhattan began in 1814, so most of the fabric predates modern plumbing, wiring and any building code.',
    'The Brooklyn Heights Promenade was built on top of the Brooklyn–Queens Expressway, which runs in a cantilevered structure along the western edge of the neighborhood below the bluff — an infrastructure corridor immediately adjacent to residential blocks.',
    'The neighborhood sits on high ground above the East River, bounded by Old Fulton Street near the Brooklyn Bridge to the north, Cadman Plaza West to the east, Atlantic Avenue to the south and the expressway or the river to the west.',
  ],
  pestPressures: [
    {
      pest: 'House mice',
      driver:
        'Party walls between attached houses carry joist pockets — the recesses where floor framing bears into shared masonry — and those pockets connect adjoining buildings inside the wall. On nineteenth-century construction they were rarely closed, so a population in one cellar is not confined to one house.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'Norway rats',
      driver:
        'Rear gardens backing onto one another across a block interior, cellar entries and areaways below the stoop line, and older cellar drainage under a nineteenth-century street grid. The city Health Department notes that exposed garbage attracts rats and that owners are legally required to keep them out of buildings.',
      season: 'Year-round, with pressure most visible in autumn and winter',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Converted rowhouses stack kitchens and bathrooms on a single plumbing line, so units share a wet chase. Research in multi-unit housing finds pests disperse from high-density units into units next to or structurally continuous with them.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Shared voids, conduit runs and party-wall pockets in converted and multi-unit buildings. Owners of multiple dwellings, including co-ops and condominiums, must file an annual bedbug report with HPD each December under Housing Maintenance Code sections 27-2018.1 and 27-2018.2.',
      season: 'Year-round',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Water held at flat window sills, failed cornices and spalled brownstone. The rowhouse manual identifies water as the eventual cause of most masonry deterioration, and wet concealed timber behind a masonry front is what carpenter ants excavate.',
      season: 'Spring through late summer',
    },
  ],
  landmarks: [
    'The Brooklyn Heights Promenade',
    'Plymouth Church, a center of abolitionist activity',
    'The Brooklyn Bridge, completed in 1883',
    'The Brooklyn Historical Society building, a Renaissance Revival structure of 1878–81',
    'Montague Street, the neighborhood\'s main shopping street',
    'Cadman Plaza and the Borough Hall Skyscraper District',
    'Brooklyn Bridge Park along the East River shoreline',
    'Love Lane and Grace Court, two of the district\'s surviving lanes',
  ],
  waterways: ['East River', 'Upper New York Bay', 'Buttermilk Channel'],
  neighborhoods: [
    'The Fruit Streets — Cranberry, Orange and Pineapple',
    'Willow Street',
    'Columbia Heights',
    'Willowtown',
    'Montague Street',
    'Hicks Street',
    'Henry Street',
    'Remsen Street',
    'Joralemon Street',
    'Atlantic Avenue',
    'Cadman Plaza West',
    'Brooklyn Bridge Park',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Brooklyn_Heights',
    'https://architecturaltrust.org/easements/about-the-trust/trust-protected-communities/historic-districts-in-new-york/brooklyn-heights-historic-district/',
    'https://thebha.org/neighborhood/',
    'https://www.neighborhoodscout.com/ny/brooklyn/brooklyn-heights',
    'https://www.nyc.gov/assets/lpc/downloads/pdf/lp_rhmanual.pdf',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://a816-dohbesp.nyc.gov/IndicatorPublic/data-stories/rat-inspections/',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
    'https://ucanr.edu/blog/pests-urban-landscape/article/proactive-ipm-programs-multi-unit-housing-environments',
    'https://streetworksmanual.nyc/chapter-three/building-vaults',
  ],
};
