import fs from 'fs';
import { getRollupConfig } from '../../.build/rollup-plugins.mjs';

// The package itself is built by ng-packagr into a single FESM bundle. Icons
// are plain data and need no Angular compilation, so this config additionally
// builds one module per icon, plus the icons list and the dynamic imports, for
// the subpath entries of the `exports` map. It has to run after `ng build`,
// which empties `dist`.
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const bundles = [
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    inputs: ['./src/icons/index.ts', './src/icons-list.ts'],
  },
  {
    format: 'esm',
    extension: 'mjs',
    preserveModules: true,
    inputs: ['./src/dynamic-imports.ts'],
    external: [/src\/icons/],
    // The icon modules are built by the bundle above; point the imports at
    // its output instead of the `.ts` sources.
    paths: (id) => id.replace(/^.*\/src\/icons\/(.+)\.ts$/, './icons/$1.mjs'),
  },
];

/**
 * Declarations for the subpath entries. Every icon module has the same shape,
 * so the per-icon subpaths (`@tabler/icons-angular/icons/IconHome`) all
 * resolve to the one `icon.d.mts` instead of shipping a declaration per icon.
 */
const subpathDts = {
  'icon.d.mts': `\
import type { TablerIcon } from '../types/tabler-icons-angular.js';

declare const Icon: TablerIcon;
export default Icon;
`,
  'icons-list.d.mts': `\
/** Names of all icons, e.g. \`home\` or \`home-filled\`. */
declare const iconsList: string[];
export default iconsList;
`,
  'dynamic-imports.d.mts': `\
/** Lazy loaders of the icon modules, keyed by icon name (see \`icons-list\`). */
declare const dynamicImports: Record<string, () => Promise<typeof import('./icon.mjs')>>;
export default dynamicImports;
`,
};

const subpathsDts = () => ({
  name: 'subpaths-dts',
  generateBundle() {
    for (const [fileName, source] of Object.entries(subpathDts)) {
      this.emitFile({ type: 'asset', fileName, source });
    }
  },
});

const [icons, ...rest] = getRollupConfig(pkg, 'tabler-icons-angular', bundles, {});

export default [{ ...icons, plugins: [...icons.plugins, subpathsDts()] }, ...rest];
