import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Fort Salonga (Suffolk County, unincorporated hamlet and CDP
 * straddling the Towns of Huntington and Smithtown).
 *
 * The stand-out fact: 98.9 per cent owner-occupied and 97.7 per cent detached,
 * with a vacancy rate of 0.3 per cent — 37 rented units in the entire hamlet —
 * sitting across a town line that also splits its schools and its fire cover.
 * Every claim below traces to a fetched source.
 */
export const fortSalonga: MarketResearch = {
  verified: true,
  housing:
    'Fort Salonga carries roughly 3,484 housing units at a median construction year of 1962. About 1,054 units — 30.2 per cent — were built in the 1950s and 795, 22.8 per cent, in the 1960s, with 494 more in the 1970s; 314 units, 9 per cent, date from 1939 or earlier. The tenure figures are the outlier: 3,436 units, 98.9 per cent, are owner-occupied, leaving 37 rented units in the whole hamlet, and vacancy runs at 0.3 per cent. Some 3,403 units, 97.7 per cent, are detached single-family houses; there are 43 attached units, 23 in a building of ten to nineteen units, and 15 recorded as boat, RV or van.',
  structuralNotes: [
    'Fort Salonga is an unincorporated hamlet and census-designated place that straddles two towns — the Town of Huntington to the west and the Town of Smithtown to the east — so two houses on the same road can sit under two different building departments and two different sets of local property standards.',
    'The town line is not abstract on the ground. School district boundaries follow Bread and Cheese Hollow Road: the Huntington portion is in the Northport-East Northport Union Free School District, the Smithtown portion in Kings Park Central. Fire cover is split three ways between the Northport, East Northport and Kings Park departments.',
    'The census area covers 13.23 square miles, of which 9.49 is land and 3.74 is water, at an elevation of about 33 feet, with a 2020 population of 9,652 and a median age of 49.3. That much water in the census geometry is Long Island Sound: the hamlet overlooks it directly and is described as the easternmost part of the historic Gold Coast.',
    'The name is a corruption of a fortification. The British Revolutionary War post was Fort Salonga, or Fort Slongo, named after one of the fort\'s architects; colonial forces landed on the beach at nearby Crab Meadow and moved down the shore to take it, and Elijah Churchill led the attack on 3 October 1781. The hamlet was formerly known as Fresh Pond.',
    'After the Civil War the red clay under the hamlet supported brickmaking. The Brown family brickworks stamped its output BBB, for Brown\'s Best Bricks, and the family\'s hilltop residence has served as the clubhouse of the Indian Hills Country Club since 1963. Excavated and backfilled clay ground drains differently from undisturbed till, and that difference persists under whatever was built on it afterwards.',
    'The Town of Huntington\'s Crab Meadow Watershed Hydrology Study and Stewardship Plan reached final draft in 2022 after a process begun in 2012 and publicly introduced in 2014. The watershed covers approximately six square miles, bounded by the Villages of Northport and Asharoken to the west, the Town of Smithtown to the east and Bellerose Avenue to the south, with water sources in tunnel valleys near Vernon Valley Road, Bread and Cheese Hollow Road, Town Line Road and Stony Hollow Road.',
    'The Jerome A. Ambro Memorial Wetland inside that watershed is a 400-acre tidal marsh, described as the easternmost and largest coastal wetland expanse in the Town of Huntington. The system is glacially formed, drains toward Long Island Sound, and receives runoff from as far south as the Northport Veterans Administration property — so water crossing a Fort Salonga lot may have started well outside the hamlet.',
    'The stewardship plan\'s recommendations run to invasive species removal, green infrastructure and the installation of stormwater collection systems, which is a municipal statement that the existing drainage does not hold the volume it now receives. Every property in the watershed is upstream of that conclusion.',
    'On the eastern boundary, at Sunken Meadow, a man-made earthen berm blocked tidal flow from over 135 acres of marsh for decades. A plan outlined in 2008 and completed in 2019 removed the barrier to restore tidal reconnection, with 4.32 acres of salt marsh replanted. Restoring tidal flushing to a blocked marsh changes the standing-water regime along that edge.',
    'Nine per cent of the housing predates 1940 and thirty per cent went up in the 1950s, which produces two distinct construction vocabularies on the same lanes: hand-framed shore and farm houses with rubble or early block foundations, and post-war capes and ranches on poured foundations with shallow crawlspaces and unsealed band joists.',
    'With 98.9 per cent owner-occupancy and 0.3 per cent vacancy, almost every building here has a decision-maker who lives in it. That is the most favourable condition there is for structural work, because the person who can authorise the repair is the person standing in the crawlspace.',
    'The hamlet shares ZIP code 11768 with Northport, and its own post office closed sometime in the 1900s. Addressing overlaps like that matter when a homeowner is trying to work out which municipality holds the permit record for a wall that was opened thirty years ago.',
  ],
  pestPressures: [
    {
      pest: 'Carpenter ants',
      driver:
        'Wooded large-lot ground inside a six-square-mile watershed whose own stewardship plan calls for new stormwater collection, with 314 pre-1940 houses in it. The Northeastern IPM Center notes that carpenter ants live in hollow, decaying wood — under wood piles, in tree stumps, in wooden framed buildings — because it is easier to excavate and the moisture helps larvae survive, and that they forage up to 300 feet from the nest.',
      season: 'April through September',
    },
    {
      pest: 'Grey squirrels and raccoons',
      driver:
        'Heavy woodland canopy against detached houses at low density, with 400 acres of tidal marsh and its wooded margins on the northern edge. Cornell notes that some species enter the upper portion of a building and others around the foundation, and that a one-way door often just relocates the entry.',
      season: 'Late winter and late summer denning',
    },
    {
      pest: 'House mice',
      driver:
        'Post-war capes and ranches on wooded lots where the nearest neighbour is far enough away that an outbuilding, woodpile or detached garage supports a population for years before anything enters the house. Cornell records 50 to 60 droppings a day from one mouse, so the interior evidence appears suddenly even when the population outside is old.',
      season: 'Autumn ingress, October into December',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Sixty years of mulch beds, landscape timbers and grade build-up on 1950s and 1960s foundations, on ground that was dug for brick clay in places. Cornell Cooperative Extension asks for a minimum of 3 inches between wood siding or skirting and soil and 8 inches of clean concrete between skirting and soil, and notes that yard wood debris will feed a colony until it is large enough to reach the structure.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'A 400-acre tidal marsh on the hamlet\'s northern edge and a restored tidal connection at Sunken Meadow to the east. Suffolk County routinely larvicides 4,000 acres of tidal wetland, much of it grid-ditched in the 1930s, and its long-term plan calls for enhanced catch basin larviciding alongside source reduction — none of which touches the container water on a private lot.',
      season: 'Late May through September',
    },
    {
      pest: 'Wasps and hornets',
      driver:
        'Long eaves, porch ceilings and outbuildings on wooded lots, with colonies at peak size in late summer. On a hamlet this low-density the nest is frequently in a shed, a boathouse or a pool house rather than on the residence.',
      season: 'July through October',
    },
  ],
  landmarks: [
    'The site of the Revolutionary War Fort Slongo, taken on 3 October 1781',
    'Indian Hills Country Club, in the former Brown family brickworks residence since 1963',
    'The Jerome A. Ambro Memorial Wetland, a 400-acre tidal marsh',
    'Crab Meadow and its watershed',
    'Sunken Meadow State Park on the eastern boundary',
    'Bread and Cheese Hollow Road, the Huntington–Smithtown town line',
    'The Geissler Estate',
  ],
  waterways: [
    'Long Island Sound',
    'Crab Meadow and the Jerome A. Ambro Memorial Wetland',
    'Sunken Meadow Creek',
    'The tunnel valleys near Vernon Valley Road, Bread and Cheese Hollow Road, Town Line Road and Stony Hollow Road',
  ],
  neighborhoods: [
    'The Huntington-side streets west of Bread and Cheese Hollow Road',
    'The Smithtown-side streets east of Bread and Cheese Hollow Road',
    'Indian Hills',
    'Crab Meadow and the watershed lowlands',
    'The Route 25A / Fort Salonga Road corridor',
    'Bellerose Avenue and the southern boundary',
    'The bluff streets overlooking Long Island Sound',
    'Sunken Meadow and the eastern edge',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Fort_Salonga,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Fort-Salonga-Demographics.html',
    'https://northportjournal.com/outdoors/ten-years-in-the-making-toh-addresses-best-practices-for-protecting-and-restoring-crab-meadow-watershed',
    'https://www.savethesound.org/what-we-do/ecological-restoration/restoration-project-gallery/sunken-meadow-restoration/',
    'https://en.wikipedia.org/wiki/Smithtown,_New_York',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
