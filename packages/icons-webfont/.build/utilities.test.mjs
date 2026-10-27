import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { processIcons } from './utilities.mjs';

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
