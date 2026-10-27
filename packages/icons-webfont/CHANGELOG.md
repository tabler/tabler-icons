# @tabler/icons-webfont

## 3.50.0

### Minor Changes

- [#1654](https://github.com/tabler/tabler-icons/pull/1654) [`668df3f`](https://github.com/tabler/tabler-icons/commit/668df3f00a3ba8f5aa386426b9242837ae45af6e) - Split the webfont into chunks loaded with `unicode-range`: one with the 300 most popular icons and one per icon category (for the filled font: the popular icons and the rest). A page now downloads only the chunks with the icons it shows, e.g. about 40 KB instead of about 500 KB when it uses only popular icons. Set `$ti-font-split: false` in SCSS to load the single font file as before.

### Patch Changes

- Updated dependencies []:
  - @tabler/icons@3.50.0

## 3.49.0

### Patch Changes

- [#1616](https://github.com/tabler/tabler-icons/pull/1616) [`cc89283`](https://github.com/tabler/tabler-icons/commit/cc892831fe45ec012be1ebb8539ae2b19ddf5ab2) - Fix filled `home` webfont glyph having zero width in Chrome

- [#1633](https://github.com/tabler/tabler-icons/pull/1633) [`3ee9aeb`](https://github.com/tabler/tabler-icons/commit/3ee9aeb1613cb0e72b5f112cf35dfe05b5f6a7ad) - Fix `sass` and `style` fields in `package.json` to point to `dist/`, and stop publishing the intermediate SVG fonts, which the CSS never referenced

- [#1624](https://github.com/tabler/tabler-icons/pull/1624) [`5387c3e`](https://github.com/tabler/tabler-icons/commit/5387c3ef144934d3a9c399c1451bc986b9eeb296) - Make webfont builds reproducible, so font files no longer change between builds of the same icons

- [#1620](https://github.com/tabler/tabler-icons/pull/1620) [`5529115`](https://github.com/tabler/tabler-icons/commit/55291156b4249946fae2862ce477aa892e39f906) - Drop the unused `svgtofont` dependency
- Updated dependencies [[`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01), [`c3ca84f`](https://github.com/tabler/tabler-icons/commit/c3ca84f875a0c77bb2620127babe5a66d2714a01)]:
  - @tabler/icons@3.49.0
