# Tabler Icons

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-core.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  A set of <!--icons-count-->6184<!--/icons-count--> free, MIT-licensed, high-quality SVG icons for your web projects. Each icon is designed on a 24x24 grid with a 2px stroke.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons"><img src="https://img.shields.io/npm/v/@tabler/icons" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons
```

```sh
yarn add @tabler/icons
```

```sh
pnpm add @tabler/icons
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

All icons are plain SVG files, so you can use them as an `<img>` source, as a CSS `background-image`, or inline in your HTML.

### HTML image

When you load an icon as an image, you can control its size with CSS.

```html
<img src="path/to/icon.svg" alt="icon title" />
```

### Inline SVG

Paste the content of the icon file directly into your HTML to render it inline.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icons-tabler-outline icon-tabler-activity"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12h4l3 8l4 -16l3 8h4" />
</svg>
```

Inline icons inherit `currentColor`, so you can change their size, color, and `stroke-width` with CSS.

```css
.icon-tabler {
  color: red;
  width: 32px;
  height: 32px;
  stroke-width: 1.5;
}
```

## Package contents

| Path | Description |
| --- | --- |
| `icons/outline/*.svg` | Outline icons |
| `icons/filled/*.svg` | Filled icons |
| `icons.json` | Metadata for every icon: name, category, tags, version and unicode code point |
| `categories/outline/<category>/*.svg` | Outline icons grouped by category |
| `tabler-nodes-outline.json`, `tabler-nodes-filled.json` | Icon paths as `[tag, attributes]` tuples, used to build the framework packages |

## CDN

All files are available from [jsDelivr](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/). Replace `latest` with a specific version number to pin a release.

```html
<img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/outline/home.svg" alt="Home" />
<img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/filled/home.svg" alt="Home" />
```

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
