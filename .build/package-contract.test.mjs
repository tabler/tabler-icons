/**
 * Package contract of the framework packages (see GLOSSARY.md and
 * adr/0001-package-root-resolves-to-cjs-in-node.md).
 *
 * Runs against the built packages (`dist/` must exist) and checks that:
 * - every file the `exports` map, `main`, `module` and `types` point to exists;
 * - Node resolves the package root and every subpath through its real
 *   resolver, under both `require` and `import`, and the root of a package
 *   that ships CommonJS resolves to `.cjs` under `require`;
 * - a package built by a package recipe declares exactly the `exports` map
 *   the recipe expects, in the same order;
 * - the contract only grows: everything recorded in
 *   `package-contract.snapshot.json` is still there, with the same targets and
 *   in the same condition order.
 *
 * A new entry point fails the test until it is recorded. Run with
 * `UPDATE_CONTRACT=1` to record additions; removals and changes are never
 * recorded and keep failing.
 */
import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as packageRecipe from './package-recipe.mjs';
import * as svelteRecipe from './svelte-recipe.mjs';

const HOME_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT_FILE = path.resolve(HOME_DIR, '.build/package-contract.snapshot.json');
const UPDATE = process.env.UPDATE_CONTRACT === '1';

/**
 * Framework packages: whether their root ships a CommonJS bundle, and the
 * package recipe that builds them from their `package.recipe.mjs`, if any.
 */
const PACKAGES = {
  'icons-react': { cjsRoot: true, recipe: packageRecipe },
  'icons-preact': { cjsRoot: true, recipe: packageRecipe },
  'icons-vue': { cjsRoot: true, recipe: packageRecipe },
  'icons-astro': { cjsRoot: true, recipe: packageRecipe },
  'icons-solidjs': { cjsRoot: true },
  'icons-react-native': { cjsRoot: true },
  'icons-svelte': { cjsRoot: false, recipe: svelteRecipe },
  'icons-svelte-runes': { cjsRoot: false, recipe: svelteRecipe },
  'icons-angular': { cjsRoot: false },
};

const TOP_LEVEL_FIELDS = ['main', 'module', 'types'];

const snapshot = fs.existsSync(SNAPSHOT_FILE)
  ? JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf-8'))
  : {};
const recorded = {};

/**
 * Every leaf of an `exports` map as `{ key, conditions, target }`, in the
 * order Node tries them.
 */
const flattenExports = (exports) => {
  const entries = [];
  const walk = (key, value, conditions) => {
    if (typeof value === 'string') {
      entries.push({ key, conditions, target: value });
    } else if (Array.isArray(value)) {
      value.forEach((item) => walk(key, item, conditions));
    } else if (value) {
      Object.entries(value).forEach(([condition, item]) =>
        walk(key, item, [...conditions, condition]),
      );
    }
  };

  if (typeof exports === 'string' || Object.keys(exports).every((k) => !k.startsWith('.'))) {
    walk('.', exports, []);
  } else {
    Object.entries(exports).forEach(([key, value]) => walk(key, value, []));
  }

  return entries;
};

const entryId = ({ key, conditions }) => [key, ...conditions].join(' > ');

const listFiles = (dir) =>
  fs.existsSync(dir)
    ? fs
        .readdirSync(dir, { recursive: true, withFileTypes: true })
        .filter((dirent) => dirent.isFile())
        .map((dirent) => path.join(dirent.parentPath, dirent.name))
    : [];

/** Files of the package matching an exports target, `*` matching any path. */
const matchTarget = (packageDir, target) => {
  if (!target.includes('*')) {
    const file = path.resolve(packageDir, target);
    return fs.existsSync(file) ? [file] : [];
  }

  const [prefix, suffix] = target.split('*');
  const base = path.resolve(packageDir, prefix);
  const dir = prefix.endsWith('/') ? base : path.dirname(base);
  const absPrefix = prefix.endsWith('/') ? base + path.sep : base;

  return listFiles(dir).filter(
    (file) =>
      file.startsWith(absPrefix) &&
      file.endsWith(suffix) &&
      file.length > absPrefix.length + suffix.length,
  );
};

/** The part of `file` that `*` stands for in `target`. */
const wildcardValue = (packageDir, target, file) => {
  const [prefix, suffix] = target.split('*');
  const rel = path.relative(packageDir, file).split(path.sep).join('/');
  const relPrefix = prefix.replace(/^\.\//, '');
  return rel.slice(relPrefix.length, rel.length - suffix.length);
};

const toPackagePath = (packageDir, file) =>
  `./${path.relative(packageDir, file).split(path.sep).join('/')}`;

/**
 * Resolve specifiers of the package the way its users do: from a project that
 * has it in `node_modules`, with Node's own `require` and `import` resolvers.
 */
const createResolver = async (packageName, packageDir) => {
  const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'package-contract-'));
  const linkPath = path.join(projectDir, 'node_modules', packageName);
  fs.mkdirSync(path.dirname(linkPath), { recursive: true });
  fs.symlinkSync(packageDir, linkPath, 'dir');

  const resolverFile = path.join(projectDir, 'resolve.mjs');
  fs.writeFileSync(resolverFile, 'export default (specifier) => import.meta.resolve(specifier);\n');
  const { default: importResolve } = await import(pathToFileURL(resolverFile).href);
  const require = createRequire(path.join(projectDir, 'index.js'));
  const realDir = fs.realpathSync(packageDir);

  return {
    require: (specifier) => toPackagePath(realDir, require.resolve(specifier)),
    import: (specifier) => toPackagePath(realDir, fileURLToPath(importResolve(specifier))),
    cleanup: () => fs.rmSync(projectDir, { recursive: true, force: true }),
  };
};

for (const [dir, { cjsRoot, recipe }] of Object.entries(PACKAGES)) {
  const packageDir = path.resolve(HOME_DIR, 'packages', dir);
  const pkg = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json'), 'utf-8'));

  test(pkg.name, async (t) => {
    assert.ok(
      fs.existsSync(path.join(packageDir, 'dist')),
      `${pkg.name} is not built; run the package build first`,
    );

    const entries = pkg.exports ? flattenExports(pkg.exports) : [];
    const resolver = await createResolver(pkg.name, packageDir);
    t.after(resolver.cleanup);

    const contract = {
      ...Object.fromEntries(TOP_LEVEL_FIELDS.filter((f) => pkg[f]).map((f) => [f, pkg[f]])),
      ...(pkg.exports ? { exports: pkg.exports } : {}),
      resolved: {},
    };

    const descriptorFile = path.join(packageDir, 'package.recipe.mjs');
    await t.test('has a package descriptor exactly when it is built by a recipe', () => {
      assert.equal(fs.existsSync(descriptorFile), Boolean(recipe));
    });

    if (recipe) {
      await t.test('exports map is the one its package recipe expects', async () => {
        const { default: descriptor } = await import(pathToFileURL(descriptorFile).href);
        // compared as JSON: the order of conditions matters to Node
        assert.equal(
          JSON.stringify(pkg.exports, null, 2),
          JSON.stringify(recipe.expectedExports(descriptor), null, 2),
        );
      });
    }

    await t.test('every file it points to exists', () => {
      for (const field of TOP_LEVEL_FIELDS.filter((f) => pkg[f])) {
        assert.ok(fs.existsSync(path.resolve(packageDir, pkg[field])), `${field}: ${pkg[field]}`);
      }
      for (const entry of entries) {
        assert.ok(
          matchTarget(packageDir, entry.target).length > 0,
          `${entryId(entry)}: nothing matches ${entry.target}`,
        );
      }
    });

    await t.test('Node resolves the root and every subpath', () => {
      contract.resolved['.'] = {
        require: resolver.require(pkg.name),
        import: resolver.import(pkg.name),
      };
      if (cjsRoot) {
        assert.match(
          contract.resolved['.'].require,
          /\.cjs$/,
          `require('${pkg.name}') must resolve to the CommonJS bundle`,
        );
      }

      const subpaths = [...new Set(entries.map(({ key }) => key))].filter((key) => key !== '.');
      for (const key of subpaths) {
        let subpath = key;
        if (key.includes('*')) {
          // a real file behind the pattern, found through its default target
          const { target } = entries.filter((entry) => entry.key === key).at(-1);
          const [file] = matchTarget(packageDir, target);
          subpath = key.replace('*', wildcardValue(packageDir, target, file));
        }

        const specifier = `${pkg.name}${subpath.slice(1)}`;
        for (const mode of ['require', 'import']) {
          // a subpath may be ESM only, but whatever Node picks must exist
          let resolved;
          try {
            resolved = resolver[mode](specifier);
          } catch (error) {
            if (error.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED' && mode === 'require') {
              continue;
            }
            throw error;
          }
          assert.ok(fs.existsSync(path.resolve(packageDir, resolved)), `${mode} ${specifier}`);
        }
      }
    });

    await t.test('contract only grows', () => {
      const previous = snapshot[pkg.name];
      const broken = [];
      const added = [];

      if (!previous) {
        added.push('the whole package');
      } else {
        for (const field of TOP_LEVEL_FIELDS) {
          if (previous[field] && previous[field] !== pkg[field]) {
            broken.push(`${field}: ${previous[field]} → ${pkg[field] ?? '(removed)'}`);
          } else if (!previous[field] && pkg[field]) {
            added.push(`${field}: ${pkg[field]}`);
          }
        }

        const before = previous.exports ? flattenExports(previous.exports) : [];
        const now = new Map(entries.map((entry, index) => [entryId(entry), { ...entry, index }]));
        // Node tries the conditions of a key in order, so their order is part
        // of the contract (e.g. `node` before `import` keeps Node on CommonJS)
        const lastIndex = new Map();
        for (const entry of before) {
          const current = now.get(entryId(entry));
          if (!current) {
            broken.push(`exports ${entryId(entry)}: removed`);
          } else if (current.target !== entry.target) {
            broken.push(`exports ${entryId(entry)}: ${entry.target} → ${current.target}`);
          } else if (current.index < (lastIndex.get(entry.key) ?? -1)) {
            broken.push(`exports ${entryId(entry)}: moved before a condition it followed`);
          }
          if (current) {
            lastIndex.set(entry.key, Math.max(lastIndex.get(entry.key) ?? -1, current.index));
          }
        }
        const beforeIds = new Set(before.map(entryId));
        for (const entry of entries) {
          if (!beforeIds.has(entryId(entry))) {
            added.push(`exports ${entryId(entry)}: ${entry.target}`);
          }
        }

        for (const [mode, file] of Object.entries(previous.resolved?.['.'] ?? {})) {
          if (contract.resolved['.']?.[mode] !== file) {
            broken.push(
              `${mode}('${pkg.name}'): ${file} → ${contract.resolved['.']?.[mode] ?? '(fails)'}`,
            );
          }
        }
      }

      assert.deepEqual(broken, [], `${pkg.name} broke its package contract`);

      if (UPDATE) {
        recorded[pkg.name] = contract;
      } else {
        recorded[pkg.name] = previous;
        assert.deepEqual(
          added,
          [],
          `${pkg.name} has entry points not recorded in the contract snapshot; run with UPDATE_CONTRACT=1`,
        );
      }
    });
  });
}

after(() => {
  if (UPDATE) {
    const sorted = Object.fromEntries(
      Object.entries({ ...snapshot, ...recorded }).sort(([a], [b]) => a.localeCompare(b)),
    );
    fs.writeFileSync(SNAPSHOT_FILE, `${JSON.stringify(sorted, null, 2)}\n`);
  }
});
