import fs from 'node:fs';

const PHONE = '(631) 212-9601';
function load(f) {
  const raw = fs.readFileSync(f, 'utf8');
  return { crlf: raw.includes('\r\n'), text: raw.split('\r\n').join('\n'), f };
}
function save(o) { fs.writeFileSync(o.f, o.crlf ? o.text.split('\n').join('\r\n') : o.text); console.log('ok ' + o.f); }
function rep(o, a, b) {
  if (o.text.split(a).length !== 2) throw new Error(o.f + ': anchor not unique :: ' + a.slice(0, 70));
  o.text = o.text.replace(a, () => b);
}

// ───────────────────────────────── 1. the call-to-action block, sitewide
// Ryan, 13 October 2026: the three-track block "is the biggest thing
// discouraging residential callers". His rule: the free consultation is named
// everywhere and defined; the paid inspection appears ONLY on the exclusion
// pages; "free estimate" appears nowhere, including the line arguing against
// one. Copy below is his, with the page's own subject kept as the eyebrow so
// the block is still named to the page (Part 4.1 block 6).
{
  const o = load('src/components/Cta.astro');
  rep(o, "import { publishedRates } from '../data/pricing';\n", '');
  rep(o, 'const rates = publishedRates();\n', '');
  rep(o,
    ` * September 2026, Ryan: the old block said "the consultation is free and a
 * written proposal carries a service fee". Correct, but it defined neither, so
 * it read like fine print, and it told somebody calling about quarterly service
 * about an inspection fee they would never pay. There are two tracks and the
 * block now shows both. His copy, fitted to three columns.
 *
 * No dollar figures until Ryan locks the routine rates. They live in
 * data/pricing.ts and appear under the routine column the moment one is set.
 *
 * The phrase "free estimate" appears once, critically, because it is his
 * argument. Nothing on this site ever offers one, and there is no guarantee
 * language anywhere.`,
    ` * October 2026, Ryan: the three-column version led with pricing and "was the
 * biggest thing discouraging residential callers". His rule now:
 *
 *   · the free consultation is named on every page, and defined, not asserted
 *   · the paid inspection appears ONLY on the exclusion pages, where the survey
 *     genuinely is the first step and the fee is credited against the job
 *   · "free estimate" appears nowhere, including the line that used to argue
 *     against one. scripts/audit-strict.mjs bans the phrase again.
 *
 * Copy below is his, verbatim. The page's own subject moves to the eyebrow so
 * the block stays named to the page without the heading arguing about money.
 *
 * data/pricing.ts is no longer rendered here: his copy says routine work is
 * priced on the call rather than from a published schedule. The file stays for
 * whenever he wants rates shown somewhere deliberate.`);
  rep(o,
    `const what = service ?? 'Pest control';
const where = market ? \` in \${market}\` : '';`,
    `const what = service ?? 'Pest control';
const where = market ? \` in \${market}\` : '';

/**
 * Exclusion pages get the version that names the paid inspection: structural
 * exclusion, the rodent exclusion consulting spoke, and the town versions of
 * both. Keyed off the path so a new town page is covered the day it is built
 * rather than the day somebody remembers to pass a prop.
 */
const path = Astro.url.pathname;
const isExclusion =
  path.includes('/structural-exclusion/') || path.includes('/exclusion-consulting/');`);

  const oldBlock = o.text.slice(o.text.indexOf('<section class="cta-block"'), o.text.indexOf('</section>') + 10);
  const newBlock = `<section class="cta-block" data-cta-rival>
  <p class="eyebrow">{what}{where}</p>
  <h2>Start with a free consultation</h2>

  {isExclusion ? (
    <>
      <p class="body">
        A consultation is a phone call with us about your problem. You tell us what you are seeing,
        where, and how long it has been going on, and we tell you whether exclusion is the right
        answer for your building.
      </p>
      <p class="body">
        Exclusion work begins with a paid inspection. We go through the cellar or crawlspace, the
        roofline, the envelope and every penetration, then give you written findings and a scope of
        work. The fee is quoted before the visit and comes off the cost of the job if you go ahead.
      </p>
    </>
  ) : (
    <>
      <p class="body">
        A consultation is a phone call with us about your problem. You tell us what you are seeing,
        where in the building, and how long it has been going on. We tell you what it most likely
        is, what is causing it, and what it will take to fix. Most routine work can be priced on
        that call.
      </p>
      <p class="body">
        There is no charge and no obligation. If we are not the right fit, we will say so before
        anyone books a visit.
      </p>
    </>
  )}

  <p class="actions">
    <a class="btn btn-primary" href={\`tel:\${business.phoneE164}\`}>Call {business.phone}</a>
    <a class="btn btn-ghost" href={secondaryHref}>{secondaryLabel}</a>
  </p>
  <p class="answered">Answered at any hour.</p>
</section>`;
  o.text = o.text.replace(oldBlock, newBlock);
  rep(o, '  .tracks-lede {', '  .answered { color: var(--on-petrol-soft); font-family: var(--font-ui); font-size: var(--t-xs); margin: .7rem 0 0; }\n  .tracks-lede {');
  save(o);
}

// ───────────────────────────────── 2. ban "free estimate" again
{
  const o = load('scripts/audit-strict.mjs');
  const start = o.text.indexOf('        // September 2026, Ryan: the closing CTA argues AGAINST the free estimate,');
  const end = o.text.indexOf("        fail('prohibition'");
  if (start < 0 || end < 0) throw new Error('audit-strict allowance not found');
  o.text = o.text.slice(0, start) + o.text.slice(end);
  save(o);
}

// ───────────────────────────────── 3. contact page
{
  const o = load('src/content/hubs/contact.md');
  rep(o,
    `quickAnswer: >-
  The consultation is free and usually a phone call: describe what is going on and most problems can
  be identified right there. Routine work such as quarterly programs is quoted on the phone. Custom
  work, like structural exclusion or bed bugs, needs a paid site inspection, and that fee comes off
  the job if you go ahead.`,
    `quickAnswer: >-
  Start with a free consultation. It is a phone call: you tell us what you are seeing, where in the
  building, and how long it has been going on, and we tell you what it most likely is, what is
  causing it, and what it will take to fix. Most routine work can be priced on that call.`);
  rep(o,
    `metaDescription: >-
  Contact Graduate Pest Control in NYC and Long Island. The consultation is free, routine work is
  quoted by phone, and custom work starts with a paid inspection.`,
    `metaDescription: >-
  Contact Graduate Pest Control on Long Island and in NYC. The consultation is free, it is a phone
  call, and most routine work can be priced on it. Call ${PHONE}.`);
  rep(o,
    `  - question: How is the work priced after the consultation?
    answer: >-
      It depends on the kind of work. Routine work, meaning general pest control and quarterly or
      monthly maintenance programs, is priced off a standard schedule and can be quoted over the phone.
      Custom work, such as structural exclusion, rodent work on a building, bed bugs and multi-unit or
      commercial programs, starts with a paid site inspection.`,
    `  - question: How is the work priced?
    answer: >-
      Most routine work, including general pest control and the quarterly and monthly programs, can be
      priced on the consultation call itself. Where a job needs somebody to walk the building before
      anyone can be precise, we say so on that call and explain what it involves before anything is
      booked.`);
  rep(o,
    `  - question: Why do you charge for an inspection on custom work?
    answer: >-
      Because the inspection is real work rather than a sales visit. We go through the crawlspace or
      cellar, the roofline, the envelope and the penetrations, then give you written findings and a
      scope of work you can act on, including any repair that belongs to another trade. The fee is
      quoted before the visit and comes off the cost of the job if you hire us.`,
    `  - question: What happens on the consultation call?
    answer: >-
      You describe the problem and we ask a short set of questions about the building: what it is, how
      old it is, which room the activity is in and what changed before it started. Most problems can be
      identified from that. You get told what it most likely is, what is causing it, and what it would
      take to fix.`);
  save(o);
}

// ───────────────────────────────── 4. Ryan's bio page
{
  const o = load('src/content/hubs/ryan-katz.md');
  rep(o,
    `      Nothing for the consultation, which is free and usually happens by phone: the questions that
      decide a case — what the building is, which room the reports come from, what changed just
      before they started — are answered faster on a call than on a walk-through. The written
      proposal that follows is billed, because on a consulting engagement the document is the thing
      being bought, and that fee is credited against the project if it goes ahead.`,
    `      Nothing. The consultation is free and usually happens by phone: the questions that decide a
      case — what the building is, which room the reports come from, what changed just before they
      started — are answered faster on a call than on a walk-through. Where a job needs a survey
      before anyone can be precise, he says so on that call and explains what it involves first.`);
  rep(o, '## What does it cost to talk to him?\n\nThe consultation is free, and it is usually a phone call.',
         '## What does it cost to talk to him?\n\nNothing. The consultation is free, and it is usually a phone call.');
  save(o);
}

// ───────────────────────────────── 5. blog hub FAQ
{
  const o = load('src/content/hubs/blog.md');
  rep(o, 'No prices, because a scope written before anyone has seen the building is a number pulled out of the air.',
         'No prices, because what a job costs is settled on the free consultation call, once somebody has described the building.');
  save(o);
}

// ───────────────────────────────── 6. homepage
{
  const o = load('src/pages/index.astro');
  rep(o,
    "{ question: 'How do I get an inspection scheduled?', answer: `Call ${business.phone} or use the contact form. We will ask what you are seeing and where, because the pattern usually tells us what structural condition to look for first.` },",
    "{ question: 'How do I get started?', answer: `Start with a free consultation: call ${business.phone} or use the form. You tell us what you are seeing and where, and we tell you what it most likely is and what it will take to fix. Most routine work can be priced on that call.` },");
  // Ryan's growth priority is residential work in the Town of Huntington and on
  // the North Shore, so the home page names them instead of leading with the city.
  rep(o, 'h1="Pest Control for New York City & Long Island Properties"',
         'h1="Pest Control for Huntington, the North Shore and New York City"');
  rep(o, 'titleCore="NYC & Long Island Pest Control"', 'titleCore="Huntington & North Shore Pest Control"');
  rep(o, "'Graduate Pest Control is a second-generation pest management company serving New York City and Long Island since 1983. '",
         "'Graduate Pest Control is a second-generation pest management company working across Long Island and New York City since 1983. '");
  save(o);
}

// ───────────────────────────────── 7. titles and descriptions: geography + the word people search
function setMeta(file, title, desc) {
  const o = load(file);
  if (title) {
    if (title.length > 60) throw new Error(`${file}: title core ${title.length}`);
    const shown = `${title} | Graduate Pest Control`.length <= 60 ? `${title} | Graduate Pest Control` : title;
    rep(o, /^metaTitleCore: .*$/m.exec(o.text)[0], `metaTitleCore: ${title}`);
    console.log(`  title ${String(shown.length).padStart(3)}  ${shown}`);
  }
  if (desc) {
    const d = desc.replace(/\s+/g, ' ').trim();
    if (d.length < 110 || d.length > 165) throw new Error(`${file}: desc ${d.length}`);
    const block = /^metaDescription: >-\n(?:[ ]{2,}.*\n)+/m.exec(o.text)[0];
    rep(o, block, 'metaDescription: >-\n' + d.match(/.{1,96}(\s|$)/g).map((l) => '  ' + l.trim()).join('\n') + '\n');
    console.log(`  desc  ${String(d.length).padStart(3)}  ${d}`);
  }
  save(o);
}
setMeta('src/content/services/rodent-control.md', 'Rat & Mouse Exterminator, Long Island',
  `Rat and mouse exterminator for Long Island and New York City: cut the population, seal the building, then verify it held. Call ${PHONE}.`);
setMeta('src/content/services/bed-bug-treatment.md', 'Bed Bug Exterminator, Long Island',
  `Bed bug exterminator for Long Island and New York City, including multi-unit buildings where one apartment is never the whole job. Call ${PHONE}.`);
setMeta('src/content/services/house-mouse-control.md', 'Mouse Exterminator, Long Island & NYC', null);
setMeta('src/content/services/norway-rat-control.md', 'Rat Exterminator, Long Island & NYC', null);
setMeta('src/content/services/wildlife-management.md', 'Wildlife Removal, Long Island & NYC', null);
setMeta('src/content/services/mosquito-management.md', 'Mosquito Control, Long Island & NYC', null);
setMeta('src/content/services/wasp-hornet-removal.md', 'Wasp & Hornet Exterminator, Long Island', null);
setMeta('src/content/services/structural-exclusion.md', 'Structural Exclusion, Long Island & NYC', null);
