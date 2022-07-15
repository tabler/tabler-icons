<p align="center">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/og.png" alt="Tabler Icons" width="838">
</p>

<p align="center">
    A set of over 2050 free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.
<p>

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse at tabler-icons.io &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/tabler/tabler-icons/releases"><img src="https://img.shields.io/npm/v/@tabler/icons" alt="Latest Release"></a>
    <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>
</p>


## Sponsors

**If you want to support my project and help me grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or just [donate on PayPal](https://paypal.me/codecalm) :)**

<a href="https://github.com/sponsors/codecalm">
  <img src='https://raw.githubusercontent.com/tabler/static/main/sponsors.png'>
</a>

## Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons.png" alt="Tabler Icons preview" width="838">
</p>

## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>


## Installation

```
npm install @tabler/icons --save
```

or just [download from Github](https://github.com/tabler/tabler-icons/releases).

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

Import the icon and render it in your component. You can adjust SVG properties through React props:

```jsx
import { IconAward } from '@tabler/icons';

const MyComponent = () => {
  return <IconAward 
    size={36} // set custom `width` and `height`
    color="red" // set `stroke` color
    stroke={3}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />
}
```

`@tabler/icons` exports it's own type declarations for usage with React and Typescript.

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

`angular-tabler-icons` exports it's own type declarations for usage with Typescript.

For more usage documentation refer to [the official documentation](https://github.com/pierreavn/angular-tabler-icons).

### Vue

Vue components available through [`vue-tabler-icons`](https://www.npmjs.com/package/vue-tabler-icons) package.
Install the package, import the icon component and render it in your component. You can adjust SVG properties by passing regular HTML attributes:

```html
<script>
    // MyComponent.vue
    import { BoldIcon } from 'vue-tabler-icons';

    export default {
        components: { BoldIcon },
    };
</script>

<template>
    <bold-icon />
</template>
```

`vue-tabler-icons` exports it's own type declarations for usage with Typescript.

For more usage documentation refer to [the official documentation](https://github.com/alex-oleshkevich/vue-tabler-icons).

### CDN

All files included in `@tabler/icons` npm package are available over a CDN.

#### React icons

```html
<script src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons-react/dist/index.umd.min.js"></script>
```

#### Iconfont

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css">
```

To load a specific version replace `latest` with the desired version number.

```html
<script src="https://cdn.jsdelivr.net/npm/@tabler/icons@1.74.0/icons-react/dist/index.umd.min.js"></script>
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

To reduce the font file size you can choose to compile a sub set of icons. When you leave the array empty it will compile all the fonts. To compile only two icons you can set for example the folowing option in the `compile-options.json`:

```JSON
{
  "includeIcons": ["alert-octagon", "alert-triangle"]
}
```

Optional property `includeCategories` - an array or string of icon categories to include, category names are case-issensetive.
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

### Svelte

You can use [`tabler-icons-svelte`](https://github.com/benflap/tabler-icons-svelte) to use icons in your Svelte projects (see [example](https://svelte.dev/repl/e80dc63d7019431692b10a77525e7f99?version=3.31.0)):

```js
<script>
    import { CurrencyBitcoin, BrandGithub, CircleX } from "tabler-icons-svelte";
</script>

<CurrencyBitcoin />
<BrandGithub size="48" strokeWidth="1" />
<CircleX />
```

### Jetpack Compose

For Android or Desktop you can use [`compose-icons`](https://github.com/DevSrSouza/compose-icons) to use icons in your projects. (see [docs](https://github.com/DevSrSouza/compose-icons/blob/master/tabler-icons/DOCUMENTATION.md))

## Multiple strokes

All icons in this repository have been created with the value of the `stroke-width` property, so if you change the value, you can get different icon variants that will fit in well with your design.

![](https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons-stroke.png)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).
