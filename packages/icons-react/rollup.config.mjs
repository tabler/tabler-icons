import fs from 'fs'
import { getRollupConfig } from '../../.build/rollup-plugins.mjs'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const outputFileName = 'tabler-icons-react';
const inputs = ['./src/tabler-icons-react.ts'];
const bundles = [
  {
    format: 'cjs',
    extension: 'js',
    inputs,
  },
  {
    format: 'esm',
    inputs,
    preserveModules: true,
    extension: 'mjs',
  },
];

export default [
  {
    input: inputs[0],
    output: [{
      file: `dist/esm/${outputFileName}.d.mts`, format: 'esm'
    }, {
      file: `dist/cjs/${outputFileName}.d.ts`, format: 'cjs'
    }],
    plugins: [dts()],
  },

  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react'
  })
];
