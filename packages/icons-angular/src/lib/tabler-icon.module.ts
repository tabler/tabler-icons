import { ModuleWithProviders, NgModule } from '@angular/core';
import { TablerIcons } from '../types';
import { TABLER_ICONS, TablerIconProvider } from './tabler-icon.provider';

@NgModule()
export class TablerIconModule {
  static pick(icons: TablerIcons): ModuleWithProviders<TablerIconModule> {
    return {
      ngModule: TablerIconModule,
      providers: [
        { provide: TABLER_ICONS, multi: true, useValue: new TablerIconProvider(icons) }
      ]
    }
  }
}
