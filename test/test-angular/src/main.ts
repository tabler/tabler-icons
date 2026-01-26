import { bootstrapApplication } from '@angular/platform-browser';
import { IconBrandTabler, IconBrandTablerFilled, provideTablerIcons } from '@tabler/icons-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideTablerIcons({ IconBrandTabler, IconBrandTablerFilled })
  ]
}).catch(err => console.error(err));
