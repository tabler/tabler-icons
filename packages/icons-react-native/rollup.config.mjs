import fs from 'fs'
import { getRollupPlugins } from '../../.build/rollup-plugins.mjs'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const packageName = '@tabler/icons-react-native';
const outputFileName = 'tabler-icons-react-native';
const outputDir = 'dist';
const inputs = ['./src/tabler-icons-react-native.ts'];
const bundles = [
  {
    format: 'cjs',
    inputs,
    outputDir,
  },
  {
    format: 'esm',
    inputs,
    outputDir,
    preserveModules: true,
  },
];

const configs = bundles
  .map(({ inputs, outputDir, format, minify, preserveModules }) =>
    inputs.map(input => ({
      input,
      plugins: getRollupPlugins(pkg, minify),
      external: ['react', 'react-native-svg'],
      output: {
        name: packageName,
        ...(preserveModules
          ? {
            dir: `${outputDir}/${format}`,
          }
          : {
            file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
          }),
        format,
        sourcemap: true,
        preserveModules,
        globals: {
          react: 'react',
          'react-native-svg': 'react-native-svg',
        },
      },
    })),
  )
  .flat();

export default [
  {
    input: inputs[0],
    output: [{
      file: `dist/${outputFileName}.d.ts`, format: "es"
    }],
    plugins: [dts()],
  },
  ...configs
];
