/**
 * Generate badge variants of existing outline icons (`lock` → `lock-check`,
 * `lock-key`, …).
 *
 * The badge sits in the bottom-right corner. Every stroke of the base icon
 * that runs under the badge is cut away along the badge's exclusion zone
 * (`mask`: the badge outline offset by the stroke width plus a gap), then the
 * badge paths are appended. The cut is done on the stroke centerlines with
 * Paper.js, so the result is plain `<path>` data — no SVG masks.
 *
 * Usage:
 *   node .build/add-variants.mjs lock:check,key camera:spark
 *   node .build/add-variants.mjs lock camera --all
 *   node .build/add-variants.mjs lock --addons check,cog
 *
 * Options:
 *   --all       every addon for icons given without `:addon,…`
 *   --addons    default addon list for icons given without `:addon,…`
 *   --force     overwrite variants that already exist in `icons/outline`
 *   --dry-run   print the SVGs instead of writing them
 *   --list      list the available addons
 *
 * New files get the base icon's category and its tags merged with the
 * addon's tags. `unicode` and `version` are added by `pnpm update` at release
 * time, exactly like for hand-drawn icons.
 */
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';
import matter from 'gray-matter';
import paper from 'paper';
import svgpath from 'svgpath';
import { ICONS_SRC_DIR, getArgvs, iconTemplate, removeClosePath } from './helpers.mjs';
import { optimizeSvgContent } from './optimize.mjs';

/** @typedef {{ mask: string, path: string, tags: string[] }} Addon */

/** @type {Record<string, Addon>} */
export const addons = {
  check: {
    mask: 'M23.828 14.172a4 4 0 0 1 0 5.656l-4 4a4 4 0 0 1-5.656 0l-2-2a4 4 0 0 1 4.704-6.36l1.296-1.296a4 4 0 0 1 5.656 0',
    path: 'M15 19l2 2 4-4',
    tags: ['check', 'done', 'success', 'confirmed', 'approved', 'verified'],
  },
  cog: {
    mask: 'M19.001 11.5c1.38 0 2.596.698 3.315 1.76a4 4 0 0 1 3.18 1.99A4 4 0 0 1 25.63 19a4 4 0 0 1-.133 3.75 4 4 0 0 1-3.18 1.99A4 4 0 0 1 19 26.5a4 4 0 0 1-3.315-1.76 4 4 0 0 1-3.18-1.99 4 4 0 0 1-.133-3.751 3.99 3.99 0 0 1 .133-3.749 4 4 0 0 1 3.18-1.99 4 4 0 0 1 3.315-1.76',
    path: 'M21.001 19a2 2 0 01-4 0 2 2 0 014 0m-2-3.5V17m0 4v1.5m3.031-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75',
    tags: ['settings', 'cog', 'gear', 'configure', 'preferences', 'options'],
  },
  key: {
    mask: 'M24.243 12.757a6 6 0 0 1-4.576 10.234l-1.839 1.837a4 4 0 0 1-5.656 0l-1-1a4 4 0 0 1 1.181-6.474 4 4 0 0 1 .819-1.182 4 4 0 0 1 1.04-.751 6 6 0 0 1 10.03-2.663',
    path: 'M17 20l-1-1m2.586-.586a2 2 0 002.828-2.828 2 2 0 10-2.828 2.828ZM14 21l1 1 3.5-3.5',
    tags: ['key', 'password', 'access', 'login', 'security', 'unlock', 'auth'],
  },
  flame: {
    mask: 'M19.025 9.134c.304.08.706.215 1.178.418.75.322 1.498.74 2.212 1.282C24.603 12.491 26 14.926 26 18c0 3.19-1.406 6.203-4.24 7.592a3.94 3.94 0 0 1-3.76-.135 3.94 3.94 0 0 1-3.76.135C11.488 24.244 10 21.524 10 18.5c0-1.742.676-3.205 1.713-4.416.55-.642 1.1-1.1 1.568-1.412q.38-.252.793-.408a3.993 3.993 0 0 1 4.951-3.13',
    path: 'M15.5 16q2.5 1.5 2.5-1v-2s4 1.06 4 5c0 1.664-.649 3.338-2 4v-.25c0-.957-1.053-1.75-2-1.75s-2 .793-2 1.75V22c-1.351-.662-2-2-2-3.5s1.5-2.5 1.5-2.5Z',
    tags: ['flame', 'fire', 'hot', 'burn', 'heat', 'trending'],
  },
  spark: {
    mask: 'M15.12 14.53c1.01-4.04 6.75-4.04 7.76 0 .08.317.273.51.59.59 4.04 1.01 4.04 6.75 0 7.76a.75.75 0 0 0-.59.59c-1.01 4.04-6.75 4.04-7.76 0a.75.75 0 0 0-.59-.59c-4.04-1.01-4.04-6.75 0-7.76a.75.75 0 0 0 .59-.59',
    path: 'M19 22.5a4.75 4.75 0 0 1 3.5-3.5 4.75 4.75 0 0 1-3.5-3.5 4.75 4.75 0 0 1-3.5 3.5 4.75 4.75 0 0 1 3.5 3.5',
    tags: ['spark', 'sparkle', 'magic', 'shine'],
  },
};

/**
 * Fragments assembled from pieces cut at the intersections shorter than this
 * are slivers left over from the cut and are dropped. Whole source paths
 * (the dots, `M9 9l.01 0`) never go through this check.
 */
const MIN_FRAGMENT_PATH_LENGTH = 0.05;

/** Paper.js ignores the SVG rule that arc flags may be glued together (`0 00-7`) — svgpath re-serializes with every token separated. */
const toPaperPathData = (d) => svgpath(d).abs().toString();

/**
 * Closed subpaths no larger than this (the 2×2 dots) are never cut: a
 * three-quarter dot looks broken, so a dot is either kept whole or dropped
 * when its centre is under the badge.
 */
const DOT_MAX_SIZE = 2.001;

/**
 * Set up a Paper project large enough for both shapes, shifted so that
 * nothing has negative coordinates. Returns the shift back to SVG space.
 * @returns {{ outer: paper.Path, inner: paper.CompoundPath, backShift: paper.Point }}
 */
function setupProjectAround(outerD, innerD) {
  outerD = toPaperPathData(outerD);
  innerD = toPaperPathData(innerD);

  paper.setup(new paper.Size(1, 1));
  const tmpO = new paper.Path(outerD);
  const tmpI = new paper.CompoundPath(innerD);
  const pad = 32;
  const u = tmpO.bounds.unite(tmpI.bounds).expand(pad);
  tmpO.remove();
  tmpI.remove();

  const w = Math.max(32, Math.ceil(u.width));
  const h = Math.max(32, Math.ceil(u.height));
  paper.project.clear();
  paper.setup(new paper.Size(w, h));

  const outer = new paper.Path(outerD);
  const inner = new paper.CompoundPath(innerD);
  const shift = new paper.Point(-u.x, -u.y);
  outer.translate(shift);
  inner.translate(shift);

  return { outer, inner, backShift: new paper.Point(u.x, u.y) };
}

/**
 * Paper often leaves `closed: false` when the first point equals the last
 * one (no `Z` in the SVG). `contains()` needs closed curves — cubics can
 * leave a gap of ~1e-3.
 * @param {paper.Path} path
 */
function ensureClosedIfEndpointsMeet(path, tol = 2e-3) {
  if (!path.closed && path.firstSegment && path.lastSegment) {
    if (path.firstSegment.point.isClose(path.lastSegment.point, tol)) {
      path.closed = true;
    }
  }
}

/** Drop duplicate intersections (the same corner found several times). */
function dedupeIntersections(locs, tol = 1e-3) {
  locs.sort((a, b) => a.offset - b.offset);
  const out = [];
  for (const loc of locs) {
    if (!out.some((o) => o.point.isClose(loc.point, tol))) out.push(loc);
  }
  return out;
}

/** Runs of consecutive kept curve indices on a closed ring. */
function collectKeptRunsCircular(keep) {
  const n = keep.length;
  if (n === 0) return [];
  if (keep.every(Boolean)) return [[...Array(n).keys()]];
  if (!keep.some(Boolean)) return [];

  let start = -1;
  for (let i = 0; i < n; i++) {
    if (keep[i] && !keep[(i - 1 + n) % n]) {
      start = i;
      break;
    }
  }
  if (start < 0) return [];

  const runs = [];
  let current = [];
  for (let step = 0; step < n; step++) {
    const i = (start + step) % n;
    if (keep[i]) {
      current.push(i);
    } else if (current.length) {
      runs.push(current);
      current = [];
    }
  }
  if (current.length) runs.push(current);

  return runs;
}

/** Runs of consecutive kept curve indices on an open path. */
function collectKeptRunsLinear(keep) {
  const runs = [];
  let current = [];
  for (let i = 0; i < keep.length; i++) {
    if (keep[i]) {
      current.push(i);
    } else if (current.length) {
      runs.push(current);
      current = [];
    }
  }
  if (current.length) runs.push(current);
  return runs;
}

/**
 * A curve is "under the badge" when most of its samples fall inside the
 * exclusion zone — more than half, not all three.
 * @param {paper.CompoundPath} inner
 * @param {paper.Curve} curve
 */
function curveMostlyInside(inner, curve, samples = [0.2, 0.5, 0.8]) {
  let inside = 0;
  for (const t of samples) {
    if (inner.contains(curve.getPointAt(t))) inside++;
  }
  return inside > samples.length / 2;
}

/**
 * Path data of one run of curves, translated back to SVG space.
 * @param {paper.Curve[]} curves
 * @param {number[]} runIndices
 * @param {paper.Point} backShift
 */
function pathDataFromCurveRun(curves, runIndices, backShift) {
  const openPath = new paper.Path();
  openPath.moveTo(curves[runIndices[0]].segment1.point);
  for (const ci of runIndices) {
    const v = curves[ci].values;
    openPath.cubicCurveTo(
      new paper.Point(v[2], v[3]),
      new paper.Point(v[4], v[5]),
      new paper.Point(v[6], v[7]),
    );
  }
  if (openPath.length < MIN_FRAGMENT_PATH_LENGTH) {
    openPath.remove();
    return '';
  }
  openPath.translate(backShift);
  const d = openPath.pathData;
  openPath.remove();
  return d;
}

/**
 * Cut one subpath of the base icon along the exclusion zone. Returns the
 * kept pieces, each as its own path data string, or `null` when the subpath
 * is untouched (so the caller keeps the original arcs instead of Paper's
 * cubic approximation).
 * @param {paper.Path} outer
 * @param {paper.CompoundPath} inner
 * @param {paper.Point} backShift
 * @returns {string[] | null}
 */
function cutOneOuterPath(outer, inner, backShift) {
  ensureClosedIfEndpointsMeet(outer);
  const outerWasClosed = outer.closed;

  if (outerWasClosed && outer.bounds.width <= DOT_MAX_SIZE && outer.bounds.height <= DOT_MAX_SIZE) {
    return inner.contains(outer.bounds.center) ? [] : null;
  }

  const locs = dedupeIntersections(outer.getIntersections(inner));

  if (locs.length === 0) {
    const curves = outer.curves;
    const keep = curves.map((c) => !curveMostlyInside(inner, c));

    if (keep.every(Boolean)) return null;
    if (!keep.some(Boolean)) return [];

    const runs = outerWasClosed ? collectKeptRunsCircular(keep) : collectKeptRunsLinear(keep);
    return runs.map((r) => pathDataFromCurveRun(curves, r, backShift)).filter(Boolean);
  }

  const cutPts = locs.map((l) => l.point.clone());
  for (let i = cutPts.length - 1; i >= 0; i--) {
    const loc = outer.getNearestLocation(cutPts[i]);
    if (loc) outer.divideAt(loc);
  }
  outer.reduce({});

  const curves = outer.curves;
  const keep = curves.map((c) => !curveMostlyInside(inner, c));
  const runs = outerWasClosed ? collectKeptRunsCircular(keep) : collectKeptRunsLinear(keep);

  return runs.map((r) => pathDataFromCurveRun(curves, r, backShift)).filter(Boolean);
}

/**
 * Every leaf `Path` of a `CompoundPath`, nested ones included.
 * @param {paper.Item} root
 * @returns {paper.Path[]}
 */
function flattenToPaths(root) {
  const acc = [];
  const walk = (item) => {
    if (item instanceof paper.Path) {
      if (item.segments.length > 0) acc.push(item);
    } else if (item instanceof paper.CompoundPath) {
      item.children.forEach(walk);
    }
  };
  walk(root);
  return acc;
}

/**
 * Cut the strokes of `outerD` (any number of `M…` subpaths) along the
 * exclusion zone `maskD`. Returns one path data string per kept piece;
 * subpaths the badge does not touch come back verbatim.
 * @returns {string[]}
 */
export function cutPathUnderMask(outerD, maskD) {
  const pieces = [];

  for (const sub of splitSubpaths(outerD)) {
    const { outer, inner, backShift } = setupProjectAround(sub, maskD);
    flattenToPaths(inner).forEach((p) => ensureClosedIfEndpointsMeet(p));

    const cut = cutOneOuterPath(outer, inner, backShift);
    pieces.push(...(cut ?? [sub]));

    outer.remove();
    inner.remove();
  }

  return pieces;
}

/**
 * Split path data into its `M…` subpaths — Tabler icons keep one subpath per
 * `<path>`. Closepaths are resolved first, since `z` refers to the subpath
 * start.
 * @returns {string[]}
 */
export function splitSubpaths(d) {
  // `segments` is not part of svgpath's public typings
  /** @type {any} */
  const path = svgpath(removeClosePath(d)).abs();
  const groups = [];
  path.segments.forEach((segment) => {
    if (segment[0] === 'M') groups.push([]);
    groups[groups.length - 1].push(segment.join(' '));
  });
  return groups.map((g) => g.join(''));
}

/**
 * Build the variant SVG (with metadata) for one icon and one addon.
 * @param {string} baseSvg content of the source icon file
 * @param {Addon} addon
 */
export function buildVariant(baseSvg, addon) {
  const { data, content } = matter(baseSvg, { delimiters: ['<!--', '-->'] });
  const paths = [];

  for (const m of content.matchAll(/<path\b([^>]*?)\sd="([^"]*)"([^>]*?)\/>/g)) {
    const [, before, d, after] = m;
    const attrs = `${before}${after}`.replace(/\s+/g, ' ').trim();
    for (const piece of cutPathUnderMask(d, addon.mask)) {
      for (const sub of splitSubpaths(piece)) {
        paths.push(attrs ? `<path d="${sub}" ${attrs} />` : `<path d="${sub}" />`);
      }
    }
  }

  for (const sub of splitSubpaths(addon.path)) {
    paths.push(`<path d="${sub}" />`);
  }

  const tags = [...new Set([...(data.tags || []), ...addon.tags])];
  const meta = [`tags: [${tags.join(', ')}]`, data.category ? `category: ${data.category}` : null]
    .filter(Boolean)
    .join('\n');

  const svg = `<!--\n${meta}\n-->\n${iconTemplate('outline')}\n  ${paths.join('\n  ')}\n</svg>\n`;

  return optimizeSvgContent(svg, 'outline');
}

/**
 * `lock:check,key` → `['lock', ['check', 'key']]`; `lock` → `['lock', null]`
 * @returns {[string, string[] | null]}
 */
const parseIconArg = (arg) => {
  const [name, list] = String(arg).split(':');
  return [name, list ? list.split(',').filter(Boolean) : null];
};

const main = () => {
  const argvs = getArgvs();

  if (argvs.list) {
    Object.entries(addons).forEach(([name, addon]) => {
      console.log(`${name.padEnd(8)} tags: ${addon.tags.join(', ')}`);
    });
    return;
  }

  if (argvs._.length === 0) {
    console.log(
      'Usage: node .build/add-variants.mjs <icon>[:addon,addon] … [--all] [--addons a,b] [--force] [--dry-run]',
    );
    console.log(`Addons: ${Object.keys(addons).join(', ')} (see --list)`);
    process.exit(1);
  }

  const defaultAddons = argvs.all
    ? Object.keys(addons)
    : argvs.addons
      ? String(argvs.addons).split(',').filter(Boolean)
      : [];

  let failed = false;
  let written = 0;

  for (const arg of argvs._) {
    const [name, explicit] = parseIconArg(arg);
    const names = explicit ?? defaultAddons;
    const source = join(ICONS_SRC_DIR, 'outline', `${name}.svg`);

    if (!existsSync(source)) {
      console.log(`⛔️ Icon \`outline/${name}\` does not exist`);
      failed = true;
      continue;
    }

    if (names.length === 0) {
      console.log(`⛔️ No addons for \`${name}\` — use \`${name}:check,key\`, --addons or --all`);
      failed = true;
      continue;
    }

    const baseSvg = readFileSync(source, 'utf-8');

    for (const addonName of names) {
      const addon = addons[addonName];
      if (!addon) {
        console.log(
          `⛔️ Unknown addon \`${addonName}\` (available: ${Object.keys(addons).join(', ')})`,
        );
        failed = true;
        continue;
      }

      const target = join(ICONS_SRC_DIR, 'outline', `${name}-${addonName}.svg`);
      if (existsSync(target) && !argvs.force && !argvs['dry-run']) {
        console.log(
          `⚠️  \`outline/${name}-${addonName}\` already exists, skipped (use --force to overwrite)`,
        );
        continue;
      }

      const svg = buildVariant(baseSvg, addon);

      if (argvs['dry-run']) {
        console.log(`--- outline/${name}-${addonName}.svg`);
        console.log(svg);
        continue;
      }

      writeFileSync(target, svg);
      written++;
      console.log(`✅ outline/${name}-${addonName}`);
    }
  }

  if (!argvs['dry-run']) console.log(`\n${written} icon(s) written to icons/outline`);
  if (failed) process.exit(1);
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
