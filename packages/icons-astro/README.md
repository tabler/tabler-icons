# Tabler Icons for Astro

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-astro.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
Implementation of the Tabler Icons library for Astro applications.
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
yarn add @tabler/icons-astro
```

or

```
npm install @tabler/icons-astro
```

or

```
pnpm install @tabler/icons-astro
```

or just [download from Github](https://github.com/tabler/tabler-icons/releases).

## How to use

It's built with ESmodules so it's completely tree-shakable. Each icon can be imported as an Astro component.

```astro
---
import { IconArrowRight } from '@tabler/icons-astro';
---

<IconArrowRight />
```

You can pass additional props to adjust the icon.

```astro
<IconArrowRight color="red" size={48} />
```

Any valid SVG attribute is forwarded to the rendered `<svg>` element.

### Props

| name          | type     | default      |
| ------------- | -------- | ------------ |
| `size`        | _Number_ | 24           |
| `color`       | _String_ | currentColor |
| `stroke`      | _Number_ | 2            |

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/tabler/tabler-icons/blob/main/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/tabler/tabler-icons/blob/main/packages/icons-astro/README.md)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>
