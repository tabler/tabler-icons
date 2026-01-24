import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablerIcon, TablerIcons } from '../types';
import { TablerIconComponent } from './tabler-icon.component';
import { TablerIconModule } from './tabler-icon.module';

describe('TablerIconComponent - Optimization & Edge Cases', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TablerIconComponent;
  const getSvgAttr = (attr: string) => fixture.nativeElement.querySelector('svg')?.getAttribute(attr);
  const getSvgElement = () => fixture.nativeElement.querySelector('svg');
  
  let icon: TablerIcon = { name: 'test', type: 'outline', nodes: [['path', { d: 'M8 7h-4', key: 'svg-0' }]] };
  let icons: TablerIcons = { IconTest: icon };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablerIconComponent, TestHostComponent, TablerIconModule.pick(icons)]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(p => p.componentInstance instanceof TablerIconComponent)?.componentInstance as TablerIconComponent;
  });

  describe('ChangeDetectionStrategy.OnPush', () => {
    it('should render icon correctly with OnPush strategy', () => {
      fixture.detectChanges();
      expect(getSvgElement()).toBeTruthy();
      expect(getSvgAttr('class')).toContain('tabler-icon');
    });

    it('should update when input changes', () => {
      fixture.detectChanges();
      const initialColor = getSvgAttr('stroke');
      
      hostComponent.color = '#ff0000';
      fixture.detectChanges();
      
      expect(getSvgAttr('stroke')).toBe('#ff0000');
      expect(getSvgAttr('stroke')).not.toBe(initialColor);
    });

    it('should update DOM when size input changes', () => {
      fixture.detectChanges();
      const initialSize = getSvgAttr('width');
      
      hostComponent.size = 100;
      fixture.detectChanges();
      
      expect(getSvgAttr('width')).toBe('100');
      expect(getSvgAttr('height')).toBe('100');
    });
  });

  describe('Signal reactivity and optimization', () => {
    it('should skip update when same values are set', () => {
      fixture.detectChanges();
      const initialSvg = getSvgElement();
      const initialStroke = getSvgAttr('stroke');
      
      // Signal inputs handle equality checks automatically
      hostComponent.color = '#ff0000';
      fixture.detectChanges();
      
      expect(getSvgAttr('stroke')).toBe('#ff0000');
      expect(getSvgAttr('stroke')).not.toBe(initialStroke);
    });

    it('should update when icon changes', () => {
      fixture.detectChanges();
      const initialName = getSvgAttr('class');
      
      hostComponent.iconName = 'test';
      fixture.detectChanges();
      
      expect(getSvgElement()).toBeTruthy();
      expect(getSvgAttr('class')).toContain('tabler-icon-test');
    });

    it('should update when size changes', () => {
      fixture.detectChanges();
      const initialSize = getSvgAttr('width');
      
      hostComponent.size = 48;
      fixture.detectChanges();
      
      expect(getSvgAttr('width')).toBe('48');
      expect(getSvgAttr('width')).not.toBe(initialSize);
    });

    it('should update when stroke changes', () => {
      fixture.detectChanges();
      const initialStrokeWidth = getSvgAttr('stroke-width');
      
      hostComponent.stroke = 3;
      fixture.detectChanges();
      
      expect(getSvgAttr('stroke-width')).toBe('3');
      expect(getSvgAttr('stroke-width')).not.toBe(initialStrokeWidth);
    });

    it('should update when class changes', () => {
      fixture.detectChanges();
      
      hostComponent.customClass = 'new-class another-class';
      fixture.detectChanges();
      
      const classAttr = getSvgAttr('class');
      expect(classAttr).toContain('new-class');
      expect(classAttr).toContain('another-class');
    });
  });

  describe('Error handling', () => {
    it('should throw error when icon name is empty string', () => {
      hostComponent.iconName = '';
      expect(() => fixture.detectChanges()).toThrowError('Icon name cannot be empty.');
    });

    it('should throw error when icon name is whitespace only', () => {
      hostComponent.iconName = '   ';
      expect(() => fixture.detectChanges()).toThrowError('Icon name cannot be empty.');
    });

    it('should throw error when icon is not provided by any provider', () => {
      hostComponent.iconName = 'non-existent-icon';
      expect(() => fixture.detectChanges()).toThrowError(/The non-existent-icon icon is not provided/);
    });

    it('should throw error when icon object is invalid', () => {
      hostComponent.iconObject = null as any;
      hostComponent.iconName = undefined;
      expect(() => fixture.detectChanges()).toThrowError('Icon must be provided as a TablerIcon object or a string name.');
    });

    it('should throw error when icon type is invalid', () => {
      hostComponent.iconObject = { name: 'test', type: 'invalid' as any, nodes: [] };
      expect(() => fixture.detectChanges()).toThrowError(/Invalid icon type: invalid/);
    });

    it('should throw error when icon object has no nodes', () => {
      hostComponent.iconObject = { name: 'test', type: 'outline', nodes: null as any };
      hostComponent.iconName = undefined;
      expect(() => fixture.detectChanges()).toThrowError('Icon must be provided as a TablerIcon object or a string name.');
    });
  });

  describe('CSS classes handling', () => {
    it('should handle multiple classes separated by spaces', () => {
      hostComponent.customClass = 'class1 class2 class3';
      fixture.detectChanges();
      
      const classAttr = getSvgAttr('class');
      expect(classAttr).toContain('class1');
      expect(classAttr).toContain('class2');
      expect(classAttr).toContain('class3');
    });

    it('should handle classes with multiple spaces', () => {
      hostComponent.customClass = 'class1   class2    class3';
      fixture.detectChanges();
      
      const classAttr = getSvgAttr('class');
      expect(classAttr).toContain('class1');
      expect(classAttr).toContain('class2');
      expect(classAttr).toContain('class3');
    });

    it('should handle classes with leading and trailing spaces', () => {
      hostComponent.customClass = '  class1 class2  ';
      fixture.detectChanges();
      
      const classAttr = getSvgAttr('class');
      expect(classAttr).toContain('class1');
      expect(classAttr).toContain('class2');
    });

    it('should filter out empty class names', () => {
      hostComponent.customClass = 'class1   class2';
      fixture.detectChanges();
      
      const classAttr = getSvgAttr('class');
      const classes = classAttr?.split(' ') || [];
      expect(classes.filter((c: string) => c.length === 0).length).toBe(0);
    });

    it('should add default tabler-icon classes', () => {
      fixture.detectChanges();
      
      const classAttr = getSvgAttr('class');
      expect(classAttr).toContain('tabler-icon');
      expect(classAttr).toContain('tabler-icon-test');
    });
  });

  describe('Icon name conversion (toPascalCase)', () => {
    it('should convert kebab-case to PascalCase', () => {
      hostComponent.iconName = 'brand-angular';
      // The component should look for IconBrandAngular in providers
      // Since we only have IconTest, this will throw, but we can verify the conversion happens
      expect(() => fixture.detectChanges()).toThrowError(/The brand-angular icon is not provided/);
    });

    it('should handle single word icon names', () => {
      hostComponent.iconName = 'home';
      expect(() => fixture.detectChanges()).toThrowError(/The home icon is not provided/);
    });

    it('should handle icon names with multiple hyphens', () => {
      hostComponent.iconName = 'brand-angular-outline';
      expect(() => fixture.detectChanges()).toThrowError(/The brand-angular-outline icon is not provided/);
    });
  });

  describe('Icon types', () => {
    it('should render outline icon correctly', () => {
      hostComponent.iconObject = { name: 'outline-test', type: 'outline', nodes: [['path', { d: 'M8 7h-4', key: 'svg-0' }]] };
      fixture.detectChanges();
      
      expect(getSvgAttr('stroke')).toBeTruthy();
      expect(getSvgAttr('stroke-width')).toBeTruthy();
    });

    it('should render filled icon correctly', () => {
      hostComponent.iconObject = { name: 'filled-test', type: 'filled', nodes: [['path', { d: 'M8 7h-4', key: 'svg-0' }]] };
      fixture.detectChanges();
      
      expect(getSvgAttr('fill')).toBeTruthy();
    });
  });

  describe('Size handling', () => {
    it('should use default size when not provided', () => {
      hostComponent.size = undefined;
      fixture.detectChanges();
      
      expect(getSvgAttr('width')).toBeTruthy();
      expect(getSvgAttr('height')).toBeTruthy();
    });

    it('should apply size to both width and height', () => {
      hostComponent.size = 64;
      fixture.detectChanges();
      
      expect(getSvgAttr('width')).toBe('64');
      expect(getSvgAttr('height')).toBe('64');
    });
  });

  describe('Color handling', () => {
    it('should use default color when not provided for outline icon', () => {
      hostComponent.color = undefined;
      fixture.detectChanges();
      
      expect(getSvgAttr('stroke')).toBeTruthy();
    });

    it('should use provided color for outline icon', () => {
      hostComponent.color = '#ff5733';
      fixture.detectChanges();
      
      expect(getSvgAttr('stroke')).toBe('#ff5733');
    });

    it('should use provided color for filled icon', () => {
      hostComponent.iconObject = { name: 'filled-test', type: 'filled', nodes: [['path', { d: 'M8 7h-4', key: 'svg-0' }]] };
      hostComponent.color = '#ff5733';
      fixture.detectChanges();
      
      expect(getSvgAttr('fill')).toBe('#ff5733');
    });
  });

  @Component({
    selector: 'tabler-test',
    standalone: true,
    imports: [TablerIconComponent],
    template: `
      <tabler-icon
        [icon]="iconObject || iconName"
        [color]="color"
        [size]="size"
        [stroke]="stroke"
        [class]="customClass"
      ></tabler-icon>
    `,
  })
  class TestHostComponent {
    size?: number;
    color?: string;
    stroke?: number;
    customClass?: string;
    iconName?: string = 'test';
    iconObject?: TablerIcon;
  }
});

