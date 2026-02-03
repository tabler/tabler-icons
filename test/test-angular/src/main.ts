import { bootstrapApplication } from '@angular/platform-browser';
import { IconBrandTabler, IconBrandTablerFilled, provideTablerIconConfig, provideTablerIcons } from '@tabler/icons-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideTablerIcons({ IconBrandTabler, IconBrandTablerFilled }),
    provideTablerIconConfig({
      size: 48,
      stroke: 2,
      color: '#066fd1'
    })
  ]
}).catch(err => console.error(err));
