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
  <a href="https://www.npmjs.com/package/@tabler/icons"><img src="https://img.shields.io/npm/dm/@tabler/icons" alt="Monthly downloads"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://raw.githubusercontent.com/tabler/sponsors/main/sponsors.svg" alt="Tabler sponsors">
</a>

## Preview

### Outline version (<!--icons-count-outline-->5130<!--/icons-count-outline--> icons)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/preview/icons-outline-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/preview/icons-outline.png">
    <img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/preview/icons-outline.png" alt="Tabler Icons outline preview" width="838">
  </picture>
</p>

### Filled version (<!--icons-count-filled-->1054<!--/icons-count-filled--> icons)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/preview/icons-filled-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/preview/icons-filled.png">
    <img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/preview/icons-filled.png" alt="Tabler Icons filled preview" width="838">
  </picture>
</p>

## Packages

Tabler Icons is distributed as a set of official packages, one for each format and framework. All packages are published to npm from this repository and share the same version number. The full documentation is available at [tabler.io/docs/icons](https://tabler.io/docs/icons).

| Package | Description | Documentation |
| --- | --- | --- |
| [`@tabler/icons`](https://www.npmjs.com/package/@tabler/icons) | Raw SVG files (outline and filled) with icon metadata | [SVG](https://github.com/tabler/tabler-icons/tree/main/packages/icons) |
| [`@tabler/icons-sprite`](https://www.npmjs.com/package/@tabler/icons-sprite) | SVG sprite with all icons | [Sprite](https://github.com/tabler/tabler-icons/tree/main/packages/icons-sprite) |
| [`@tabler/icons-webfont`](https://www.npmjs.com/package/@tabler/icons-webfont) | Icon font with CSS and SCSS files | [Webfont](https://github.com/tabler/tabler-icons/tree/main/packages/icons-webfont) |
| [`@tabler/icons-react`](https://www.npmjs.com/package/@tabler/icons-react) | React components | [React](https://github.com/tabler/tabler-icons/tree/main/packages/icons-react) |
| [`@tabler/icons-react-native`](https://www.npmjs.com/package/@tabler/icons-react-native) | React Native components | [React Native](https://github.com/tabler/tabler-icons/tree/main/packages/icons-react-native) |
| [`@tabler/icons-preact`](https://www.npmjs.com/package/@tabler/icons-preact) | Preact components | [Preact](https://github.com/tabler/tabler-icons/tree/main/packages/icons-preact) |
| [`@tabler/icons-vue`](https://www.npmjs.com/package/@tabler/icons-vue) | Vue 3 components | [Vue](https://github.com/tabler/tabler-icons/tree/main/packages/icons-vue) |
| [`@tabler/icons-svelte`](https://www.npmjs.com/package/@tabler/icons-svelte) | Svelte 4 components | [Svelte](https://github.com/tabler/tabler-icons/tree/main/packages/icons-svelte) |
| [`@tabler/icons-svelte-runes`](https://www.npmjs.com/package/@tabler/icons-svelte-runes) | Svelte 5 components (runes) | [Svelte 5](https://github.com/tabler/tabler-icons/tree/main/packages/icons-svelte-runes) |
| [`@tabler/icons-solidjs`](https://www.npmjs.com/package/@tabler/icons-solidjs) | SolidJS components | [SolidJS](https://github.com/tabler/tabler-icons/tree/main/packages/icons-solidjs) |
| [`@tabler/icons-astro`](https://www.npmjs.com/package/@tabler/icons-astro) | Astro components | [Astro](https://github.com/tabler/tabler-icons/tree/main/packages/icons-astro) |
| [`@tabler/icons-angular`](https://www.npmjs.com/package/@tabler/icons-angular) | Angular component and icon providers | [Angular](https://github.com/tabler/tabler-icons/tree/main/packages/icons-angular) |
| [`@tabler/icons-png`](https://www.npmjs.com/package/@tabler/icons-png) | PNG files | [PNG](https://github.com/tabler/tabler-icons/tree/main/packages/icons-png) |
| [`@tabler/icons-pdf`](https://www.npmjs.com/package/@tabler/icons-pdf) | PDF files | [PDF](https://github.com/tabler/tabler-icons/tree/main/packages/icons-pdf) |
| [`@tabler/icons-eps`](https://www.npmjs.com/package/@tabler/icons-eps) | EPS files | [EPS](https://github.com/tabler/tabler-icons/tree/main/packages/icons-eps) |

## Installation

Install the SVG package with your package manager of choice:

```sh
npm install @tabler/icons
```

```sh
yarn add @tabler/icons
```

```sh
pnpm add @tabler/icons
```

Replace `@tabler/icons` with any package from the table above to install a framework-specific version.

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

### SVG

All icons are plain SVG files, so you can use them as an `<img>` source, as a CSS `background-image`, or inline in your HTML.

#### HTML image

When you load an icon as an image, you can control its size with CSS.

```html
<img src="path/to/icon.svg" alt="icon title" />
```

#### Inline SVG

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

### SVG sprite

Install [`@tabler/icons-sprite`](https://www.npmjs.com/package/@tabler/icons-sprite) and reference an icon by its name prefixed with `tabler-`. Replace `activity` in the example below with any valid icon name.

```html
<svg width="24" height="24">
  <use xlink:href="path/to/tabler-sprite.svg#tabler-activity" />
</svg>
```

The package also ships `tabler-sprite-filled.svg` for filled icons and `tabler-sprite-nostroke.svg` for outline icons without a fixed stroke width.

### Webfont

Install [`@tabler/icons-webfont`](https://www.npmjs.com/package/@tabler/icons-webfont) and include one of the stylesheets from the `dist` directory.

| Stylesheet | Icons | Stroke width |
| --- | --- | --- |
| `tabler-icons.css` | Outline | 2 |
| `tabler-icons-300.css` | Outline | 1.5 |
| `tabler-icons-200.css` | Outline | 1 |
| `tabler-icons-filled.css` | Filled | – |

Minified variants with the `.min.css` suffix and SCSS sources are included as well.

```html
<link rel="stylesheet" href="path/to/tabler-icons.min.css">
```

Use an icon with the `ti` base class and the `ti-{name}` modifier:

```html
<i class="ti ti-brand-tabler"></i>
```

In CSS, use the icon's unicode value. In SCSS, use the generated variable:

```css
content: '\ec8f';
```

```scss
content: $ti-icon-brand-tabler;
```

### React

Components are available through the [`@tabler/icons-react`](https://www.npmjs.com/package/@tabler/icons-react) package. The package is built with ES modules, so unused icons are tree-shaken from your bundle.

```jsx
import { IconAward } from '@tabler/icons-react';

const MyComponent = () => {
  return (
    <IconAward
      size={36} // sets `width` and `height`
      color="red" // sets `stroke` color
      stroke={3} // sets `stroke-width`
      strokeLinejoin="miter" // any other SVG attribute is passed through
    />
  );
};
```

`@tabler/icons-react` ships its own TypeScript declarations.

The same API is available for [Preact](https://www.npmjs.com/package/@tabler/icons-preact), [SolidJS](https://www.npmjs.com/package/@tabler/icons-solidjs), and [React Native](https://www.npmjs.com/package/@tabler/icons-react-native):

```jsx
import { IconArrowDown } from '@tabler/icons-preact';
import { IconArrowRight } from '@tabler/icons-solidjs';
import { IconArrowLeft } from '@tabler/icons-react-native';
```

### Vue

Components are available through the [`@tabler/icons-vue`](https://www.npmjs.com/package/@tabler/icons-vue) package.

```vue
<script setup>
import { IconHome } from '@tabler/icons-vue';
</script>

<template>
  <!-- basic usage -->
  <IconHome />

  <!-- set `stroke` color -->
  <IconHome color="red" />

  <!-- set `width` and `height` -->
  <IconHome size="36" />

  <!-- set `stroke-width` -->
  <IconHome stroke-width="1.5" />
</template>
```

With the Options API, register the icon in `components`:

```vue
<script>
import { IconHome } from '@tabler/icons-vue';

export default {
  components: { IconHome },
};
</script>
```

### Svelte

For Svelte 4 and earlier, use [`@tabler/icons-svelte`](https://www.npmjs.com/package/@tabler/icons-svelte):

```svelte
<script lang="ts">
  import { IconHeart } from '@tabler/icons-svelte';
</script>

<IconHeart size={48} stroke={1} />
<IconHeart color="crimson" class="p-1" size={96} stroke={2} />
```

For Svelte 5, use [`@tabler/icons-svelte-runes`](https://www.npmjs.com/package/@tabler/icons-svelte-runes), which is built with runes:

```svelte
<script lang="ts">
  import { IconHeart } from '@tabler/icons-svelte-runes';
</script>

<IconHeart size={48} stroke={1} />
<IconHeart color="crimson" class="p-1" size={96} stroke={2} />
```

### Astro

Components are available through the [`@tabler/icons-astro`](https://www.npmjs.com/package/@tabler/icons-astro) package.

```astro
---
import { IconArrowRight } from '@tabler/icons-astro';
---

<IconArrowRight color="red" size={48} />
```

### Angular

The official [`@tabler/icons-angular`](https://www.npmjs.com/package/@tabler/icons-angular) package provides a standalone `TablerIconComponent`. Register the icons you need with `provideTablerIcons()`:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideTablerIcons, IconBrandAngular, IconHome } from '@tabler/icons-angular';

bootstrapApplication(AppComponent, {
  providers: [provideTablerIcons({ IconBrandAngular, IconHome })],
});
```

Import `TablerIconComponent` in any component that renders icons, then reference icons by name in templates:

```html
<tabler-icon icon="brand-angular" />
<tabler-icon icon="home" [size]="48" color="blue" [stroke]="1.75" />
```

See the [package documentation](https://github.com/tabler/tabler-icons/tree/main/packages/icons-angular) for `NgModule` usage and global configuration.

## CDN

All published packages are available from [jsDelivr](https://www.jsdelivr.com/package/npm/@tabler/icons). Replace `latest` with a specific version number (for example `3.46.0`) to pin a release.

### SVG

```html
<img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/outline/home.svg" alt="Home" />
<img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/filled/home.svg" alt="Home" />
```

### SVG sprite

```html
<svg width="24" height="24">
  <use xlink:href="https://cdn.jsdelivr.net/npm/@tabler/icons-sprite@latest/dist/tabler-sprite.svg#tabler-activity" />
</svg>
```

### Webfont

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">
```

## Stroke width

All outline icons are designed with a 2px stroke, but every path is drawn so that it also renders well at other stroke widths. Change the `stroke-width` value to get lighter or bolder variants that match your design.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/icons-stroke-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/icons-stroke.png">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/icons-stroke.png" alt="Tabler Icons at different stroke widths" width="838">
</picture>

## Community packages

The following packages are maintained by the community and are not part of this repository:

- [`angular-tabler-icons`](https://github.com/pierreavn/angular-tabler-icons) provides an alternative Angular integration.
- [`compose-icons`](https://github.com/DevSrSouza/compose-icons) brings Tabler Icons to Jetpack Compose for Android and Desktop. See its [documentation](https://github.com/DevSrSouza/compose-icons/blob/master/tabler-icons/DOCUMENTATION.md).

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Every release is listed in the [changelog](https://tabler.io/icons/changelog).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
