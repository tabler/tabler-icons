# @tabler/icons-vue

## 3.52.0

### Minor Changes

- [#1725](https://github.com/tabler/tabler-icons/pull/1725) [`e743a6f`](https://github.com/tabler/tabler-icons/commit/e743a6fa30204fd35136c1006a498adfbba79a47) - Improve tree-shaking and add per-icon imports. Icon components are now marked `/* @__PURE__ */`, so unused icons are dropped even when a bundler cannot rely on `sideEffects`. The package gets an `exports` map with typed subpaths: `@tabler/icons-vue/icons/IconHome` loads a single icon module, `@tabler/icons-vue/icons-list` exports the icon names and the new `@tabler/icons-vue/dynamic-imports` exports lazy loaders keyed by icon name. Existing `@tabler/icons-vue/dist/*` deep imports keep working. The `icons` and `iconsList` namespaces exported from the main entry are marked `@deprecated` in favour of these entries; they keep working and will be removed in the next major version.

### Patch Changes

- Updated dependencies [[`e45f1c1`](https://github.com/tabler/tabler-icons/commit/e45f1c1d0cdc8d033a7143fb19dd3c437a79152d)]:
  - @tabler/icons@3.52.0

## 3.51.0

### Patch Changes

- [#1688](https://github.com/tabler/tabler-icons/pull/1688) [`9e6d65f`](https://github.com/tabler/tabler-icons/commit/9e6d65f2a49f17d87f224dd8474158ad543cb7b2) - `size`, `color`, `stroke`, `strokeWidth` and `title` are declared as props, so they are no longer rendered as DOM attributes on the `<svg>`, and `strokeWidth` maps to `stroke-width`
- Updated dependencies [[`1d35ae6`](https://github.com/tabler/tabler-icons/commit/1d35ae6181206c93ffd0f0f22e07df7fd39dca26)]:
  - @tabler/icons@3.51.0

## 3.50.0

### Patch Changes

- Updated dependencies []:
  - @tabler/icons@3.50.0

## 3.49.0

### Patch Changes

- [#1634](https://github.com/tabler/tabler-icons/pull/1634) [`9fba485`](https://github.com/tabler/tabler-icons/commit/9fba485e7545e53e7fcbeb19c63fd66587c66b3e) - Stop publishing source maps, which made up about 70% of the package size
- Updated dependencies [[`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01)]:
  - @tabler/icons@3.49.0
