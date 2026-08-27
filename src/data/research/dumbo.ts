import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Dumbo (Kings County, Brooklyn Community District 2).
 *
 * The stand-out fact: this is the opposite building type to the brownstone
 * belt around it. The DUMBO Historic District, designated 18 December 2007,
 * protects roughly 91 industrial buildings — heavy-timber mills and some of
 * the earliest large-scale reinforced-concrete factories in the United States,
 * built by the Robert Gair Company from 1904 — now carrying apartments on
 * open floorplates that were designed to move freight. And it sits on filled
 * land: the water line ran along what is now Water Street, and in October 2012
 * the East River came back over it.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const dumbo: MarketResearch = {
  verified: true,
  housing:
    'NeighborhoodScout classifies 97.2 per cent of Dumbo residential real estate as large apartment buildings — complexes or high-rise — with 91.8 per cent of units at studio to two bedrooms, a vacancy rate of 10.9 per cent and a density of 29,256 people per square mile. Point2Homes counts 2,375 housing units and 4,497 residents at a median construction year of 1956, with 40.2 per cent of units in pre-1940 buildings and 57.5 per cent of all units in buildings of fifty units or more, against 1.3 per cent single-family detached; 35.9 per cent owner-occupied, 64.1 per cent rented, 8.8 per cent vacant. The pre-1940 share and the fifty-plus-unit share describe the same buildings: nineteenth- and early twentieth-century factories and warehouses now holding dozens of households each.',
  structuralNotes: [
    'The DUMBO Historic District was designated on 18 December 2007, Designation List 399, and covers approximately 91 historically significant buildings on the East River waterfront between the Fulton Ferry Historic District to the west and the Vinegar Hill Historic District to the east.',
    'The neighborhood stands on made land. Water Street marks the former waterline; for most of its history the area was salt marsh, and the city sold underwater water lots from 1686 to private owners who filled them to build wharves. The Empire Stores site was filled in three episodes between about 1796 and 1850. Buildings north of Water Street therefore sit on fill over former tidal ground, which behaves differently from glacial till under a load and drains differently around a foundation.',
    'The nineteenth-century stock is heavy timber, which the designation report calls slow-burning mill construction: massive wooden posts and beams behind brick facades with regularly spaced windows. 22–38 Washington Street, built 1887–1891 for Robert Gair to designs by Benjamin Finkensieper, is the type. Massive timber framing means deep floor assemblies and large concealed cavities between structure and any later ceiling.',
    'The early twentieth-century stock is reinforced concrete, and it is nationally early. The Robert Gair Company built 41–49 Washington Street in 1904 to William Higginson\'s design, erected by Turner Construction — the first multi-story factory Turner built — followed by 51–59 Washington Street (1908), 70 Washington Street (1910–11), 40–58 Washington Street (1913–14), 1 Main Street (1914), 35–41 Main Street (1916), 27 York Street (1916) and 45 Main Street (1919). The designation report places them among the earliest large-scale reinforced-concrete factory buildings erected in the United States.',
    'Concrete changes the exclusion problem in a specific way. There is very little chewable substrate and almost no wood to gnaw, so entry is not made — it is found. Everything that moves through one of these buildings uses an opening that already exists: a construction joint, a cast-in sleeve, a service core, a shaft, a loading threshold, or the annulus around a pipe that a later trade cut through a slab.',
    'These buildings were designed to move freight vertically and take rail horizontally. The designation report records ground-level vehicular entrances, wide segmental-arch loading docks, steam freight elevators and building entries sized for rail cars. The Jay Street Connecting Railroad, established 1904, ran into buildings — its track is still inset in the Belgian block paving on several streets, and ran inside the Bliss foundry at 202–206 Plymouth Street.',
    'Floorplates were built open and stayed open. The report describes relatively open and flexible floors for manufacturing and storage; the Grand Union warehouse at 68 Jay Street had ten acres of floorspace and E.W. Bliss occupied 186,500 square feet of manufacturing space at 135 Plymouth Street. Apartments made inside floorplates of that size are partitions in a room, and the partitions frequently stop at a dropped ceiling rather than at the structure.',
    'The streetscape is unusual in a way that matters at ground level. Original granite Belgian block paving survives on many streets; some streets have no sidewalks at all, which the designation report suggests may be unique in New York City, and Belgian block sidewalk paving is not known to appear in any other New York neighborhood. Belgian block is a jointed surface over bedding material, not a monolithic one. A $108 million rehabilitation of the cobblestone streets was completed in 2025.',
    'The Manhattan Bridge\'s Brooklyn anchorage and support pier stand inside the district and are, in the report\'s words, a major presence strongly contributing to its sense of place. Construction began in 1901 and the bridge opened in 1909; roughly 150,000 vehicles cross daily. A masonry anchorage of that size, with a roadway and rail structure above the street, is permanent infrastructure that no adjacent building owner controls.',
    'The flood exposure is documented rather than theoretical. In October 2012 the East River surge inundated Main Street and Old Fulton Street: a shop at Main and Water took at least four feet of water inside the storefront, a resident of 1 Main Street reported five feet in the lobby and basement, the Jane\'s Carousel basement took about five feet and lost its electronics, 20 Jay Street closed indefinitely and multiple basements on lower Old Fulton Street flooded with seawater.',
    'The city\'s hazard mitigation plan puts roughly 61,700 buildings and about 192,000 residential units, housing over 440,000 residents, inside the one per cent annual chance floodplain, and models 14,350 Brooklyn buildings — about 23 per cent of the borough\'s modeled damage — as sustaining damage in such an event. It identifies structures with basement and cellar spaces as particularly vulnerable. Sea level could rise as much as 30 inches by the 2050s and up to 4.8 feet by the 2080s.',
    'Brooklyn Bridge Park runs along the northern edge and includes a constructed salt marsh at Pier 1 planted with smooth cordgrass, maintained as marsh rather than being allowed to accrete seaward, and there to support coastal wildlife and protect the park from wave action. A vegetated tidal edge is a permanent soft margin at the boundary of a built neighborhood.',
    'Dumbo sits in Brooklyn Community District 2, which the Department of Sanitation named as the first Brooklyn district for Empire Bins — stationary on-street containers with keycard access, serviced by automated side-loading trucks. Properties of 31 or more residential units in BK2 are required to register; properties of 10 to 30 units may opt in. Given that 57.5 per cent of Dumbo units sit in buildings of fifty or more, this is the containerisation rule that governs most of the neighborhood, and it moves refuse off the curb into sealed containers.',
    'The residential use is recent and was retrofitted. Artists occupied vacant industrial space from the late 1970s; the acronym was coined in 1978; Two Trees Management acquired the Gair complex from 1981, and residential conversion intensified from 1998. The district today mixes residential, office, artist, retail, social service and industrial uses in the same buildings.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'A waterfront edge on filled former salt marsh, jointed Belgian block paving over bedding material, loading thresholds and vehicular entrances built at street level, a park with a tidal margin along the north, and cellars below the flood line. NYC Health states plainly that rats need food, water, shelter and safe ways to get around, and that owners are legally required to keep them out.',
      season: 'Year-round, with pressure most visible in autumn and after flooding',
    },
    {
      pest: 'House mice',
      driver:
        'Freight shafts, decommissioned hoistways and common service cores running the full height of a converted factory, plus the horizontal cavity between a dropped apartment ceiling and a heavy-timber or concrete floor structure above it. The route between a cellar and a top floor never passes through a finished room.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Plumbing that did not exist in the original building. Factories had no domestic kitchens or bathrooms; conversion cut soil and supply stacks through timber and concrete floors, and the collar around each of those penetrations is the shared route between the apartments on that stack.',
      season: 'Year-round, concentrated indoors in winter',
    },
    {
      pest: 'Oriental and American cockroaches',
      driver:
        'Below-grade space on filled ground inside the coastal floodplain, with a documented history of seawater in cellars and basements in October 2012 and a drainage connection under a jointed stone street surface. These are damp and drainage species, and this is the wettest below-grade fabric in the Brooklyn markets.',
      season: 'Year-round below grade, appearing upstairs in warm weather',
    },
    {
      pest: 'Bed bugs',
      driver:
        'Large converted buildings where apartments were partitioned out of single open floorplates and partitions frequently stop at a ceiling rather than at the structure, plus continuous conduit and core runs. Owners of multiple dwellings file an annual bedbug report with HPD each December under Housing Maintenance Code sections 27-2018.1 and 27-2018.2.',
      season: 'Year-round',
    },
    {
      pest: 'Pavement ants',
      driver:
        'Granite Belgian block paving, in places with no sidewalk at all, is a jointed surface over bedding sand and fill. Every joint is a nesting opportunity, and the paving runs right up to loading thresholds and building entrances.',
      season: 'Late spring through early autumn',
    },
    {
      pest: 'Mosquitoes',
      driver:
        'Standing water on very large flat roofs, in mechanical wells and on terraces cut into converted factory tops, a few feet of head above a floorplate that can run an acre. Residential source reduction here is a roof and terrace exercise rather than a yard one.',
      season: 'Late May through September',
    },
  ],
  landmarks: [
    'The DUMBO Historic District, designated 18 December 2007, about 91 buildings',
    'The Manhattan Bridge Brooklyn anchorage and support pier',
    'The Brooklyn Bridge and Fulton Ferry Landing',
    'Empire Stores on Water Street',
    'The Robert Gair reinforced-concrete buildings on Washington and Main Streets',
    '1 Main Street, 1914',
    'Jane\'s Carousel',
    'Brooklyn Bridge Park and the Pier 1 salt marsh',
    'The Jay Street Connecting Railroad track still set in the Belgian block',
    'St. Ann\'s Warehouse at 45 Water Street, 1870',
  ],
  waterways: [
    'The East River',
    'The tidal edge and constructed salt marsh at Brooklyn Bridge Park Pier 1',
    'The former salt marsh and filled water lots beneath the streets north of Water Street',
  ],
  neighborhoods: [
    'Water Street',
    'Main Street',
    'Washington Street',
    'Front Street',
    'Plymouth Street',
    'Jay Street',
    'York Street',
    'Pearl Street',
    'Adams Street and the bridge corridor',
    'Old Fulton Street and Fulton Ferry',
    'Bridge Street and the Vinegar Hill edge',
    'Brooklyn Bridge Park',
  ],
  sources: [
    'https://s-media.nyc.gov/agencies/lpc/lp/2279.pdf',
    'https://en.wikipedia.org/wiki/DUMBO',
    'https://dumbo.nyc/dumbohistory/',
    'https://dumbo.nyc/buildings/',
    'https://brooklyneagle.com/articles/2012/11/01/sandy-hits-dumbo-hard-downtown-and-heights-escape-major-damage/',
    'https://nychazardmitigation.com/documentation/hazard-profiles/flooding/',
    'https://www.newyorkfed.org/medialibrary/media/outreach-and-education/climate/Flood-Risk-and-Basement-Housing-Brief',
    'https://www.nyc.gov/site/floodmaps/about/about-flood-maps.page',
    'https://www.neighborhoodscout.com/ny/brooklyn/dumbo',
    'https://www.point2homes.com/US/Neighborhood/NY/Brooklyn/DUMBO-Demographics.html',
    'https://brooklynbridgepark.org/places-to-see/gardens/salt-marsh/',
    'https://en.wikipedia.org/wiki/Brooklyn_Community_Board_2',
    'https://www.nyc.gov/site/dsny/collection/containerization/empire-bins.page',
    'https://www.nyc.gov/site/dsny/collection/containerization/residential-containerization.page',
    'https://www.cityneighborhoods.nyc/dumbo',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://a816-dohbesp.nyc.gov/IndicatorPublic/data-stories/rat-inspections/',
    'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/rodents/managing-mice-and-rats',
  ],
};
