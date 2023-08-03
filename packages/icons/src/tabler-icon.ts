type Name = string
type Attrs = Record<string, string | number>
type Content = string
type Nodes = Array<Array<string | Record<string, string>>>

const DEFAULT_ATTRS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}

class TablerIcon {
  name: Name;
  content: Content;
  attrs: Attrs;
  nodes: Nodes;

  constructor(name: Name, contents: Content, nodes: Nodes) {
    this.name = name;
    this.content = contents;
    this.nodes = nodes;
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `icon icon-tabler icon-tabler-${name}` },
    };
  }

  toSvg(attrs: Attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: `${this.attrs.class}${attrs.class ? ' ' + attrs.class : ''}` },
    };

    return `<svg ${Object.keys(combinedAttrs).map(key => `${key}="${combinedAttrs[key]}"`).join(' ')}>${this.content}</svg>`;
  }
}

export default TablerIcon;