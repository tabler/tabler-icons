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
// Every rewrite asserts its postcondition and aborts the build on any mismatch:
// this script pattern-matches rollup/tsc output, so a toolchain update that
// changes that output must fail the build here rather than silently publish a
// package with unresolvable modules.
//
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import path from 'path';

const fail = (message) => {
  throw new Error(
    `finalize-build: ${message}\n` +
      'The rollup/tsc output no longer matches what this script expects. ' +
      'Re-verify the build layout (see comments in finalize-build.mjs) before publishing.',
  );
};

const PKG_NAME = JSON.parse(readFileSync('package.json', 'utf-8')).name;

const ESM_DIR = path.resolve('dist/esm');
const CJS_DIR = path.resolve('dist/cjs');
const SRC_ICONS_DIR = path.resolve('src/icons');
const ESM_ICONS_DIR = path.join(ESM_DIR, 'icons');
const CJS_ICONS_DIR = path.join(CJS_DIR, 'icons');

// 1. Re-emit alias modules that rollup elided. A generated alias is exactly
//    `export { default, __iconNode } from './IconCanonical';`. Every source file
//    in src/icons (bar the `index.ts` barrel, which rollup inlines into the
//    entry) must end up emitted in BOTH formats — either as a canonical icon
//    rollup already wrote, or as an alias we re-emit here. Anything else means
//    the emitted layout drifted and deep imports would 404.
const aliasReexport = /^\s*export\s*\{\s*default,\s*__iconNode\s*\}\s*from\s+['"]\.\/(Icon[A-Za-z0-9]+)['"]/;
let aliasCount = 0;
let canonicalCount = 0;
const uncovered = [];

for (const file of readdirSync(SRC_ICONS_DIR)) {
  if (!file.endsWith('.ts')) continue;

  const base = file.slice(0, -'.ts'.length);
  if (base === 'index') continue; // barrel: inlined by rollup, its `.d.ts` is verified in step 2

  if (existsSync(path.join(ESM_ICONS_DIR, `${base}.mjs`))) {
    // canonical icon, already emitted — but it must exist in both formats
    if (!existsSync(path.join(CJS_ICONS_DIR, `${base}.cjs`))) {
      fail(`'${base}' was emitted to dist/esm/icons but is missing from dist/cjs/icons`);
    }
    canonicalCount += 1;
    continue;
  }

  const match = readFileSync(path.join(SRC_ICONS_DIR, file), 'utf-8').match(aliasReexport);
  if (!match) {
    uncovered.push(file);
    continue;
  }
  const target = match[1];

  if (
    !existsSync(path.join(ESM_ICONS_DIR, `${target}.mjs`)) ||
    !existsSync(path.join(CJS_ICONS_DIR, `${target}.cjs`))
  ) {
    fail(`alias '${base}' re-exports '${target}', which was not emitted by rollup`);
  }

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

if (uncovered.length > 0) {
  fail(
    `${uncovered.length} src/icons module(s) were neither emitted by rollup nor ` +
      `recognised as single-target aliases: ${uncovered.slice(0, 5).join(', ')}` +
      (uncovered.length > 5 ? ', …' : ''),
  );
}
if (canonicalCount === 0) {
  fail('rollup emitted no per-icon modules into dist/esm/icons');
}

// 2. Add explicit extensions to relative specifiers in every emitted ESM `.d.ts`,
//    in both `from '...'` and `import("...")` positions. The only directory
//    specifier we generate is the icon barrel `'./icons'` -> `'./icons/index.js'`.
//    The `.js` specifier resolves to the sibling `.d.ts` under node16/nodenext —
//    a resolution this step verifies on disk for every specifier it touches.
const specifierPattern = /(\bfrom\s*|\bimport\s*\(\s*)(['"])(\.\.?\/[^'"]+)(['"])/g;
let dtsRewriteCount = 0;

const addDtsExtensions = (filePath, content) =>
  content.replace(specifierPattern, (_match, keyword, quote, spec, closeQuote) => {
    // Already-extensioned specifiers (should tsc ever start emitting them) are
    // kept as-is, but still have to resolve like everything else.
    const rewritten = spec.endsWith('.js') ? spec : spec + (spec === './icons' ? '/index.js' : '.js');

    const declTarget = path.resolve(path.dirname(filePath), rewritten.replace(/\.js$/, '.d.ts'));
    if (!existsSync(declTarget)) {
      fail(
        `specifier '${spec}' in ${path.relative('.', filePath)} rewrites to '${rewritten}', ` +
          `but its declaration '${path.relative('.', declTarget)}' does not exist`,
      );
    }

    dtsRewriteCount += 1;
    return `${keyword}${quote}${rewritten}${closeQuote}`;
  });

// After rewriting, no relative specifier may remain extensionless — this also
// catches specifier positions the pattern above failed to match.
const extensionlessSpecifier = /(\bfrom\s*|\bimport\s*\(\s*)['"](\.\.?\/[^'"]*?)(?<!\.js)['"]/;

const rewriteDeclarations = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) rewriteDeclarations(entryPath);
    else if (entry.name.endsWith('.d.ts')) {
      const rewritten = addDtsExtensions(entryPath, readFileSync(entryPath, 'utf-8'));
      const leftover = rewritten.match(extensionlessSpecifier);
      if (leftover) {
        fail(
          `extensionless relative specifier '${leftover[2]}' remains in ` +
            `${path.relative('.', entryPath)} after rewriting`,
        );
      }
      writeFileSync(entryPath, rewritten);
    }
  }
};

rewriteDeclarations(ESM_DIR);

if (dtsRewriteCount === 0) {
  fail('no relative specifiers were found in any emitted .d.ts — tsc output layout changed?');
}

// 3. Copy every (now extension-correct) `.d.ts` from the ESM tree into dist/cjs.
let copiedDeclarationCount = 0;
const copyDeclarations = (srcDir, destDir) => {
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) copyDeclarations(srcPath, destPath);
    else if (entry.name.endsWith('.d.ts')) {
      mkdirSync(path.dirname(destPath), { recursive: true });
      cpSync(srcPath, destPath);
      copiedDeclarationCount += 1;
    }
  }
};

copyDeclarations(ESM_DIR, CJS_DIR);

if (copiedDeclarationCount === 0) {
  fail('tsc emitted no .d.ts files into dist/esm');
}

// 4. Dynamic-import maps. Rollup leaves the externalised source path
//    (`import('./icons/IconX.ts')`) in the map; rewrite each to a self-referencing
//    package import (`import('<pkg>/IconX')`). `import()` always uses the `import`
//    condition, so both the ESM and CJS maps load the same module and a consumer's
//    `(await map[name]()).default` is the icon in either format.
let dynamicRewriteCount = 0;
const esmDynamicPath = path.join(ESM_DIR, 'dynamic-imports.mjs');
const esmDynamic = readFileSync(esmDynamicPath, 'utf-8').replace(
  /import\(\s*['"]\.\/icons\/([A-Za-z0-9]+)\.ts['"]\s*\)/g,
  (_match, icon) => {
    if (!existsSync(path.join(ESM_ICONS_DIR, `${icon}.mjs`))) {
      fail(`dynamic-import map references '${icon}', which was not emitted by rollup`);
    }
    dynamicRewriteCount += 1;
    return `import('${PKG_NAME}/${icon}')`;
  },
);

// The map has exactly one entry per canonical icon; any other count means the
// externalised-path pattern above no longer matches rollup's output.
if (dynamicRewriteCount !== canonicalCount) {
  fail(
    `rewrote ${dynamicRewriteCount} dynamic imports but rollup emitted ` +
      `${canonicalCount} canonical icons`,
  );
}
if (/import\(\s*['"]\./.test(esmDynamic)) {
  fail('relative dynamic imports remain in dynamic-imports.mjs after rewriting');
}

writeFileSync(esmDynamicPath, esmDynamic);
const cjsDynamic = esmDynamic
  .replace(
    /(?:export\s*\{\s*dynamicImports as default\s*\}|export\s+default\s+dynamicImports)\s*;?/,
    'module.exports = dynamicImports;',
  )
  .replace(/\n?\/\/# sourceMappingURL=.*$/m, '\n');

if (!cjsDynamic.includes('module.exports = dynamicImports;')) {
  fail('unable to convert the rollup dynamic-import map to CommonJS');
}

writeFileSync(
  path.join(CJS_DIR, 'dynamic-imports.cjs'),
  cjsDynamic,
);

// The CJS runtime is `module.exports = <map>`, so its declaration must use the
// CJS `export =` form rather than the ESM `export default` that `tsc` emitted
// (otherwise the types describe `module.exports.default`, not `module.exports`).
const cjsDynamicDts = path.join(CJS_DIR, 'dynamic-imports.d.ts');
const cjsDynamicDtsSource = readFileSync(cjsDynamicDts, 'utf-8');
const cjsDynamicDtsConverted = cjsDynamicDtsSource.replace(
  /export\s+default\s+(\w+)\s*;?/,
  'export = $1;',
);

if (cjsDynamicDtsConverted === cjsDynamicDtsSource) {
  fail('dynamic-imports.d.ts has no `export default` to convert to `export =`');
}

writeFileSync(cjsDynamicDts, cjsDynamicDtsConverted);

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
  `finalize-build: verified ${canonicalCount} canonical icons, re-emitted ${aliasCount} alias modules, ` +
    `fixed ${dtsRewriteCount} declaration specifiers, mirrored ${copiedDeclarationCount} .d.ts files to dist/cjs, ` +
    `rewrote ${dynamicRewriteCount} dynamic imports, wrote module markers`,
);
