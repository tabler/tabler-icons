import fs from 'fs';
import { getRollupConfig } from '../../.build/rollup-plugins.mjs';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const outputFileName = 'tabler-icons-react-native';
const inputs = ['./src/tabler-icons-react-native.ts'];
const bundles = [
  {
    format: 'cjs',
    inputs,
    extension: 'cjs',
    preserveModules: true,
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
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
  {
    input: './src/icons/index.ts',
    output: [
      {
        dir: 'dist/icons',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      dts({
        compilerOptions: {
          declaration: true,
          emitDeclarationOnly: true,
        },
      }),
    ],
    external: ['react', 'react-native-svg'],
  },
  {
    input: './src/icons/index.ts',
    output: [
      {
        dir: 'dist/cjs/icons',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      dts({
        compilerOptions: {
          declaration: true,
          emitDeclarationOnly: true,
        },
      }),
    ],
    external: ['react', 'react-native-svg'],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react',
    'react-native-svg': 'react-native-svg',
  }),
];
