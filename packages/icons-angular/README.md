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

The minimal supported version of Angular is 16.0.0.

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

It's build with ESmodules so it's tree-shakable. You decide which icons to include.

You can include icons by providing them with `TablerIconModule` or by importing `TablerIcon` objects in a single component.

### I. Using the provider

#### 1a. Import with NgModules

In a module in which the icons are needed or in a main module
```ts
import { TablerIconComponent, TablerIconModule, IconBrandAngular, IconHome } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconModule.pick({ IconBrandAngular, IconHome }), TablerIconComponent]
  // other configuration
})
export class AppModule { }
```

#### 1b. Import without NgModules

In `main.ts`

```ts
import { TablerIconModule, IconBrandAngular } from '@tabler/icons-angular';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(TablerIconModule.pick({ IconBrandAngular }))
  ]
})
```

or in a route configuration

```ts
import { IconBrandAngular, TablerIconModule } from '@tabler/icons-angular';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    providers: [importProvidersFrom(TablerIconModule.pick({ IconBrandAngular }))]
  }
];
```

In a standalone component which needs a TablerIconComponent

```ts
import { TablerIconComponent } from '@tabler/icons-angular';

@Component({
  imports: [TablerIconComponent],
  standalone: true,
  // other configuration
})
export class DemoComponent { }
```

#### 2. Use an icon component in a template

```html
<tabler-icon icon="icon-brand-angular"></tabler-icon>
<tabler-icon icon="brand-angular"></tabler-icon>
```

### II. Importing an icon object

#### 1a. Import with NgModules

In a module in which the icons are needed or in a main module:
```ts
import { TablerIconComponent, TablerIconModule } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconModule, TablerIconComponent]
  // other configuration
})
export class AppModule { }
```

#### 1b. Import in a standalone component

```ts
import { TablerIconComponent, IconBrandAngular } from '@tabler/icons-angular';

@Component({
  imports: [TablerIconComponent],
  standalone: true,
  // other configuration
})
export class AppComponent {
  iconBrandAngular = IconBrandAngular;
}
```

#### 2. Use an icon component in a template

```html
<tabler-icon [icon]="iconBrandAngular"></tabler-icon>
```

## Props

| name          | type     | default      |
| ------------- |----------| ------------ |
| `size`        | _number_ | 24           |~~~~
| `color`       | _string_ | currentColor |
| `stroke`      | _number_ | 2            |

```html
<tabler-icon icon="brand-angular" [size]="48" color="blue" [stroke]="1.75" class="my-icon"></tabler-icon>
```

## Global configuration

If you want to change default property values globally you can overwrite `TablerIconConfig` using providers.
You are able to set all three properties or just some of them.

```ts
{
  provide: TablerIconConfig, useValue: {
    size: 40,
    stroke: 1,
    color: 'blue'
  }
}
```

```ts
{ provide: TablerIconConfig, useValue: { size: 40 } }
```

## Loading all icons

There is also a possibility to import all icons at once but this can cause a **significant growth of your application build size**.

```ts
import { icons, TablerIconComponent, TablerIconModule } from '@tabler/icons-angular';

@NgModule({
  imports: [TablerIconModule.pick(icons), TablerIconComponent],
  // other configuration
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
