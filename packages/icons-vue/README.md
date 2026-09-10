# Tabler Icons for Vue

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-vue.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  Implementation of the Tabler Icons library for Vue 3 applications.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons-vue"><img src="https://img.shields.io/npm/v/@tabler/icons-vue" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons-vue.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons-vue
```

```sh
yarn add @tabler/icons-vue
```

```sh
pnpm add @tabler/icons-vue
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

Every icon is a Vue component that renders an SVG element. Import only the icons you use, so the rest is tree-shaken from your bundle.

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
  <IconHome stroke="1.5" />
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

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | _number | string_ | 24 | Width and height of the icon |
| `color` | _string_ | currentColor | Stroke color for outline icons, fill color for filled icons |
| `stroke` | _number | string_ | 2 | Stroke width, outline icons only |
| `title` | _string_ | – | Adds a `<title>` element for accessibility |

Any other attribute, such as `class` or `style`, is forwarded to the rendered `<svg>` element. The package ships with TypeScript declarations.

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons-vue/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
