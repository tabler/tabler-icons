#!/usr/bin/env node
//
// Post-build step for the dual ESM/CJS + per-file-types layout. Rollup emits the
// per-icon JS and `tsc` emits one `.d.ts` per module; this script reconciles the
// pieces into an output that resolves cleanly in Node, bundlers and TypeScript
// (verified by `pnpm run imports-check`, i.e. @arethetypeswrong/cli):
//
//  1. Re-emit per-alias modules. Aliases are pure re-exports and rollup's
//     `preserveModules` elides them, so we write `dist/**/icons/Icon<Alias>.{mjs,cjs}`
//     directly, pointing at the canonical built icon. Their `.d.ts` already exist.
//  2. Add explicit extensions to the relative specifiers in every emitted `.d.ts`.
//     `tsc` emits extensionless / directory specifiers (`'../types'`, `'./icons'`),
//     which are invalid under ESM resolution once the folder is `"type":"module"`.
//  3. Mirror every `.d.ts` from `dist/esm` into `dist/cjs` (CJS `require` types).
//  4. Materialise the dynamic-import maps for both formats using self-referencing
//     package imports, so a single import shape resolves identically everywhere.
//  5. Write folder-level `package.json` module markers.
//
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import path from 'path';

const PKG_NAME = JSON.parse(readFileSync('package.json', 'utf-8')).name;

const ESM_DIR = path.resolve('dist/esm');
const CJS_DIR = path.resolve('dist/cjs');
const SRC_ICONS_DIR = path.resolve('src/icons');
const ESM_ICONS_DIR = path.join(ESM_DIR, 'icons');
const CJS_ICONS_DIR = path.join(CJS_DIR, 'icons');

// 1. Re-emit alias modules that rollup elided. A generated alias is exactly
//    `export { default, __iconNode } from './IconCanonical';`. We match that
//    precise shape so the multi-export `index.ts` barrel (also elided) is skipped.
const aliasReexport = /^\s*export\s*\{\s*default,\s*__iconNode\s*\}\s*from\s+['"]\.\/(Icon[A-Za-z0-9]+)['"]/;
let aliasCount = 0;

for (const file of readdirSync(SRC_ICONS_DIR)) {
  if (!file.endsWith('.ts')) continue;

  const base = file.slice(0, -'.ts'.length);
  if (existsSync(path.join(ESM_ICONS_DIR, `${base}.mjs`))) continue; // canonical icon, already emitted

  const match = readFileSync(path.join(SRC_ICONS_DIR, file), 'utf-8').match(aliasReexport);
  if (!match) continue; // not a single-target alias (e.g. the index.ts barrel)
  const target = match[1];

  writeFileSync(
    path.join(ESM_ICONS_DIR, `${base}.mjs`),
    `export { default, __iconNode } from './${target}.mjs';\n`,
  );
  writeFileSync(
    path.join(CJS_ICONS_DIR, `${base}.cjs`),
    `module.exports = require('./${target}.cjs');\n`,
  );
  aliasCount += 1;
}

// 2. Add explicit extensions to relative specifiers in every emitted ESM `.d.ts`,
//    in both `from '...'` and `import("...")` positions. The only directory
//    specifier we generate is the icon barrel `'./icons'` -> `'./icons/index.js'`.
//    The `.js` specifier resolves to the sibling `.d.ts` under node16/nodenext.
const addDtsExtensions = (content) =>
  content.replace(
    /(\bfrom\s*|\bimport\s*\(\s*)(['"])(\.\.?\/[^'"]+)(['"])/g,
    (_match, keyword, quote, spec, closeQuote) => {
      const ext = spec === './icons' ? '/index.js' : '.js';
      return `${keyword}${quote}${spec}${ext}${closeQuote}`;
    },
  );

const rewriteDeclarations = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) rewriteDeclarations(entryPath);
    else if (entry.name.endsWith('.d.ts')) {
      writeFileSync(entryPath, addDtsExtensions(readFileSync(entryPath, 'utf-8')));
    }
  }
};

rewriteDeclarations(ESM_DIR);

// 3. Copy every (now extension-correct) `.d.ts` from the ESM tree into dist/cjs.
const copyDeclarations = (srcDir, destDir) => {
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) copyDeclarations(srcPath, destPath);
    else if (entry.name.endsWith('.d.ts')) {
      mkdirSync(path.dirname(destPath), { recursive: true });
      cpSync(srcPath, destPath);
    }
  }
};

copyDeclarations(ESM_DIR, CJS_DIR);

// 4. Dynamic-import maps. Rollup leaves the externalised source path
//    (`import('./icons/IconX.ts')`) in the map; rewrite each to a self-referencing
//    package import (`import('<pkg>/IconX')`). `import()` always uses the `import`
//    condition, so both the ESM and CJS maps load the same module and a consumer's
//    `(await map[name]()).default` is the icon in either format.
const esmDynamicPath = path.join(ESM_DIR, 'dynamic-imports.mjs');
const esmDynamic = readFileSync(esmDynamicPath, 'utf-8').replace(
  /import\(\s*['"]\.\/icons\/([A-Za-z0-9]+)\.ts['"]\s*\)/g,
  (_match, icon) => `import('${PKG_NAME}/${icon}')`,
);
writeFileSync(esmDynamicPath, esmDynamic);
writeFileSync(
  path.join(CJS_DIR, 'dynamic-imports.cjs'),
  esmDynamic
    .replace(/export\s*\{\s*dynamicImports as default\s*\}\s*;?/, 'module.exports = dynamicImports;')
    .replace(/\n?\/\/# sourceMappingURL=.*$/m, '\n'),
);

// The CJS runtime is `module.exports = <map>`, so its declaration must use the
// CJS `export =` form rather than the ESM `export default` that `tsc` emitted
// (otherwise the types describe `module.exports.default`, not `module.exports`).
const cjsDynamicDts = path.join(CJS_DIR, 'dynamic-imports.d.ts');
writeFileSync(
  cjsDynamicDts,
  readFileSync(cjsDynamicDts, 'utf-8').replace(/export\s+default\s+(\w+)\s*;?/, 'export = $1;'),
);

// 5. Module-format markers for the declaration files. These MUST also carry
//    `sideEffects: false` — a nested package.json shadows the root one for files
//    beneath it, so omitting it here would disable tree-shaking for every icon.
writeFileSync(
  path.join(ESM_DIR, 'package.json'),
  `${JSON.stringify({ type: 'module', sideEffects: false }, null, 2)}\n`,
);
writeFileSync(
  path.join(CJS_DIR, 'package.json'),
  `${JSON.stringify({ type: 'commonjs', sideEffects: false }, null, 2)}\n`,
);

console.log(
  `finalize-build: re-emitted ${aliasCount} alias modules, fixed declaration extensions, mirrored types to dist/cjs, built dynamic-import maps, wrote module markers`,
);
