import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Melville (Suffolk County, unincorporated hamlet and CDP in the
 * Town of Huntington).
 *
 * The stand-out fact: 27.4 per cent of Melville's housing was built between
 * 2000 and 2009 and 22.8 per cent of the stock is attached rather than
 * detached — a hamlet that added a second housing market on top of its first
 * one — sitting alongside the largest corporate office corridor on Long
 * Island. Every claim below traces to a fetched source.
 */
export const melville: MarketResearch = {
  verified: true,
  housing:
    'Melville holds roughly 7,489 housing units at a median construction year of 1983, and it is the only hamlet in this part of the town where the newest decade is also the biggest: about 2,054 units — 27.4 per cent — were built between 2000 and 2009, with 556 more from 2010 to 2019. Behind that sits the original suburb, 1,153 units in the 1950s and 1,103 in the 1960s, plus 279 units, 3.7 per cent, from 1939 or earlier. Only 59 per cent of the stock is detached single-family housing. Some 1,710 units, 22.8 per cent, are attached — townhouse and condominium construction — and 960 sit in buildings of five units or more. Around 6,395 units are owner-occupied and 860, 11.8 per cent, rented.',
  structuralNotes: [
    'Melville is an unincorporated hamlet and census-designated place in the Town of Huntington, covering 12.11 square miles with no water area, at an elevation of about 135 feet. The 2020 census recorded 19,284 residents in 6,883 households, at 1,592 people per square mile. Incorporation attempts in the 1950s and again in 2001 both failed, so town code and the town building department govern the whole of it.',
    'The place has been renamed twice. It was known as Sunsquams, then Samuel Ketcham\'s Valley, then Sweet Hollow; the name Melville appears first in school records in 1854, either for the novelist or from the Latin mel, honey. A Presbyterian church went up at the intersection of Old Country Road and Sweet Hollow Road in 1829, went dormant between 1930 and 1944, and was moved a mile west in 1977.',
    'A trolley line opened in 1909 and closed about a decade later after farmers complained about the noise; the Huntington Railroad streetcar ran until 1927. What replaced them was road: the Long Island Expressway, the Northern State Parkway and NY Route 110 all cut the hamlet, and Route 110 is the reason for everything that follows.',
    'Office development along Route 110 grew through the 1960s. By 1971 the economy had slowed and many of the buildings were left vacant — a pattern the corridor has repeated since. The current headquarters roster includes Canon USA, Chyron, Leviton, MSC Industrial Direct, Nikon USA, Henry Schein and Verint Systems, with significant Estée Lauder operations and Newsday. Canon\'s regional headquarters, opened in 2013, is a $500-million, 668,296-square-foot glass building put up on a former pumpkin farm, with about 1,500 employees relocated into it.',
    'The departures matter as much as the arrivals. Swissair left in 1995 from a Richard Meier-designed building; Olympus America went to Pennsylvania in 2006, Gentiva to Atlanta in 2009, Arrow Electronics to Colorado in 2011, Hain Celestial to Lake Success in 2012, Adecco to Florida and Sbarro to Ohio in 2014, First Data by 2017, and Bouchard Transportation into bankruptcy in 2020. A corridor with that much turnover carries buildings that sit part-empty between tenants, and a part-empty building is a different pest proposition from a fully occupied one.',
    'On 10 December 2024 the Huntington Town Board passed the Melville Town Center Overlay District by a 3–1 vote, permitting up to 1,500 new multifamily housing units together with neighborhood retail and pocket parks in the Maxess Road area, expressly to redevelop under-utilized and obsolete office buildings and empty parking lots. That converts a commercial pest geography into a residential one, building by building.',
    'The 22.8 per cent attached share is the single most useful number on this page. Attached housing means party walls, shared foundations, continuous soffit runs across several dwellings and common utility trenches. A mouse entering the end unit of a townhouse row is inside the row, not inside a house, and the work has to be scoped across the row rather than the address that called.',
    'The 27.4 per cent built between 2000 and 2009 is newer construction than anything else nearby, and new construction is not pest-proof construction. It is tighter, which changes the failure mode: fewer, larger, more concentrated penetrations, weep holes in masonry veneer, garage door corners, dryer and range vents, and the gap at the sill of an attached garage.',
    'Jayne\'s Hill, the highest point on Long Island at 400.9 feet by Suffolk County\'s measure, stands about a mile north of Melville in West Hills County Park on the Harbor Hill moraine. The hamlet sits on the southern flank of that high ground at about 135 feet, so surface water leaves Melville southward across the outwash rather than into a harbor.',
    'The Melville Volunteer Fire Department was established in 1947 and answers more than 3,500 alarms a year on an annual budget of about $1.5 million — a volume that reflects the office corridor as much as the housing.',
    'There is no full-service LIRR station in the hamlet. Suffolk County Transit Route 1 runs Route 110 seven days a week, the Suffolk Clipper serves the business parks, and the nearest full-service station is Huntington; Pinelawn runs weekend service only. That means the corridor moves by car, and it means very large surface parking areas, which is where a great deal of the drainage structure and the refuse handling sits.',
    'Half Hollow Hills Central School District and South Huntington Union Free School District both serve parts of the hamlet, and the ZIP geography runs to three codes — 11747, 11760 and 11775 — which is a good indication of how much of Melville is addressed as commercial rather than residential.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'The largest concentration of office, warehouse and corporate campus buildings in the town, with loading areas, refuse enclosures, cafeterias and very large parking fields, and a history of buildings standing part-vacant between tenants. Vacant floors mean fewer people to report activity and less pressure on housekeeping while the building services keep running.',
      season: 'Year-round baseline, peaking autumn into winter',
    },
    {
      pest: 'House mice',
      driver:
        'A townhouse and condominium stock where 1,710 units are attached and 960 sit in buildings of five or more, so an entry at one address opens a run behind several. Cornell records 50 to 60 droppings a day from a single mouse and sebum marks along frequently used pathways, and in an attached row that evidence often appears two units from the entry point.',
      season: 'Autumn ingress, October into December',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Corporate catering, cafeterias, ground-floor food service along Route 110 and shared plumbing chases in multifamily buildings. In any building with continuous risers, unit-by-unit treatment relocates a population instead of removing it.',
      season: 'Year-round, indoors',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'The 1950s and 1960s houses that predate the corridor, with decades of grade build-up against low foundations. Cornell Cooperative Extension names insufficient wood-to-soil clearance, leaking pipes and buried wood debris among the supporting conditions, and describes mud tubes running from the diameter of a wheat straw to wider than a thumb.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'No natural surface water in the hamlet at all, so the sources are the built ones: Suffolk County\'s long-term plan calls for enhanced catch basin larviciding and records stormwater management expansion from about 15,000 to roughly 50,000 sites. Office-park drainage basins, curb inlets and the containers on a residential lot do the rest.',
      season: 'Late May through September',
    },
    {
      pest: 'Gray squirrels and raccoons',
      driver:
        'Mature planted canopy over long, continuous townhouse soffit runs and over the wooded edges against West Hills County Park. Cornell notes that some species enter the upper portion of a building while others come in around the foundation, and that an animal excluded with a one-way door will often chew back in at another point.',
      season: 'Late winter and late summer denning',
    },
  ],
  landmarks: [
    'The Route 110 corporate corridor',
    'Canon USA\'s regional headquarters, opened 2013',
    'The Melville Town Center Overlay District at Maxess Road, adopted December 2024',
    'Sweet Hollow Road and the site of the 1829 Presbyterian church',
    'West Hills County Park and Jayne\'s Hill, a mile to the north',
    'The Long Island Expressway and Northern State Parkway interchanges',
    'Pinelawn LIRR station, weekend service only',
  ],
  waterways: [
    'None within the census area — 12.11 square miles, no water area recorded',
    'Surface drainage runs south off the Harbor Hill moraine onto the outwash plain',
  ],
  neighborhoods: [
    'The Route 110 corporate corridor',
    'Maxess Road and the Melville Town Center overlay area',
    'Sweet Hollow',
    'Old Country Road',
    'Round Swamp Road and the Nassau boundary',
    'Ruland Road and the business parks',
    'Pinelawn Road',
    'The residential streets north toward West Hills',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Melville,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Melville-Demographics.html',
    'https://newyork.hometownlocator.com/ny/suffolk/melville.cfm',
    'https://dixhillsmelvillehistory.org/history',
    'https://www.lirealtor.com/news/member-news/view/2024/12/11/pro-housing-victory-in-huntington!-town-board-passes-melville-rezoning',
    'https://en.wikipedia.org/wiki/Jayne%27s_Hill',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
