import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { getChunks, processIcons, toUnicodeRange } from './utilities.mjs';

test('reprocesses an icon when its source SVG changes', async () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'tabler-webfont-'));
  const outputDir = path.join(dir, 'icons-outlined', '400');
  const icon = { name: 'test', unicode: 'e001', content: '<svg>first</svg>' };

  try {
    await processIcons([icon], outputDir, 'outline', dir, '400', (content) => content);
    const unchanged = await processIcons(
      [icon],
      outputDir,
      'outline',
      dir,
      '400',
      (content) => content,
    );
    assert.deepEqual(unchanged, { processed: 0, cached: 1 });

    icon.content = '<svg>second</svg>';
    const changed = await processIcons(
      [icon],
      outputDir,
      'outline',
      dir,
      '400',
      (content) => content,
    );
    assert.deepEqual(changed, { processed: 1, cached: 0 });

    const output = readFileSync(path.join(outputDir, 'uE001-test.svg'), 'utf8');
    assert.match(output, /<svg>second<\/svg>/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// A glyph from core-icons.json and one with a name no icon has, which lands in
// the `other` category chunk (or `rest` without categories).
const coreIcons = JSON.parse(readFileSync(new URL('./core-icons.json', import.meta.url), 'utf8'));
const coreGlyph = { name: coreIcons[0], unicode: ['\ueb4d'] };
const otherGlyph = { name: 'not-an-icon', unicode: ['\uf494'] };

test('core chunk unicode-range covers U+0020 so the family supplies the line metrics', () => {
  for (const byCategory of [true, false]) {
    const chunks = getChunks([coreGlyph, otherGlyph], byCategory);
    const core = chunks.find((chunk) => chunk.name === 'core');
    const other = chunks.find((chunk) => chunk.name === (byCategory ? 'other' : 'rest'));

    assert.deepEqual(core.codepoints, [0x20, 0xeb4d]);
    assert.equal(toUnicodeRange(core.codepoints), 'U+20, U+EB4D');
    // Only the range changes: no glyph named after the space is loaded.
    assert.deepEqual([...core.names], [coreGlyph.name]);

    assert.deepEqual(other.codepoints, [0xf494]);
    assert.deepEqual([...other.names], [otherGlyph.name]);
  }
});

test('toUnicodeRange merges consecutive codepoints', () => {
  assert.equal(toUnicodeRange([0x20]), 'U+20');
  assert.equal(toUnicodeRange([0xea01, 0xea02, 0xea03, 0xeb01]), 'U+EA01-EA03, U+EB01');
  assert.equal(toUnicodeRange([0x10000, 0x10001]), 'U+10000-10001');
});
