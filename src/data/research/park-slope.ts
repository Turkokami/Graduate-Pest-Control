import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Park Slope (Kings County).
 *
 * Two facts do most of the work here. First, the Park Slope Historic District
 * and its two extensions cover roughly 40 city blocks and 2,575 buildings,
 * making it New York's largest landmarked neighbourhood by building count.
 * Second, the neighbourhood is literally a slope: it falls from the Harbor Hill
 * terminal moraine down to the Gowanus lowland, which is at sea level and in a
 * Zone A flood risk area. Every claim traces to a URL in `sources`.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const parkSlope: MarketResearch = {
  verified: true,
  housing:
    'About 60 per cent of Park Slope\'s residential stock was built in 1939 or earlier, and roughly 35.2 per cent of it sits in small two-, three- or four-unit apartment buildings — which is the statistical fingerprint of a rowhouse neighbourhood whose houses have been subdivided. The National Register listing counts 1,802 contributing buildings put up between 1862 and about 1920, and the city historic district and its extensions now cover some 2,575 buildings across roughly 40 blocks. Vacancy runs around 8.4 per cent.',
  structuralNotes: [
    'The Park Slope Historic District was designated by the Landmarks Preservation Commission in 1973, listed on the National Register in 1980, extended to the south in 2012 and to the north in 2016; the combined district of roughly 2,575 buildings is New York\'s largest landmarked neighbourhood by building count.',
    'Edwin Clarke Litchfield bought farmland here and built Litchfield Villa, an Italianate mansion, between 1854 and 1857, then sold parcels to residential developers; the brownstone boom followed the completion of Prospect Park, and by the 1890 census Park Slope was recorded as the richest community in the United States.',
    'The neighbourhood is the western flank of the Harbor Hill Moraine, the terminal moraine of the last glaciation, whose western end is the heights above Gowanus in Brooklyn. Battle Hill in Green-Wood Cemetery, part of the same moraine, is the highest natural point in Brooklyn at 216 feet.',
    'The ground therefore falls continuously from Prospect Park West down to Fourth Avenue and beyond to the Gowanus Canal, which sits at sea level in a Zone A flood risk area — so water shed from the upper slope arrives at the bottom of it.',
    'The Gowanus Canal has 14 combined sewer overflow points, was designated a Superfund site in 2009 and placed on the EPA National Priorities List in 2010; heavy rain floods streets there and causes sewage lines to overflow. Its sediment layer averages ten feet thick and reaches twenty feet in places.',
    'Rowhouses here are typically two and three storeys over a basement or cellar storey, in the popular styles of the late nineteenth and early twentieth centuries, with brownstone, brick and limestone fronts, stoops, front areaways and rear gardens running back to a shared block interior.',
    'The Landmarks Preservation Commission rowhouse manual identifies water as the eventual cause of most masonry deterioration, and describes brownstone spalling as the consequence of veneer set with the grain running vertically, so that trapped water freezes and separates the stone layer by layer.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'Contiguous rear gardens across block interiors, tree pits and planted areaways giving burrow ground, refuse handling on the avenue corridors, and older combined drainage running downhill toward Gowanus. The Health Department notes exposed garbage attracts rats and that owners are legally required to keep them out of buildings; Prospect Heights immediately north is inside one of the city\'s four designated Rat Mitigation Zones.',
      season: 'Year-round, most visible late summer through winter',
    },
    {
      pest: 'House mice',
      driver:
        'Party-wall joist pockets between attached houses and unsealed floor penetrations in subdivided rowhouses, which connect adjoining buildings and adjoining apartments inside the wall rather than across a perimeter.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Stacked kitchens and bathrooms on shared plumbing lines in two-to-four-unit conversions. Multi-unit housing research finds pests disperse from high-density units into units next to or otherwise structurally continuous with them, so treating one apartment moves the problem rather than ending it.',
      season: 'Year-round',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Shared voids and conduit runs in converted rowhouses with high tenant turnover. Owners of multiple dwellings must file an annual bedbug report with HPD each December under Housing Maintenance Code sections 27-2018.1 and 27-2018.2.',
      season: 'Year-round',
    },
    {
      pest: 'Carpenter ants and moisture-driven insects',
      driver:
        'Water held at flat sills, failed cornices, spalled brownstone and downhill rear yards where runoff from the slope collects against a rear wall.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Rear gardens, planters, roof drains and basement areaways that hold standing water within a few yards of where people sit, plus the low-lying ground toward the canal.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'Prospect Park and Grand Army Plaza',
    'Litchfield Villa, built 1854–1857',
    'The Old Stone House on Fifth Avenue',
    'The 14th Regiment Armory, 1891–1895',
    'Public Bath No. 7, a Renaissance palazzo of 1906–1910',
    'Green-Wood Cemetery and Battle Hill, at 216 feet the highest natural point in Brooklyn',
    'The Prospect Park West "Gold Coast" of 1880s and 1890s mansions',
  ],
  waterways: ['Gowanus Canal', 'The Prospect Park Lake and Lullwater', 'Upper New York Bay'],
  neighborhoods: [
    'North Slope',
    'Center Slope',
    'South Slope',
    'Prospect Park West',
    'Grand Army Plaza',
    'Seventh Avenue',
    'Fifth Avenue',
    'Fourth Avenue',
    'Montgomery Place',
    'Berkeley Place',
    'Carroll Street',
    'Union Street',
    'Windsor Terrace',
    'Greenwood Heights',
    'Gowanus',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Park_Slope',
    'https://en.wikipedia.org/wiki/Park_Slope_Historic_District',
    'https://www.neighborhoodscout.com/ny/brooklyn/park-slope',
    'https://en.wikipedia.org/wiki/Gowanus_Canal',
    'https://en.wikipedia.org/wiki/Battle_Hill_(Brooklyn)',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://www.nyc.gov/assets/lpc/downloads/pdf/lp_rhmanual.pdf',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://a816-dohbesp.nyc.gov/IndicatorPublic/data-features/rat-report/',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
    'https://ucanr.edu/blog/pests-urban-landscape/article/proactive-ipm-programs-multi-unit-housing-environments',
  ],
};
