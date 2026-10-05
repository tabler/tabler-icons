import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dashPathData, convertDashesToPaths } from './dashes.mjs';

test('line is split into dashes', () => {
  assert.deepEqual(dashPathData('M0 0H10', '2 3'), ['M0 0L2 0', 'M5 0L7 0']);
});

test('odd dash array is repeated', () => {
  assert.deepEqual(dashPathData('M0 0H10', '2'), ['M0 0L2 0', 'M4 0L6 0', 'M8 0L10 0']);
});

test('dash offset shifts the pattern', () => {
  assert.deepEqual(dashPathData('M0 0H10', '2 3', 1), ['M0 0L1 0', 'M4 0L6 0', 'M9 0L10 0']);
});

test('zero length dashes become dots', () => {
  assert.deepEqual(dashPathData('M0 0H10', '0 5'), ['M0 0L0.01 0', 'M5 0L5.01 0']);
});

test('circle is split into arcs like `circle-dashed`', () => {
  const dash = (2 * Math.PI * 9) / 16;
  const paths = dashPathData('M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0 -18', `${dash} ${dash}`);

  assert.equal(paths.length, 8);
  paths.forEach((d) => assert.match(d, /^M[\d.]+ [\d.]+A9 9 0 0 0 [\d.]+ [\d.]+$/));
});

test('bézier is split exactly', () => {
  // a cubic with collinear control points is a straight line from 0 to 9
  const [first] = dashPathData('M0 0C3 0 6 0 9 0', '3 3');

  assert.equal(first, 'M0 0C1 0 2 0 3 0');
});

test('dash running through the start of a closed path is merged', () => {
  const paths = dashPathData('M0 0H10V10H0Z', '4 1', 2);

  // 40 long, offset 2: the last dash ends at the start and continues into the first one
  assert.equal(paths.length, 8);
  assert.equal(paths.at(-1), 'M0 2L0 0L2 0');
});

test('dash array inherited from a group is applied to shapes and removed', () => {
  const result = convertDashesToPaths(
    '<svg><g stroke-dasharray="2 3"><line x1="0" y1="0" x2="10" y2="0" stroke="#000"/></g></svg>',
  );

  assert.equal(
    result,
    '<svg><g><path stroke="#000" d="M0 0L2 0"/><path stroke="#000" d="M5 0L7 0"/></g></svg>',
  );
});

test('svg without dashes is left untouched', () => {
  const svg = '<svg><path d="M0 0H10"/></svg>';

  assert.equal(convertDashesToPaths(svg), svg);
});
