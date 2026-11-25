# React Native has its own bundling

`@tabler/icons-react-native` is not bundled by `rollupConfig` in the package recipe (`.build/package-recipe.mjs`), which builds React, Preact, Vue and Astro. It keeps its own `rollup.config.mjs` and shares only the generic pieces: `getRollupConfig` and the `subpathsDts` plugin in `.build/rollup-plugins.mjs`. Its published shape differs from those four packages in almost every part the bundling owns:

- one CommonJS file per module instead of one bundle;
- one `.d.ts` per icon, copied as `.d.cts`, instead of one shared `icon.d.mts`;
- `require`/`import` condition pairs and a `./*` subpath instead of `./icons/*`;
- no `dynamic-imports` entry.

That shape is part of its package contract (see 0001), so it cannot change outside a major release. Making `rollupConfig` handle React Native too would put a branch, used by this one package, in every bundle it builds, and widen its interface for the other four packages. Revisit this if a major release brings the React Native contract in line with theirs.
