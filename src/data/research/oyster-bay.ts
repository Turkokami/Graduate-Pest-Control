import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Oyster Bay (Nassau County, hamlet and CDP, seat of the Town of
 * Oyster Bay).
 *
 * The stand-out fact: only 49.9 per cent of the hamlet's housing units are
 * detached houses. The other half sit in buildings of two units or more, and
 * 41.6 per cent of occupied units are rented — a genuine downtown inside a
 * North Shore harbor community. Every claim below traces to a fetched source.
 */
export const oysterBay: MarketResearch = {
  verified: true,
  housing:
    'The Oyster Bay census area records a median construction year of 1957 across roughly 2,934 housing units, with about 998 units — 34 per cent — built in 1939 or earlier. The distinguishing figure is not age but form: only 1,463 units (49.9 per cent) are detached houses, while 1,471 units sit in buildings of two or more, and 1,189 occupied units — 41.6 per cent — are rented rather than owned.',
  structuralNotes: [
    'Oyster Bay is an unincorporated hamlet, the seat of the Town of Oyster Bay, and it has a real downtown rather than a shopping strip: a 189.4-acre area bounded by Mill Pond to the west, the high school to the east, Oyster Bay Harbor to the north and the junction of Pine Hollow Road, South Street, Berry Hill Road and Lexington Avenue to the south.',
    'Twenty of the township’s 39 landmarked buildings stand in that downtown, and some structures date to the early 1700s. Named examples include the Weeks Wilson House of the eighteenth century, the Adam-Derby House of 1878, Snouder’s Drugstore of about 1884, the Oyster Bay Railroad Station of 1889 and Moore’s Building of 1901.',
    'The downtown includes apartments over stores and offices — 49 Audrey Avenue, a three-story mixed-use building, was restored to five apartments and one commercial space — which is why the hamlet’s housing splits half and half between detached and multi-unit.',
    'A mixed-use building over a hundred years old has a food-handling ground floor and dwellings above it connected by a stair, a chimney chase and a plumbing riser. That vertical connection is a pest pathway that no unit-by-unit treatment addresses.',
    'Fireman’s Field is subject to regular flooding during severe storms, and the downtown revitalisation proposals include stormwater management improvements — a documented drainage constraint in the hamlet center.',
    'Sagamore Hill, built between May 1884 and March 1885 by John A. Wood and Son to a Lamb & Rich design, is a shingle-style Queen Anne of 22 rooms; C. Grant LaFarge added the 40-by-30-foot North Room in 1905. It shows the local estate idiom in one building: heavy timber frame, deep porches, complex roof geometry.',
    'The hamlet CDP covers 1.6 square miles, of which 0.4 is water — a quarter of its area is harbor, which sets the humidity regime for everything built along it.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'A concentrated downtown of pre-war mixed-use buildings with food handling at street level, refuse storage in a compact 189.4-acre footprint, and documented storm flooding at Fireman’s Field. Cornell notes that rodents leave sebum marks — an oily brown residue — along the pathways they use frequently, and that rats produce forty to fifty droppings a day.',
      season: 'Pressure rises through autumn and winter',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Half the housing stock sits in buildings of two units or more, much of it above commercial ground floors, and cockroaches move between units through the gaps around pipe penetrations and behind cabinetry rather than through doors.',
      season: 'Year-round in heated multi-unit buildings',
    },
    {
      pest: 'House mice',
      driver:
        'A third of the stock predates 1940, on stone and early masonry foundations, in a hamlet where 41.6 per cent of occupied units are rented and responsibility for the building envelope is split between owner and occupier.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Eighteenth- and nineteenth-century frame buildings with deep porches and applied trim, on ground where a quarter of the CDP is open water; the Northeastern IPM Center notes carpenter ants favor an entryway through a damp wooden window or door sill.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Buildings raised before any modern damp-proofing on a harbor-edge water table, with a century or more of grade build-up against foundations; Cornell Cooperative Extension names wood close to or in contact with soil as the primary vulnerability.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Mill Pond at the western edge of downtown, and the Mill Neck Creek wetlands nearby — roughly 180 acres including about 120 acres of salt marsh and tidal creek at Oak Neck Creek and the 60-acre Beaver Lake freshwater impoundment, about three feet deep. Nassau County monitors thousands of street basins, sumps and ponds and runs 44 mosquito trap sites countywide.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'Sagamore Hill National Historic Site, established 1962',
    'Raynham Hall Museum, the Townsend house acquired in 1740',
    'Snouder’s Drugstore of about 1884 on Audrey Avenue',
    'The Oyster Bay Railroad Station of 1889 and the Oyster Bay Railroad Museum',
    'Moore’s Building of 1901',
    'Theodore Roosevelt Memorial Park on the harbor',
    'The Oyster Bay–East Norwich Public Library, whose original structure dates to 1901',
    'Mill Pond at the western edge of the downtown',
  ],
  waterways: [
    'Oyster Bay Harbor',
    'Mill Pond',
    'Mill Neck Creek',
    'Oak Neck Creek',
    'Beaver Lake',
    'Long Island Sound',
  ],
  neighborhoods: [
    'Downtown Oyster Bay and Audrey Avenue',
    'South Street',
    'Berry Hill Road',
    'Pine Hollow Road',
    'Lexington Avenue',
    'Shore Avenue and the harborfront',
    'Cove Neck',
    'Mill Neck',
    'East Norwich',
    'Oyster Bay Cove',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Oyster_Bay_(hamlet),_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Oyster-Bay-Demographics.html',
    'https://www.ny.gov/sites/default/files/atoms/files/Oyster_Bay_2019_DRI_Four_.pdf',
    'https://en.wikipedia.org/wiki/Sagamore_Hill_(house)',
    'https://dos.ny.gov/system/files/documents/2019/04/millneckcreek.pdf',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
  ],
};
