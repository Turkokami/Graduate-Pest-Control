/**
 * schema.ts — the 7-node entity graph.
 *
 * Keystone Part 5: "This is the keystone, and it is built FIRST, before a
 * single page of copy. Every page imports these nodes by @id; no page ever
 * redeclares them. Get this wrong and every page built afterward inherits
 * the error."
 *
 * Hard rules enforced here:
 *  · One connected @graph per page, every node @id-anchored to SITE_URL.
 *  · Exactly one FAQPage node per URL, built from the same array the visible
 *    FAQ block renders from.
 *  · NO Review / AggregateRating markup for our own business. A local business
 *    cannot earn star rich results from markup on its own site; Service is not
 *    an eligible type at all. Stars come from the GBP. (Part 5.3)
 *  · aggregateRating is emitted only if a VERIFIED GBP rating exists in
 *    business.ts. Never hand-entered.
 *  · SpeakableSpecification on the Quick Answer + FAQ regions (mandate M4).
 *  · Nothing PENDING is ever emitted as a guess — the key is omitted instead.
 */

import {
  business,
  brandAssets,
  credentialsForSchema,
  has,
  SITE_URL,
} from '../data/business';

const ORG = `${SITE_URL}/#organization`;
const BIZ = `${SITE_URL}/#localbusiness`;
const SITE = `${SITE_URL}/#website`;
const LOGO = `${SITE_URL}/#logo`;
const EXPERT = `${SITE_URL}/#named-expert`;

export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/** Stable Speakable selectors — must match the class names the components render. */
export const SPEAKABLE_SELECTORS = ['[data-speakable]', '.faq-speakable'];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageSchemaInput {
  /** Path with leading and trailing slash, e.g. "/locations/huntington/". */
  path: string;
  title: string;
  description: string;
  /** The AEO Quick Answer — 40–60 words, reused as meta description, first FAQ
   *  answer and Speakable target (doctrine #3). */
  quickAnswer: string;
  pageType: 'home' | 'service' | 'city' | 'matrix' | 'library' | 'compliance' | 'vertical' | 'case-study' | 'person' | 'page';
  /** Breadcrumb trail, mirroring the URL taxonomy EXACTLY (Part 5.1 node 7). */
  breadcrumbs: Array<{ name: string; path: string }>;
  faqs?: FaqItem[];
  serviceName?: string;
  areaServed?: string[];
  primaryImage?: { src: string; alt: string; width?: number; height?: number };
  datePublished?: string;
  dateModified?: string;
  /** Authoritative sources cited on the page — Part 5.1: telling an answer
   *  engine you are sourcing real research materially raises quote odds. */
  citations?: Array<{ name: string; url: string }>;
}

// ---------------------------------------------------------------------------
// Core nodes — declared ONCE per domain, referenced by @id everywhere else.
// ---------------------------------------------------------------------------

function postalAddress() {
  const a = business.address;
  const out: Record<string, unknown> = {
    '@type': 'PostalAddress',
    addressRegion: a.region,
    addressCountry: a.country,
  };
  // Omit rather than invent. Part 5.3: schema NAP must match visible NAP
  // character for character — an invented address breaks that permanently.
  if (has(a.street)) out.streetAddress = a.street;
  if (has(a.locality)) out.addressLocality = a.locality;
  if (has(a.postalCode)) out.postalCode = a.postalCode;
  return out;
}

function personNode() {
  const e = business.namedExpert;
  const node: Record<string, unknown> = {
    '@type': 'Person',
    '@id': EXPERT,
    name: e.name,
    jobTitle: e.role,
    url: abs(`/${e.slug}/`),
    worksFor: { '@id': BIZ },
    email: e.email,
  };

  const creds: Array<Record<string, unknown>> = [];
  // Real license number only — the cheapest E-E-A-T win (Part 5.3).
  if (has(e.licenseNumber)) {
    creds.push({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      identifier: e.licenseNumber,
    });
  }
  // Only verified INDIVIDUAL certifications. Memberships and audit schemes
  // never appear here — they are not credentials.
  for (const c of credentialsForSchema()) {
    creds.push({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: c.name,
      alternateName: c.abbr,
    });
  }
  if (creds.length) node.hasCredential = creds;
  return node;
}

function localBusinessNode(areaServed?: string[]) {
  const node: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'PestControlService'],
    '@id': BIZ,
    name: business.name,
    url: `${SITE_URL}/`,
    telephone: business.phone,
    email: business.email,
    address: postalAddress(),
    foundingDate: String(business.foundedYear),
    founder: { '@type': 'Person', name: business.founder.name },
    image: { '@id': LOGO },
    logo: { '@id': LOGO },
    parentOrganization: { '@id': ORG },
    employee: { '@id': EXPERT },
  };

  if (has(business.geo.latitude) && has(business.geo.longitude)) {
    node.geo = {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    };
  }
  if (has(business.sameAs)) node.sameAs = business.sameAs;
  if (has(business.openingHours)) {
    node.openingHoursSpecification = business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  // Part 5.3: ONLY from a verified review platform. PENDING → omitted entirely.
  if (has(business.aggregateRating)) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: business.aggregateRating.ratingValue,
      reviewCount: business.aggregateRating.reviewCount,
    };
  }
  if (areaServed?.length) {
    node.areaServed = areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    }));
  }
  return node;
}

/** Nodes shared by every page on the domain. Injected once in BaseLayout. */
export function coreNodes(areaServed?: string[]) {
  return [
    {
      '@type': 'Organization',
      '@id': ORG,
      name: business.name,
      url: `${SITE_URL}/`,
      logo: { '@id': LOGO },
      founder: {
        '@type': 'Person',
        name: business.founder.name,
        description: business.founder.credential,
      },
      foundingDate: String(business.foundedYear),
      ...(has(business.sameAs) ? { sameAs: business.sameAs } : {}),
    },
    {
      '@type': 'ImageObject',
      '@id': LOGO,
      url: abs(brandAssets.logo.src),
      caption: business.name,
      width: brandAssets.logo.width,
      height: brandAssets.logo.height,
    },
    {
      '@type': 'WebSite',
      '@id': SITE,
      url: `${SITE_URL}/`,
      name: business.name,
      publisher: { '@id': ORG },
      inLanguage: 'en-US',
    },
    localBusinessNode(areaServed),
    personNode(),
  ];
}

// ---------------------------------------------------------------------------
// Per-page nodes
// ---------------------------------------------------------------------------

function breadcrumbNode(input: PageSchemaInput) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(input.path)}#breadcrumb`,
    itemListElement: input.breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: abs(b.path),
    })),
  };
}

function webPageNode(input: PageSchemaInput) {
  const url = abs(input.path);
  const node: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { '@id': SITE },
    about: { '@id': BIZ },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: { '@id': `${url}#primaryimage` },
    inLanguage: 'en-US',
    // Mandate M4 — explicit "read this aloud" target for voice assistants.
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: SPEAKABLE_SELECTORS,
    },
  };
  if (input.datePublished) node.datePublished = input.datePublished;
  if (input.dateModified) node.dateModified = input.dateModified;
  if (input.citations?.length) {
    node.citation = input.citations.map((c) => ({
      '@type': 'CreativeWork',
      name: c.name,
      url: c.url,
    }));
  }
  return node;
}

function primaryImageNode(input: PageSchemaInput) {
  const url = abs(input.path);
  const img = input.primaryImage ?? brandAssets.socialImage;
  return {
    '@type': 'ImageObject',
    '@id': `${url}#primaryimage`,
    url: abs(img.src),
    caption: img.alt, // M6: never blank
    ...(img.width ? { width: img.width } : {}),
    ...(img.height ? { height: img.height } : {}),
  };
}

/** Exactly one FAQPage per URL, from the same array the visible block renders. */
function faqNode(input: PageSchemaInput) {
  if (!input.faqs?.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${abs(input.path)}#faq`,
    mainEntity: input.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

function serviceNode(input: PageSchemaInput) {
  if (!input.serviceName) return null;
  return {
    '@type': 'Service',
    '@id': `${abs(input.path)}#service`,
    name: input.serviceName,
    serviceType: input.serviceName,
    provider: { '@id': BIZ },
    // NOTE: no `review` or `aggregateRating` here, ever. Service is not an
    // eligible type for review snippets and self-emitted stars do not display.
    ...(input.areaServed?.length
      ? {
          areaServed: input.areaServed.map((n) => ({
            '@type': 'AdministrativeArea',
            name: n,
          })),
        }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// Graph assembly + validation
// ---------------------------------------------------------------------------

export function buildGraph(input: PageSchemaInput) {
  const nodes: Array<Record<string, unknown>> = [
    ...coreNodes(input.areaServed),
    webPageNode(input),
    primaryImageNode(input),
    breadcrumbNode(input),
  ];
  const svc = serviceNode(input);
  if (svc) nodes.push(svc as Record<string, unknown>);
  const faq = faqNode(input);
  if (faq) nodes.push(faq as Record<string, unknown>);

  const graph = { '@context': 'https://schema.org', '@graph': nodes };
  assertGraphValid(graph, input);
  return graph;
}

/**
 * Build-time validation. Part 5.3: "Validate before publish. Broken schema is
 * worse than no schema." These throw during `astro build`, so a malformed graph
 * can never reach production.
 */
export function assertGraphValid(
  graph: { '@graph': Array<Record<string, unknown>> },
  input: PageSchemaInput
) {
  const nodes = graph['@graph'];
  const ids = nodes.map((n) => n['@id']).filter(Boolean) as string[];

  // No @id collisions (the King of Kings duplicate-emitter failure).
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) {
    throw new Error(`[schema] duplicate @id on ${input.path}: ${[...new Set(dupes)].join(', ')}`);
  }

  // Exactly one FAQPage per URL, never more.
  const faqCount = nodes.filter((n) => n['@type'] === 'FAQPage').length;
  if (faqCount > 1) {
    throw new Error(`[schema] ${faqCount} FAQPage nodes on ${input.path}; exactly one is allowed`);
  }

  // Every FAQ node must match the visible block it was built from.
  if (input.faqs?.length && faqCount !== 1) {
    throw new Error(`[schema] ${input.path} renders an FAQ block but emits no FAQPage node`);
  }

  // No self-emitted review markup, anywhere, ever.
  for (const n of nodes) {
    if (n['@type'] === 'Review' || n['review']) {
      throw new Error(
        `[schema] Review markup found on ${input.path}. A local business cannot ` +
          `earn star rich results from markup on its own site (Part 5.3).`
      );
    }
  }

  // Breadcrumb must mirror the URL taxonomy exactly.
  const crumb = nodes.find((n) => n['@type'] === 'BreadcrumbList') as
    | { itemListElement: Array<{ item: string }> }
    | undefined;
  const last = crumb?.itemListElement?.at(-1)?.item;
  if (last && last !== abs(input.path)) {
    throw new Error(
      `[schema] breadcrumb tail (${last}) does not match page URL (${abs(input.path)}) on ${input.path}`
    );
  }

  // Every reference must resolve to a node we actually declared.
  const declared = new Set(ids);
  const refs: string[] = [];
  const walk = (v: unknown) => {
    if (Array.isArray(v)) return v.forEach(walk);
    if (v && typeof v === 'object') {
      const o = v as Record<string, unknown>;
      const keys = Object.keys(o);
      if (keys.length === 1 && keys[0] === '@id') refs.push(o['@id'] as string);
      else Object.values(o).forEach(walk);
    }
  };
  nodes.forEach(walk);
  const dangling = [...new Set(refs)].filter((r) => !declared.has(r));
  if (dangling.length) {
    throw new Error(`[schema] dangling @id reference on ${input.path}: ${dangling.join(', ')}`);
  }

  return true;
}

/**
 * Serialize for injection.
 *
 * Part 5.3, the JSON-LD injection trap: this string must be placed with
 * `set:html` on a REAL <script type="application/ld+json"> element. Applying
 * set:html to a framework pseudo-element double-escapes the whole graph and it
 * renders as visible escaped text instead of markup.
 */
export function graphToJson(input: PageSchemaInput): string {
  return JSON.stringify(buildGraph(input));
}
