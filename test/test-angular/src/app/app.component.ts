import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TablerIconComponent, IconAd, IconAdOff, IconAdFilled, IconHome, IconHomeOff, IconHomeFilled } from '@tabler/icons-angular';

@Component({
  selector: 'app-root',
  imports: [TablerIconComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  active = signal(false);
  
  iconAd = IconAd;
  iconAdOff = IconAdOff;
  iconAdFilled = IconAdFilled;
  iconHome = IconHome;
  iconHomeOff = IconHomeOff;
  iconHomeFilled = IconHomeFilled;

  toggleActive() {
    this.active.update(value => !value);
  }
}
