import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IconAB, IconAlertSmall, IconBadge8k, IconHome } from '@tabler/icons-angular/src/icons';
import { TablerIconModule } from '@tabler/icons-angular/src/lib/tabler-icon.module';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(TablerIconModule.pick({ IconAB, IconBadge8k, IconHome, IconAlertSmall })),
  ]
};
