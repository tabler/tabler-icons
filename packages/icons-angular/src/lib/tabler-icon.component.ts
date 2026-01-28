import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import defaultAttributes from '../defaultAttributes';
import { TablerIcon, TablerIconNode } from '../types';
import { TABLER_ICON_CONFIG } from './tabler-icon.config';
import { ITablerIconProvider, TABLER_ICONS } from './tabler-icon.provider';

type SvgAttributes = { [key: string]: string | number | undefined };

/**
 * Component for rendering Tabler icons in Angular applications.
 * Supports both outline and filled icon types.
 * 
 * @example
 * ```html
 * <!-- Using icon name (requires provideTablerIcons) -->
 * <tabler-icon icon="home" [size]="24" color="blue"></tabler-icon>
 * 
 * <!-- Using direct icon object (best for tree-shaking) -->
 * <tabler-icon [icon]="IconHome" [size]="24"></tabler-icon>
 * ```
 */
@Component({
  selector: 'tabler-icon',
  standalone: true,
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.height.px]': 'size() ?? config().size',
    '[style.width.px]': 'size() ?? config().size'
  }
})
export class TablerIconComponent {
  /**
   * Icon to display. Can be a TablerIcon object or a string name.
   * @required
   */
  icon = input.required<TablerIcon | string>();
  
  /**
   * Color of the icon. For outline icons, this sets the stroke color.
   * For filled icons, this sets the fill color.
   */
  color = input<string>();
  
  /**
   * Stroke width for outline icons. Defaults to 2.
   */
  stroke = input<number>();
  
  /**
   * Additional CSS classes to apply to the icon element.
   */
  class = input<string>();
  
  size = input<number>();

  private readonly renderer = inject(Renderer2);
  private readonly iconProviders = inject<ITablerIconProvider[]>(TABLER_ICONS);
  private readonly elementRef = inject(ElementRef);
  private readonly iconConfig = inject(TABLER_ICON_CONFIG, { optional: true });

  protected readonly config = computed(() => {
    const config = this.iconConfig ?? {};
    return {
      size: defaultAttributes.outline.width,
      color: defaultAttributes.outline.stroke,
      stroke: defaultAttributes.outline['stroke-width'],
      ...config
    };
  });

  private svgElement: SVGElement | null = null;

  constructor() {
    effect(() => {
      const iconData = this.icon();
      const color = this.color();
      const stroke = this.stroke();
      const size = this.size();
      const className = this.class();

      const icon = this.resolveIcon(iconData);

      if (!this.svgElement || this.shouldRecreateSvg(icon)) {
        this.renderNewSvg(icon, color, stroke, size, className);
      } else {
        this.updateExistingSvg(icon, color, stroke, size, className);
      }
    });
  }

  private resolveIcon(iconData: TablerIcon | string): TablerIcon {
    if (typeof iconData === 'string') {
      if (!iconData || iconData.trim() === '') {
        throw new Error('Icon name cannot be empty.');
      }
      const foundIcon = this.getIconFromProviders(this.toPascalCase(iconData));
      if (foundIcon) {
        return foundIcon;
      } else {
        throw new Error(`The ${iconData} icon is not provided by any of the icon providers.`);
      }
    } else if (iconData != null && Array.isArray(iconData.nodes)) {
      return iconData;
    } else {
      throw new Error('Icon must be provided as a TablerIcon object or a string name.');
    }
  }

  private shouldRecreateSvg(icon: TablerIcon): boolean {
    if (!this.svgElement) return true;
    // If the icon name or type changed, SVG structure has to be recreated
    const currentIconName = this.svgElement.getAttribute('data-tabler-icon');
    const currentIconType = this.svgElement.getAttribute('data-tabler-type');
    return currentIconName !== icon.name || currentIconType !== icon.type;
  }

  private renderNewSvg(
    icon: TablerIcon,
    color?: string,
    stroke?: number,
    size?: number,
    className?: string
  ): void {
    if (icon.type !== 'outline' && icon.type !== 'filled') {
      throw new Error(`Invalid icon type: ${icon.type}. Must be 'outline' or 'filled'.`);
    }

    const attributes = this.getSvgAttributes(icon, color, stroke, size);
    const iconElement = this.createElement(['svg', attributes, icon.nodes]);
    
    // Use Renderer2 for attribute setting to ensure zoneless compatibility
    this.renderer.setAttribute(iconElement, 'data-tabler-icon', icon.name);
    this.renderer.setAttribute(iconElement, 'data-tabler-type', icon.type);
    
    this.applyClasses(iconElement, icon.name, className);

    // Remove only previous SVG, preserve ng-content
    if (this.svgElement) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.svgElement);
    }
    
    this.svgElement = iconElement;
    this.renderer.appendChild(this.elementRef.nativeElement, iconElement);
  }

  private updateExistingSvg(
    icon: TablerIcon,
    color?: string,
    stroke?: number,
    size?: number,
    className?: string
  ): void {
    if (!this.svgElement) return;

    const attributes = this.getSvgAttributes(icon, color, stroke, size);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined) {
        this.renderer.setAttribute(this.svgElement!, key, value.toString());
      }
    });

    this.applyClasses(this.svgElement, icon.name, className);
  }

  private getSvgAttributes(icon: TablerIcon, color?: string, stroke?: number, size?: number): SvgAttributes {
    const typeAttributes = icon.type === 'outline'
      ? {
        stroke: color ?? this.config().color,
        'stroke-width': stroke ?? this.config().stroke
      }
      : {
        fill: color ?? this.config().color
      };                                                    

    return {
      ...defaultAttributes[icon.type],
      ...typeAttributes,
      width: size ?? this.config().size,
      height: size ?? this.config().size
    };
  }

  private applyClasses(element: SVGElement, iconName: string, className?: string): void {
    // Reset classes to base using Renderer2 for zoneless compatibility
    const baseClasses = `tabler-icon tabler-icon-${iconName}`;
    this.renderer.setAttribute(element, 'class', baseClasses);
    
    if (className) {
      const classes = className.trim().split(/\s+/).filter(cls => cls.length > 0);
      if (classes.length > 0) {
        // Use Renderer2 for class manipulation to ensure zoneless compatibility
        classes.forEach(cls => this.renderer.addClass(element, cls));
      }
    }
  }

  private createElement([tag, attributes, nodes]: readonly [string, SvgAttributes, TablerIconNode[]?]) {
    const element = this.renderer.createElement(tag, 'http://www.w3.org/2000/svg');

    Object.keys(attributes).forEach(key => {
      const attrValue = attributes[key];
      if (attrValue) {
        const value = typeof attrValue === 'string' ? attrValue : attrValue.toString();
        this.renderer.setAttribute(element, key, value);
      }
    });

    if (nodes && nodes.length > 0) {
      nodes.forEach((node: TablerIconNode) => {
        const childElement = this.createElement(node);
        this.renderer.appendChild(element, childElement);
      });
    }

    return element;
  }

  private getIconFromProviders(iconName: string): TablerIcon | null {
    for (const provider of this.iconProviders) {
      const icon = provider.getIcon(iconName);
      if (icon) return icon;
    }
    return null;
  }

  private toPascalCase = (value: string): string => value.split('-')
    .map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
    .join('');
}
