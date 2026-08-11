#!/usr/bin/env node
//
// Runtime resolution smoke test for the built package. Complements
// `imports-check` (@arethetypeswrong/cli): attw verifies the static entry
// points but reports the `./Icon*` wildcard subpaths as unchecked, and those
// deep imports are the core of the per-icon layout.
//
// The test installs the `npm pack` tarball into a throwaway `node_modules`
// (self-referencing imports inside `dist` only resolve from an installed
// layout, and this also catches files missing from the published file set)
// and loads the package from there in BOTH module systems.
//
// Run after `pnpm run build`. Works with ICONS_LIMIT-restricted builds: the
// icons to test are discovered from the emitted output.
//
import { execFileSync } from 'child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'fs';
import { createRequire } from 'module';
import os from 'os';
import path from 'path';

const require = createRequire(import.meta.url);
const PKG_NAME = JSON.parse(readFileSync('package.json', 'utf-8')).name;

const fail = (message) => {
  console.error(`smoke-test: ${message}`);
  process.exit(1);
};

// Pick a canonical icon and (if the build includes any) an alias to test.
const emitted = readdirSync('dist/esm/icons')
  .filter((f) => f.endsWith('.mjs'))
  .map((f) => f.slice(0, -'.mjs'.length));
if (emitted.length === 0) fail('no icon modules found in dist/esm/icons');

const aliasReexport = /^\s*export\s*\{\s*default,\s*__iconNode\s*\}\s*from/;
const isAlias = (name) =>
  existsSync(path.join('src/icons', `${name}.ts`)) &&
  aliasReexport.test(readFileSync(path.join('src/icons', `${name}.ts`), 'utf-8'));

const canonical = emitted.find((name) => !isAlias(name));
const alias = emitted.find(isAlias);
if (!canonical) fail('no canonical icon module found in dist/esm/icons');

// The consumer script runs from inside the temp install, so every specifier
// resolves exactly the way it would in a user's project.
const consumerSource = `
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PKG_NAME, CANONICAL, ALIAS } = process.env;
const targets = [CANONICAL, ALIAS].filter(Boolean);

const fail = (message) => {
  console.error('smoke-test consumer: ' + message);
  process.exit(1);
};

const checkIconModule = (label, mod) => {
  if (typeof mod.default !== 'function' && typeof mod.default !== 'object') {
    fail(label + ' has no default export (icon component)');
  }
  if (!Array.isArray(mod.__iconNode)) {
    fail(label + ' has no __iconNode export');
  }
};

// Deep per-icon imports (the './Icon*' wildcard attw cannot check).
for (const name of targets) {
  const subpath = PKG_NAME + '/' + name;
  checkIconModule("import('" + subpath + "')", await import(subpath));
  checkIconModule("require('" + subpath + "')", require(subpath));
}

// Root barrel in both module systems.
const rootEsm = await import(PKG_NAME);
const rootCjs = require(PKG_NAME);
for (const name of targets) {
  if (typeof rootEsm[name] !== 'function' && typeof rootEsm[name] !== 'object') {
    fail('root ESM barrel does not export ' + name);
  }
  if (typeof rootCjs[name] !== 'function' && typeof rootCjs[name] !== 'object') {
    fail('root CJS barrel does not export ' + name);
  }
}

// Dynamic-import maps: both formats must load an icon listed in icons-list.
const dynamicEsm = (await import(PKG_NAME + '/dynamic')).default;
const dynamicCjs = require(PKG_NAME + '/dynamic');
const iconsList = (await import(PKG_NAME + '/icons-list')).default;
if (!Array.isArray(iconsList) || iconsList.length === 0) fail('icons-list is empty');
const listedName = iconsList[0];
if (typeof dynamicEsm[listedName] !== 'function' || typeof dynamicCjs[listedName] !== 'function') {
  fail("dynamic-import maps have no loader for '" + listedName + "'");
}
checkIconModule("dynamic ESM loader for '" + listedName + "'", await dynamicEsm[listedName]());
checkIconModule("dynamic CJS loader for '" + listedName + "'", await dynamicCjs[listedName]());
`;

const tmpDir = mkdtempSync(path.join(os.tmpdir(), 'tabler-icons-smoke-'));
let tarball;
try {
  tarball = execFileSync('npm', ['pack', '--silent'], { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .pop();

  const nodeModules = path.join(tmpDir, 'node_modules', ...PKG_NAME.split('/').slice(0, -1));
  mkdirSync(nodeModules, { recursive: true });
  execFileSync('tar', ['-xzf', path.resolve(tarball), '-C', tmpDir]);
  renameSync(path.join(tmpDir, 'package'), path.join(nodeModules, PKG_NAME.split('/').pop()));

  // The only runtime external is react; link the workspace copy. Its own
  // dependencies resolve from its real path.
  symlinkSync(
    path.dirname(require.resolve('react/package.json')),
    path.join(tmpDir, 'node_modules', 'react'),
  );

  writeFileSync(
    path.join(tmpDir, 'package.json'),
    `${JSON.stringify({ name: 'smoke-test-consumer', private: true, version: '0.0.0' }, null, 2)}\n`,
  );
  writeFileSync(path.join(tmpDir, 'consumer.mjs'), consumerSource);

  execFileSync(process.execPath, ['consumer.mjs'], {
    cwd: tmpDir,
    stdio: 'inherit',
    env: { ...process.env, PKG_NAME, CANONICAL: canonical, ALIAS: alias ?? '' },
  });
} catch (error) {
  fail(error.message);
} finally {
  rmSync(tmpDir, { recursive: true, force: true });
  if (tarball && existsSync(tarball)) rmSync(tarball);
}

console.log(
  `smoke-test: verified deep, root, and dynamic imports in ESM+CJS from a packed install ` +
    `(canonical: ${canonical}${alias ? `, alias: ${alias}` : ', no alias in this build'})`,
);
