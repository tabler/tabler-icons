import fs from 'fs';
import path from 'path';
import {
  getRollupConfig,
  iconsDts,
  iconsListDts,
  subpathsDts,
} from '../../.build/rollup-plugins.mjs';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// Declarations for the CommonJS bundle: same content, `.d.cts` extension and
// `.cjs` relative imports, so TypeScript treats them as CommonJS.
const copyDtsAsCts = (from, to) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(
    to,
    fs.readFileSync(from, 'utf-8').replace(/(from\s+'\.[^']*)\.js'/g, "$1.cjs'"),
  );
};

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

const subpaths = subpathsDts({
  deprecatedNamespaces: {
    index:
      'Referencing `icons` pulls every icon into the bundle. Import icons by name or from `@tabler/icons-react-native/<IconName>`. Will be removed from the main entry in the next major version.',
    iconsList:
      'Import the list from `@tabler/icons-react-native/icons-list` instead. Will be removed from the main entry in the next major version.',
  },
  // the `icons-list` entry of the `exports` map, in both module formats
  files: { 'icons-list.d.ts': iconsListDts, 'cjs/icons-list.d.cts': iconsListDts },
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
    plugins: [
      iconsDts(),
      dts(),
      subpaths,
      {
        name: 'copy-dts-to-cjs',
        writeBundle() {
          copyDtsAsCts(`dist/${outputFileName}.d.ts`, `dist/cjs/${outputFileName}.d.cts`);
        },
      },
    ],
  },
  {
    input: './src/icons/index.ts',
    output: [
      {
        // `src/icons/*.ts` land at `dist/icons/*.d.ts` (the paths `exports` promises)
        // and the shared `src/types.ts` at `dist/types.d.ts`.
        dir: 'dist',
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
      // The CJS build ships the same per-icon declarations — copy them as
      // `.d.cts` (the package is `type: module`) instead of emitting every icon
      // a second time.
      {
        name: 'copy-icons-dts-to-cjs',
        writeBundle() {
          copyDtsAsCts('dist/types.d.ts', 'dist/cjs/types.d.cts');
          for (const file of fs.readdirSync('dist/icons')) {
            if (file.endsWith('.d.ts')) {
              copyDtsAsCts(
                `dist/icons/${file}`,
                `dist/cjs/icons/${file.replace(/\.d\.ts$/, '.d.cts')}`,
              );
            }
          }
        },
      },
    ],
    external: ['react', 'react-native-svg'],
  },
  ...getRollupConfig(pkg, outputFileName, bundles, {
    react: 'react',
    'react-native-svg': 'react-native-svg',
  }),
];
