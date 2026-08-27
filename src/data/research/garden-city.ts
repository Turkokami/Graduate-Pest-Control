import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Garden City (Nassau County, Hempstead Plains).
 *
 * The odd one out in this wave: no harbor, no moraine, no natural surface
 * water inside the village. A flat glacial outwash plain, a planned village
 * dating to 1869, and a 1950s build-out that doubled it. All claims sourced.
 */
export const gardenCity: MarketResearch = {
  verified: true,
  housing:
    'Garden City has a median construction year of 1951 and a distinctly two-part stock: about 35 per cent of units date from 1939 or earlier, while roughly 56 per cent were built between 1940 and 1969, the bulk of that in the 1950s. Around 83 per cent are detached single-family houses and about 94 per cent of occupied units are owner-occupied, with a small but real concentration of larger apartment buildings near the commercial streets.',
  structuralNotes: [
    'The village was founded in 1869 by Alexander Turney Stewart and incorporated in 1919; the A. T. Stewart Era Buildings district, listed on the National Register in 1978, is a thematic group of fifty structures with 44 residences built between 1871 and 1878 to designs by John Kellum and Henry G. Harrison.',
    'That earliest stock is Italianate and Italianate vernacular, ranging from modest cottages to three-story frame villas; the so-called Apostle houses carry mansard roofs, cupolas and twelve-foot ceilings — deep attic and cornice voids by any modern standard.',
    'Garden City sits on the Hempstead Plains, a flat glacial outwash plain, and lies within the Mill River watershed; there is no harbor, bluff or tidal shoreline inside the village, so moisture problems here are rainfall, grading and plumbing rather than groundwater and salt air.',
    'The Mott Section departs from the village grid with a series of parallel semicircular streets crossed by north–south connectors, which puts houses on curved lots with irregular rear-yard drainage.',
    'Garden City Estates dates from 1907 and was folded into the village at incorporation in 1919, giving the western side its own distinct pre-war build era.',
    'A village height restriction bars any building from exceeding the Cathedral of the Incarnation, completed in 1885 — so the multifamily stock is low-rise and wide rather than tall, with long horizontal service runs.',
  ],
  pestPressures: [
    {
      pest: 'Eastern subterranean termites',
      driver:
        'Well-drained sandy outwash soils warm early and hold structures in direct soil contact; Cornell Cooperative Extension lists foundation cracks, leaking pipes, insufficient wood-to-soil clearance and buried wood debris among the conditions that encourage infestation.',
      season: 'Swarms March through June',
    },
    {
      pest: 'Carpenter ants',
      driver:
        'Deep cornices, mansard roofs and porch framing on the 1870s Italianate stock, where a failed gutter or roof-wall junction wets concealed timber that never dries out.',
      season: 'Spring through late summer',
    },
    {
      pest: 'House mice',
      driver:
        'Attached garages, unsealed utility penetrations and door thresholds on the very large 1950s detached inventory; mice nest in dark, undisturbed, warm cavities near appliances.',
      season: 'Autumn ingress',
    },
    {
      pest: 'Norway rats',
      driver:
        'Seventh Street and Franklin Avenue commercial frontage, office blocks and the refuse handling that comes with them, immediately adjacent to residential streets.',
      season: 'Visible pressure builds in autumn',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'On flat ground with no natural outlet, stormwater goes to street basins and sumps — the habitat Nassau County monitors in the thousands for larvae under its surveillance program.',
      season: 'Late spring through early autumn',
    },
  ],
  landmarks: [
    'Cathedral of the Incarnation, completed 1885',
    'The A. T. Stewart Era Buildings historic district',
    'Adelphi University\'s 76-acre campus, here since 1929',
    'The Garden City Hotel',
    'Roosevelt Field, site of early aviation records and the first official airmail service in 1911',
    'The Hempstead Plains Preserve at Nassau Community College',
  ],
  waterways: ['Mill River watershed'],
  neighborhoods: [
    'Central Section',
    'Eastern Section',
    'Western Section',
    'Garden City Estates',
    'The Mott Section',
    'Stewart Manor border',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Garden_City,_New_York',
    'https://en.wikipedia.org/wiki/A._T._Stewart_Era_Buildings',
    'https://www.point2homes.com/US/Neighborhood/NY/Garden-City-Demographics.html',
    'https://www.neighborhoodscout.com/ny/garden-city/real-estate',
    'https://en.wikipedia.org/wiki/Hempstead_Plains',
    'https://en.wikipedia.org/wiki/Harbor_Hill_Moraine',
    'https://ccenassau.org/resources/-termites',
    'https://www.northeastipm.org/schools/pests/carpenter-ant/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
    'https://www.nassaucountyny.gov/5709/Mosquito-Control-and-Surveillance',
  ],
};
