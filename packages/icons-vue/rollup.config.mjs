import fs from 'fs'
import { getRollupConfig } from '../../.build/rollup-plugins.mjs'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const outputFileName = 'tabler-icons-vue';
const inputs = ['./src/tabler-icons-vue.ts'];
const bundles = [
  {
    format: 'cjs',
    extension: 'cjs',
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
      file: `dist/esm/${outputFileName}.d.ts`, format: 'esm'
    }, {
      file: `dist/cjs/${outputFileName}.d.cts`, format: 'cjs'
    }],
    plugins: [
      dts({
        compilerOptions: {
          preserveSymlinks: false
        }
      })
    ],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {
    vue: 'vue',
  })
];
