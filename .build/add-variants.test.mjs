import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'fs';
import { join } from 'path';
import paper from 'paper';
import svgpath from 'svgpath';
import { addons, buildVariant, cutPathUnderMask, splitSubpaths } from './add-variants.mjs';
import { ICONS_SRC_DIR, optimizePath, removeClosePath } from './helpers.mjs';

// the raw cut comes back in Paper/svgpath formatting; `optimize` normalizes it later
const norm = (pieces) => pieces.map((d) => optimizePath(d).replace(/([a-zA-Z]) /g, '$1'));

const paths = (svg) => [...svg.matchAll(/<path d="([^"]+)" \/>/g)].map((m) => m[1]);

test('a stroke that does not reach the badge is kept verbatim', () => {
  assert.deepEqual(norm(cutPathUnderMask('M8 11v-4a4 4 0 1 1 8 0v4', addons.check.mask)), [
    'M8 11v-4a4 4 0 1 1 8 0v4',
  ]);
});

test('a stroke running under the badge is cut at the exclusion zone', () => {
  // lock body: the bottom edge stops left of the check, the right edge above it
  const pieces = norm(
    cutPathUnderMask(
      'M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6',
      addons.check.mask,
    ),
  );

  assert.equal(pieces.length, 1);
  assert.match(pieces[0], /^M11\.5\d* 21/);
  assert.match(pieces[0], /v0*\.5\d*$/);
});

test('a dot is never cut: kept whole outside the badge, dropped under it', () => {
  const dot = 'M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0';
  assert.deepEqual(norm(cutPathUnderMask(dot, addons.check.mask)), [dot]);
  assert.deepEqual(cutPathUnderMask('M18 20a1 1 0 1 0 2 0a1 1 0 0 0 -2 0', addons.check.mask), []);
});

test('a stroke the badge only grazes is kept whole instead of losing a sliver', () => {
  // camera lens under the check: the hand-drawn `camera-check` keeps the full circle
  const lens = 'M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0';
  assert.deepEqual(norm(cutPathUnderMask(lens, addons.check.mask)), [lens]);
  // under the wider cog badge the cut is real and the lens is opened
  assert.notDeepEqual(norm(cutPathUnderMask(lens, addons.cog.mask)), [lens]);
});

test('the end of an open stroke is trimmed even when the trim is short', () => {
  // `photo` mountain line: its end pokes 2.46 units into the key badge zone
  const mountain = 'M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5';
  const [piece] = norm(cutPathUnderMask(mountain, addons.key.mask));
  assert.match(piece, /^M3 16l5 -5c/);
  assert.doesNotMatch(piece, /l5 5$/);
});

test('subpaths are split at every M and closepaths resolved', () => {
  assert.deepEqual(norm(splitSubpaths('M17 20l-1-1m2 0l1 1Z')), [
    'M17 20l-1 -1',
    'M18 19l1 1l-1 -1',
  ]);
});

test('the variant merges tags, keeps the category and matches the hand-drawn icon', () => {
  const lock = readFileSync(join(ICONS_SRC_DIR, 'outline/lock.svg'), 'utf-8');
  const svg = buildVariant(lock, addons.check);

  assert.match(
    svg,
    /^<!--\ntags: \[lock, padlock, .*, check, done, success, confirmed, approved, verified\]\ncategory: System\n-->\n<svg/,
  );
  assert.doesNotMatch(svg, /unicode|version/);

  const d = paths(svg);
  assert.equal(d.length, 4);
  assert.match(d[0], /^M11\.5\d* 21h-4\.5\d*c/);
  assert.equal(d[1], 'M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0');
  assert.equal(d[2], 'M8 11v-4a4 4 0 1 1 8 0v4');
  assert.equal(d[3], 'M15 19l2 2l4 -4');
});

test('every addon produces outline-valid path data', () => {
  const camera = readFileSync(join(ICONS_SRC_DIR, 'outline/camera.svg'), 'utf-8');

  for (const [name, addon] of Object.entries(addons)) {
    const svg = buildVariant(camera, addon);
    for (const d of paths(svg)) {
      assert.doesNotMatch(d, /[zZ]/, `${name}: closepath`);
      assert.doesNotMatch(d, /^M[0-9.-]+ [0-9.-]+$/, `${name}: lone M`);
      assert.doesNotMatch(d, /[hv]0(?!\.\d)/, `${name}: v0/h0`);
    }
    assert.ok(paths(svg).length >= 2, `${name}: too few paths`);
  }
});

test('every mask encloses its own badge with room for the stroke and a gap', () => {
  paper.setup(new paper.Size(1, 1));

  for (const [name, addon] of Object.entries(addons)) {
    const mask = new paper.CompoundPath(svgpath(addon.mask).abs().toString());
    /** @type {paper.Path[]} */ (mask.children.length ? mask.children : [mask]).forEach((c) => {
      c.closed = true;
    });
    const badge = new paper.CompoundPath(svgpath(removeClosePath(addon.path)).abs().toString());

    const subs = /** @type {paper.Path[]} */ (badge.children.length ? badge.children : [badge]);
    for (const sub of subs) {
      for (let offset = 0; offset <= sub.length; offset += 0.25) {
        const point = sub.getPointAt(Math.min(offset, sub.length));
        assert.ok(mask.contains(point), `${name}: badge point ${point} is outside the mask`);
        const gap = mask.getNearestLocation(point).distance;
        assert.ok(gap >= 3, `${name}: only ${gap.toFixed(2)} between the badge and the mask edge`);
      }
    }

    mask.remove();
    badge.remove();
  }
});
