import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TablerIconComponent, IconAd, IconAdOff, IconAdFilled, IconHome, IconHomeOff, IconHomeFilled, TablerIcon } from '@tabler/icons-angular';

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

  toggledIcon = signal<TablerIcon>(IconHome);
  defaultSize = signal(48);
  stroke = signal(1);

  toggleIcon() {
    this.toggledIcon.update(value => value === IconHome ? IconHomeOff : IconHome);
  }

  toggleStroke() {
    this.stroke.update(value => value === 2.5 ? 1 : value + 0.25);
  }

  toggleActive() {
    this.active.update(value => !value);
  }
}
