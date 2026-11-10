---
"@tabler/icons": patch
---

Add a root `.` export (resolving to `icons.json`) and explicit exports for `icons.json`, `tabler-nodes-*.json` and `package.json`. Previously the `./*` wildcard mapped every subpath into `./icons/`, so `import '@tabler/icons'` and `import '@tabler/icons/icons.json'` failed to resolve (e.g. Bundlephobia: "Package subpath '.' is not defined by exports").
