# Tabler Icons for Svelte (Runes)

<p align="center">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-svelte.png" alt="Tabler Icons" width="838">
</p>

<p align="center">
Implementation of the Tabler Icons library for Svelte 5+ using the new runes reactivity system.
<p>

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse all icons at tabler-icons.io &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/tabler/tabler-icons/releases"><img src="https://img.shields.io/npm/v/@tabler/icons-svelte-runes" alt="Latest Release"></a>
    <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>
</p>

## Why This Package?

This package is specifically built for **Svelte 5+** using the new **runes** reactivity system (`$props()`, `$derived`, etc.).

- **For Svelte 5+ projects:** Use this package (`@tabler/icons-svelte-runes`)
- **For Svelte 3/4 projects:** Use [`@tabler/icons-svelte`](https://www.npmjs.com/package/@tabler/icons-svelte)

## Installation

```bash
pnpm add @tabler/icons-svelte-runes
```

or

```bash
npm install @tabler/icons-svelte-runes
```

or

```bash
yarn add @tabler/icons-svelte-runes
```

## Requirements

- **Svelte 5.0+** with runes enabled
- For older Svelte versions, use `@tabler/icons-svelte` instead

## Usage

It's built with ES modules so it's completely tree-shakable. Each icon can be imported as a component.

```svelte
<script lang="ts">
import { IconHeart } from '@tabler/icons-svelte-runes';
</script>

<IconHeart />
```

You can pass additional props to adjust the icon:

```svelte
<IconHeart size={48} stroke={1} color="red" />
```

### Props

| name     | type               | default      |
| -------- | ------------------ | ------------ |
| `size`   | `number \| string` | 24           |
| `color`  | `string`           | currentColor |
| `stroke` | `number \| string` | 2            |
| `class`  | `string`           | ''           |

All other HTML attributes are forwarded to the SVG element.

## TypeScript Support

The package includes full TypeScript definitions. Icons are typed as Svelte 5 `Component<IconProps>`:

```typescript
import type { Icon } from '@tabler/icons-svelte-runes';
import { IconHeart } from '@tabler/icons-svelte-runes';

// Icon is compatible with Svelte 5's Component type
const MyIcon: Icon = IconHeart;
```

### Using Icons in Props

When passing icons as props, use the `Component` type or `any` for maximum compatibility:

```svelte
<script lang="ts">
import type { Component } from 'svelte';
import { IconHeart } from '@tabler/icons-svelte-runes';

interface Props {
  icon: Component<any>;
  label: string;
}

let { icon: Icon, label }: Props = $props();
</script>

<button>
  <Icon size={20} />
  {label}
</button>
```

## Examples

### Basic Icon Usage

```svelte
<script lang="ts">
import { IconHeart, IconStar, IconHome } from '@tabler/icons-svelte-runes';
</script>

<IconHeart />
<IconStar size={32} color="gold" />
<IconHome stroke={1.5} class="my-icon" />
```

### Dynamic Icons with Runes

```svelte
<script lang="ts">
import { IconHeart, IconStar, IconCircle } from '@tabler/icons-svelte-runes';

const icons = {
  heart: IconHeart,
  star: IconStar,
  circle: IconCircle
};

let selected = $state('heart');
let DynamicIcon = $derived(icons[selected]);
</script>

<DynamicIcon size={32} />

<button onclick={() => selected = 'heart'}>Heart</button>
<button onclick={() => selected = 'star'}>Star</button>
<button onclick={() => selected = 'circle'}>Circle</button>
```

### Reactive Size with $derived

```svelte
<script lang="ts">
import { IconHeart } from '@tabler/icons-svelte-runes';

let isLarge = $state(false);
let iconSize = $derived(isLarge ? 48 : 24);
</script>

<IconHeart size={iconSize} />
<button onclick={() => isLarge = !isLarge}>Toggle Size</button>
```

## Migrating from @tabler/icons-svelte

The API is identical, just change the package name:

```diff
- import { IconHeart } from '@tabler/icons-svelte';
+ import { IconHeart } from '@tabler/icons-svelte-runes';
```

No other changes needed! Your existing props and usage remain the same.

## What's Different from @tabler/icons-svelte?

Internally, this package uses Svelte 5's new features:

- `$props()` instead of `export let`
- `$derived` for computed values
- Modern TypeScript `Component` type
- Optimized for Svelte 5's fine-grained reactivity

**Result:** Better performance and smaller bundle sizes in Svelte 5 projects!

## Sponsors

**If you want to support this project, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or just [donate on PayPal](https://paypal.me/codecalm) :)**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/tabler/tabler-icons/blob/main/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/tabler/tabler-icons/blob/main/packages/icons-svelte-runes/README.md)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>
