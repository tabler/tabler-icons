import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IconAB, IconAlertSmall, IconBadge8k, IconHome, TablerIconModule } from '@tabler/icons-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(TablerIconModule.pick({ IconAB, IconBadge8k, IconHome, IconAlertSmall })),
  ]
};
