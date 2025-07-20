import fs from 'fs';
import { getRollupConfig } from '../../.build/rollup-plugins.mjs';
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

export default [
  {
    input: inputs[0],
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [dts()],
  },

  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react',
  }),
];
