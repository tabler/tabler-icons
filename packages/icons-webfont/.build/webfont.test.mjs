import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getChunks, toUnicodeRange } from './utilities.mjs';

test('toUnicodeRange produces expected U+20 and range output', () => {
  // Single codepoints
  assert.equal(toUnicodeRange([0x20]), 'U+20');
  assert.equal(toUnicodeRange([0xea01]), 'U+EA01');

  // Consecutive range
  assert.equal(toUnicodeRange([0xea01, 0xea02, 0xea03]), 'U+EA01-EA03');

  // Combined U+20 with single and consecutive ranges
  assert.equal(toUnicodeRange([0x20, 0xea01, 0xea02, 0xea03, 0xeb01]), 'U+20, U+EA01-EA03, U+EB01');
});

test('getChunks for outline icons includes 0x20 in core chunk only and excludes space from chunk names', () => {
  // 'user' is explicitly listed in core-icons.json
  // 'brand-4chan' is in icons/outline/brand-4chan.svg with category 'Brand', and is NOT in core-icons.json
  const glyphs = [
    { name: 'user', unicode: ['\ueb4d'] },
    { name: 'brand-4chan', unicode: ['\uf494'] },
  ];

  const chunks = getChunks(glyphs, true);
  const coreChunk = chunks.find((c) => c.name === 'core');
  const brandChunk = chunks.find((c) => c.name === 'brand');

  assert.ok(coreChunk, 'core chunk should be created');
  assert.ok(brandChunk, 'brand category chunk should be created');

  // 1. 0x20 appears in the core chunk
  assert.equal(coreChunk.codepoints[0], 0x20);
  assert.ok(coreChunk.codepoints.includes(0xeb4d));

  // 2. 0x20 does not appear in non-core chunks
  assert.ok(!brandChunk.codepoints.includes(0x20));
  assert.deepEqual(brandChunk.codepoints, [0xf494]);

  // 3. The core chunk's names do not include a space icon
  assert.ok(coreChunk.names.has('user'));
  assert.ok(!coreChunk.names.has('space'));
  assert.equal(coreChunk.names.size, 1);

  // 4. toUnicodeRange produces the expected U+20 output for core
  const rangeStr = toUnicodeRange(coreChunk.codepoints);
  assert.match(rangeStr, /^U\+20, /);
  assert.equal(rangeStr, 'U+20, U+EB4D');
});

test('getChunks for filled icons (byCategory=false) includes 0x20 in core chunk and excludes from rest chunk', () => {
  const glyphs = [
    { name: 'user', unicode: ['\ueb4d'] },
    { name: 'brand-4chan', unicode: ['\uf494'] },
  ];

  const chunks = getChunks(glyphs, false);
  const coreChunk = chunks.find((c) => c.name === 'core');
  const restChunk = chunks.find((c) => c.name === 'rest');

  assert.ok(coreChunk, 'core chunk should be created');
  assert.ok(restChunk, 'rest chunk should be created');

  // 0x20 in core, not in rest
  assert.equal(coreChunk.codepoints[0], 0x20);
  assert.ok(coreChunk.codepoints.includes(0xeb4d));
  assert.ok(!coreChunk.names.has('space'));

  assert.ok(!restChunk.codepoints.includes(0x20));
  assert.deepEqual(restChunk.codepoints, [0xf494]);

  // Unicode range output
  assert.equal(toUnicodeRange(coreChunk.codepoints), 'U+20, U+EB4D');
  assert.equal(toUnicodeRange(restChunk.codepoints), 'U+F494');
});
