import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Locust Valley (Nassau County, unincorporated hamlet and CDP in
 * the Town of Oyster Bay).
 *
 * The stand-out fact: 42.6 per cent of the housing predates 1940 and the
 * median construction year is 1945 — the oldest stock of any market in this
 * set — yet the CDP itself is only 0.9 square miles and has no government of
 * its own. The name covers a far larger estate-belt area than the census
 * boundary does. Every claim below traces to a fetched source.
 */
export const locustValley: MarketResearch = {
  verified: true,
  housing:
    'Locust Valley records a median construction year of 1945 across roughly 1,254 housing units — the oldest median in this North Shore set. About 534 units, 42.6 per cent, were built in 1939 or earlier, with a further 186 in the 1940s and 178 in the 1950s; only 133 units arrived in the 2000s and 13 in the 2010s. Roughly 92.6 per cent are detached single-family houses, 1,069 units are owner-occupied and 172, 13.9 per cent, are renter-occupied. Vacancy is about 1 per cent.',
  structuralNotes: [
    'Locust Valley is an unincorporated hamlet and census-designated place in the Town of Oyster Bay. It has no mayor, no village board and no architectural review board of its own — building permits, zoning and code enforcement all sit with the Town of Oyster Bay. That is the opposite arrangement to the incorporated villages that surround it, several of which govern themselves.',
    'The CDP covers only 0.9 square miles, of which 0.04 square miles, 2.13 per cent, is water. But the name is used far more widely than the boundary: as the commercial center, with the railroad station serving the surrounding Gold Coast communities, the geographically small Locust Valley became the name of reference for all the surrounding areas between Glen Cove and Oyster Bay. The Locust Valley Central School District covers the incorporated villages of Lattingtown, Matinecock and Bayville, portions of Mill Neck, Muttontown and Brookville, and unincorporated Locust Valley.',
    'The practical consequence is that two houses with the same postal address can sit under two different building authorities — one under an incorporated village with its own code and its own inspector, the other under the Town of Oyster Bay. It matters for who signs off remedial work on a listed or locally significant building.',
    'The terrain is the rolling hills of the North Shore, formed as terminal moraines by the receding glaciers of the last ice age roughly 10,000 years ago. The climate is classified humid subtropical, type Cfa, with cool wet winters and hot humid summers.',
    'Settlement runs deep. Farmers settled the area around 1667 and it was first called Matinecock after the Native American group; by 1730 the settlers had renamed it Buckram, possibly after a Norfolk, England town called Buckenham, and in 1856 it was renamed Locust Valley for the locust trees. Two colonial houses survive — the Joseph Weeks, Jr. and William Hawxhurst houses on Oyster Bay Road, dating from about 1698.',
    'The Matinecock Friends Meeting House was built by the Society of Friends in 1725 at the north-west corner of Piping Rock and Duck Pond Roads in the incorporated Village of Matinecock. It is a two-story rectangular building, two bays wide and four bays long, sheathed in shingles under a steeply pitched gable roof, and it was listed on the National Register of Historic Places in 1976. Three NRHP properties carry the Locust Valley name: the Cock-Cornelius House, the Matinecock Friends Meetinghouse and the George Underhill House.',
    'The first railroad train reached Locust Valley in 1870 and the Glen Cove Branch extension opened to Locust Valley on 19 April 1869, making it the terminus until the line reached Oyster Bay in 1889. The railway is what turned a farming settlement into an estate district — The Creek Club was founded at Lattingtown in 1923 by J. Pierpont Morgan, Jr.',
    'Shingle-sheathed frame construction on a steeply pitched gable roof, as at the 1725 meeting house, is the local vernacular: large uninterrupted stud bays, no sheathing membrane in the modern sense, hand-cut sills bearing on rubble or early masonry, and a roof plane with generous overhangs and a lot of edge detail.',
    'The business district is small and concentrated on Forest Avenue, Buckram Road and Birch Hill Road, with shops, a library, a firehouse and the LIRR station. Frank Doubleday and his wife Neltje founded the current Locust Valley Library in 1909.',
    'Locust Valley Cemetery, a private non-denominational memorial designed by the Olmsted Brothers, was incorporated in 1917. Bailey Arboretum, 42 acres in neighboring Lattingtown, was donated to Nassau County in 1968 and opened to the public on 5 August 1969; it carries two man-made ponds, about 35 acres of woodland trails and roughly 200 registered tree species around an early nineteenth-century farmhouse.',
    'Mill Neck Creek sits just east: a narrow coastal bay emptying into the western side of Oyster Bay Harbor between Oak Neck and Mill Neck. The habitat includes about 120 acres of relatively undisturbed salt marsh and tidal creeks at Oak Neck Creek, bordered by dense residential development on the north and east and by large estates and undeveloped woodland to the west and south, and Beaver Lake — a freshwater impoundment of about 60 acres and roughly 3 feet deep, which drains into Mill Neck Creek through a weir along Cleft Road.',
    'The parcels are large and the canopy is old. Estate-scale lots mean detached garages, stables, gate lodges, potting sheds, pool houses and greenhouses, all of them buildings that harbor populations long before the residence does, and almost none of them on anybody’s inspection list.',
  ],
  pestPressures: [
    {
      pest: 'Carpenter ants',
      driver:
        'Forty-three per cent of the stock predates 1940 in shingled frame construction under closed mature canopy, where roofs and walls dry slowly. The Northeastern IPM Center notes carpenter ants prefer hollow, decaying wood because it is easier to excavate and the moisture helps larvae survive, favor an entryway through a damp wooden window or door sill, and forage as far as 300 feet from the nest — on an estate lot the parent colony is routinely in a stump or woodpile entirely off the building.',
      season: 'April through September',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Century-old plantings, retaining walls, landscape timbers and terraces built up against rubble and early masonry foundations. Cornell Cooperative Extension asks for a minimum of 3 inches of clearance between wood siding or baseboard and soil and 8 inches of clean concrete between baseboard and soil, and advises removing wooden debris including buried stumps and directing downspouts farther from the house.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Gray squirrels, raccoons and bats',
      driver:
        'Closed old canopy over steeply pitched roofs with generous overhangs, plus outbuildings nobody enters between seasons. Cornell notes that bats and flying squirrels typically enter the upper part of a building, that other species enter around the foundation, and that many pests reach roofs by natural bridges from branches touching the structure — which on these lots is most of the roofline.',
      season: 'Late winter and late summer denning',
    },
    {
      pest: 'House mice',
      driver:
        'Pre-1940 frame houses on rubble and early block, where eight decades of settlement have opened the sill line behind the shingles, and a large stock of unheated outbuildings that act as staging ground. Cornell records 50 to 60 droppings a day per mouse and heavy sebum trails on frequently used routes.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Beaver Lake is a 60-acre freshwater impoundment about 3 feet deep and Oak Neck Creek carries roughly 120 acres of salt marsh and tidal creeks a short distance away. Nassau County runs surveillance from 44 trap sites, larvicides thousands of street basins, sumps and ponds and hundreds of miles of freshwater streams, and investigates suspect West Nile and Zika cases. On estate lots the local containers are ornamental water, gutters, tarpaulins, boat covers and stable yards.',
      season: 'Late May through September',
    },
    {
      pest: 'Wasps and hornets',
      driver:
        'Deep eaves, porch ceilings, shutters, gate lodges and outbuilding rafters give an unusual number of sheltered cavities per property, and colonies reach peak size before anyone notices them on a building that is only visited weekly.',
      season: 'Colonies peak August into October',
    },
  ],
  landmarks: [
    'The Matinecock Friends Meeting House of 1725, NRHP-listed 1976',
    'The Joseph Weeks, Jr. and William Hawxhurst houses of about 1698 on Oyster Bay Road',
    'Locust Valley Cemetery, designed by the Olmsted Brothers and incorporated 1917',
    'Bailey Arboretum, 42 acres in Lattingtown',
    'The Locust Valley LIRR station on the Oyster Bay Branch',
    'The Locust Valley Library, founded 1909',
    'The Piping Rock Club',
    'The Creek Club at Lattingtown, founded 1923',
    'Mill Neck Preserve and Beaver Lake',
  ],
  waterways: [
    'Mill Neck Creek',
    'Oak Neck Creek',
    'Beaver Lake',
    'Oyster Bay Harbor',
    'Long Island Sound',
  ],
  neighborhoods: [
    'The Buckram business district on Forest Avenue and Birch Hill Road',
    'Buckram Road',
    'Oyster Bay Road and the colonial houses',
    'Piping Rock Road and Duck Pond Road',
    'Feeks Lane',
    'The Matinecock village edge',
    'The Lattingtown village edge',
    'The Mill Neck and Beaver Lake side',
    'Cleft Road',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Locust_Valley,_New_York',
    'https://en.wikipedia.org/wiki/Locust_Valley',
    'https://www.point2homes.com/US/Neighborhood/NY/Locust-Valley-Demographics.html',
    'http://www.locustvalleyhistory.org/',
    'https://en.wikipedia.org/wiki/Matinecock_Friends_Meetinghouse',
    'https://en.wikipedia.org/wiki/Bailey_Arboretum',
    'https://dos.ny.gov/system/files/documents/2019/04/millneckcreek.pdf',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
    'https://www.nswcawater.org/water_facts/our-long-island-aquifers-the-basics/',
    'https://dos.ny.gov/system/files/documents/2020/03/hempstead_harbor.pdf',
  ],
};
