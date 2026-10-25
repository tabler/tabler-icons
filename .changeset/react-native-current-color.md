---
'@tabler/icons-react-native': patch
---

pr: #1668
author: @simondaigre

Fix `color` being ignored by the icon nodes that fill with `currentColor` (e.g. `IconSquareRoundedCheckFilled`, the dot of `IconAccessible`): the root `Svg` now gets `color`, which react-native-svg resolves `currentColor` to
