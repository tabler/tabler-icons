import fs from 'fs'
import { getRollupConfig } from '../../.build/rollup-plugins.mjs'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const outputFileName = 'tabler-icons-react-native';
const inputs = ['./src/tabler-icons-react-native.ts'];
const bundles = [
  {
    format: 'cjs',
    inputs,
    extension: 'cjs',
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
      file: `dist/esm/${outputFileName}.d.ts`
    }, {
      file: `dist/cjs/${outputFileName}.d.cts`
    }],
    plugins: [dts()],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react',
    'react-native-svg': 'react-native-svg',
  })
];
