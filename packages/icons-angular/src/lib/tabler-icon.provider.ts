import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { TablerIcon, TablerIcons } from '../types';

export interface ITablerIconProvider {
  getIcon(name: string): TablerIcon | null;
}

export class TablerIconProvider implements ITablerIconProvider {
  constructor(private readonly icons: TablerIcons) {}

  getIcon = (name: string): TablerIcon | null => {
    name = name.startsWith('Icon') ? name : `Icon${name}`;
    return this.iconExists(name) ? this.icons[name] : null;
  };

  private iconExists = (name: string): boolean => name in this.icons;
}

export const TABLER_ICONS = new InjectionToken<ITablerIconProvider>('TablerIcons', {
  factory: () => new TablerIconProvider({})
});

/**
 * Provides a set of Tabler icons to the application.
 * 
 * @example
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideTablerIcons({ IconHome, IconUser })
 *   ]
 * });
 * ```
 */
export function provideTablerIcons(icons: TablerIcons): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: TABLER_ICONS,
      multi: true,
      useValue: new TablerIconProvider(icons)
    }
  ]);
}
