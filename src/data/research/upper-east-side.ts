import type { MarketResearch } from '../markets';

/**
 * RESEARCH — Upper East Side (New York County, Manhattan Community District 8).
 *
 * The defining fact is that this is a vertical market, not a perimeter one.
 * NeighborhoodScout's profile of the Upper East Side puts 98.4 per cent of the
 * residential stock in large apartment buildings, and five separate Landmarks
 * Preservation Commission historic districts sit inside the neighbourhood
 * boundary. Everything below traces to a URL in `sources`.
 *
 * distanceMi/direction are deliberately absent — they cannot be computed until
 * business.address is supplied.
 */
export const upperEastSide: MarketResearch = {
  verified: true,
  housing:
    'The Upper East Side runs roughly from 59th Street to 96th Street between Central Park and the East River, and its residential fabric is overwhelmingly multi-unit: NeighborhoodScout classifies about 98.4 per cent of the housing here as apartment complexes or high-rise apartment buildings, with roughly 92.2 per cent of units being studios or one- and two-bedroom apartments. The stock is layered rather than uniform — post-Civil War rowhouses and turn-of-the-century mansions on the side streets, pre-war elevator apartment houses on Fifth, Park and Madison, tenement rows through Yorkville, and high-rise blocks that began replacing the tenement streets in the 1950s after the elevated railway came down.',
  structuralNotes: [
    'Five New York City historic districts sit inside the neighbourhood: the Upper East Side Historic District, designated in 1981 and extended in 2010 to take in seventeen further blocks between East 60th and East 75th Streets; the Carnegie Hill Historic District, designated in 1974 and expanded in 1993 to roughly 400 buildings along Fifth Avenue from 86th to 98th Street; the Metropolitan Museum Historic District of 1977; the Park Avenue Historic District of 2014, covering 64 properties between 79th and 91st Streets; and the small Henderson Place and Treadwell Farm districts.',
    'The Landmarks Preservation Commission rowhouse manual identifies water as the eventual cause of most masonry deterioration, and explains the specific failure mode of brownstone: because veneer was commonly set with the grain running vertically rather than horizontally, water entering between the bedding layers freezes and forces the stone apart layer by layer, a condition known as spalling.',
    'The manual also notes that all horizontal surfaces on windows — sills and the tops of lintels — should be slightly pitched so water does not collect on them, and that a cornice exists to prevent rain and melted snow washing down the face of a building. Failed cornices and flat sills are therefore where a masonry front starts holding water.',
    'Pre-war apartment houses on this stretch carry vertical plumbing chases, steam risers and electrical runs that pass floor to floor through masonry and terracotta partitions; unless those penetrations were firestopped and sealed at each level, they are continuous shafts between apartments.',
    'Rowhouse and apartment-house blocks alike carry areaways below the stoop line, cellar entries, and in commercial and mixed-use stretches building vaults extending under the public sidewalk. NYC DOT licenses these vaults, requires 600 PSF live loads on sidewalk doors, gratings and covers, and can order an abandoned vault filled in — so a disused vault under a sidewalk is a real, permitted structure with a real void inside it.',
    'Yorkville east of Third Avenue was tenement-built for a largely German, Czech, Slovak, Hungarian and Irish population from the 1880s onward, and much of it was redeveloped into high-rise complexes after the Third Avenue El was dismantled in 1955 — so a single block can hold a 1900 tenement, a 1930s apartment house and a 1960s tower sharing lot lines.',
    'The Second Avenue Subway stations at 86th and 96th Streets were built between 2007 and 2017 beneath the eastern side of the neighbourhood, which meant sustained deep excavation and utility relocation under streets lined with occupied buildings.',
  ],
  pestPressures: [
    {
      pest: 'Norway rats',
      driver:
        'Dense refuse handling on a compressed street grid, older cellar drainage, and the sidewalk vaults, areaways and cellar hatches that give harbourage at and below street level. The city Health Department carries out over 150,000 rat inspections a year and notes that exposed garbage attracts rats and that property owners are legally required to keep them out of buildings.',
      season: 'Year-round, with visible pressure rising through autumn and winter',
    },
    {
      pest: 'House mice',
      driver:
        'Vertical pathways inside multi-unit buildings — plumbing chases, steam risers, cable and conduit runs and unsealed floor penetrations — which let a population established in a cellar reach any floor without ever crossing an exterior wall.',
      season: 'Autumn ingress, resident populations year-round',
    },
    {
      pest: 'German cockroaches',
      driver:
        'Shared kitchen and bathroom stacks in apartment stock, and gaps measured in millimetres around pipe penetrations, escutcheons and behind cabinetry. Research on multi-unit housing finds that pests disperse from high-density units into units next to or otherwise structurally continuous with them, which is why complaint-driven treatment does not clear a building.',
      season: 'Year-round, warmest indoors in winter',
    },
    {
      pest: 'Bed bugs',
      driver:
        'High residential turnover and shared voids and conduit runs between units. New York City requires owners of multiple dwellings — including co-ops and condominiums — to file an annual bedbug report with HPD between 1 and 31 December under Housing Maintenance Code sections 27-2018.1 and 27-2018.2.',
      season: 'Year-round',
    },
    {
      pest: 'Pavement ants and odorous house ants',
      driver:
        'Sidewalk and areaway paving joints, planters and roof-terrace assemblies, plus moisture at failed sills, lintels and cornice returns on masonry facades.',
      season: 'Spring through early autumn',
    },
  ],
  landmarks: [
    'Central Park and the Museum Mile along Fifth Avenue',
    'The Metropolitan Museum of Art',
    'The Cooper Hewitt, Smithsonian Design Museum in the 1901 Carnegie mansion at Fifth Avenue and 91st Street',
    'The Solomon R. Guggenheim Museum, opened on Fifth Avenue in 1959',
    'The Jewish Museum in the Warburg Mansion',
    'Gracie Mansion in Carl Schurz Park',
    'Henderson Place, off East End Avenue between 86th and 87th Streets',
    'Lenox Hill Hospital on East 77th Street, formerly the German Hospital',
    'The Frick Collection, on the site of the old Lenox Library',
  ],
  waterways: ['East River', 'Harlem River', 'The Central Park reservoir and lakes'],
  neighborhoods: [
    'Lenox Hill',
    'Carnegie Hill',
    'Yorkville',
    'Upper Carnegie Hill',
    'Sutton Place',
    'Museum Mile',
    'East End Avenue',
    'Treadwell Farm',
    'Henderson Place',
    'Roosevelt Island',
  ],
  sources: [
    'https://en.wikipedia.org/wiki/Upper_East_Side',
    'https://en.wikipedia.org/wiki/Upper_East_Side_Historic_District',
    'https://friends-ues.org/about/upper-east-side-hd/',
    'https://en.wikipedia.org/wiki/Carnegie_Hill',
    'https://en.wikipedia.org/wiki/Yorkville,_Manhattan',
    'https://en.wikipedia.org/wiki/Lenox_Hill',
    'https://www.neighborhoodscout.com/ny/new-york/upper-east-side',
    'https://www.nyc.gov/assets/lpc/downloads/pdf/lp_rhmanual.pdf',
    'https://streetworksmanual.nyc/chapter-three/building-vaults',
    'https://www.nyc.gov/site/doh/health/health-topics/rats.page',
    'https://a816-dohbesp.nyc.gov/IndicatorPublic/data-stories/rat-inspections/',
    'https://www.nyc.gov/assets/buildings/local_laws/ll55of2018.pdf',
    'https://www.nyc.gov/assets/hpd/downloads/pdfs/services/bedbugs-annual-report-faq.pdf',
    'https://ucanr.edu/blog/pests-urban-landscape/article/proactive-ipm-programs-multi-unit-housing-environments',
  ],
};
