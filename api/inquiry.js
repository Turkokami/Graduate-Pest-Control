/**
 * api/inquiry.js — the enquiry endpoint behind the form on /contact/.
 *
 * WHY THIS FILE IS HERE AND NOT IN src/pages/
 * -------------------------------------------
 * The site is a static Astro build with no adapter, and it stays that way.
 * Vercel deploys any file in a top-level `/api` directory as a function,
 * independently of the framework build — "You can create a function in other
 * frameworks or with no frameworks by defining your function in a file under
 * /api in your project" (Vercel Functions API reference, checked August 2026).
 * That is the documented path for a static site that needs one dynamic route,
 * and it avoids adding @astrojs/vercel and switching the whole site to hybrid
 * rendering for the sake of a single POST.
 *
 * The signature below is the current documented one for non-Next projects: a
 * Web Handler exported per HTTP method, taking a standard `Request` and
 * returning a standard `Response`. Plain ESM; package.json already sets
 * "type": "module", so this file needs no build step and no dependencies.
 *
 * TRAILING SLASHES
 * ----------------
 * vercel.json sets `trailingSlash: true`, so a request to /api/inquiry is
 * 308-redirected to /api/inquiry/. A 308 preserves the method and the body, so
 * a form POST survives it intact. The form posts to the slashless path because
 * that is the form that works whether or not the redirect applies.
 *
 * NO SILENT FAILURES
 * ------------------
 * The one rule this file exists to enforce: a visitor is never told their
 * message was sent unless the provider accepted it. If the API key is missing,
 * if the provider returns an error, if anything at all goes wrong, the response
 * is an error that names the failure and gives the phone number. A form that
 * quietly drops enquiries is the worst possible outcome for a business this
 * size, and it is invisible until somebody notices the phone stopped ringing.
 *
 * PRIVACY
 * -------
 * Nothing in this file logs a message body, a name, a phone number or an email
 * address — not on success, not on failure, not in a caught exception. The only
 * things written to the platform log are which failure occurred and, where the
 * provider returned one, its HTTP status. Vercel function logs are retained and
 * readable; enquiry contents do not belong in them.
 */

const PHONE = '(631) 212-9601';
const PHONE_E164 = '+16312129601';
const EMAIL = 'ryan@graduatepestcontrol.com';
const THANK_YOU = '/contact/thank-you/';
const CONTACT = '/contact/';

/** Minimum time between the page rendering and the form arriving, in ms. */
const MIN_FILL_MS = 3000;
/** Per-field ceiling. Anything longer is a paste bomb, not an enquiry. */
const MAX_FIELD = 4000;

const FIELDS = [
  { name: 'name', label: 'Your name', required: true, max: 200 },
  { name: 'phone', label: 'Phone', required: true, max: 60 },
  { name: 'email', label: 'Email', required: true, max: 254 },
  { name: 'property_type', label: 'Property type', required: true, max: 40 },
  { name: 'on_behalf_of', label: 'Board or managing agent', required: false, max: 80 },
  { name: 'market', label: 'Town, neighbourhood or market', required: true, max: 200 },
  { name: 'seeing', label: 'What you are seeing', required: true, max: MAX_FIELD },
  { name: 'where', label: 'Where in the building', required: true, max: MAX_FIELD },
  { name: 'duration', label: 'How long it has been going on', required: true, max: 80 },
];

const NOT_DELIVERED = `Your enquiry was not delivered. Nothing reached us, so please call ${PHONE} or email ${EMAIL} instead.`;

// ---------------------------------------------------------------------------
// Responses
// ---------------------------------------------------------------------------

const wantsJson = (request) => (request.headers.get('accept') || '').includes('application/json');

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/**
 * The no-JavaScript failure page.
 *
 * It is generated here rather than served from the static build because the
 * build has no way to know which failure occurred, and a generic "something
 * went wrong" page would be one step away from the silent drop this endpoint
 * exists to prevent. It is deliberately self-contained: the visitor is already
 * in a failure state and this page must not depend on anything else loading.
 */
function errorPage(status, heading, detail, problems) {
  const items = (problems || []).map((p) => `<li>${escapeHtml(p)}</li>`).join('');
  const body = `<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Your enquiry was not sent | Graduate Pest Control</title>
<style>
  :root {
    --petrol: #0f4a6a; --green: #8cbe3f; --ink: #1c2b33; --ink-soft: #55676f;
    --line: #dde5ea; --surface-alt: #f4f7f9;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: #fff; color: var(--ink); line-height: 1.7;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  .band { background: var(--petrol); color: #fff; padding: 3rem 20px 2.6rem; }
  .inner { max-width: 62ch; margin: 0 auto; }
  h1 {
    margin: 0; font-size: clamp(1.8rem, 5vw, 2.6rem); line-height: 1.1;
    font-family: Georgia, 'Times New Roman', serif; font-weight: 600; color: #fff;
  }
  .eyebrow {
    margin: 0 0 .9rem; font-size: .78rem; font-weight: 700; letter-spacing: .18em;
    text-transform: uppercase; color: var(--green);
  }
  main { max-width: 62ch; margin: 0 auto; padding: 2.4rem 20px 3rem; }
  ul { padding-left: 1.15em; }
  li { margin-bottom: .45em; }
  .call {
    border-left: 4px solid var(--green); background: var(--surface-alt);
    padding: 1.2rem 1.4rem; margin: 1.8rem 0;
  }
  .call p { margin: 0 0 .6em; }
  .call p:last-child { margin-bottom: 0; }
  a { color: #166c9b; }
  a:focus-visible { outline: 3px solid var(--green); outline-offset: 2px; }
  .back { margin-top: 2rem; }
</style>
</head>
<body>
  <div class="band">
    <div class="inner">
      <p class="eyebrow">Graduate Pest Control</p>
      <h1>${escapeHtml(heading)}</h1>
    </div>
  </div>
  <main>
    <p>${escapeHtml(detail)}</p>
    ${items ? `<ul>${items}</ul>` : ''}
    <div class="call">
      <p><strong>Nothing was sent, so nothing is waiting on our end.</strong></p>
      <p>Call <a href="tel:${PHONE_E164}">${PHONE}</a>. The line is answered at any hour.</p>
      <p>Or write to <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
    </div>
    <p class="back"><a href="${CONTACT}">Back to the contact page</a></p>
  </main>
</body>
</html>`;
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

/** Nothing is served here. A visitor who lands on it belongs on /contact/. */
export function GET() {
  return new Response(null, { status: 303, headers: { location: CONTACT, 'cache-control': 'no-store' } });
}

export async function POST(request) {
  let form;
  try {
    // formData() covers both application/x-www-form-urlencoded (the native
    // submit) and multipart/form-data (the enhanced fetch sending a FormData).
    form = await request.formData();
  } catch {
    console.error('[inquiry] unreadable request body');
    return wantsJson(request)
      ? json(400, { ok: false, message: NOT_DELIVERED })
      : errorPage(400, 'Your enquiry was not sent', 'The form data could not be read, so nothing was delivered.');
  }

  const get = (k) => {
    const v = form.get(k);
    return typeof v === 'string' ? v.trim() : '';
  };

  // -- Spam gate 1: the honeypot ------------------------------------------
  // A real person can hit this through an over-eager autofill, so the answer is
  // a real message with the phone number on it, not a fake success page. Never
  // tell somebody their enquiry arrived when it did not.
  if (get('website')) {
    console.error('[inquiry] rejected: honeypot filled');
    const detail =
      'This submission was blocked as automated. If that is wrong, a browser has filled in a hidden field, and the fastest fix is to call rather than to fight the form.';
    return wantsJson(request)
      ? json(400, { ok: false, message: `${detail} ${NOT_DELIVERED}` })
      : errorPage(400, 'Your enquiry was not sent', detail);
  }

  // -- Spam gate 2: time on form ------------------------------------------
  // Only enforced when the stamp is present. It is written by the page's script,
  // so a visitor with JavaScript disabled has no stamp and is not judged by it.
  const stamp = Number(get('rendered_at'));
  if (Number.isFinite(stamp) && stamp > 0 && Date.now() - stamp < MIN_FILL_MS) {
    console.error('[inquiry] rejected: submitted faster than a human fills a form');
    const detail = 'That form was submitted faster than it can be filled in, so it was treated as automated.';
    return wantsJson(request)
      ? json(400, { ok: false, message: `${detail} ${NOT_DELIVERED}` })
      : errorPage(400, 'Your enquiry was not sent', detail);
  }

  // -- Validation ----------------------------------------------------------
  const values = {};
  const problems = [];
  for (const f of FIELDS) {
    const v = get(f.name);
    if (f.required && !v) {
      problems.push(`${f.label} is needed before this can be sent.`);
      continue;
    }
    if (v.length > f.max) {
      problems.push(`${f.label} is longer than this form accepts.`);
      continue;
    }
    values[f.name] = v;
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    problems.push('That email address does not look complete.');
  }
  if (values.phone && (values.phone.match(/\d/g) || []).length < 10) {
    problems.push('That phone number is short by a digit or two. Check it and try again.');
  }
  if (problems.length) {
    // No logging here at all: a validation failure's contents are still a
    // member of the public's contact details.
    return wantsJson(request)
      ? json(422, { ok: false, errors: problems, message: 'Nothing was sent. Fix the items above and try again.' })
      : errorPage(422, 'Your enquiry was not sent', 'Some of the form still needs filling in:', problems);
  }

  // -- Configuration -------------------------------------------------------
  // Loud and honest. An unconfigured endpoint returns an error the visitor can
  // act on; it never returns a success page for a message nobody received.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  const from = process.env.INQUIRY_FROM || 'inquiries@graduatepestcontrol.com';

  if (!apiKey || !to) {
    const missing = [!apiKey && 'RESEND_API_KEY', !to && 'INQUIRY_TO'].filter(Boolean).join(', ');
    console.error(`[inquiry] not configured: missing ${missing} — nothing was sent`);
    const detail =
      'The form on this site is not able to deliver mail at the moment, so your enquiry has not reached anybody. This is our fault and not yours.';
    return wantsJson(request)
      ? json(503, { ok: false, message: `${detail} ${NOT_DELIVERED}` })
      : errorPage(503, 'Your enquiry was not sent', detail);
  }

  // -- Delivery ------------------------------------------------------------
  // No em dashes in this message: it is outbound email copy, and Ryan asked for
  // none there. Site copy is unaffected by that rule.
  const lines = [
    'New enquiry from the website contact form.',
    '',
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Property type: ${values.property_type}`,
    `Enquiring as: ${values.on_behalf_of || 'Not stated'}`,
    `Town / market: ${values.market}`,
    `How long: ${values.duration}`,
    '',
    'WHAT THEY ARE SEEING',
    values.seeing,
    '',
    'WHERE IN THE BUILDING',
    values.where,
    '',
    'Reply to this message to answer them directly.',
  ];

  const subject = `Website enquiry: ${values.property_type} in ${values.market}`;

  let response;
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: `Graduate Pest Control website <${from}>`,
        to: [to],
        reply_to: values.email,
        subject,
        text: lines.join('\n'),
      }),
    });
  } catch {
    // The provider was unreachable. Status only, no contents.
    console.error('[inquiry] delivery failed: provider unreachable');
    return wantsJson(request)
      ? json(502, { ok: false, message: NOT_DELIVERED })
      : errorPage(502, 'Your enquiry was not sent', 'The mail provider could not be reached, so nothing was delivered.');
  }

  if (!response.ok) {
    // The provider's error body can echo the addresses back, so only the status
    // code is recorded.
    console.error(`[inquiry] delivery failed: provider returned ${response.status}`);
    return wantsJson(request)
      ? json(502, { ok: false, message: NOT_DELIVERED })
      : errorPage(
          502,
          'Your enquiry was not sent',
          'The mail provider rejected the message, so nothing was delivered.'
        );
  }

  // Delivered. Only now does anybody get told so.
  return wantsJson(request)
    ? json(200, { ok: true, redirect: THANK_YOU })
    : new Response(null, { status: 303, headers: { location: THANK_YOU, 'cache-control': 'no-store' } });
}
