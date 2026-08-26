/**
 * map-pan-zoom.js — the only JavaScript in the map system.
 *
 * Self-hosted, no dependencies, ~3 kB. It is a plain file in public/ rather
 * than a bundled Astro script on purpose: a bundled module becomes a
 * <script src> in the document head, which every visitor downloads whether or
 * not they ever scroll to the map. This file is fetched from inside an
 * IntersectionObserver callback, so a page that is never scrolled to its map
 * pays exactly nothing for it — no request, no bytes, no parse.
 *
 * It does not draw anything. The map is already on the page, server-rendered
 * as inline SVG, and is complete and readable with JavaScript off. All this
 * does is move the viewBox.
 *
 * ZOOM CEILING
 * ------------
 * MAX_ZOOM is 6. At that ceiling one CSS pixel is roughly fifteen metres of
 * ground, and the finest geometry in the file is a 500 m coastline, so no
 * individual building is identifiable at any zoom level — which is the point.
 * Graduate is a service-area business and the street address is never shown.
 */

const MAX_ZOOM = 6;

/** @param {SVGSVGElement} svg */
function readBaseView(svg) {
  const raw = (svg.getAttribute('data-view') || svg.getAttribute('viewBox') || '').trim().split(/[\s,]+/);
  const n = raw.map(Number);
  if (n.length !== 4 || n.some((v) => !Number.isFinite(v))) return null;
  return { x: n[0], y: n[1], w: n[2], h: n[3] };
}

export function enhance(root) {
  if (!root || root.dataset.mapEnhanced === 'true') return;
  const svg = root.querySelector('[data-map-canvas]');
  const stage = root.querySelector('[data-map-stage]');
  if (!svg || !stage) return;

  const base = readBaseView(svg);
  if (!base) return;
  root.dataset.mapEnhanced = 'true';

  const view = { ...base };
  const pointers = new Map();
  let pinchStart = null;

  function apply() {
    // Never zoom out past the drawn frame, and never pan off it: the coverage
    // area is the whole subject, and a map you can lose is not a map.
    const minW = base.w / MAX_ZOOM;
    view.w = Math.min(base.w, Math.max(minW, view.w));
    view.h = view.w * (base.h / base.w);
    view.x = Math.min(base.x + base.w - view.w, Math.max(base.x, view.x));
    view.y = Math.min(base.y + base.h - view.h, Math.max(base.y, view.y));
    svg.setAttribute('viewBox', `${round(view.x)} ${round(view.y)} ${round(view.w)} ${round(view.h)}`);
    const zoomed = view.w < base.w - 0.5;
    root.dataset.mapZoomed = zoomed ? 'true' : 'false';
    const reset = root.querySelector('[data-map-zoom="reset"]');
    if (reset) reset.disabled = !zoomed;
  }

  const round = (v) => Math.round(v * 100) / 100;

  /** Zoom about a point given in viewBox units. */
  function zoomAbout(factor, ax, ay) {
    const next = Math.min(base.w, Math.max(base.w / MAX_ZOOM, view.w / factor));
    const k = next / view.w;
    view.x = ax - (ax - view.x) * k;
    view.y = ay - (ay - view.y) * k;
    view.w = next;
    apply();
  }

  /** Client px -> viewBox units. */
  function toView(clientX, clientY) {
    const r = svg.getBoundingClientRect();
    if (!r.width || !r.height) return null;
    return {
      x: view.x + ((clientX - r.left) / r.width) * view.w,
      y: view.y + ((clientY - r.top) / r.height) * view.h,
    };
  }

  // --- controls -------------------------------------------------------------
  const controls = root.querySelector('[data-map-controls]');
  if (controls) controls.hidden = false;
  root.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('[data-map-zoom]') : null;
    if (!btn) return;
    e.preventDefault();
    const mode = btn.getAttribute('data-map-zoom');
    const cx = view.x + view.w / 2;
    const cy = view.y + view.h / 2;
    if (mode === 'in') zoomAbout(1.6, cx, cy);
    else if (mode === 'out') zoomAbout(1 / 1.6, cx, cy);
    else {
      view.x = base.x;
      view.y = base.y;
      view.w = base.w;
      apply();
    }
  });

  // --- keyboard -------------------------------------------------------------
  // The focus stop is added here, not in the markup: without this script the
  // stage does nothing, and a focus stop that does nothing is a defect.
  stage.tabIndex = 0;
  stage.setAttribute('role', 'group');
  stage.setAttribute(
    'aria-label',
    'Service area map. Arrow keys pan, plus and minus zoom, Escape resets. The same coverage is listed as text below.'
  );
  stage.addEventListener('keydown', (e) => {
    const step = view.w / 8;
    const cx = view.x + view.w / 2;
    const cy = view.y + view.h / 2;
    switch (e.key) {
      case 'ArrowLeft': view.x -= step; break;
      case 'ArrowRight': view.x += step; break;
      case 'ArrowUp': view.y -= step; break;
      case 'ArrowDown': view.y += step; break;
      case '+': case '=': zoomAbout(1.6, cx, cy); e.preventDefault(); return;
      case '-': case '_': zoomAbout(1 / 1.6, cx, cy); e.preventDefault(); return;
      case 'Escape': view.x = base.x; view.y = base.y; view.w = base.w; break;
      default: return;
    }
    e.preventDefault();
    apply();
  });

  // --- drag and pinch -------------------------------------------------------
  stage.addEventListener('pointerdown', (e) => {
    if (e.target instanceof Element && e.target.closest('[data-map-zoom]')) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      stage.setPointerCapture(e.pointerId);
      stage.dataset.dragging = 'true';
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchStart = { dist: Math.hypot(a.x - b.x, a.y - b.y), w: view.w };
    }
  });

  stage.addEventListener('pointermove', (e) => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    const r = svg.getBoundingClientRect();
    if (!r.width) return;

    if (pointers.size === 2 && pinchStart) {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const [a, b] = [...pointers.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist > 0 && pinchStart.dist > 0) {
        const mid = toView((a.x + b.x) / 2, (a.y + b.y) / 2);
        if (mid) zoomAbout(view.w / Math.max(base.w / MAX_ZOOM, pinchStart.w * (pinchStart.dist / dist)), mid.x, mid.y);
      }
      return;
    }

    const dx = ((e.clientX - prev.x) / r.width) * view.w;
    const dy = ((e.clientY - prev.y) / r.height) * view.h;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    view.x -= dx;
    view.y -= dy;
    apply();
  });

  const release = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStart = null;
    if (pointers.size === 0) delete stage.dataset.dragging;
  };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);

  // --- wheel ----------------------------------------------------------------
  // Only with a modifier (trackpad pinch sends ctrlKey). A map that swallows
  // the scroll wheel on a 4,000-word page is a map that traps the reader.
  stage.addEventListener(
    'wheel',
    (e) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const at = toView(e.clientX, e.clientY);
      if (at) zoomAbout(e.deltaY < 0 ? 1.18 : 1 / 1.18, at.x, at.y);
    },
    { passive: false }
  );

  apply();
}
