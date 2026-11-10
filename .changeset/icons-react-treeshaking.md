---
"@tabler/icons-react": minor
---

Improve tree-shaking and add per-icon imports. Icon components are now marked `/* @__PURE__ */`, so unused icons are dropped even when a bundler cannot rely on `sideEffects` (e.g. when the icons are re-bundled into a single file). The package also gets an `exports` map with a typed per-icon subpath: `import IconHome from '@tabler/icons-react/icons/IconHome'` loads a single module instead of the whole index, which speeds up dev servers and tests. Existing `@tabler/icons-react/dist/*` deep imports keep working.
