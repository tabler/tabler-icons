---
'@tabler/icons-webfont': minor
---

Split the webfont into chunks loaded with `unicode-range`: one with the 300 most popular icons and one per icon category. A page now downloads only the chunks with the icons it shows, e.g. about 40 KB instead of about 500 KB when it uses only popular icons. Set `$ti-font-split: false` in SCSS to load the single font file as before.
