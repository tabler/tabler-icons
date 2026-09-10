# Tabler Icons Webfont

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-webfont.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  Icon font with CSS and SCSS files for all <!--icons-count-->6184<!--/icons-count--> Tabler Icons.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons-webfont"><img src="https://img.shields.io/npm/v/@tabler/icons-webfont" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons-webfont.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons-webfont
```

```sh
yarn add @tabler/icons-webfont
```

```sh
pnpm add @tabler/icons-webfont
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

Include one of the stylesheets from the `dist` directory:

| Stylesheet | Icons | Stroke width |
| --- | --- | --- |
| `tabler-icons.css` | Outline | 2 |
| `tabler-icons-300.css` | Outline | 1.5 |
| `tabler-icons-200.css` | Outline | 1 |
| `tabler-icons-filled.css` | Filled | – |

Minified variants with the `.min.css` suffix and SCSS sources are included as well. Font files are located in `dist/fonts`.

```html
<link rel="stylesheet" href="path/to/tabler-icons.min.css">
```

### HTML

Use an icon with the `ti` base class and the `ti-{name}` modifier:

```html
<i class="ti ti-brand-tabler"></i>
```

### CSS

Use the icon's unicode value, listed in `icons.json` of the `@tabler/icons` package:

```css
content: '\ec8f';
```

### SCSS

Import the SCSS source and use the generated variable:

```scss
content: $ti-icon-brand-tabler;
```

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">
```

Replace `latest` with a specific version number to pin a release.

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons-webfont/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
