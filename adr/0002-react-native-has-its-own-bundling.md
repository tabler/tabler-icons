# React Native has its own bundling

`@tabler/icons-react-native` has a package descriptor and its own package layout in the package recipe (`.build/package-recipe.mjs`). The recipe generates its sources and asserts its `exports` map, like every other framework package. Its bundling, however, stays in its own `rollup.config.mjs` and is not shared with the default layout's `rollupConfig`. Only the generic pieces are shared: `getRollupConfig` and the `subpathsDts` plugin in `.build/rollup-plugins.mjs`. Its published shape differs from the default layout in almost every part the bundling owns:

- one CommonJS file per module instead of one bundle;
- one `.d.ts` per icon, copied as `.d.cts`, instead of one shared `icon.d.mts`;
- `require`/`import` condition pairs and a `./*` subpath instead of `./icons/*`;
- no `dynamic-imports` entry.

That shape is part of its package contract (see 0001), so it cannot change outside a major release. Making `rollupConfig` handle React Native too would put a branch, used by this one package, in every bundle it builds, and widen its interface for the four packages of the default layout. Revisit this if a major release brings the React Native contract in line with the default layout.
