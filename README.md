# Tabler Icons

A set of over 950 free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a `2px` stroke.

**If you want to support my project and help me grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or just [donate on PayPal](https://paypal.me/codecalm) :)**

## Sponsors

<a href="https://github.com/sponsors/codecalm">
    <img src='https://cdn.jsdelivr.net/gh/tabler/static/sponsors.svg'>
  </a>

## Preview

![](https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons.png)

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

### CDN

All files included in `@tabler/icons` npm package are available over a CDN.

#### React icons

```html
<script src="https://unpkg.com/@tabler/icons@latest/icons-react/dist/index.umd.min.js"></script>
```

#### Iconfont

```html
<link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css">
```

To load a specific version replace `latest` with the desired version number.

```html
<script src="https://unpkg.com/@tabler/icons@1.36.0/icons-react/dist/index.umd.js"></script>
```

## Multiple strokes

All icons in this repository have been created with the value of the `stroke-width` property, so if you change the value, you can get different icon variants that will fit in well with your design.

![](https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/icons-stroke.png)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).
