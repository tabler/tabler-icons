import DEFAULT_ATTRS from '../default-attrs.json';

class TablerIcon {
  constructor(name, contents, tags = []) {
    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `icon icon-tabler icon-tabler-${name}` },
    };
  }

  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: `${this.attrs.class} ${attrs.class}` },
    };

    return `<svg 
      ${Object.keys(combinedAttrs).map(key => `${key}="${attrs[key]}"`).join(' ')}>
      ${this.contents}
    </svg>`;
  }
}

export default TablerIcon;