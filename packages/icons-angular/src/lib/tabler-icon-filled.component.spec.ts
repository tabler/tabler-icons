import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import defaultAttributes from '../defaultAttributes';
import { TablerIcon, TablerIcons } from '../types';
import { TablerIconComponent } from './tabler-icon.component';
import { TablerIconModule } from './tabler-icon.module';

describe('TablerIconComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  const getSvgAttr = (attr: string) => fixture.nativeElement.querySelector('svg').getAttribute(attr);
  let icon: TablerIcon = { name: 'test', type: 'filled', nodes: [['path', { d: 'M8 7h-4', key: 'svg-0' }]] };
  let icons: TablerIcons = { IconTest: icon };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [TablerIconComponent, TablerIconModule.pick(icons)]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
  })

  it('should create', () => {
    fixture.detectChanges();
    expect(hostComponent).toBeTruthy();
  });

  it('should have all default values if not provided', () => {
    fixture.detectChanges();
    expect(getSvgAttr('width')).toBe(defaultAttributes.filled.width.toString(10));
    expect(getSvgAttr('fill')).toBe(defaultAttributes.filled.fill);
    expect(getSvgAttr('stroke')).toBe(defaultAttributes.filled.stroke);
    expect(getSvgAttr('stroke-width')).toBe(null);
    expect(getSvgAttr('stroke-linecap')).toBe(null);
    expect(getSvgAttr('stroke-linejoin')).toBe(null);
  });

  it('should set size', () => {
    const size = 40;
    hostComponent.size = size;
    fixture.detectChanges();
    expect(getSvgAttr('height')).toBe(size.toString(10));
    expect(getSvgAttr('width')).toBe(size.toString(10));
  })

  it('should set color', () => {
    const color = '#abcabc';
    hostComponent.color = color;
    fixture.detectChanges();
    expect(getSvgAttr('fill')).toBe(color);
  })

  it('should add all classes', () => {
    fixture.detectChanges();
    expect(getSvgAttr('class')).toBe('tabler-icon tabler-icon-test test-class');
  })

  @Component({
    selector: 'tabler-test',
    template: `
      <tabler-icon
        icon="icon-test"
        class="test-class"
        [color]="color"
        [size]="size"
        [class]="class"
      ></tabler-icon>
    `,
  })
  class TestHostComponent {
    size?: number;
    color?: string;
    class?: string;
  }
})
