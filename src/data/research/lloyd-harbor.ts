import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Lloyd Harbor (Suffolk County, incorporated Village, Town of Huntington).
 *
 * The stand-out fact: a village of roughly 1,261 housing units spread over 9.3
 * square miles with 22 miles of shoreline and a two-acre minimum lot size —
 * the lowest building density and the highest perimeter-to-house ratio in this
 * research wave. Every claim below traces to a fetched source.
 */
export const lloydHarbor: MarketResearch = {
  verified: true,
  housing:
    'Lloyd Harbor records a median construction year of 1966 across roughly 1,261 housing units — the newest median of the five North Shore markets in this wave, and a surprise given the village’s age. About 359 units (28.5 per cent) were built in the 1960s and 221 in the 1950s, while only 158 units — 12.5 per cent — date from 1939 or earlier. Roughly 90.2 per cent are detached houses and 97.3 per cent are owner-occupied, with only about 32 renter-occupied units in the entire village.',
  structuralNotes: [
    'The village incorporated in 1926 when Lloyd Neck and West Neck combined, and nearly all of its land is zoned A-1 Residence at a two-acre minimum lot size; the A-2 district requires four acres. A-1 lots need at least 175 feet of frontage and set the principal building back 60 feet from the front line and 40 feet from every other boundary.',
    'There is no commercial or industrial use in the village apart from a single landscaping nursery, so there is no retail refuse concentration to sustain a rat population — the pressure here is woodland and shoreline, not commerce.',
    'Lloyd Neck and West Neck are joined by an isthmus roughly 2,500 feet long and 200 feet wide carrying the West Neck Road causeway, which separates Lloyd Harbor from the Oyster Bay and Cold Spring Harbor complex.',
    'The village sits on the Harbor Hill terminal moraine. Land slopes exceed 50 per cent in places near the water; maximum elevation is about 180 feet above sea level near southwest West Neck, and Lloyd Neck reaches about 140 feet in central Caumsett.',
    'Surface deposits are mainly unconsolidated sands and gravels of glacial origin in the Carver–Plymouth–Riverhead and Montauk–Raven–Riverhead soil associations; soils on slopes of 15 per cent or greater carry moderate to severe erosion hazard.',
    'The north and west shores of Lloyd Neck carry steep-faced bluffs of unconsolidated sediment subject to ongoing erosion from storm waves, with bluffs on Seacrest Drive reaching 50 feet and the required buffer between bluff and house reduced from 125 to 100 feet.',
    'Inner Lloyd Harbor carries a nearly continuous band of tidal wetland vegetation on both the north and south shorelines, dominated by salt meadow cordgrass and smooth cordgrass. Lloyd Harbor itself is about 630 acres, with a further 75 acres of Huntington Harbor inside the village.',
    'The village regulates tree cutting, steep-slope construction, building height, setbacks and dock construction, which means work on a Lloyd Harbor property frequently touches the building department even when it is exterior remediation rather than new build.',
    'About 35 per cent of the village land is preserved open space, and over one million non-residents visit annually for the state park and the refuge — so houses here abut public woodland rather than other houses.',
  ],
  pestPressures: [
    {
      pest: 'Gray squirrels, raccoons and bats',
      driver:
        'The dominant pressure. Two-acre minimum lots inside 35 per cent preserved open land, adjoining Caumsett State Historic Park Preserve and Target Rock National Wildlife Refuge, put mature forest canopy against rooflines on almost every parcel. Cornell notes that flying squirrels and bats typically enter the upper portion of a building while other species enter around the foundation, and recommends animal-resistant building vents and chimney covers.',
      season: 'Late winter denning and late summer dispersal',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'A mid-century stock built into wooded, steeply sloping ground where two-thirds of the adjoining Bird Conservation Area is forest; the Northeastern IPM Center notes carpenter ants nest under wood piles and in tree stumps outdoors and forage as far as three hundred feet from the nest, which on a two-acre lot means the parent colony can be entirely off the building.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Slopes above 15 per cent shedding water toward foundations on sandy glacial soils, with landscape timbers, retaining structures and buried debris common on estate-scale grounds; Cornell Cooperative Extension calls for a minimum of three inches of clearance between wood siding or baseboard and soil.',
      season: 'Swarms March through June',
    },
    {
      pest: 'House mice',
      driver:
        'Very long building perimeters relative to the number of houses — 22 miles of shoreline and 35 miles of public road across roughly 1,261 dwellings — combined with detached garages, pool houses, barns and stables that hold populations before they reach the residence.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'A nearly continuous band of tidal salt marsh in inner Lloyd Harbor, spring-fed ponds in the Fiske Bird Sanctuary draining to Lefferts Mill Tidal Pond, and the roughly six-acre Fresh Pond in Caumsett with its wooded and fringing marsh shoreline. Suffolk County larvicides some 4,000 acres of grid-ditched salt marsh and works toward open marsh water management.',
      season: 'Late spring through early autumn',
    },
    {
      pest: 'Wasps and hornets',
      driver:
        'Deep soffit returns and porch ceilings on large houses set well back from the road, where a nest is not noticed until it is already established.',
      season: 'Colonies peak August into September',
    },
  ],
  landmarks: [
    'Caumsett State Historic Park Preserve, the 1,426-acre Marshall Field III estate bought by New York State in 1961',
    'Target Rock National Wildlife Refuge, donated by Ferdinand Eberstadt in 1969',
    'Joseph Lloyd Manor House, built 1763',
    'Henry Lloyd’s house, which survives within Caumsett',
    'The West Neck Road causeway across the isthmus',
    'West Neck Beach',
    'Lloyd Harbor Village Park, with its pond, dock, kayak access and amphitheatre on the former Rosemary Farm',
    'Fresh Pond in Caumsett',
  ],
  waterways: [
    'Lloyd Harbor',
    'Huntington Bay',
    'Huntington Harbor',
    'Cold Spring Harbor',
    'Long Island Sound',
    'Fresh Pond',
    'Lefferts Mill Tidal Pond',
  ],
  neighborhoods: [
    'Lloyd Neck',
    'West Neck',
    'Caumsett',
    'Target Rock',
    'Fort Hill',
    'Seacrest',
    'Middle Hollow',
    'The West Neck Road causeway',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Lloyd_Harbor,_New_York',
    'https://docs.dos.ny.gov/opd-lwrp/LWRP/Lloyd%20Harbor_V/Original/LloydHarborSII.pdf',
    'https://www.lloydharbor.org/',
    'https://ecode360.com/12253582',
    'https://www.point2homes.com/US/Neighborhood/NY/Lloyd-Harbor-Demographics.html',
    'https://en.wikipedia.org/wiki/Caumsett_State_Historic_Park_Preserve',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
