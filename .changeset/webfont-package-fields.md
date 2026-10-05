---
'@tabler/icons-webfont': patch
---

pr: #1633
author: @codecalm

Fix `sass` and `style` fields in `package.json` to point to `dist/`, and stop publishing the intermediate SVG fonts, which the CSS never referenced
