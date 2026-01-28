import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  IconAd,
  IconHome,
  IconHomeOff,
  TablerIcon,
  TablerIconComponent
} from '@tabler/icons-angular';

@Component({
  selector: 'app-root',
  imports: [TablerIconComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  active = signal(false);

  iconAd = IconAd;
  iconHome = IconHome;
  iconHomeOff = IconHomeOff;

  toggledIcon = signal<TablerIcon>(IconHome);
  mySize = signal(56);
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
