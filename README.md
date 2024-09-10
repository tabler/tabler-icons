# Tabler Icons

<p align="center">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-core.png" alt="Tabler Icons" width="838">
</p>

<p align="center">
    A set of <!--icons-count-->5610<!--/icons-count--> free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.
<p>

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse at tabler-icons.io &rarr;</strong></a>
</p>


## Sponsors

**If you want to support my project and help me grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or just [donate on PayPal](https://paypal.me/codecalm) :)**

<a href="https://github.com/sponsors/codecalm">
  <img src='https://raw.githubusercontent.com/tabler/static/main/sponsors.png'>
</a>

## Preview

### Outline version (<!--icons-count-outline-->4850<!--/icons-count-outline--> icons)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/preview/icons-outline-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/preview/icons-outline.png">
    <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/preview/icons-outline.png" alt="Tabler Icons preview" width="838">
  </picture>
</p>

### Filled version (<!--icons-count-filled-->760<!--/icons-count-filled--> icons)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/preview/icons-filled-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/preview/icons-filled.png">
    <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/preview/icons-filled.png" alt="Tabler Icons preview" width="838">
  </picture>
</p>


## Installation

```
npm install @tabler/icons --save
```

or just [download from GitHub](https://github.com/tabler/tabler-icons/releases).

## Usage

All icons are built with SVG, so you can place them as `<img>`, `background-image` and inline in HTML code.

### HTML image

If you load an icon as an image, you can modify its size using CSS.

```html
<img src="path/to/icon.svg" alt="icon title" />
```

### Inline HTML

You can paste the content of the icon file into your HTML code to display it on the page.

```html
<a href="">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-disabled"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="1.25"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ...
  </svg>
  Click me
</a>
```

Thanks to that, you can change the size, color and the `stroke-width` of the icons with CSS code.

```css
.icon-tabler {
  color: red;
  width: 32px;
  height: 32px;
  stroke-width: 1.25;
}
```

### SVG sprite

Add an icon to be displayed on your page with the following markup (`activity` in the above example can be replaced with any valid icon name):

```html
<svg width="24" height="24">
  <use xlink:href="path/to/tabler-sprite.svg#tabler-activity" />
</svg>
```

### React

React components available through [`@tabler/icons-react`](https://www.npmjs.com/package/@tabler/icons-react) package.

```jsx
import { IconAward } from '@tabler/icons-react';

const MyComponent = () => {
  return <IconAward
    size={36} // set custom `width` and `height`
    color="red" // set `stroke` color
    stroke={3}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />
}
```

`@tabler/icons-react` exports its own type declarations for usage with React and Typescript.

For more details, see the [documentation](https://github.com/tabler/tabler-icons/tree/master/packages/icons-react).

### Vue

Vue components available through [`@tabler/icons-vue`](https://www.npmjs.com/package/@tabler/icons-vue) package.

```vue
<template>
  <!-- basic usage -->
  <IconHome />

  <!-- set `stroke` color -->
  <IconHome color="red"/>
  <IconHome stroke="red"/>

  <!-- set custom `width` and `height` -->
  <IconHome size="36"/>

  <!-- set `stroke-width` -->
  <IconHome strokeWidth="2"/>
  <IconHome stroke-width="2"/>
</template>

<script>
// Returns Vue component
import { IconHome } from '@tabler/icons-vue';

export default {
  components: { IconHome }
};
</script>
```

or with `<script setup>`

```vue
<script setup>
// Import Vue component
import { IconHome } from '@tabler/icons-vue';
</script>

<template>
  <IconHome color="red" size="36" strokeWidth="2"/>
</template>
```

For more details, see the [documentation](https://github.com/tabler/tabler-icons/tree/master/packages/icons-vue).


### Angular

Angular components available through [`angular-tabler-icons`](https://www.npmjs.com/package/angular-tabler-icons) package.
Install the package, then create icons module:

```ts
import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
```

After importing the _IconsModule_ in your feature or shared module, use the icons as follows:

```html
<i-tabler name="camera"></i-tabler>
<i-tabler name="heart" style="color: red;"></i-tabler>
<i-tabler name="brand-github" class="someclass"></i-tabler>
```

`angular-tabler-icons` exports its own type declarations for usage with Typescript.

For more usage documentation refer to [the official documentation](https://github.com/pierreavn/angular-tabler-icons).

### Svelte

Svelte components available through [`@tabler/icons-svelte`](https://github.com/tabler/tabler-icons/tree/master/packages/icons-svelte) package.

```js
<script lang="ts">
  import { IconHeart } from '@tabler/icons-svelte';
</script>

<main>
  <IconHeart size={48} stroke={1} />
  <IconHeart size="32" stroke="1.5" />
  <IconHeart color="crimson" class="p-1" size="96" stroke="2" />
</main>
```

## CDN

All files included in `@tabler/icons` npm package are available over a CDN.

#### React icons

```html
<script src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons-react/dist/index.umd.min.js"></script>
```

#### Iconfont

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
```

To load a specific version replace `latest` with the desired version number.

```html
<script src="https://cdn.jsdelivr.net/npm/@tabler/icons@1.74.0/icons-react/dist/index.umd.min.js"></script>
```

###### HTML
```html
<i class="ti ti-brand-tabler"></i>
```

###### CSS
```css
content: 'ec8f';
```


### Compiling fonts

To compile fonts first install [fontforge](https://fontforge.org/en-US/).

When compiling the font it will look for a json file `compile-options.json` in root folder (same folder as the `package.json`) In this file you can define extra options:

The default settings if you have not defined the file will be:
```JSON
{
  "includeIcons": [],
  "fontForge": "fontforge",
  "strokeWidth": null
}
```

The fontforge executable needs to be in the path or you can set the path to the downloaded fontforge executable in the configuration file. If you installed in on a mac in your application directory it will be `/Applications/FontForge.app/Contents/MacOS/FontForge`. You can set this value in the `compile-options.json` file.

```JSON
{
  "fontForge": "/Applications/FontForge.app/Contents/MacOS/FontForge"
}
```

To compile the fonts run:
```sh
npm run build-iconfont
```

By default the stroke width is 2. You can change the stroke width in the `compile-options.json`
```JSON
{
  "strokeWidth": 1.5,
}
```

To reduce the font file size you can choose to compile a sub set of icons. When you leave the array empty it will compile all the fonts. To compile only two icons you can set for example the following option in the `compile-options.json`:

```JSON
{
  "includeIcons": ["alert-octagon", "alert-triangle"]
}
```

Optional property `includeCategories` - an array or string of icon categories to include, category names are case-insensitive.
```JSON
{
  "includeCategories": ["Devices", "System"]
}
```
or
```JSON
{
  "includeCategories": "Devices System"
}
```

Optional property `excludeIcons` - an array of icon names using to exclude some category icons:
```JSON
{
  "includeCategories": ["system"],
  "excludeIcons": ["adjustments"]
}
```

Complex solution:
```JSON
{
  "includeIcons": ["alert-octagon", "alert-triangle"],
  "includeCategories": ["devices", "system"],
  "excludeIcons": ["adjustments"]
}
```

### Jetpack Compose

For Android or Desktop you can use [`compose-icons`](https://github.com/DevSrSouza/compose-icons) to use icons in your projects. (see [docs](https://github.com/DevSrSouza/compose-icons/blob/master/tabler-icons/DOCUMENTATION.md))

## Multiple strokes

All icons in this repository have been created with the value of the `stroke-width` property, so if you change the value, you can get different icon variants that will fit in well with your design.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons-stroke-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons-stroke.png">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons-stroke.png" alt="Tabler Icons preview" width="838">
</picture>

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).


## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>
