---
"@tabler/icons-vue": minor
---

Improve tree-shaking and add per-icon imports. Icon components are now marked `/* @__PURE__ */`, so unused icons are dropped even when a bundler cannot rely on `sideEffects`. The package gets an `exports` map with typed subpaths: `@tabler/icons-vue/icons/IconHome` loads a single icon module, `@tabler/icons-vue/icons-list` exports the icon names and the new `@tabler/icons-vue/dynamic-imports` exports lazy loaders keyed by icon name. Existing `@tabler/icons-vue/dist/*` deep imports keep working. The `icons` and `iconsList` namespaces exported from the main entry are marked `@deprecated` in favour of these entries; they keep working and will be removed in the next major version.
