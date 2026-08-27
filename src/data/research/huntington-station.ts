import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Huntington Station (Suffolk County, unincorporated hamlet and CDP
 * in the Town of Huntington).
 *
 * The stand-out fact: the largest hamlet in the Town of Huntington by
 * population, with 22.1 per cent of its housing rented and 27.3 per cent of it
 * in something other than a detached house — and a downtown that was cleared
 * of 86 businesses under 1960s urban renewal and left largely as commuter
 * parking. Every claim below traces to a fetched source.
 */
export const huntingtonStation: MarketResearch = {
  verified: true,
  housing:
    'Huntington Station carries roughly 11,414 housing units at a median construction year of 1961, and it is the most mixed stock in the Town of Huntington. About 3,039 units — 26.6 per cent — were built in the 1950s and 2,365, 20.7 per cent, in the 1960s, but 1,318 units, 11.6 per cent, predate 1940 and a further 1,173 went up in the 1940s. Only 72.5 per cent of the stock is detached single-family housing: 1,316 units, 11.5 per cent, are attached, 1,031 sit in buildings of two to four units and 766 in buildings of five or more. Around 2,394 units, 22.1 per cent, are renter-occupied — two and a half times the rate of the harbor hamlets north of it — and vacancy runs at about 5 per cent.',
  structuralNotes: [
    'Huntington Station is an unincorporated hamlet and census-designated place in the Town of Huntington, covering 5.48 square miles at an elevation of about 217 feet, with a 2020 population of 34,878 and a density of 6,369 people per square mile. That density is roughly double the harbor hamlets and it is the largest hamlet population in the town.',
    'The place exists because of a railway argument. The station opened on 13 January 1868 and was built about a mile and a half south of Huntington village, in an area then called Fairground, after a dispute over where to put it; the hamlet then took its name from the station rather than the other way round.',
    'The current station building dates from 1909, put up when the New York Avenue grade crossing was eliminated between 1908 and 1909. Electrification of the Port Jefferson Branch as far as Huntington was completed on 19 October 1970, which brought high-level platforms — two side platforms, each twelve cars long — and made the station the transfer point to the diesel territory east of it. A parking garage went up on the south side in the 1980s and a second on the north side in the 1990s.',
    'Urban renewal in the 1960s demolished 86 businesses around the railroad station and produced the commuter parking lots that are still there instead of the promised mixed-use redevelopment. The Town\'s own downtown revitalisation application describes the result as over fifty years of disinvestment and blight, and notes that the widening of New York Avenue separated the east and west sides and left the corridor unsafe and pedestrian unfriendly.',
    'The residential density immediately around the station is real but small: about 524 households and 1,647 people within a quarter mile of the platform, and 1,726 households and 6,147 people within half a mile. Roughly 5,000 westbound commuters use the station in peak weekday hours.',
    'The southern portion of the downtown is not sewered. Suffolk County approved $1.25 million to complete a comprehensive engineering and design plan for sewers south of the station, with construction estimated between $30 and $40 million. Until that lands, a large part of the densest hamlet in the town remains on on-site wastewater systems.',
    'A wave of recent multifamily and mixed-use building has landed on top of the older fabric: Avalon Bay, 303 rental units of which 44 are affordable, completed in 2013; Country Pointe, 76 equity townhomes with 11 affordable; Northridge, 16 one-bedroom apartments over 6,500 square feet of retail; Gateway Plaza, 66 units over 16,000 square feet of commercial space; and Columbia Terrace, 14 affordable condominiums for military veterans. A 2017 town resolution requires one-fifth of the apartments built in commercial-district mixed-use buildings to be affordable.',
    'That mix — nineteenth-century frame houses, 1940s and 1950s tract housing, two-to-four-unit conversions, and new podium apartment buildings — sits inside one hamlet and one postal geography. Pest work here is not one method applied across a stock; it is four different building types with four different failure modes on the same street grid.',
    'Two-to-four-unit buildings are the quiet problem. A thousand-odd units in that band are mostly conversions of houses that were built as single dwellings, which means a kitchen was added where there was no kitchen, a bathroom stacked over a bedroom, and a second service run cut vertically through floor structures that were never fire-stopped or pest-stopped.',
    'The hamlet is served by three separate school districts — Harborfields, Huntington Union Free and South Huntington Union Free — which is a useful indicator of how many distinct neighborhoods sit inside one census place.',
    'At the Route 110 end, the Walt Whitman Birthplace of 1816 still stands: a two-story cedar-shingled farmhouse built by hand by Walter Whitman Sr, a Quaker carpenter. It was made a New York State Historic Site in 1957 and listed on the National Register in 1985, and the Walt Whitman Shops stand across Route 110 from it. The Teich House, a historic farmhouse in the downtown, was restored with local, state and federal grant funds and now carries exhibit and meeting space.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'The densest commercial and mixed-use fabric in the Town of Huntington, on a corridor cleared and rebuilt in the 1960s, with a partly unsewered downtown south of the station and half a century of surface parking and service yards. Rats work below grade through old drain connections, and interior routes are untouched by exterior baiting.',
      season: 'Year-round baseline, peaking autumn into winter',
    },
    {
      pest: 'House mice',
      driver:
        'Eleven thousand units at a median of 1961, with 2,394 of them rented and over a thousand in two-to-four-unit conversions where a tenant has no access to the cellar, roof void or service risers. Cornell records 50 to 60 droppings a day from a single mouse and sebum marks along frequently used runs, so a new population announces itself quickly and in the wrong unit.',
      season: 'Autumn ingress, October into December',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Multifamily and mixed-use buildings with shared plumbing chases and food premises at street level. In a building with continuous risers, treating one apartment moves the population rather than removing it, which is why the work has to be scoped at building level and scheduled across units.',
      season: 'Year-round, indoors',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Post-war tract housing with low wood-to-soil clearance and sixty-five years of added mulch, patios and plantings. Cornell Cooperative Extension names insufficient clearance, leaking pipes and buried wood debris among the conditions that support a colony, and puts the swarm window from March through June.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Concentrated on the 1,318 pre-1940 units and on rear additions, enclosed porches and converted garages across the post-war belt. The Northeastern IPM Center notes foraging as far as 300 feet from the nest and small piles of sawdust around moisture-damaged wood as the readable sign.',
      season: 'April through September',
    },
    {
      pest: 'Bed bugs',
      driver:
        'The highest rental share and the highest turnover in the town, plus new multifamily buildings where units share walls and corridors. Turnover is the transport mechanism; the building is what determines whether one unit stays one unit.',
      season: 'Year-round, with turnover peaks',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Suffolk County\'s long-term vector plan calls for enhanced catch basin larviciding and records stormwater management expansion from about 15,000 to roughly 50,000 sites. In a dense hamlet with extensive paved surface and a lot of drainage structure, catch basins and small containers on private lots do most of the work.',
      season: 'Late May through September',
    },
  ],
  landmarks: [
    'Huntington LIRR station, opened 1868, current building 1909',
    'The Walt Whitman Birthplace of 1816 on Route 110',
    'The Walt Whitman Shops on Route 110',
    'The Teich House, a restored historic farmhouse in the downtown',
    'Huntington Public Library, Station Branch',
    'The New York Avenue corridor through the downtown',
    'The Avalon Bay, Gateway Plaza and Northridge mixed-use developments',
  ],
  waterways: [
    'No harbor or tidal water inside the census area — the hamlet sits inland at about 217 feet',
    'Surface drainage runs to the harbor heads north and the outwash plain south',
  ],
  neighborhoods: [
    'The downtown around the LIRR station',
    'New York Avenue north and south of the tracks',
    'Depot Road',
    'Olive Street',
    'Lowndes Avenue',
    'Nassau Road',
    'Pulaski Road',
    'The Route 110 corridor and the Walt Whitman Shops area',
    'South Huntington, south of the station',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Huntington_Station,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Huntington-Station-Demographics.html',
    'https://en.wikipedia.org/wiki/Huntington_station_(LIRR)',
    'https://www.ny.gov/sites/default/files/atoms/files/DRIHuntingtonStationApplication.pdf',
    'https://en.wikipedia.org/wiki/Walt_Whitman_Birthplace_State_Historic_Site',
    'https://huntingtonhistory.com/a-short-history-of-the-town-of-huntington/',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
