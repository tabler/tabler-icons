import { InjectionToken } from '@angular/core';
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

  private iconExists = (name: string): boolean => typeof this.icons === 'object' && name in this.icons;
}

export const TABLER_ICONS = new InjectionToken<ITablerIconProvider>('TablerIcons', {
  factory: () => new TablerIconProvider({})
});
