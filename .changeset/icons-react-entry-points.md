---
"@tabler/icons-react": minor
---

Add typed `@tabler/icons-react/icons-list` and `@tabler/icons-react/dynamic-imports` entry points, and fix `dynamic-imports`, whose loaders imported non-existent `./icons/*.ts` files instead of the built `.mjs` modules. The `icons` and `iconsList` namespaces exported from the main entry are now marked `@deprecated` in favour of these entries and per-icon imports; they keep working and will be removed in the next major version.
