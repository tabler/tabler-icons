# Tabler Icons for Angular

<p align="center">
<img src="https://raw.githubusercontent.com/tabler/tabler-icons/main/.github/packages/og-package-angular.png" alt="Tabler Icons" width="838">
</p>

<p align="center">
  Implementation of the Tabler Icons library for Angular applications.
<p>

<p align="center">
  <a href="https://tabler.io/icons/"><strong>Browse all icons at tabler.io &rarr;</strong></a>
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

The minimal supported version of Angular is 21.0.0.

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
pnpm install @tabler/icons-angular
```

## How to use

The package is built with ES modules and is tree-shakable. You choose which icons to include.

You can provide icons via `provideTablerIcons()` (recommended for standalone apps) or `TablerIconModule.pick()` (for NgModule-based apps), or pass `TablerIcon` objects directly to the component.

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

In any component that uses icons, import the standalone `TablerIconComponent`:

```ts
import { TablerIconComponent } from '@tabler/icons-angular';

@Component({
  imports: [TablerIconComponent],
  // ...
})
export class DemoComponent {}
```

#### 1b. NgModule-based applications

In a module where the icons are needed or in the root module:

```ts
import { TablerIconComponent, TablerIconModule, IconBrandAngular, IconHome } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconModule.pick({ IconBrandAngular, IconHome }), TablerIconComponent],
  // ...
})
export class AppModule {}
```

#### 2. Use the icon in a template (by name)

```html
<tabler-icon icon="brand-angular"></tabler-icon>
<tabler-icon icon="icon-brand-angular"></tabler-icon>
```

### II. Passing an icon object (no provider)

#### 1a. Standalone component

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

#### 1b. NgModule

Import `TablerIconModule` and `TablerIconComponent` in the module that declares components using icons (no need to call `.pick()` if you only pass icon objects):

```ts
import { TablerIconComponent, TablerIconModule } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconModule, TablerIconComponent],
  // ...
})
export class AppModule {}
```

#### 2. Use the icon in a template (by reference)

```html
<tabler-icon [icon]="iconBrandAngular"></tabler-icon>
```

## Props

The component uses Angular signal inputs and supports both outline and filled icon types.

| name     | type               | default      |
| -------- | ------------------ | ------------ |
| `icon`   | _TablerIcon \| string_ | _(required)_ |
| `size`   | _number_           | 24           |
| `color`  | _string_           | currentColor |
| `stroke` | _number_           | 2            |
| `class`  | _string_           | —            |

```html
<tabler-icon icon="brand-angular" [size]="48" color="blue" [stroke]="1.75" class="my-icon"></tabler-icon>
```

## Global configuration

To change default property values globally, use `provideTablerIconConfig()` in your providers. You can set any combination of `size`, `color`, and `stroke`.

```ts
import { provideTablerIconConfig } from '@tabler/icons-angular';

bootstrapApplication(AppComponent, {
  providers: [
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

## Loading all icons

You can register all icons at once, but this will **significantly increase your application bundle size**. Prefer registering only the icons you use.

**Standalone:**

```ts
import { icons, provideTablerIcons } from '@tabler/icons-angular';

bootstrapApplication(AppComponent, {
  providers: [provideTablerIcons(icons)]
});
```

**NgModule:**

```ts
import { icons, TablerIconComponent, TablerIconModule } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconModule.pick(icons), TablerIconComponent],
  // ...
})
export class AppModule {}
```

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/tabler/tabler-icons/blob/main/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/tabler/tabler-icons/blob/main/packages/icons-angular/README.md)

## License

Tabler Icons is licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

## Sponsor Tabler

<a href="https://github.com/sponsors/codecalm" target="_blank"><img src="https://github.com/tabler/tabler/raw/dev/src/static/sponsor-banner-readme.png?raw=true" alt="Sponsor Tabler" /></a>
