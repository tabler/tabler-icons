# React Native keeps its own package layout

`@tabler/icons-react-native` is built by the package recipe (`.build/package-recipe.mjs`) like the other framework packages, but in a package layout of its own (`react-native`), not the `default` layout of React, Preact, Vue and Astro. `rollupConfig` therefore has two bundlings, one per layout it bundles. Its published shape differs from those four packages in almost every part the bundling owns:

- one CommonJS file per module instead of one bundle;
- one `.d.ts` per icon, copied as `.d.cts`, instead of one shared `icon.d.mts`;
- `require`/`import` condition pairs and a `./*` subpath instead of `./icons/*`;
- no `dynamic-imports` entry.

That shape is part of its package contract (see 0001), so it cannot change outside a major release. We chose a second bundling in the recipe over keeping React Native's `rollup.config.mjs` separate, so that every package bundled with rollup is configured the same way (`rollupConfig(descriptor)`) and the bundling of both layouts lives in one module. We chose it over options in the `default` bundling, which would put a branch used by one package into every bundle the other four build. Revisit this if a major release brings the React Native contract in line with the `default` layout: the `react-native` layout and its bundling can then be removed.
