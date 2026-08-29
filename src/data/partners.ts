/**
 * The firms Graduate works with directly.
 *
 * WHY THIS EXISTS
 * ---------------
 * The live site has /partners and the new build did not. legacy-redirects.ts
 * flagged it as an ORPHAN and called the row pointing it at /credentials/ "the
 * weakest surviving row in this file", with a recommendation to raise it:
 *
 *   "Given Part 1 doctrine on honesty, a page saying who actually does the
 *    interior insect work is arguably load-bearing rather than optional."
 *
 * That is right. The copy across this build says "licensed nuisance wildlife
 * partner firms we coordinate" in 37 content files and names none of them, and
 * it specifies Xcluder as a material in 58 files with no page explaining the
 * relationship. A buyer reading "partner firm" is entitled to ask which firm.
 *
 * The three below are named on the client's own published page, so nothing here
 * is being disclosed that the business has not already disclosed itself.
 *
 * NOT ON THIS PAGE, DELIBERATELY: the licensed nuisance wildlife operators who
 * carry out animal removal. Those are referenced throughout the wildlife copy
 * and are still an open question with Ryan — which operators, and whether any
 * may be named. They are tracked in pending.mjs and stay off until answered.
 */
export interface Partner {
  slug: string;
  name: string;
  /** Where they are, and who the named person is. */
  location?: string;
  person?: string;
  /** Displayed as written; linked with rel="nofollow noopener". */
  website: string;
  websiteLabel: string;
  /** One line under the name: what they handle. */
  handles: string;
  /** The body, in Graduate's voice rather than theirs. */
  body: string[];
  /** The page on this site the relationship feeds into. */
  work: { label: string; href: string };
}

export const partners: Partner[] = [
  {
    slug: 'coastal-canine-and-pest-solutions',
    name: 'Coastal Canine and Pest Solutions',
    location: 'Windsor, South Carolina',
    person: 'Kim Camera',
    website: 'https://www.ck9ps.com',
    websiteLabel: 'ck9ps.com',
    handles: 'Canine training, handling and program guidance',
    body: [
      'Kim trained Hugo and Mia, the Patterdale Terriers that work Graduate’s canine environmental IPM program. She built both dogs to the standard the work demands, which is why we can bring a working dog into a Manhattan mechanical room or a food processing facility and rely on what it finds.',
      'Kim is our guidance on everything canine. Whether a dog is ready, how a property should be worked, what a handler is actually seeing in a given alert — she is who we call. Her team also works alongside us across our accounts.',
      'What separates their handling is patience. A dog can register a finding and be walked back out in twenty minutes, and plenty of operations run exactly that way. Kim’s team stays until the source is located, because a finding only tells you something is present. The source tells you how it got in. On a building-science job, that difference is the entire job.',
      'This is the diagnostic step that decides everything after it. We do not treat what has not been confirmed, and we do not accept a confirmation from anything less than a properly trained dog and a handler who can read it.',
    ],
    work: { label: 'Our canine detection and abatement work', href: '/pest-control/canine-rodent-detection/' },
  },
  {
    slug: 'new-york-exterminating',
    name: 'New York Exterminating',
    location: 'Brooklyn, NY',
    person: 'Jorge Bedoya, ACE',
    website: 'https://www.nyepestcontrol.com',
    websiteLabel: 'nyepestcontrol.com',
    handles: 'A share of the interior insect volume',
    body: [
      'Graduate performs the full range of interior insect work in-house, including intensive German cockroach and bed bug programs, using the low-insecticide, building-science approach that defines everything we do. Our own focus stays on structural exclusion and advanced rodent work, so a portion of our interior insect volume goes to Jorge’s team.',
      'Jorge Bedoya is an Associate Certified Entomologist and one of the strongest operators in Brooklyn, and he holds our standard on every cockroach and bed bug job we send him.',
    ],
    work: { label: 'Our cockroach control work', href: '/pest-control/cockroach-control/' },
  },
  {
    slug: 'xcluder',
    name: 'Xcluder',
    website: 'https://www.xcluder.com',
    websiteLabel: 'xcluder.com',
    handles: 'Rodent exclusion materials',
    body: [
      'We specify Xcluder door sweeps and fill fabric on exclusion work throughout New York City and Long Island. Every sweep is custom fabricated, cut and fitted to the opening it protects rather than installed off the shelf. The material matters, but the fit is what decides whether a mouse gets through, and we have installed enough of it to know exactly where a standard installation fails.',
      'We also specify Xcluder GEO below grade. GEO is a geotextile bound with coarse stainless steel fibers, installed under soil, mulch or sod, where it blocks burrowing while grass and plantings grow through it normally. Most exclusion programs stop at the building envelope. On a property with active burrowing, sealing the structure without addressing what is tunneling toward it moves the problem rather than solving it. GEO lets us interrupt burrows at the landscape rather than waiting for them to reach the foundation.',
      'None of it relies on poisons or chemicals, which is why it fits the way we work.',
    ],
    work: { label: 'Our structural exclusion work', href: '/pest-control/structural-exclusion/' },
  },
];
