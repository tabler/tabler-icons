---
'@tabler/icons-react-native': patch
---

pr: #1628
author: @codecalm

Stop passing extra props (`testID`, `style`, `onPress`, …) to every node of the icon, only the root `Svg` gets them. `title` is now exposed to screen readers via accessibility props
