# Tabler Icons for Svelte 5

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-svelte.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  Implementation of the Tabler Icons library for Svelte 5 applications using runes.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tabler/icons-svelte-runes"><img src="https://img.shields.io/npm/v/@tabler/icons-svelte-runes" alt="Latest release"></a>
  <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons-svelte-runes.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or [donate on PayPal](https://paypal.me/codecalm).**

<a href="https://github.com/sponsors/codecalm">
  <img src="https://cdn.jsdelivr.net/gh/tabler/sponsors@latest/sponsors.svg" alt="Tabler sponsors">
</a>

## Installation

```sh
npm install @tabler/icons-svelte-runes
```

```sh
yarn add @tabler/icons-svelte-runes
```

```sh
pnpm add @tabler/icons-svelte-runes
```

You can also [download the latest release from GitHub](https://github.com/tabler/tabler-icons/releases).

## Requirements

This package is built for **Svelte 5** and uses the runes reactivity system (`$props()`, `$derived`). For Svelte 3 and 4 projects, use [`@tabler/icons-svelte`](https://www.npmjs.com/package/@tabler/icons-svelte) instead.

## Usage

The package is built with ES modules, so unused icons are tree-shaken from your bundle. Each icon is exported as a component.

```svelte
<script lang="ts">
  import { IconHeart } from '@tabler/icons-svelte-runes';
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

Any other attribute is forwarded to the rendered `<svg>` element.

## TypeScript

The package includes full TypeScript definitions. Icons are typed as Svelte 5 `Component<IconProps>`:

```ts
import type { Icon } from '@tabler/icons-svelte-runes';
import { IconHeart } from '@tabler/icons-svelte-runes';

const MyIcon: Icon = IconHeart;
```

When passing icons as props, use the `Component` type from Svelte:

```svelte
<script lang="ts">
  import type { Component } from 'svelte';

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

### Dynamic icons

```svelte
<script lang="ts">
  import { IconHeart, IconStar, IconCircle } from '@tabler/icons-svelte-runes';

  const icons = {
    heart: IconHeart,
    star: IconStar,
    circle: IconCircle,
  };

  let selected = $state('heart');
  let DynamicIcon = $derived(icons[selected]);
</script>

<DynamicIcon size={32} />

<button onclick={() => (selected = 'heart')}>Heart</button>
<button onclick={() => (selected = 'star')}>Star</button>
<button onclick={() => (selected = 'circle')}>Circle</button>
```

### Reactive size

```svelte
<script lang="ts">
  import { IconHeart } from '@tabler/icons-svelte-runes';

  let isLarge = $state(false);
  let iconSize = $derived(isLarge ? 48 : 24);
</script>

<IconHeart size={iconSize} />
<button onclick={() => (isLarge = !isLarge)}>Toggle size</button>
```

## Migrating from `@tabler/icons-svelte`

The API is identical, so only the package name changes:

```diff
- import { IconHeart } from '@tabler/icons-svelte';
+ import { IconHeart } from '@tabler/icons-svelte-runes';
```

Internally this package uses `$props()` instead of `export let` and `$derived` for computed values, which makes it a better fit for Svelte 5's fine-grained reactivity.

## Contributing

Bug reports and icon requests are welcome in the [issue tracker](https://github.com/tabler/tabler-icons/issues). Caught a mistake in this page? [Edit it on GitHub](https://github.com/tabler/tabler-icons/blob/main/packages/icons-svelte-runes/README.md).

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).
