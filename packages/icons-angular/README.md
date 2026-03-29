# Tabler Icons for Angular

<p align="center">
  <a href="https://tabler.io/icons?ref=tabler-icons-readme"><img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-angular.png" alt="Tabler Icons" width="838"></a>
</p>

<p align="center">
  Implementation of the Tabler Icons library for Angular applications.
</p>

<p align="center">
  <a href="https://tabler.io/icons"><strong>Browse all icons at tabler.io &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/tabler/tabler-icons/releases"><img src="https://img.shields.io/npm/v/@tabler/icons" alt="Latest Release"></a>
    <a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>
</p>

## Sponsors

**If you want to support our project and help us grow it, you can [become a sponsor on GitHub](https://github.com/sponsors/codecalm) or just [donate on PayPal](https://paypal.me/codecalm) :)**

<a href="https://github.com/sponsors/codecalm">
  <img src='https://raw.githubusercontent.com/tabler/static/main/sponsors.png'>
</a>

## Prerequisites

- **Angular:** `>=21.0.0` (`@angular/core` and `@angular/common`).

## Installation

```
yarn add @tabler/icons-angular
```

or

```
npm install @tabler/icons-angular
```

or

```
pnpm add @tabler/icons-angular
```

## How to use

The package is built with ES modules and is tree-shakable. You choose which icons to include.

You can provide icons via `provideTablerIcons()`, or pass `TablerIcon` objects directly to the component.

Icons are exported as `Icon…` named symbols from `@tabler/icons-angular`. Legacy/alternate names are re-exported from the same package as additional `Icon…` symbols (e.g. `Icon123`).

### I. Using the provider (icon names in templates)

#### 1a. Standalone applications (recommended)

In `main.ts`:

```ts
import { provideTablerIcons, IconBrandAngular, IconHome } from '@tabler/icons-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideTablerIcons({ IconBrandAngular, IconHome })
  ]
});
```

Add any number of icons by including more `Icon*` imports in the object passed to `provideTablerIcons()`.

Or in a route configuration:

```ts
import { IconBrandAngular, provideTablerIcons } from '@tabler/icons-angular';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    providers: [provideTablerIcons({ IconBrandAngular })]
  }
];
```

In any component that uses icons, import `TablerIconComponent` into that component’s `imports` array (standalone-style components, including the root app component):

```ts
import { TablerIconComponent } from '@tabler/icons-angular';

@Component({
  imports: [TablerIconComponent],
  // ...
})
export class DemoComponent {}
```

#### 1b. NgModule-based applications

Angular 21 still supports `NgModule`. Import `TablerIconComponent` into the module’s `imports` and register `provideTablerIcons()` / `provideTablerIconConfig()` in the module’s `providers` the same way as with `bootstrapApplication`.

```ts
import { TablerIconComponent, provideTablerIcons, IconBrandAngular, IconHome } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconComponent],
  providers: [provideTablerIcons({ IconBrandAngular, IconHome })],
  // ...
})
export class AppModule {}
```

#### 2. Use the icon in a template (by name)

```html
<tabler-icon icon="brand-angular" />
<tabler-icon icon="icon-brand-angular" />
```

### II. Passing an icon object (no provider)

#### 1. Import `TablerIconComponent` (standalone component or `NgModule`)

```ts
import { TablerIconComponent, IconBrandAngular } from '@tabler/icons-angular';

@Component({
  imports: [TablerIconComponent],
  // ...
})
export class AppComponent {
  iconBrandAngular = IconBrandAngular;
}
```

If you use `NgModule`, import `TablerIconComponent` in the module’s `imports` instead. You do not need `provideTablerIcons()` when you only bind `[icon]` to imported `TablerIcon` objects.

#### 2. Use the icon in a template (by reference)

```html
<tabler-icon [icon]="iconBrandAngular" />
```

## Props

The component uses Angular `input()` APIs (signal inputs) and supports both outline and filled icon types.

| name            | type                              | default      |
| --------------- | --------------------------------- | ------------ |
| `icon`          | _TablerIcon \| string_            | _(required)_ |
| `size`          | _number_                          | 24           |
| `color`         | _string_                          | currentColor |
| `stroke`        | _number_                          | 2            |
| `svgClass`      | _string_                          | —            |
| `svgAttributes` | _Record<string, string \| number \| undefined>_ | —            |

- **`icon`** — Icon to display. Pass a `TablerIcon` object (e.g. from an import) or a string name when using `provideTablerIcons()`.
- **`size`** — Width and height of the icon in pixels.
- **`color`** — For outline icons this sets the stroke color; for filled icons it sets the fill color.
- **`stroke`** — Stroke width for outline icons. Has no effect on filled icons.
- **`svgClass`** — Extra CSS classes to apply to the SVG element (in addition to `tabler-icon` and `tabler-icon-{name}`).
- **`svgAttributes`** — Extra attributes to apply to the SVG element (e.g. `aria-label`, `role`) for accessibility. Component-managed attributes (`size`, `color`, `stroke`, etc.) always take precedence and cannot be overridden.

```html
<tabler-icon icon="brand-angular" [size]="48" color="blue" [stroke]="1.75" svgClass="my-icon" />
<!-- When using a TablerIcon object, bind a component property (e.g. alarmIcon = IconAlarm in the class): -->
<tabler-icon [icon]="alarmIcon" [svgAttributes]="{ 'aria-label': 'Alarm', 'role': 'img' }" />
```

## Global configuration

To change default property values globally, use `provideTablerIconConfig()` in your providers. You can set any combination of `size`, `color`, and `stroke`.

```ts
import { provideTablerIconConfig, provideTablerIcons, IconHome } from '@tabler/icons-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideTablerIcons({ IconHome }),
    provideTablerIconConfig({
      size: 40,
      stroke: 1,
      color: 'blue'
    })
  ]
});
```

Or only some defaults:

```ts
provideTablerIconConfig({ size: 40 })
```

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/tabler/tabler-icons/blob/main/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/tabler/tabler-icons/blob/main/packages/icons-angular/README.md)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>
