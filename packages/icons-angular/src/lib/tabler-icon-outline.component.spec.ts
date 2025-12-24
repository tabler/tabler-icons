import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import defaultAttributes from '../defaultAttributes';
import { TablerIcon } from '../types';
import { TablerIconComponent } from './tabler-icon.component';

describe('TablerIconComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  const getSvgAttr = (attr: string) => fixture.nativeElement.querySelector('svg').getAttribute(attr);
  let icon: TablerIcon = { name: 'test', type: 'outline', nodes: [['path', { d: 'M8 7h-4', key: 'svg-0' }]] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [TablerIconComponent]
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
    expect(getSvgAttr('width')).toBe(defaultAttributes.outline.width.toString(10));
    expect(getSvgAttr('fill')).toBe(defaultAttributes.outline.fill);
    expect(getSvgAttr('stroke')).toBe(defaultAttributes.outline.stroke);
    expect(getSvgAttr('stroke-width')).toBe(defaultAttributes.outline['stroke-width'].toString(10));
    expect(getSvgAttr('stroke-linecap')).toBe(defaultAttributes.outline['stroke-linecap']);
    expect(getSvgAttr('stroke-linejoin')).toBe(defaultAttributes.outline['stroke-linejoin']);
  });

  it('should set size', () => {
    const size = 32;
    hostComponent.size = size;
    fixture.detectChanges();
    expect(getSvgAttr('height')).toBe(size.toString(10));
    expect(getSvgAttr('width')).toBe(size.toString(10));
  })

  it('should set color', () => {
    const color = '#abcabc';
    hostComponent.color = color;
    fixture.detectChanges();
    expect(getSvgAttr('stroke')).toBe(color);
  })

  it('should set stroke width', () => {
    const stroke = 1.75;
    hostComponent.stroke = stroke;
    fixture.detectChanges();
    expect(getSvgAttr('stroke-width')).toBe(stroke.toString(10));
  })

  it('should add all classes', () => {
    fixture.detectChanges();
    expect(getSvgAttr('class')).toBe('tabler-icon tabler-icon-test test-class');
  })

  @Component({
    selector: 'tabler-test',
    template: `
      <tabler-icon
        [icon]="iconTest"
        class="test-class"
        [color]="color"
        [size]="size"
        [stroke]="stroke"
        [class]="class"
      ></tabler-icon>
    `,
  })
  class TestHostComponent {
    size?: number;
    color?: string;
    stroke?: number;
    class?: string;
    iconTest = icon;
  }
})
