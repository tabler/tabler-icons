---
'@tabler/icons-react-native': patch
---

author: @simondaigre

Don't pass the default `color` (`'currentColor'`) to the root `Svg`: React Native can't parse it, and on Android an update from a real color to it reset the icon's current color to transparent
