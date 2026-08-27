import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Cold Spring Harbor (Suffolk County, hamlet in the Town of Huntington).
 *
 * The stand-out fact: four separate National Register historic districts, all
 * listed in 1985, inside a hamlet of roughly 1,081 housing units — the densest
 * concentration of federally recognized historic fabric in this research wave.
 * Every claim below traces to a fetched source.
 */
export const coldSpringHarbor: MarketResearch = {
  verified: true,
  housing:
    'Cold Spring Harbor records a median construction year of 1960 across roughly 1,081 housing units, but the median disguises a split stock: about 330 units — 30.5 per cent — were built in 1939 or earlier, while only 21 units were added across the whole of the 1940s. Roughly 91.6 per cent are detached houses and 93.5 per cent are owner-occupied, so this is a hamlet of individually owned buildings rather than managed ones.',
  structuralNotes: [
    'Four National Register historic districts sit inside the hamlet, all listed in 1985: the Main Street Historic District with 32 contributing buildings mostly built between 1855 and 1890; the Harbor Road Historic District with 18 residential buildings covering the earliest settlement and the whaling era; the Shore Road Historic District with 20 residential buildings, the oldest dating to about 1790; and the Goose Hill Road Historic District with 11 contributing buildings from the late eighteenth to the mid nineteenth century.',
    'The Shore Road district stands at the foot of a steep wooded bluff and includes work by Grosvenor Atterbury — a row of houses with a hillside immediately behind them, which is a drainage arrangement rather than a view.',
    'Goose Hill Road is described in the register as a small agrarian enclave along both sides of a narrow, winding road, so the older houses there sit on former farm ground with outbuildings and stone walls still in place.',
    'The hamlet is unincorporated and administered by the Town of Huntington, so there is no village architectural review board; the National Register listings are honorific rather than regulatory, and alterations have been made accordingly.',
    'Cold Spring Harbor is named for the naturally cold freshwater springs that flowed and still flow through the area, so the water table sits high in places along the shoreline strip.',
    'The CDP covers 3.58 square miles, of which 3.41 is land and 0.17 water, at an elevation of about 33 feet — meaning most of the built fabric sits close to harbor level with steep ground rising behind it.',
    'Main Street commercial buildings from the 1855–1890 period were built with living space above trade space; the vertical connection between a shop and the flat over it is usually a stair, a chase and a chimney, and all three carry pests.',
  ],
  pestPressures: [
    {
      pest: 'Carpenter ants',
      driver:
        'A third of the stock predates 1940 and much of it sits at the foot of a wooded bluff where ground stays damp and mature timber stands close to buildings; the Northeastern IPM Center notes carpenter ants nest under wood piles and in tree stumps as well as in wall voids, and favor an entryway through a damp wooden window or door sill.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Nineteenth-century buildings on ground with a high water table from the springs the hamlet is named for; Cornell Cooperative Extension notes that leaking pipes and dripping faucets sustain soil moisture and that termites favor heat from furnaces, chimneys and hot water pipes, especially in winter.',
      season: 'Swarms March through June',
    },
    {
      pest: 'House mice',
      driver:
        'Stone and early masonry foundations under buildings raised between 1790 and 1890, where mortar joints have opened and the sill line above them has settled.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Gray squirrels, raccoons and bats',
      driver:
        'A narrow developed strip pressed between the harbor and wooded state and preserve land — Cold Spring Harbor State Park and Uplands Farm Sanctuary — with mature canopy reaching rooflines. Cornell notes that flying squirrels and bats typically enter the upper portion of a building while chipmunks and similar species enter around the foundation.',
      season: 'Late winter denning and late summer dispersal',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Spring-fed freshwater running to a tidal harbor, plus the eight outdoor ponds at the Fish Hatchery and the container habitat that accumulates on wooded residential lots; Suffolk County has identified catch basins as problem breeding sites requiring enhanced larviciding.',
      season: 'Late spring through early autumn',
    },
    {
      pest: 'Cluster flies and overwintering invaders',
      driver:
        'South and west elevations of old frame houses backing onto open ground and woodland, with unsealed soffit returns and gable vents above them.',
      season: 'First warm days of autumn, then again in late winter',
    },
  ],
  landmarks: [
    'The Whaling Museum and Education Center, whose society was founded in 1936 and which opened in 1942',
    'Cold Spring Harbor Fish Hatchery and Aquarium, founded 1883, with two aquarium buildings and eight outdoor ponds',
    'Cold Spring Harbor Laboratory, founded 1890 as the Biological Laboratory, on Bungtown Road',
    'St. John’s Episcopal Church',
    'Cold Spring Harbor Library and Environmental Center',
    'The Fire House Museum',
    'Cold Spring Harbor State Park and Uplands Farm Sanctuary',
    'Cold Spring Harbor Park on the waterfront',
  ],
  waterways: [
    'Cold Spring Harbor',
    'The cold freshwater springs the hamlet is named for',
    'Long Island Sound',
  ],
  neighborhoods: [
    'Main Street Historic District',
    'Harbor Road',
    'Shore Road',
    'Goose Hill Road',
    'Bungtown',
    'Lawrence Hill',
    'The harborfront and Cold Spring Harbor Park',
    'Uplands Farm',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Cold_Spring_Harbor,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Cold-Spring-Harbor-Demographics.html',
    'https://en.wikipedia.org/wiki/Main_Street_Historic_District_(Cold_Spring_Harbor,_New_York)',
    'https://en.wikipedia.org/wiki/Harbor_Road_Historic_District',
    'https://en.wikipedia.org/wiki/Shore_Road_Historic_District',
    'https://en.wikipedia.org/wiki/Goose_Hill_Road_Historic_District',
    'https://en.wikipedia.org/wiki/Cold_Spring_Harbor_Whaling_Museum',
    'https://en.wikipedia.org/wiki/Cold_Spring_Harbor_Fish_Hatchery_and_Aquarium',
    'https://en.wikipedia.org/wiki/Cold_Spring_Harbor_Laboratory',
    'https://www.coldspringharborvillage.org/',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
