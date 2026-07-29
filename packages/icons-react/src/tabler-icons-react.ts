// NOTE: only flat named re-exports here. The previous `export * as icons` /
// `export * as iconsList` namespace re-exports defeated tree-shaking (a single
// binding referencing every icon). The icon-name list now lives at the
// `./icons-list` subpath instead.
export * from './icons';
export * from './aliases';
export * from './types';

export { default as createReactComponent } from './createReactComponent';
