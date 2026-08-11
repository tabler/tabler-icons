import fs from 'fs';
import { getRollupConfig } from '../../.build/rollup-plugins.mjs';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const outputFileName = 'tabler-icons-react';
// The icon-name list is exposed at the `./icons-list` subpath. It's no longer
// re-exported from the root barrel, so include it as its own entry to keep it
// in the `preserveModules` output for both formats.
const inputs = ['./src/tabler-icons-react.ts', './src/icons-list.ts'];

// Per-icon `.d.ts` files are emitted separately via `tsc` (see `build:types`),
// so every deep/wildcard import is typed. `preserveModules` keeps one output
// file per icon in BOTH formats so deep imports load a single icon.
// Sourcemaps are omitted: the per-icon modules are generated, trivial, and would
// otherwise more than double the published size and file count for little value.
const bundles = [
  {
    format: 'cjs',
    extension: 'cjs',
    preserveModules: true,
    sourcemap: false,
    inputs,
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    sourcemap: false,
    inputs,
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    sourcemap: false,
    inputs: ['./src/dynamic-imports.ts'],
    external: [/src\/icons/],
  },
];

export default getRollupConfig(pkg, outputFileName, bundles, {
  react: 'react',
});
