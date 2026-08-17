// Exercises the public type surface of @tabler/icons-react.
//
// Deliberately imports no individual icon: the CI build runs with ICONS_LIMIT,
// so which Icon* components exist varies. Everything referenced here is part of
// the hand-written runtime and is always present.

import { createReactComponent } from '@tabler/icons-react';
import type { Icon, IconNode, IconProps, TablerIcon } from '@tabler/icons-react';

// IconNode is the type most likely to rot: it has historically been defined in
// terms of React types that come and go between @types/react majors.
const node: IconNode = [
  ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
  ['circle', { cx: '12', cy: '7.5', r: '.5', fill: 'currentColor', key: 'svg-1' }],
];

// Building a component exercises the createElement overloads that IconNode feeds.
const OutlineIcon: TablerIcon = createReactComponent('outline', 'accessible', 'Accessible', node);
const FilledIcon: TablerIcon = createReactComponent('filled', 'accessible-filled', 'AccessibleFilled', node);

// A TablerIcon must remain assignable to the looser Icon alias.
const asIcon: Icon = OutlineIcon;

// Props must accept the documented set plus arbitrary SVG attributes.
const props: IconProps = {
  size: 48,
  stroke: 1.5,
  color: 'red',
  title: 'Accessible',
  className: 'ui-icon',
  style: { opacity: 0.5 },
  'aria-hidden': true,
  onClick: () => {},
};

// Both string and number are supported for size/stroke.
const stringySizes: IconProps = { size: '2rem', stroke: '1.5' };

export { OutlineIcon, FilledIcon, asIcon, props, stringySizes };
