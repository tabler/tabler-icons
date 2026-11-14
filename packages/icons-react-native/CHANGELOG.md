# @tabler/icons-react-native

## 3.52.0

### Minor Changes

- [#1732](https://github.com/tabler/tabler-icons/pull/1732) [`0dc54db`](https://github.com/tabler/tabler-icons/commit/0dc54db55ba099be924e5ab85b09e60576da24da) - Added `icons-list` entry point to `@tabler/icons-react-native`.

### Patch Changes

- [#1732](https://github.com/tabler/tabler-icons/pull/1732) [`0dc54db`](https://github.com/tabler/tabler-icons/commit/0dc54db55ba099be924e5ab85b09e60576da24da) - Updated `icons` and `iconsList` exports of `@tabler/icons-react-native` to be marked `@deprecated`.

- [#1732](https://github.com/tabler/tabler-icons/pull/1732) [`0dc54db`](https://github.com/tabler/tabler-icons/commit/0dc54db55ba099be924e5ab85b09e60576da24da) - Added `/* @__PURE__ */` to `@tabler/icons-react-native` icons so unused ones are dropped without relying on `sideEffects`.
- Updated dependencies [[`e45f1c1`](https://github.com/tabler/tabler-icons/commit/e45f1c1d0cdc8d033a7143fb19dd3c437a79152d)]:
  - @tabler/icons@3.52.0

## 3.51.0

### Patch Changes

- [#1690](https://github.com/tabler/tabler-icons/pull/1690) [`67ae619`](https://github.com/tabler/tabler-icons/commit/67ae61992c84ae4a8cf5f840eb2c3846e3f61d00) - The `types` entries in `package.json` point at files that exist: CommonJS consumers get `.d.cts` declarations and per-icon subpath imports are typed
- Updated dependencies [[`1d35ae6`](https://github.com/tabler/tabler-icons/commit/1d35ae6181206c93ffd0f0f22e07df7fd39dca26)]:
  - @tabler/icons@3.51.0

## 3.50.0

### Patch Changes

- [#1668](https://github.com/tabler/tabler-icons/pull/1668) [`727cb04`](https://github.com/tabler/tabler-icons/commit/727cb04f91880fb601c270c4afdd9e948ef9f373) - Fix `color` being ignored by the icon nodes that fill with `currentColor` (e.g. `IconSquareRoundedCheckFilled`, the dot of `IconAccessible`): the root `Svg` now gets `color`, which react-native-svg resolves `currentColor` to
- Updated dependencies []:
  - @tabler/icons@3.50.0

## 3.49.0

### Patch Changes

- [#1634](https://github.com/tabler/tabler-icons/pull/1634) [`9fba485`](https://github.com/tabler/tabler-icons/commit/9fba485e7545e53e7fcbeb19c63fd66587c66b3e) - Stop publishing source maps, which made up about 70% of the package size

- [#1628](https://github.com/tabler/tabler-icons/pull/1628) [`c78c1b1`](https://github.com/tabler/tabler-icons/commit/c78c1b1fe36ad04a2c3911108bac531ef3493fbc) - Stop passing extra props (`testID`, `style`, `onPress`, …) to every node of the icon, only the root `Svg` gets them. `title` is now exposed to screen readers via accessibility props
- Updated dependencies [[`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01)]:
  - @tabler/icons@3.49.0
