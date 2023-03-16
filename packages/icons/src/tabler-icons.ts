import TablerIcon from './tabler-icon';
import tablerNodes from './tabler-nodes.json';

// TODO [!] Error: Could not resolve './tabler-nodes.json' from dist/esm/types/tabler-icons.d.ts
//type iconName = keyof typeof tablerNodes

const icons: Record<string, TablerIcon> = Object.keys(tablerNodes)
  .map(iconNode => new TablerIcon(iconNode, tablerNodes[iconNode]))
  .reduce((object, icon) => {
    object[icon.name] = icon;
    return object;
  }, {} as Record<string, TablerIcon>);

export default icons