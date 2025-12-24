export type TablerIconNode = [elementName: string, attrs: Record<string, string>];
export type TablerIcon = { name: string, type: 'outline' | 'filled', nodes: TablerIconNode[] };
export type TablerIcons = { [key: string]: TablerIcon };
