import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Glen Cove (Nassau County, CITY).
 *
 * The stand-out fact: Glen Cove is one of only two cities in Nassau County, it
 * separated from the Town of Oyster Bay on 1 January 1918 without ever having
 * been an incorporated village, and its housing is split almost evenly between
 * owners and renters — 49.3 per cent owner-occupied against 47.5 per cent
 * renter-occupied, with 12.8 per cent of all units in buildings of 50 or more.
 * It also carries a documented industrial waterfront and a federal Superfund
 * cleanup on Glen Cove Creek. Every claim below traces to a fetched source.
 */
export const glenCove: MarketResearch = {
  verified: true,
  housing:
    'Glen Cove records a median construction year of 1960 across roughly 11,462 housing units, but the tenure split is what separates it from everything around it: about 5,656 units are owner-occupied and 5,439 are renter-occupied, 49.3 per cent against 47.5 per cent, with 3.2 per cent vacant. Only 48.8 per cent of units are detached single-family houses. The remainder is genuine multifamily — 1,513 units in two-family buildings, 990 in three- and four-unit buildings, 820 in buildings of 20 to 49 units and 1,461 units, 12.8 per cent of the city, in buildings of 50 or more. By era, 2,155 units — 18.8 per cent — predate 1940, 2,842 went up in the 1950s, and 1,152 have been added since 2010.',
  structuralNotes: [
    'Glen Cove is a city, not a village and not a hamlet. It separated from the Town of Oyster Bay on 1 January 1918 after 250 years and was unusual in being incorporated as a city without ever having been an incorporated village first. It runs a strong mayor–council government with its own police department, fire department, harbour patrol, building department, code enforcement, public works and sanitation — so almost every question about who is responsible for a building here is answered inside the city rather than at a town or county desk.',
    'The city operates a Landlord Registry. Every owner of a one- or two-family dwelling unit in rental occupancy must register within 30 days unless the owner or an immediate family member maintains bona fide occupancy, and registration carries a biannual Building Department inspection for housing-code compliance and working smoke detectors. There is a rebuttable presumption of rental status if the owner does not live there. That is a documented, recurring inspection cycle on the small rental stock, and it is unusual on the North Shore.',
    'Code enforcement here is explicit about the conversions that create pest problems: cellar and basement occupancy is prohibited, homes may not be used by more than the number of families legally permitted, and rental of a dwelling unit or any portion of one for less than 28 days is not permitted.',
    'The city covers 19.24 square miles, of which only 6.66 square miles is land and 12.59 square miles is water. Average elevation is about 45 feet but the range runs from sea level at the shore to 175 feet at a point between Harbor Hill and Carpenter Street, and level ground is interspersed with steep knolls and slopes. Steep slopes and bluffs sit along Hempstead Harbor, along Glen Cove Creek and around Garvies Point.',
    'The hills along the shore are part of the Harbor Hill Moraine, a terminal moraine left by the glaciers of the last ice age.',
    'Glen Cove Creek runs east to west into Hempstead Harbor and was channelized in the early twentieth century by the US Army Corps of Engineers. It emerges at the Mill Pond, named for the mill that once stood there. Dosoris Pond and a few small marsh areas sit at the northern end of the city between West Island and East Island, and wetlands occur mainly on the Welwyn Preserve and elsewhere along Long Island Sound.',
    'The industrial waterfront is documented and it is not ancient history. Manufacturers here included the Duryea corn starch works, which ran until 1900; Columbia Ribbon and Carbon from 1932 to 1980; Photocircuits Corporation, making circuit boards from 1951 to 2007 and employing 740 people; Pall Corporation from 1953; Slater Electric from 1956; Powers Chemco, later Konica Minolta, closed in 2006; and Li Tungsten, formerly Wah Chang Smelting.',
    'From 1942 to 1985 various companies processed metals at the 26-acre Li Tungsten facility on Garvies Point Road along Glen Cove Creek, disposing of wastes into surrounding areas including a municipal and industrial dump. EPA removed radioactive materials, chemicals and storage tanks in 1989–1990, listed the site on the National Priorities List in 1992, and completed the cleanup in 2008 — removing contaminated soil and sediment, demolishing the facility, building a dewatering facility for Glen Cove Creek and imposing land use restrictions. Of the 214 acres in the waterfront redevelopment area, 68 acres sit within state and federal Superfund sites.',
    'That remediated ground is now Garvies Point: over 1,000 LEED-certified housing units plus 75,000 square feet of commercial space, a ferry terminal opened in 2016 with capacity for more than 1,600 passengers a day, a marina, walking paths, a beachfront park and an amphitheatre. The Green at Garvies Point added 55 affordable apartments. This is new, tight, mechanically ventilated multifamily built beside seventy-year-old two-family houses and eighty-year-old commercial fabric.',
    'Hempstead Harbor, which Glen Cove fronts, is an approximately 1,550-acre habitat between Sands Point and the city. The outer harbour runs 6 to 20 feet deep at mean low water and the inner harbour generally less than 6 feet, with intertidal mudflats and salt marsh. Tidal range throughout the harbour is approximately 7 feet, and nonpoint source pollution is identified as the single largest threat to its water quality.',
    'Great estates survive around the built-up core: Welwyn, the 204-acre former Harold Pratt estate; Morgan Memorial Park, 40 acres of former J.P. Morgan Jr. land; Winfield Hall, the F.W. Woolworth estate; The Braes, now the Webb Institute campus; and Killenworth. Estate ground means mature canopy, outbuildings and heavy wildlife pressure a few streets from apartment blocks.',
    'Three federal listings sit in the city: the United States Post Office, listed 1989; the Justice Court Building, listed 1990; and the Old Glen Cove Post Office, listed 2010.',
  ],
  pestPressures: [
    {
      pest: 'German cockroaches',
      driver:
        'A multifamily share that no neighbouring market comes close to — over half the housing stock is something other than a detached house, and 1,461 units sit in buildings of 50 or more. Cornell notes German cockroaches favour tight, dark spaces such as gaps and crevices, are easily spread with food items and cardboard packaging, are attracted to the heat of electronics, and that proteins in their faeces are allergens which can cause and sustain asthma.',
      season: 'Year-round indoors, complaints peak in heating season',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Shared structure and tenant turnover. StopPests guidance for property managers is blunt that bed bugs spread quickly to neighbouring apartments in multi-unit buildings, that all units above, below, either side and across the corridor from an infested unit must be inspected, and that maintenance staff should seal openings around pipes, utility conduits and bathroom vents.',
      season: 'Year-round, reported peaks after summer travel',
    },
    {
      pest: 'Norway rats',
      driver:
        'A working commercial downtown, a channelized creek, a marina and ferry terminal, and a hundred years of drainage laid under an industrial waterfront that has been demolished and rebuilt in places. Cornell notes rats produce 40 to 50 droppings a day and leave heavy sebum trails on frequently used routes.',
      season: 'Pressure rises through autumn and winter',
    },
    {
      pest: 'House mice',
      driver:
        'The 2,155 pre-1940 units on rubble and early block foundations, plus two-family houses where a cellar has been part-converted and the stair, riser and chase run uninterrupted from grade to the top floor.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Steep slopes and a high water table beside the harbour and the creek, with a century of grade build-up against old foundations. Cornell Cooperative Extension calls for a minimum of 3 inches of clearance between wood siding or skirting and soil and describes mud tubes varying in diameter from the size of a wheat straw to wider than a thumb.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Estate-belt canopy on the city fringe and old porch and window framing in the pre-1940 core. The Northeastern IPM Center notes they choose moist wood because it is easier to excavate and the moisture helps larvae survive, and that a popular nest site is an entryway through a damp wooden window or door sill.',
      season: 'April through September',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Nassau County runs surveillance at 44 trap sites and larvicides thousands of street basins, sumps and ponds along with hundreds of miles of freshwater streams, while investigating suspect West Nile and Zika cases. In Glen Cove the local containers are the yards behind multifamily buildings, marina equipment and the wetland margins at Dosoris Pond and Welwyn.',
      season: 'Late May through September',
    },
  ],
  landmarks: [
    'Garvies Point and the redeveloped Glen Cove Creek waterfront',
    'The Glen Cove ferry terminal, opened 2016',
    'Morgan Memorial Park, 40 acres of former J.P. Morgan Jr. land',
    'Welwyn Preserve, the 204-acre former Harold Pratt estate',
    'Winfield Hall, the F.W. Woolworth estate',
    'The Braes, now the Webb Institute campus',
    'Killenworth',
    'Crescent Beach, Prybil Beach and the Morgan Park beach',
    'The Mill Pond at the head of Glen Cove Creek',
    'The Justice Court Building and the Old Glen Cove Post Office, both NRHP-listed',
  ],
  waterways: [
    'Hempstead Harbor',
    'Glen Cove Creek',
    'Dosoris Pond',
    'The Mill Pond',
    'Long Island Sound',
  ],
  neighborhoods: [
    'Downtown Glen Cove and the Glen Street corridor',
    'Garvies Point and the Glen Cove Creek waterfront',
    'The Landing',
    'Dosoris Lane and the northern shore',
    'East Island and West Island',
    'Crescent Beach',
    'Red Spring Lane and the harbour bluffs',
    'Carpenter Street and the Harbor Hill high ground',
    'Welwyn and the estate fringe',
    'Morgan Park and the waterfront parks',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Glen_Cove,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Glen-Cove-Demographics.html',
    'https://newyork.hometownlocator.com/ny/nassau/glen-cove.cfm',
    'https://glencoveny.gov/',
    'https://glencoveny.gov/code-enforcement',
    'https://ecode360.com/12085081',
    'https://glencoveny.gov/wp-content/uploads/2020/12/Master-Plan-Final-Version-Chapter-6.pdf',
    'https://semspub.epa.gov/work/HQ/100003130.pdf',
    'https://dos.ny.gov/system/files/documents/2020/03/hempstead_harbor.pdf',
    'https://www.governor.ny.gov/news/governor-hochul-celebrates-completion-55-unit-affordable-housing-development-nassau-county',
    'https://www.stoppests.org/stoppests/assets/File/Bed-bug-guide-for-property-managers-v11.pdf',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/cockroaches',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://ccenassau.org/resources/-termites',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
  ],
};
