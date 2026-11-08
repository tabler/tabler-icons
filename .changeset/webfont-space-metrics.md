---
'@tabler/icons-webfont': patch
---

Add `U+20` to the `unicode-range` of the `core` chunk so that browsers take the line metrics from Tabler Icons and not from the system fallback font. Since 3.50.0 icons rendered taller than `1em` and sat too high in their line box.
