import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Whitestone (Queens Community District 7).
 *
 * The stand-out fact: a detached, owner-occupied suburb inside the city line.
 * 42.9 per cent of the housing is a detached one-family house and 77.6 per cent
 * of it is owner-occupied, at a median construction year of 1957 — and until
 * December 2023 the whole neighbourhood drained into a combined sewer, which
 * the city then spent 128 million dollars separating across 124 blocks.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const whitestone: MarketResearch = {
  verified: true,
  housing:
    'Whitestone carries roughly 14,579 housing units at a median construction year of 1957, and the post-war decades dominate: 34.1 per cent of the stock went up in the 1950s, 16.2 per cent in the 1960s and 10 per cent in the 1970s, with 17.9 per cent dating from 1939 or earlier and only about 2 per cent built since 2010. The building form is suburban. Some 6,261 units, 42.9 per cent, are detached one-family houses and a further 1,410, 9.7 per cent, are one-family attached; 4,318 units, 29.6 per cent, sit in two-unit buildings, which is the classic Queens mother-daughter or owner-plus-rental arrangement rather than an apartment house. Only 800 units are in three- and four-unit buildings, 109 in five-to-nine and 108 in ten-to-nineteen — but 997 units sit in buildings of twenty to forty-nine and 560 in buildings of fifty or more, almost all of that in the waterfront co-op complexes on the Beechhurst side. Tenure runs 10,849 owner-occupied units, 77.6 per cent, against 3,133 rented, with a 4.1 per cent vacancy rate, a population of about 37,970 and a median household income of 96,988 dollars. The 2010 census counted 30,773 residents across 1,584.85 acres, a density of 19.4 inhabitants per acre. The NYU Furman Center records the wider Queens Community District 7, Flushing and Whitestone together, at 242,765 residents and 98,610 housing units in 2021, a 52.2 per cent homeownership rate, a 3.6 per cent rental vacancy rate, and 54.1 serious and 195.7 total housing code violations per 1,000 privately owned rental units in 2022.',
  structuralNotes: [
    'Whitestone occupies the northernmost part of Queens: the East River to the north, College Point and the Whitestone Expressway to the west, Flushing and 25th Avenue to the south, and Bayside and Francis Lewis Boulevard to the east. That is a peninsula edge with a long shoreline, and the neighbourhood sits on ground that rises away from the water.',
    'The neighbourhood was zoned in 1961 and not touched again for forty-four years. The Department of City Planning certified a rezoning of roughly 310 blocks in Community District 7 on 22 August 2005 and the City Council adopted it on 21 December 2005, covering Whitestone, Beechhurst and Robinwood between the Whitestone Expressway, the Clearview Expressway and Little Neck Bay, 25th and 26th Avenues, and the East River. The stated reason was that large new houses were being built considerably out of scale with their surroundings and large lots were being subdivided.',
    'The districts the rezoning mapped describe the building stock precisely. R1-2 permits only one-family detached houses on a minimum 5,700 square foot lot with a 60-foot width. R2A is one-family detached with 20-foot side yards on corners and a 35-foot height cap. R3X allows one- or two-family detached on a 3,325 square foot minimum with a 35-foot cap, R3A one- and two-family detached on 2,375 square feet at a 25-foot width, and retained R2 areas keep 3,800 square foot lots at 40-foot widths. Commercial overlays were narrowed from 150 to 100 feet deep.',
    'A 60-foot lot width with a detached house on it produces two things that matter to this work: a genuine side yard on both flanks, so the whole perimeter of the building can actually be reached and inspected, and a deep rear yard that backs onto the deep rear yard behind it. The block interiors here are soft ground with planting, sheds, detached garages and mature trees, not paved light wells.',
    'Until 2023 the entire neighbourhood drained into a combined sewer. The Department of Environmental Protection completed two projects, SE810 at 72 million dollars across 70 blocks from September 2018 to 2023 and SE811 at 56 million dollars across 54 blocks from August 2021 to December 2023, adding 31,316 feet — nearly six miles — of new storm sewers across 124 blocks, converting 12,092 feet of combined sewer to sanitary sewer, replacing 213 catch basins and installing 118 new ones, and replacing 47,341 feet of water main. Before the work, exceeding the combined system in heavy rain produced roadway flooding and untreated discharge into Flushing Bay; the separation is projected to keep 29 million gallons of pollution a year out of the bay.',
    'That is an unusual thing to be able to say about a New York City neighbourhood, and it changes the below-grade picture. A combined system that surcharges pushes rodents up and out through yard drains, cellar drains without a working trap and disused connections. A separated system removes that mechanism from the street — and leaves whatever is wrong on the private side of the property line exactly as it was, because none of that work crossed a house line.',
    'The Bronx-Whitestone Bridge opened on 29 April 1939, an Othmar Ammann design with a 2,300-foot main span and 3,700 feet overall. After the Tacoma Narrows collapse, 14-foot stiffening trusses were added and completed in 1947, and the deck widened from four lanes to six; the trusses were removed in 2003, taking 6,000 tons off the structure. Daily traffic averaged 120,000 vehicles by 2008. The Francis Lewis Boulevard extension opened in November 1939 and the Cross Island Parkway approach in June 1940.',
    'The Throgs Neck Bridge opened on 11 January 1961, again an Ammann design, with an 1,800-foot main span and a Queens approach running a 2,800-foot ramp east of Cryder Point in Bay Terrace before descending toward the Clearview Expressway. The revised alignment displaced 421 houses; the original plan would have taken 860. Daily traffic was 119,249 vehicles in 2016. Between the two bridges, their approach roads and the Whitestone, Cross Island and Clearview corridors, the neighbourhood is cut by more high-speed infrastructure than any comparable low-density district in the city.',
    'Francis Lewis Park sits at the foot of the Whitestone Bridge, bounded by Third Avenue, 147th Street, the East River and Parsons Boulevard: 9.231 acres above water and 7.631 acres below, acquired from a private estate in 1937, with winding paths to two overlooks and beach access from the lower one. Named for the Welsh-born merchant who signed the Declaration of Independence and retired to Whitestone in 1765, the park was renovated in 1992 to address erosion and gained a bocce court in 1999.',
    'Powell\'s Cove, formerly Roe\'s Cove, cuts into the shoreline on the western side. Powell\'s Cove Park was completed in 1999 as an environmental waterfront park protecting a bay with sizable tidal wetlands and filled, undeveloped uplands. A tidal marsh margin against residential blocks is a permanent source of cover, standing water and wildlife pressure that no amount of work on a house will change.',
    'The waterfront co-op complexes are the exception to everything above. Le Havre on the Water in Beechhurst was built in 1958 as 32 nine-storey buildings across 28 acres, four apartments to a floor, all corner layouts, designed by George J. Miller and built by Alfred Levitt, and converted from rental to cooperative on 12 September 1984. Those buildings have designed service cores, shared risers and communal refuse handling, which is a different job from the detached house two streets away.',
    'The recorded history explains the lot pattern. Dutch farmers took the north shore from the Matinecock in 1645 and the settlement was named for a large white boulder that broke the tides along the shore. John Powell bought David Roe\'s 87-acre parcel in 1786; William Ziegler of the Royal Baking Powder Company consolidated holdings into the Ziegler Tract in 1883; Whitestone Landing at 154th Street was a summer resort into the early twentieth century; and the Whitestone Branch railroad station closed in 1932. Large private estates subdivided late, which is why so much of the neighbourhood is 1950s houses on generous ground.',
    'Waste rules now catch almost the entire neighbourhood in one band. Official NYC Bins have been required for residential properties of one to nine units since 1 June, with a warning period to 7 September and full enforcement from Tuesday 8 September 2026. With 82.6 per cent of Whitestone housing in one- and two-unit buildings, this is not a rule for some other kind of street; it applies house by house along nearly every block. The Empire Bin programme for buildings of 31 or more units has been deployed in Manhattan Community District 9 and Brooklyn Community District 2, with expansion named for Queens Community Board 2 among others — not District 7.',
    'The Health Department has established four Rat Mitigation Zones and none of them is in Queens, so there is no zone-level proactive inspection cycle here. NYC Health guidance to owners is to store refuse in hard plastic rat-resistant containers with tight-fitting lids, to seal cracks and holes in the foundation, the sidewalk and under doors, and to keep landscaped areas clear of tall weeds and low shrubs.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'Deep rear yards backing onto one another across soft-ground block interiors, with detached garages, sheds, compost and bird feeding on private land rather than at the kerb. NYC Health guidance is that rats need food, water, shelter and safe ways to move around, and a Whitestone block interior supplies the shelter and the routes even where the food is well handled.',
      season: 'Year-round, with a visible autumn shift toward buildings',
    },
    {
      pest: 'House mice',
      driver:
        'Detached and semi-detached 1950s houses on block and poured foundations, where the sill plate junction, the utility penetrations, the garage door corners and the crawl or cellar access are the whole of the entry list — and where a detached garage or shed can hold a population for years before anything reaches the house.',
      season: 'Autumn ingress, October into December',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Seventy years of mulch beds, landscape timbers, deck posts and grade build-up against foundations poured in the 1950s, on lots deep enough that the planting reaches the house on all four sides. Soil contact and moisture are the whole mechanism.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Mature canopy over deep yards, shaded north-facing elevations near the water, and 1950s framing behind gutters and flashing that are now at the end of their service life. Carpenter ants excavate wood that water has already softened, so the colony is a moisture report.',
      season: 'April through September',
    },
    {
      pest: 'Eastern gray squirrels and raccoons',
      driver:
        'Street trees and yard canopy meeting the low rooflines of capes and split-levels, with soffit returns, gable louvres and ridge details on 1950s roofs that have been redone at least once and not always closed properly on the way back.',
      season: 'Late winter and late summer denning',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Container water on large private lots — gutters, boat and pool covers, tarpaulins, planters and wheelbarrows — alongside the tidal margin at Powell\'s Cove. NYC Health treats April through October as the West Nile season and takes 311 reports of standing water in that window.',
      season: 'Late May through September',
    },
    {
      pest: 'Wasps and hornets',
      driver:
        'Long eaves, porch ceilings, detached garages and decks on detached houses, with colonies at maximum size in late summer. On this stock the nest is very often on an outbuilding rather than on the house itself.',
      season: 'July through October',
    },
  ],
  landmarks: [
    'The Bronx-Whitestone Bridge, opened 29 April 1939',
    'The Throgs Neck Bridge, opened 11 January 1961',
    'Francis Lewis Park, 9.231 acres above water at the foot of the Whitestone Bridge',
    'Powell\'s Cove Park, completed 1999',
    'Le Havre on the Water, 32 nine-storey buildings on 28 acres, built 1958',
    'Cryder Point and the Beechhurst waterfront',
    'The site of Whitestone Landing at 154th Street',
    'Malba, the private-association enclave on the western bluff',
  ],
  waterways: [
    'The East River',
    'Powell\'s Cove, formerly Roe\'s Cove',
    'Little Neck Bay',
    'Flushing Bay, which received the combined sewer discharges',
    'Long Island Sound beyond the Throgs Neck',
  ],
  neighborhoods: [
    'Whitestone Village and the old centre',
    'Beechhurst',
    'Robinwood',
    'Malba',
    'Cryder Point and Cryder Lane',
    'The Powell\'s Cove Boulevard shoreline',
    '150th Street and the Francis Lewis Park blocks',
    'The 14th and 15th Avenue blocks',
    'The Cross Island Parkway edge',
    'The 25th Avenue southern boundary',
    'The Clearview Expressway corridor',
    'The Whitestone Expressway corridor',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Whitestone,_Queens',
    'https://www.point2homes.com/US/Neighborhood/NY/Queens/Whitestone-Demographics.html',
    'https://furmancenter.org/neighborhoods/view/flushing-whitestone',
    'https://www.nyc.gov/site/dep/news/24-019/to-better-manage-extreme-rainfall-city-invests-128-million-add-six-miles-new-storm-sewers',
    'https://www.nyc.gov/assets/planning/download/pdf/plans/whitestone/whitestone.pdf',
    'https://www.citylandnyc.org/queens-neighborhoods-down-zoned/',
    'https://en.wikipedia.org/wiki/Bronx%E2%80%93Whitestone_Bridge',
    'https://en.wikipedia.org/wiki/Throgs_Neck_Bridge',
    'https://www.nycgovparks.org/parks/francis-lewis-park/history',
    'https://www.nycgovparks.org/parks/powells-cove-park',
    'https://www.lehavreforsale.com/le-havre-information/',
    'https://www.nyc.gov/site/dsny/collection/containerization/nyc-bins.page',
    'https://www.nyc.gov/site/dsny/collection/containerization/empire-bins.page',
    'https://a816-dohbesp.nyc.gov/IndicatorPublic/data-features/rat-mitigation-zones',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.nyc.gov/site/doh/health/health-topics/west-nile-virus.page',
  ],
};
