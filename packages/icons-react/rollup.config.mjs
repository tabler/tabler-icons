import fs from 'fs';
import { getRollupConfig, iconsDts } from '../../.build/rollup-plugins.mjs';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const outputFileName = 'tabler-icons-react';
const inputs = ['./src/tabler-icons-react.ts'];
const bundles = [
  {
    format: 'cjs',
    extension: 'cjs',
    inputs,
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    inputs,
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    inputs: ['./src/dynamic-imports.ts'],
    external: [/src\/icons/],
  },
];

/**
 * Every icon module has the same shape, so the per-icon subpaths
 * (`@tabler/icons-react/icons/IconHome`) all resolve to this one declaration
 * file through the `exports` map instead of shipping a declaration per icon.
 */
const iconDts = () => ({
  name: 'icon-dts',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'icon.d.mts',
      source: `\
import type { IconNode, TablerIcon } from './${outputFileName}.js';

export declare const __iconNode: IconNode;
declare const Icon: TablerIcon;
export default Icon;
`,
    });
  },
});

export default [
  {
    input: inputs[0],
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [iconsDts(), dts(), iconDts()],
  },

  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react',
  }),
];
