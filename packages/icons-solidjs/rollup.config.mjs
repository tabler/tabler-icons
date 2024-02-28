import fs from 'fs'
import { getRollupConfig } from '../../.build/rollup-plugins.mjs'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const outputFileName = 'tabler-icons-solidjs';
const inputs = ['./src/tabler-icons-solidjs.ts'];
const bundles = [
  {
    format: 'umd',
    inputs,
    minify: true,
  },
  {
    format: 'umd',
    inputs,
  },
  {
    format: 'cjs',
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
      file: `dist/${outputFileName}.d.ts`, format: "es"
    }],
    plugins: [dts()],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {
    'solid-js': 'solid-js',
    'solid-js/h': 'solid-js/h',
  })
];
