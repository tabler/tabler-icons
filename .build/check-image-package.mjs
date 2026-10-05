// Checks that an image package (png / pdf / eps) contains exactly one
// non-empty file per icon. Runs before publishing, so a conversion that was
// skipped (e.g. without `rsvg-convert`) or a stale `icons/` directory from a
// previous build cannot be released.
//
// Usage, from the package directory: node ../../.build/check-image-package.mjs <extension>
import { readdirSync, statSync } from 'fs';
import path from 'path';
import { getAllIcons } from './helpers.mjs';

const extension = process.argv[2];

if (!extension) {
  console.error('Usage: check-image-package.mjs <extension>');
  process.exit(1);
}

const listFiles = (dir) => {
  try {
    return readdirSync(dir).filter((file) => file.endsWith(`.${extension}`));
  } catch {
    return [];
  }
};

const sample = (files) => files.slice(0, 10).join(', ') + (files.length > 10 ? ', …' : '');

let failed = false;

for (const [type, icons] of Object.entries(getAllIcons())) {
  const dir = path.resolve('icons', type);
  const expected = new Set(icons.map((icon) => `${icon.name}.${extension}`));
  const actual = listFiles(dir);
  const actualSet = new Set(actual);

  const missing = [...expected].filter((file) => !actualSet.has(file));
  const extra = actual.filter((file) => !expected.has(file));
  const empty = actual.filter(
    (file) => expected.has(file) && statSync(path.join(dir, file)).size === 0,
  );

  for (const [label, files] of [
    ['missing', missing],
    ['not an icon anymore', extra],
    ['empty', empty],
  ]) {
    if (files.length > 0) {
      failed = true;
      console.error(`${type}: ${files.length} ${label}: ${sample(files)}`);
    }
  }

  if (missing.length === 0 && extra.length === 0 && empty.length === 0) {
    console.log(`${type}: ${actual.length} ${extension} files, all icons present`);
  }
}

if (failed) {
  console.error(
    `\nicons/ does not match the current icons. Rebuild the package before publishing.`,
  );
  process.exit(1);
}
