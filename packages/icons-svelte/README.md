# Tabler Icons for Svelte

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-svelte.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  Implementation of the Tabler Icons library for Svelte applications.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons-svelte"><img src="https://img.shields.io/npm/v/@tabler/icons-svelte" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons-svelte.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons-svelte
```

```sh
yarn add @tabler/icons-svelte
```

```sh
pnpm add @tabler/icons-svelte
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

The package is built with ES modules, so unused icons are tree-shaken from your bundle. Each icon is exported as a component.

```svelte
<script lang="ts">
  import { IconHeart } from '@tabler/icons-svelte';
</script>

<IconHeart />
```

Pass props to adjust the icon:

```svelte
<IconHeart color="red" size={48} stroke={1.5} />
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | _number | string_ | 24 | Width and height of the icon |
| `color` | _string_ | currentColor | Stroke color for outline icons, fill color for filled icons |
| `stroke` | _number | string_ | 2 | Stroke width, outline icons only |
| `class` | _string_ | – | Extra classes added to `tabler-icon tabler-icon-{{name}}` |

Any other attribute is forwarded to the rendered `<svg>` element. The package ships with TypeScript declarations.

## Importing individual icons

Importing from the package root keeps your bundle small, because unused icons are removed. The bundler still has to compile every icon component (more than 6,000) before it can drop them, though, which slows down builds. To avoid that, import each icon from its own file:

```svelte
<script lang="ts">
  import IconHeart from '@tabler/icons-svelte/icons/heart';
  import IconHeartFilled from '@tabler/icons-svelte/icons/heart-filled';
</script>

<IconHeart />
<IconHeartFilled />
```

The path is the icon name in kebab-case, as listed on [tabler.io/icons](https://tabler.io/icons); filled icons end with `-filled`. Old icon names kept for backwards compatibility (aliases) are only exported from the package root.

With Vite 8 you can keep importing from the package root and let Rolldown skip compiling unused icons with [lazy barrel optimization](https://rolldown.rs/in-depth/lazy-barrel-optimization):

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      experimental: { lazyBarrel: true },
    },
  },
});
```

## Svelte 5

This package targets Svelte 3 and 4 and also works in Svelte 5 in legacy mode. For projects using runes, install [`@tabler/icons-svelte-runes`](https://www.npmjs.com/package/@tabler/icons-svelte-runes) instead. The API is identical, only the package name changes.

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons-svelte/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
