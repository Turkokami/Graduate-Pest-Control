import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Great Neck (Nassau County, Great Neck peninsula).
 *
 * The defining local fact is administrative rather than architectural: nine
 * separate incorporated villages plus several unincorporated pockets share one
 * small peninsula, and the housing mix swings from Gold Coast estate to
 * elevator co-op within a mile. Every claim is sourced below.
 */
export const greatNeck: MarketResearch = {
  verified: true,
  housing:
    'Great Neck CDP carries a median construction year of 1952, but that median hides a bimodal stock: about a quarter of units were built in 1939 or earlier and another two fifths went up across the 1940s and 1950s. Roughly seventy per cent are detached houses, while about seventeen per cent sit in buildings of fifty units or more — an unusually high multifamily share for the North Shore, concentrated in and around Great Neck Plaza.',
  structuralNotes: [
    'Nine incorporated villages share the peninsula — Great Neck Estates and Saddle Rock (1911), Kensington (1921), the Village of Great Neck (1922), Kings Point (1924), Lake Success (1927), Great Neck Plaza (1930), Russell Gardens and Thomaston (1931) — so building era, lot size and street pattern change abruptly at village lines.',
    'Kensington and Russell Gardens were built as covenanted garden suburbs in the 1920s and 1930s, which in practice means masonry and stucco walls, tile and slate roofs and deep eaves rather than the plain frame construction of the surrounding hamlets.',
    'Great Neck Plaza is the peninsula\'s apartment and co-op core, built around the 1925 Long Island Rail Road station; shared risers, plumbing chases and refuse rooms make pest pathways internal and vertical rather than perimeter-based.',
    'Great Neck Estates contains the Ben Rebhuhn House, Frank Lloyd Wright\'s only Long Island residence — a reminder that the peninsula holds one-off architect-designed envelopes that no standard exclusion template fits.',
    'The peninsula is flanked by two shallow embayments: Little Neck Bay to the west, most of whose back bay is under six feet deep and whose western and southern shorelines were historically salt marsh, and Manhasset Bay to the east.',
  ],
  pestPressures: [
    {
      pest: 'House mice',
      driver:
        'Envelope gaps on the 1920s–1950s detached stock, and shared voids in the Plaza co-ops, where mice nest in dark, undisturbed, warm cavities near cabinetry and appliance motors.',
      season: 'Autumn ingress, peaking with the first cold nights',
    },
    {
      pest: 'Norway rats',
      driver:
        'The Middle Neck Road and Great Neck Plaza commercial strip, its refuse handling and its older drain connections beneath a dense mixed-use block.',
      season: 'Year-round, with visible pressure rising in autumn',
    },
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Foundation cracks, buried wood debris and insufficient clearance between wood and soil — the conditions Cornell Cooperative Extension lists as encouraging infestation — on mature landscaped lots.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Damp window and door sills and wall voids in stucco and masonry garden-suburb houses, where a failed flashing detail wets framing that never dries.',
      season: 'Spring through late summer',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Street basins and sumps are a primary larval habitat in Nassau County, which runs surveillance traps countywide and monitors thousands of basins for larvae.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'Great Neck Plaza and the 1925 Long Island Rail Road station',
    'United States Merchant Marine Academy, Kings Point',
    'Saddle Rock Grist Mill, a tide-powered mill in operation by the 18th century',
    'Steppingstone Park, formerly part of the Walter P. Chrysler estate',
    'Kings Point Park',
    'The Kensington entrance gates, modeled on those of London\'s Kensington Gardens',
  ],
  waterways: ['Manhasset Bay', 'Little Neck Bay', 'Long Island Sound', 'Kings Point Pond'],
  neighborhoods: [
    'Great Neck Plaza',
    'Kensington',
    'Kings Point',
    'Great Neck Estates',
    'Russell Gardens',
    'Thomaston',
    'Saddle Rock',
    'Lake Success',
    'Harbor Hills',
    'University Gardens',
    'Great Neck Gardens',
    'Saddle Rock Estates',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Great_Neck,_New_York',
    'https://en.wikipedia.org/wiki/Great_Neck_(village),_New_York',
    'https://en.wikipedia.org/wiki/Great_Neck_Estates,_New_York',
    'https://en.wikipedia.org/wiki/Kensington,_New_York',
    'https://www.longislandpress.com/2025/07/02/nine-villages-one-peninsula/',
    'https://www.point2homes.com/US/Neighborhood/NY/Great-Neck-Demographics.html',
    'https://en.wikipedia.org/wiki/Little_Neck_Bay',
    'https://en.wikipedia.org/wiki/Manhasset_Bay',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
  ],
};
