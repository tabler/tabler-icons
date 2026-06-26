# Tabler Icons for React

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-react.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
Implementation of the Tabler Icons library for React applications.
<p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/tabler/tabler-icons/releases"><img src="https://img.shields.io/npm/v/@tabler/icons" alt="Latest Release"></a>
    <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support my project and help me grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or just [donate on PayPal](https://paypal.me/codecalm) :)**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```
yarn add @tabler/icons-react
```

or

```
npm install @tabler/icons-react
```

or

```
pnpm install @tabler/icons-react
```

or just [download from Github](https://github.com/tabler/tabler-icons/releases).

## How to use

Each icon is its own module, so unused icons are dropped from your bundle.

### Named import (recommended for app code)

```js
import { IconArrowLeft } from '@tabler/icons-react';

const App = () => <IconArrowLeft color="red" size={48} />;
```

This tree-shakes reliably in modern bundlers (Vite/Rollup, esbuild, webpack 5
production builds). See [Guaranteed tree-shaking](#guaranteed-tree-shaking) below
if you target older toolchains.

### Deep import (guaranteed one-icon load, every bundler)

Import an icon directly by its component name to load exactly one icon — no
barrel, no bundler analysis required:

```js
import IconArrowLeft from '@tabler/icons-react/IconArrowLeft';
```

Outline icons (`IconArrowLeft`), filled variants (`IconArrowLeftFilled`), and
legacy aliases are all available as deep imports (default export).

### Dynamic import

Lazy-load an icon at runtime. The simplest form is a native deep dynamic import:

```js
const { default: IconArrowLeft } = await import('@tabler/icons-react/IconArrowLeft');
```

If you have a kebab-case icon name (e.g. from a CMS or config), use the loader
map, which is keyed by icon name (`arrow-left`, `arrow-left-filled`, …):

```js
import dynamicIconImports from '@tabler/icons-react/dynamic';

const { default: IconHome } = await dynamicIconImports['home']();
```

### Icon list

The array of all icon names is available at a dedicated subpath:

```js
import iconsList from '@tabler/icons-react/icons-list';
```

### Props

| name     | type     | default      |
| -------- | -------- | ------------ |
| `size`   | _Number_ | 24           |
| `color`  | _String_ | currentColor |
| `stroke` | _Number_ | 2            |

## Guaranteed tree-shaking

Named imports from the package root tree-shake correctly in modern bundlers. For
a *guaranteed* minimal bundle in every setup, prefer **deep imports**, or let your
bundler rewrite named imports into deep ones automatically.

**Next.js** — add the package to `optimizePackageImports`:

```js
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ['@tabler/icons-react'],
  },
};
```

> **Note:** the `icons` and `iconsList` namespace re-exports were removed from the
> package root (they defeated tree-shaking). The icon-name list now lives at
> `@tabler/icons-react/icons-list`.

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/tabler/tabler-icons/blob/main/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/tabler/tabler-icons/blob/main/packages/icons-react/README.md)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>
