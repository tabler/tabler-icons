# Tabler Icons

A set of over 300 free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and `2px` stroke.

```
npm install tabler-icons --save
```

## Preview

![Tabler icons](icons.svg)


## Usage

All icons are built with SVG, so you can place them as `<img>`, `background-image` and inline in HTML code.

### HTML image

If you load the icon as an image you can manipulate size with CSS.

```html
<img src="path/to/icon.svg" alt="icon title"/>
```

### Inline HTML

You can paste the content of the icon file into the HTML code and it will be displayed on the page. 

```html
<a href="">
  <svg xmlns="http://www.w3.org/2000/svg" 
    class="icon tabler-icon tabler-icon-disabled" 
    width="24" height="24" viewBox="0 0 24 24" 
    stroke-width="1.25" stroke="currentColor" fill="none" 
    stroke-linecap="round" stroke-linejoin="round">
      ...
  </svg>
  Click me
</a>
```

In this way you can change size, color and `stroke-width` of the icon with CSS code.

```css
.icon-tabler {
  color: red;
  width: 32px;
  height: 32px;
  stroke-width: 1.25;
}
```

### SVG sprite

Include an icon on your page with the following markup (`activity` in the above example can be replaced with any valid icon name):

```html
<svg width="24" height="24">
  <use xlink:href="path/to/tabler-sprite.svg#activity"/>
</svg>
```

## Multiple strokes

All icons in this repository are drawn with the value of `stroke-width` property, so if you change its value you can get different variants of icon, that will fit into your project.

![Tabler icons](icons-stroke.svg)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).
