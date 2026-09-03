# Tabler Icons for Astro

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-astro.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  Implementation of the Tabler Icons library for Astro applications.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons-astro"><img src="https://img.shields.io/npm/v/@tabler/icons-astro" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons-astro.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons-astro
```

```sh
yarn add @tabler/icons-astro
```

```sh
pnpm add @tabler/icons-astro
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

The package is built with ES modules, so unused icons are tree-shaken from your bundle. Each icon is exported as an Astro component.

```astro
---
import { IconArrowRight } from '@tabler/icons-astro';
---

<IconArrowRight />
```

Pass props to adjust the icon:

```astro
<IconArrowRight color="red" size={48} stroke={1.5} />
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | _number | string_ | 24 | Width and height of the icon |
| `color` | _string_ | currentColor | Stroke color for outline icons, fill color for filled icons |
| `stroke` | _number | string_ | 2 | Stroke width, outline icons only. `strokeWidth` is accepted as an alias |
| `title` | _string_ | – | Adds a `<title>` element for accessibility |
| `class` | _string_ | – | Extra classes added to `tabler-icon tabler-icon-{{name}}` |

Any other attribute is forwarded to the rendered `<svg>` element. The package ships with TypeScript declarations.

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons-astro/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
