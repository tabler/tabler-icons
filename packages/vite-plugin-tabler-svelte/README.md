# Tabler Svelte imports for Vite

An opt-in Vite plugin that turns existing icon-only named imports from
`@tabler/icons-svelte` and `@tabler/icons-svelte-runes` into static per-icon imports.
It avoids traversing the package barrel in development, SSR and production builds.
No runtime loader or network icon requests are introduced.

```sh
pnpm add -D @tabler/vite-plugin-svelte
```

Place the plugin **before** the Svelte or SvelteKit plugin:

```js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tablerSvelte from '@tabler/vite-plugin-svelte';

export default defineConfig({
  plugins: [tablerSvelte(), svelte()],
});
```

For SvelteKit, use `plugins: [tablerSvelte(), sveltekit()]` with `sveltekit` imported
from `@sveltejs/kit/vite`. Use a Svelte/SvelteKit plugin version compatible with your
Vite version. This plugin supports Vite 5.4, 6, 7 and 8 and the Svelte 4/5
preprocessor API.

For example:

```js
import { IconHeart as Heart, Icon123 } from '@tabler/icons-svelte';
```

becomes:

```js
import Heart from '@tabler/icons-svelte/icons/heart';
import Icon123 from '@tabler/icons-svelte/icons/number-123';
```

Canonical names and aliases are read from the **installed package's** index and
alias exports, rather than guessed from PascalCase. A rewrite is made only when
every imported value has a known, resolvable per-icon export. Use a Tabler version
with the published `dist/icons/index.js`, `dist/aliases.js` and `/icons/*` exports
(including current 3.50.0). Unfamiliar layouts retain their original imports.

## Supported source and unchanged forms

The plugin rewrites instance and module scripts in `.svelte` files, including
TypeScript, and ordinary JS/TS/JSX/TSX modules. It returns source maps. It does not
edit your source files. Each declaration is handled independently.

These forms remain unchanged:

- Namespace, default, side-effect, type-only, dynamic and CommonJS imports.
- Re-exports and imports from `/icons`, direct subpaths or other packages.
- Declarations mixing icons with utilities, namespaces, types or unknown names.
- Imports with attributes, non-identifier imported names, unsupported script
  languages, virtual modules, query-suffixed resources and files in `node_modules`.

For example, `import { IconHeart, icons } from '@tabler/icons-svelte'` is retained
as a whole. Split the icon into its own declaration to opt it into rewriting.
An unchanged runtime barrel import can still incur the full library cost.

## Dependency scanning

A Vite `transform` hook alone is too late for dependency scanning: the scanner
can read the original import first. The plugin therefore adds both Tabler
packages to `optimizeDeps.exclude`, which also excludes their subpaths. Other
dependencies retain their configured optimization. This uses the same exclusion
contract with Vite 5–7's esbuild optimizer and Vite 8's Rolldown optimizer.

Do not explicitly put these packages or their subpaths in `optimizeDeps.include`;
the plugin reports that conflict rather than silently allowing a barrel
prebundle. Existing namespace or utility imports still work, but are not
prebundled and are not accelerated. Libraries in `node_modules` that themselves
import Tabler barrels are outside the rewrite scope.

The plugin is optional. Existing direct imports, public components, aliases,
slots/snippets and icon types are unchanged. It does not enable Vite's separate
production-only lazy-barrel option.

## Development

From the repository root:

```sh
pnpm --filter @tabler/vite-plugin-svelte test
pnpm --filter @tabler/vite-plugin-svelte typecheck
```

Tests cover conservative transformations and a Vite 5/6/7/8 matrix: raw-source
dependency scanning, development requests, build module counts, equivalent
direct-import output, SSR and DOM hydration/reactivity. Older Vite versions use
a small Svelte compiler adapter to isolate the Vite contract from framework
plugin peer ranges; Vite 8 with Svelte 5 also uses the official Svelte Vite plugin.
DOM hydration tests use jsdom, not a full SvelteKit adapter/browser test suite.
