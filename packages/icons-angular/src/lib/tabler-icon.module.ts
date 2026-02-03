import { ModuleWithProviders, NgModule } from '@angular/core';
import { TablerIcons } from '../types';
import { TABLER_ICONS, TablerIconProvider } from './tabler-icon.provider';

/**
 * Module for providing Tabler icons in NgModule-based applications.
 * 
 * For standalone applications, prefer using `provideTablerIcons()` function instead:
 * 
 * ```ts
 * import { provideTablerIcons } from '@tabler/icons-angular';
 * 
 * bootstrapApplication(AppComponent, {
 *   providers: [provideTablerIcons({ IconHome, IconUser })]
 * });
 * ```
 * 
 * This module remains fully supported and functional for NgModule-based applications.
 */
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
