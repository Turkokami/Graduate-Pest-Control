import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Halesite (Suffolk County, unincorporated hamlet and CDP in the
 * Town of Huntington).
 *
 * The stand-out fact: under one square mile at the head of Huntington Harbor,
 * with 21.2 per cent of its housing pre-1940 and 40.7 per cent of it built in
 * the 1950s alone — a nineteenth-century working waterfront with a post-war
 * decade dropped on top of it. Every claim below traces to a fetched source.
 */
export const halesite: MarketResearch = {
  verified: true,
  housing:
    'Halesite holds roughly 1,041 housing units at a median construction year of 1955, and the shape of that distribution matters more than the median does: about 424 units — 40.7 per cent — went up in the 1950s, while 221 units, 21.2 per cent, date from 1939 or earlier, and only 40 units were added in the whole of the 1960s. A further 151 units, 14.5 per cent, arrived from 2000 onward. Some 909 units, 87.3 per cent, are detached single-family houses, but 84 sit in buildings of five to nine units and another 21 in a building of twenty to forty-nine, which is an unusual amount of small apartment stock for a hamlet this size. Around 898 units are owner-occupied and 143, 13.7 per cent, are rented.',
  structuralNotes: [
    'Halesite is an unincorporated hamlet and census-designated place inside the Town of Huntington. There is no village board, no village code and no separate architectural review here — building permits, property standards and code enforcement all sit with the town, which is a practical advantage on remediation work compared with the incorporated villages a few miles west.',
    'The whole place covers 0.98 square miles, of which 0.09 square miles is water, and it sits at an elevation of about 26 feet. There is very little vertical distance between a Halesite cellar floor and the harbour, and no part of the hamlet is far from the shoreline.',
    'The name is late and it is real estate in origin. In 1894 George Taylor, president of a Manhattan dry goods store, bought a large tract on Huntington Bay and called his estate Hale-Site, after Nathan Hale; the name spread to the whole section on the east side of Huntington Harbor.',
    'Mill Dam Road is not a road that happens to run near the water — it runs along the embankment built to capture the tide. Zophar Platt put up the first tide mill on the west shore of Huntington Harbor in 1752, and the modern street follows the industrial earthwork. The made ground under a tidal embankment behaves nothing like glacial till, and buildings founded near it settle differently.',
    'The East Shore Road Historic District was listed on the National Register in 1985 with 21 contributing buildings plus a contributing site and a contributing structure. The record describes it as one of the few intact collections of largely intact working class dwellings in Huntington; the majority of the residences date from 1860 to 1900, three settlement-period dwellings survive, and the district takes in the site of a historic pottery works and the Town Park.',
    'Working-class nineteenth-century houses are a different structural problem from estate houses of the same date. They were built small, close to grade, with modest sills, shallow cellars or crawlspaces, and no budget for the masonry that would have kept damp out of the timber. They have also been altered continuously for a century and a half by owners doing the work themselves.',
    'A pottery on the east shore of Huntington Harbor produced stoneware and earthenware, and brickyards worked the local clay at East Neck, Crab Meadow, Fresh Pond and West Neck. Ground that has been dug for clay and then built over is ground with a disturbed drainage profile, and that shows up in cellars.',
    'Halesite is the town\'s working waterfront. The Town Docks sit next to the Harbormaster\'s Office at 53 North New York Avenue, with Halesite Marina Park and the Halesite North and South transient docks alongside. Marine service premises, seasonal storage, refuse handling and public parking are concentrated in a very small area at the head of the harbour.',
    'Huntington Bay covers approximately 1,880 acres, with water depths from 3 to 30 feet below mean low water and maximum depths of over 50 feet, and a tidal range of approximately 7 feet. That exchange happens twice a day against a shoreline that is residential to the south — which is to say against Halesite.',
    'Huntington Hospital sits along the southern boundary of the hamlet, so a small residential hamlet carries a large institutional campus with continuous services, plant, food handling and refuse movement at one edge of it.',
    'The Halesite Fire Department was established in 1901, and the 45-ton granite Nathan Hale memorial boulder stood on the beach at the end of Vineyard Road for roughly seventy-five years before it was moved to the New York Avenue and Mill Dam Road intersection in 1974, and shifted again to the southwest corner in 2012. Both are useful reminders of how much of the shoreline edge here has been re-graded within living memory.',
  ],
  pestPressures: [
    {
      pest: 'Carpenter ants',
      driver:
        'One in five buildings predates 1940, at 26 feet of elevation on a harbour with a seven-foot tidal exchange. The Northeastern IPM Center records that carpenter ants select moist wood because it is easier to excavate and the moisture helps larvae survive, and names a damp wooden window or door sill as a popular nest entryway — which describes the openings on a nineteenth-century working-class frame house exactly.',
      season: 'April through September',
    },
    {
      pest: 'House mice',
      driver:
        'Shallow cellars and crawlspaces under small pre-1940 frame houses, with a century and a half of owner-executed alterations meeting the original fabric at unsealed seams. Cornell records that a mouse leaves between 50 and 60 droppings a day and that sebum marks, an oily brown residue, build up on the pathways rodents use frequently.',
      season: 'Autumn ingress, October into December',
    },
    {
      pest: 'Norway rats',
      driver:
        'A concentrated working waterfront — town docks, harbormaster, marina park, transient berths and the parking and refuse handling that go with them — packed into a hamlet of under one square mile, with the hospital campus on the southern boundary. Waterfront service areas produce a year-round baseline that residential streets behind them inherit.',
      season: 'Pressure rises through autumn and winter',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Grade build-up against low, old foundations at the head of a harbour. Cornell Cooperative Extension asks for a minimum of 3 inches of clearance between wood siding or skirting and soil and 8 inches of clean concrete between skirting and soil, and notes that leaking pipes and dripping faucets sustain the soil moisture a colony needs. Mud tubes vary from the diameter of a wheat straw to wider than a thumb.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Suffolk County\'s long-term plan calls for enhanced catch basin larviciding and has expanded stormwater management from about 15,000 to roughly 50,000 sites, while routinely larviciding 4,000 acres of tidal wetland. On a hamlet this small and this close to the water, the county handles the marsh and the basin; the boat cover, the tarpaulin and the blocked gutter are the homeowner\'s.',
      season: 'Late May through September',
    },
    {
      pest: 'Grey squirrels and raccoons',
      driver:
        'Mature canopy over small, low-eaved nineteenth-century roofs and 1950s capes. Cornell notes that some species enter the upper part of a building while others come in around the foundation, and that one-way doors sometimes work but the animal will often chew back in elsewhere — which is why closure, not eviction, is the durable part of the job.',
      season: 'Late winter and late summer denning',
    },
  ],
  landmarks: [
    'The Huntington Town Docks and Harbormaster\'s Office at 53 North New York Avenue',
    'The East Shore Road Historic District, National Register listed in 1985',
    'The Nathan Hale memorial boulder at New York Avenue and Mill Dam Road',
    'Mill Dam Road, running along the tidal embankment',
    'Halesite Marina Park and the North and South transient docks',
    'Huntington Hospital, on the southern boundary of the hamlet',
    'The site of the nineteenth-century pottery works on the harbour\'s east shore',
  ],
  waterways: [
    'Huntington Harbor',
    'Huntington Bay, approximately 1,880 acres with a tidal range of about 7 feet',
    'Long Island Sound beyond the bay',
  ],
  neighborhoods: [
    'East Shore Road and the historic district',
    'Mill Dam Road and the harbour head',
    'New York Avenue north of the village',
    'Vineyard Road and the shoreline streets',
    'The Halesite waterfront and town dock area',
    'The streets behind Huntington Hospital',
    'Nathan Hale Drive and the streets above the harbour',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Halesite,_New_York',
    'https://www.point2homes.com/US/Neighborhood/NY/Halesite-Demographics.html',
    'https://en.wikipedia.org/wiki/East_Shore_Road_Historic_District',
    'https://huntingtonhistory.com/2013/06/06/nathan-hale-memorials-2/',
    'https://huntingtonny.gov/content/13747/99540/16487/16493/default.aspx',
    'https://www.huntingtonny.gov/content/13749/16439/16577/99615/16613/default.aspx',
    'https://dos.ny.gov/system/files/documents/2020/03/huntington_bay.pdf',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/wildlife',
    'https://www.naccho.org/uploads/resource-hub-images/NY-Suffolk-County-Long-term-vector-control-plan.pdf',
  ],
};
