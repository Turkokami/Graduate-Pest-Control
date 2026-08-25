import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Williamsburg (Kings County).
 *
 * The stand-out fact: two housing stocks on the same blocks. The NYU Furman
 * Center records Brooklyn Community District 1 at 77,305 housing units with a
 * 14.6 per cent homeownership rate and 44.1 serious housing code violations per
 * 1,000 privately owned rental units, while a rezoning of roughly 184 blocks
 * projected some 7,391 net new dwellings on the waterfront. Nineteenth-century
 * small buildings and twenty-first-century towers share drainage, sidewalks and
 * block interiors.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const williamsburg: MarketResearch = {
  verified: true,
  housing:
    'Williamsburg had a population of 151,308 at the 2020 census, and NeighborhoodScout puts 43.6 per cent of its residential real estate in small two-, three- and four-unit apartment buildings at a density of 63,659 people per square mile, with a 3.2 per cent vacancy rate and effectively no owner occupancy in the surveyed area. The NYU Furman Center records Brooklyn Community District 1, Greenpoint and Williamsburg, at 159,580 residents and 77,305 housing units in 2022, a 14.6 per cent homeownership rate, a 2.7 per cent rental vacancy rate, 44.1 serious housing code violations and 227.9 total violations per 1,000 privately owned rental units. Alongside that older small-building stock stands new high-rise construction: the 2005 waterfront rezoning covered approximately 184 blocks and projected a net addition of about 7,391 dwelling units across 76 development sites, and the Domino Sugar site alone has produced a sixteen-storey building of 522 units in 2017, a forty-five-storey tower of 330 units and a twenty-four-storey building in 2019, and a thirty-nine-storey condominium and fifty-five-storey rental pair of roughly 560 units in 2024.',
  structuralNotes: [
    'The waterfront rezoning mapped a shore park running about two miles from Manhattan Avenue in Greenpoint south to North 3rd Street, required a continuous shore public walkway, and set waterfront streetwalls at 60 to 70 feet in mixed-use areas while holding upland contextual zoning to a 40-foot streetwall and 50-foot overall height.',
    'A second, upland rezoning approved 29 July 2009 covered 175 blocks that were 93 per cent R6, replacing that with contextual R6A, R6B and R7A districts, eliminating as-of-right development of large towers without height limits, applying the Inclusionary Housing programme to 44 blocks of R7A along commercial corridors, and narrowing commercial overlays from 150 to 100 feet deep.',
    'The neighbourhood divides at real street lines: Grand Street separates the North Side from the South Side, and Division Avenue marks the southern edge of South Williamsburg. East Williamsburg sits inland to the east. Those divisions track different building ages and different building types.',
    'The industrial fabric that drew artists from the 1970s onward was large-floor-area warehouse and manufacturing space. The Domino Sugar Refinery operated from 1856 to 2004 across eleven acres on the East River, and its Pan, Filter and Finishing House was designated a New York City landmark in 2007; the refinery building was converted to 460,000 square feet of office space by 2023.',
    'Newtown Creek, which drains Bushwick, Williamsburg and Greenpoint on the Brooklyn side, was listed as a Superfund site on 27 September 2010. The sewer system serving it is not compliant with the Clean Water Act: combined sewer overflows occur roughly weekly, discharging on the order of 100 million gallons, and as little as a tenth of an inch of rain can trigger one.',
    'Bushwick Inlet contains a former manufactured gas plant undergoing remediation and ten former oil storage tanks, on land planned for public park.',
    'High-rise buildings here fall under NYC rule section 25-211, which requires refuse chutes to be built of brick masonry at least eight inches thick or reinforced concrete at least six inches, to run straight and plumb with a minimum 24-inch inside dimension, to extend at least six feet above the roof, and to have approved self-closing hoppers at each service opening. The chute, the refuse room and their fittings must be maintained free of vermin, and the owner must establish a treatment programme and keep records of it.',
    'Since 1 June 2026 residential buildings with one to nine units must use official NYC Bins, with full enforcement from 8 September 2026. Buildings of ten to thirty units may choose between NYC Bins and stationary Empire Bins, and buildings of thirty-one or more units move to Empire Bins serviced by automated side-loading trucks, with Brooklyn Community District 2 phasing in through 2026 and a citywide rollout planned by 2032.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'A combined sewer system that overflows weekly, active construction sites across the rezoned blocks, and a very large number of small buildings each setting out their own waste. NYC Health guidance is that rats need food, water, shelter and safe ways to move around, and disturbed ground plus exposed refuse supplies all four.',
      season: 'Year-round, with displacement whenever a site is broken open',
    },
    {
      pest: 'German cockroaches',
      driver:
        'In older small buildings, stacked kitchens on a single wet line; in the new towers, the compactor chute and chute rooms that section 25-211 requires be kept free of vermin and treated on a programme. Both are building-wide routes, not unit problems.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'House mice',
      driver:
        'Party walls and joist pockets in the attached nineteenth-century stock, and in newer construction the vertical shafts, riser penetrations and unfinished slab edges that carry services through a tower.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'Bed bugs',
      driver:
        'A 2.7 per cent rental vacancy rate and a 14.6 per cent homeownership rate mean high turnover in a mostly rented stock. Owners of multiple dwellings must file a bedbug annual report with HPD each December and give the receipt to occupants or post it.',
      season: 'Year-round',
    },
    {
      pest: 'Oriental and American cockroaches',
      driver:
        'Cellars and below-grade plant near the waterfront and the creek, where groundwater is high and drainage connects to a system that surcharges in rain.',
      season: 'Year-round below grade, surfacing in warm wet weather',
    },
  ],
  landmarks: [
    'The Domino Sugar Refinery, landmarked in 2007',
    'The Williamsburg Bridge',
    'McCarren Park',
    'Domino Park on the East River waterfront',
    'Bushwick Inlet Park',
    'Marsha P. Johnson State Park, formerly East River State Park',
    'Grand Ferry Park',
    'The Williamsburg Houses, landmarked in 2003',
  ],
  waterways: ['East River', 'Newtown Creek', 'Bushwick Inlet'],
  neighborhoods: [
    'The North Side',
    'The South Side',
    'South Williamsburg',
    'East Williamsburg',
    'Bedford Avenue',
    'Grand Street',
    'Metropolitan Avenue',
    'Kent Avenue',
    'Broadway',
    'Division Avenue',
    'Graham Avenue',
    'The East River waterfront',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Williamsburg,_Brooklyn',
    'https://www.neighborhoodscout.com/ny/brooklyn/williamsburg',
    'https://furmancenter.org/neighborhoods/view/greenpoint-williamsburg',
    'https://www.nyc.gov/assets/planning/download/pdf/plans/greenpoint-williamsburg/gw_feis_ch_02.pdf',
    'https://www.citylandnyc.org/north-brooklyn-rezoned/',
    'https://en.wikipedia.org/wiki/Domino_Sugar_Refinery',
    'https://en.wikipedia.org/wiki/Newtown_Creek',
    'https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-57400',
    'https://nyc.gov/bins',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://news.cornell.edu/stories/2018/02/national-program-stops-pests-public-housing',
  ],
};
