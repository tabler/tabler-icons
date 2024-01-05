import fs from 'fs'
import { getRollupPlugins } from '../../.build/build-icons.mjs'
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const packageName = '@tabler/icons-solidjs';
const outputFileName = 'tabler-icons-solidjs';
const outputDir = 'dist';
const inputs = ['./src/tabler-icons-solidjs.ts'];
const bundles = [
  {
    format: 'umd',
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: 'umd',
    inputs,
    outputDir,
  },
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
          external: ['solid-js', 'solid-js/h'],
          output: {
            name: packageName,
            ...(preserveModules
                ? {
                  dir: `${outputDir}/${format}`,
                }
                : {
                  file: `${outputDir}/${format}/${outputFileName}${minify ? '.min' : ''}.js`,
                }),
            preserveModules,
            format,
            sourcemap: true,
            globals: {
              'solid-js': 'solid-js',
              'solid-js/h': 'solid-js/h',
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
