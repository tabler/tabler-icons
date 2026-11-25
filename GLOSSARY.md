# Tabler Icons

A set of SVG icons published as one source of truth (`icons/`) and many npm packages that deliver those icons to different frameworks and file formats.

## Icons

**Icon**:
One SVG drawing in `icons/`, together with its metadata (name, category, tags, unicode, version).

**Icon type**:
The style an icon is drawn in: `outline` or `filled`. The same name can exist in both types.
_Avoid_: variant (reserved for badge variants)

**Alias**:
An old icon name that keeps resolving to a renamed icon.

## Packages

**Framework package**:
A package that ships one component per icon for a UI framework (React, Preact, Vue, Astro, Solid, Svelte, React Native, Angular).
_Avoid_: library, wrapper

**Image package**:
A package that ships the icons as rendered files (PNG, PDF, EPS).

**Package contract**:
What users of a framework package can rely on: which entry points exist (root, per-icon, icons list, dynamic imports), that the root resolves to CommonJS under Node's `require`, and that existing entry points never disappear outside a major release.
_Avoid_: exports map (that is only where part of the contract is written down)

**Package layout**:
One of the published shapes a framework package comes in: which entry points it has, in which module formats, and how its icon modules are named. React, Preact, Vue and Astro share one layout; Svelte 4 and Svelte 5 share another; Solid, React Native and Angular each have their own.

**Package descriptor**:
The per-package statement of what differs between framework packages — its package layout, how icon modules are named, how a single icon is rendered.

**Package recipe**:
The shared way every framework package is produced from its package descriptor: the sources it generates, the entry points it must declare for its package layout and, unless its framework has build tooling of its own, how it is bundled.
_Avoid_: build config, template
