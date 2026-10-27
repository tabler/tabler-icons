import { test } from 'node:test';
import assert from 'node:assert/strict';
import { convertDotFills, optimizeSVG } from './helpers.mjs';

test('a small filled circle keeps its fill as currentColor', () => {
  const svg = '<circle cx="17.5" cy="4.5" r="1" fill="#000" fill-rule="evenodd"/>';

  assert.equal(
    convertDotFills(svg),
    '<circle cx="17.5" cy="4.5" r="1" fill-rule="evenodd" fill="currentColor" />',
  );
});

test('a large circle, a hollow circle and a filled path lose the black fill', () => {
  const svg = [
    '<circle cx="6" cy="18" r="2" fill="#000"/>',
    '<circle cx="6" cy="6" r="1"/>',
    '<circle cx="6" cy="6" r="1" fill="none"/>',
    '<path fill="#000000" d="m16 16 3 3"/>',
  ].join('\n');

  assert.equal(
    convertDotFills(svg),
    [
      '<circle cx="6" cy="18" r="2"/>',
      '<circle cx="6" cy="6" r="1"/>',
      '<circle cx="6" cy="6" r="1" fill="none"/>',
      '<path d="m16 16 3 3"/>',
    ].join('\n'),
  );
});

test('svgo keeps the currentColor fill of a dot but drops a black one', () => {
  const svg = (fill) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke="#000"><circle cx="17.5" cy="4.5" r="1" fill="${fill}"/></g></svg>`;

  assert.match(optimizeSVG(convertDotFills(svg('#000'))), /fill="currentColor"/);
  assert.doesNotMatch(optimizeSVG(svg('#000')), /fill=/);
});
