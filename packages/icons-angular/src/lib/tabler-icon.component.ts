import { Component, ElementRef, HostBinding, inject, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import defaultAttributes from '../defaultAttributes';
import { TablerIcon, TablerIconNode } from '../types';
import { TablerIconConfig } from './tabler-icon.config';
import { ITablerIconProvider, TABLER_ICONS } from './tabler-icon.provider';

type SvgAttributes = { [key: string]: string | number | undefined };

/**
 * Component for rendering Tabler icons in Angular applications.
 * Supports both outline and filled icon types.
 * 
 * @example
 * ```html
 * <tabler-icon icon="home" [size]="24" color="blue"></tabler-icon>
 * ```
 */
@Component({
  selector: 'tabler-icon',
  standalone: true,
  template: '<ng-content></ng-content>'
})
export class TablerIconComponent implements OnChanges {
  /**
   * Icon to display. Can be a TablerIcon object or a string name.
   * @required
   */
  @Input({ required: true }) icon!: TablerIcon | string;
  
  /**
   * Color of the icon. For outline icons, this sets the stroke color.
   * For filled icons, this sets the fill color.
   */
  @Input() color?: string;
  
  /**
   * Stroke width for outline icons. Defaults to 2.
   */
  @Input() stroke?: number;
  
  /**
   * Additional CSS classes to apply to the icon element.
   */
  @Input() class?: string;
  @Input()
  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  size?: number;

  private readonly renderer = inject(Renderer2);
  private readonly iconProviders = inject<ITablerIconProvider[]>(TABLER_ICONS);
  private readonly elementRef = inject(ElementRef);
  private readonly iconConfig = inject(TablerIconConfig);

  private get config(): TablerIconConfig {
    return {
      size: defaultAttributes.outline.width,
      color: defaultAttributes.outline.stroke,
      stroke: defaultAttributes.outline['stroke-width'],
      ...this.iconConfig
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    // Only update if icon, color, stroke, size, or class changed
    const shouldUpdate = changes['icon'] || changes['color'] || changes['stroke'] || 
                         changes['size'] || changes['class'];
    
    if (!shouldUpdate && this.elementRef.nativeElement.firstChild) {
      return; // Skip update if nothing relevant changed
    }

    this.size ??= this.config.size;
    if (typeof this.icon === 'string') {
      if (!this.icon || this.icon.trim() === '') {
        throw new Error('Icon name cannot be empty.');
      }
      const icon = this.getIconFromProviders(this.toPascalCase(this.icon));
      if (icon) {
        this.replaceElement(icon);
      } else {
        throw new Error(`The ${this.icon} icon is not provided by any of the icon providers.`);
      }
    } else if (this.icon != null && Array.isArray(this.icon.nodes)) {
      this.replaceElement(this.icon);
    } else {
      throw new Error('Icon must be provided as a TablerIcon object or a string name.');
    }
  }

  private replaceElement(icon: TablerIcon): void {
    if (icon.type !== 'outline' && icon.type !== 'filled') {
      throw new Error(`Invalid icon type: ${icon.type}. Must be 'outline' or 'filled'.`);
    }

    const typeAttributes = icon.type === 'outline'
      ? {
        stroke: this.color ?? this.config.color,
        'stroke-width': this.stroke ?? this.config.stroke
      }
      : {
        fill: this.color ?? this.config.color
      };

    const attributes = {
      ...defaultAttributes[icon.type],
      ...typeAttributes,
      width: this.size,
      height: this.size
    };

    const iconElement = this.createElement(['svg', attributes, icon.nodes]);
    iconElement.classList.add('tabler-icon', `tabler-icon-${icon.name}`);
    if (this.class) {
      // Split by whitespace and filter empty strings
      const classes = this.class.trim().split(/\s+/).filter(cls => cls.length > 0);
      if (classes.length > 0) {
        iconElement.classList.add(...classes);
      }
    }

    while (this.elementRef.nativeElement.firstChild) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.elementRef.nativeElement.firstChild);
    }

    this.renderer.appendChild(this.elementRef.nativeElement, iconElement);
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
