# @tabler/icons-react

## 3.52.0

### Minor Changes

- [#1723](https://github.com/tabler/tabler-icons/pull/1723) [`1b42da3`](https://github.com/tabler/tabler-icons/commit/1b42da3c761a813f1e0b0325078c077b327f580b) - Add typed `@tabler/icons-react/icons-list` and `@tabler/icons-react/dynamic-imports` entry points, and fix `dynamic-imports`, whose loaders imported non-existent `./icons/*.ts` files instead of the built `.mjs` modules. The `icons` and `iconsList` namespaces exported from the main entry are now marked `@deprecated` in favour of these entries and per-icon imports; they keep working and will be removed in the next major version.

- [#1722](https://github.com/tabler/tabler-icons/pull/1722) [`8cb1ff4`](https://github.com/tabler/tabler-icons/commit/8cb1ff4ececd975ea8ffac02dfcca18195436921) - Added `/* @__PURE__ */` annotations, an `exports` map and typed `@tabler/icons-react/icons/*` per-icon imports.

### Patch Changes

- Updated dependencies [[`e45f1c1`](https://github.com/tabler/tabler-icons/commit/e45f1c1d0cdc8d033a7143fb19dd3c437a79152d)]:
  - @tabler/icons@3.52.0

## 3.51.0

### Patch Changes

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
