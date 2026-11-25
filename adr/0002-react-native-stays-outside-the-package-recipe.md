# React Native stays outside the package recipe

`@tabler/icons-react-native` is not built by the package recipe (`.build/package-recipe.mjs`). It shares only the generic pieces: `buildJsIcons`, `getRollupConfig` and the `subpathsDts` plugin in `.build/rollup-plugins.mjs`. Its published shape differs from the recipe packages in almost every part the recipe owns:

- a CommonJS build per module instead of one bundle;
- a `.d.ts` per icon, copied as `.d.cts`, instead of one shared `icon.d.mts`;
- `require`/`import` condition pairs and a `./*` subpath instead of `./icons/*`;
- no `dynamic-imports` entry.

That shape is part of its package contract (see 0001), so it cannot be changed outside a major release. A React Native variant of the recipe would add a branch, used by this one package, to each recipe function: the complexity would move into the recipe rather than disappear, and the recipe's interface would get wider for the other packages. Revisit this if a major release aligns the React Native contract with the other framework packages.
