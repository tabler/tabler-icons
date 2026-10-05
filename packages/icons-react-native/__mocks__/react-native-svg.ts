import { createElement, forwardRef } from 'react';
import type { ReactNode } from 'react';

// `react-native-svg` only renders inside a React Native runtime. For tests the
// components are replaced with the DOM elements of the same name, so icons can
// be rendered and inspected with jsdom.
const createMock = (tag: string) => {
  const Mock = forwardRef<SVGElement, { children?: ReactNode }>((props, ref) =>
    createElement(tag, { ...props, ref }),
  );
  Mock.displayName = tag;

  return Mock;
};

export const Svg = createMock('svg');
export const Circle = createMock('circle');
export const Ellipse = createMock('ellipse');
export const G = createMock('g');
export const Line = createMock('line');
export const Path = createMock('path');
export const Polygon = createMock('polygon');
export const Polyline = createMock('polyline');
export const Rect = createMock('rect');

export default Svg;
