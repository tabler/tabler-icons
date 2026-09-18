# Tabler Icons Sprite

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-sprite.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  SVG sprite with all <!--icons-count-->6184<!--/icons-count--> Tabler Icons, ready to use with <code>&lt;use&gt;</code>.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons-sprite"><img src="https://img.shields.io/npm/v/@tabler/icons-sprite" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons-sprite.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons-sprite
```

```sh
yarn add @tabler/icons-sprite
```

```sh
pnpm add @tabler/icons-sprite
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

Reference an icon from the sprite by its name prefixed with `tabler-`. Replace `activity` in the example below with any valid icon name.

```html
<svg width="24" height="24">
  <use xlink:href="path/to/tabler-sprite.svg#tabler-activity" />
</svg>
```

The package ships three sprites in the `dist` directory:

| File | Description |
| --- | --- |
| `tabler-sprite.svg` | Outline icons with a fixed 2px stroke |
| `tabler-sprite-nostroke.svg` | Outline icons without a `stroke-width` attribute, so you can set the stroke width with CSS |
| `tabler-sprite-filled.svg` | Filled icons |

## CDN

```html
<svg width="24" height="24">
  <use xlink:href="https://cdn.jsdelivr.net/npm/@tabler/icons-sprite@latest/dist/tabler-sprite.svg#tabler-activity" />
</svg>
```

Replace `latest` with a specific version number to pin a release.

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons-sprite/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
