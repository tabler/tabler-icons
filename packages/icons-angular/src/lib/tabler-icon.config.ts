import { InjectionToken, Provider } from '@angular/core';

export interface TablerIconConfig {
  size?: number;
  color?: string;
  stroke?: number;
}

export const TABLER_ICON_CONFIG = new InjectionToken<TablerIconConfig>('TablerIconConfig');

/**
 * Provides the configuration for Tabler icons.
 * 
 * @example
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideTablerIconConfig({
 *       size: 24,
 *       color: 'red',
 *       stroke: 2
 *     })
 *   ]
 * });
 * ```
 */
export function provideTablerIconConfig(config: TablerIconConfig): Provider {
  return {
    provide: TABLER_ICON_CONFIG,
    useValue: config
  };
}

/**
 * @deprecated Use TABLER_ICON_CONFIG injection token or provideTablerIconConfig instead.
 */
export const TablerIconConfig = TABLER_ICON_CONFIG;
