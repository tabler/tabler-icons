import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Path } from 'react-native-svg';
import {
  IconAccessible,
  IconAccessibleFilled,
  createReactComponent,
} from './src/tabler-icons-react-native';

describe('React Native Icon component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render icon component', () => {
    const { container } = render(<IconAccessible />);
    expect(container.getElementsByTagName('svg').length).toBeGreaterThan(0);
  });

  it('should render every node of the icon', () => {
    const { container } = render(<IconAccessible />);
    const paths = container.getElementsByTagName('path');

    expect(paths.length).toBe(3);
    expect(paths[0].getAttribute('d')).toBe('M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0');
  });

  it('should update svg attributes when there are props passed to the component', () => {
    const { container } = render(<IconAccessible size={48} color={'red'} strokeWidth={4} />);
    const svg = container.getElementsByTagName('svg')[0];

    expect(svg.getAttribute('width')).toBe('48');
    expect(svg.getAttribute('height')).toBe('48');
    expect(svg.getAttribute('stroke')).toBe('red');
    expect(svg.getAttribute('stroke-width')).toBe('4');
    expect(svg.getAttribute('fill')).toBe('none');
  });

  it('should pass color and stroke width down to the icon nodes', () => {
    const { container } = render(<IconAccessible color={'red'} strokeWidth={4} />);
    const path = container.getElementsByTagName('path')[0];

    expect(path.getAttribute('stroke')).toBe('red');
    expect(path.getAttribute('stroke-width')).toBe('4');
    expect(path.getAttribute('fill')).toBe('none');
  });

  it('should update svg attributes when there are props passed to the filled version of component', () => {
    const { container } = render(<IconAccessibleFilled size={48} color={'red'} />);
    const svg = container.getElementsByTagName('svg')[0];

    expect(svg.getAttribute('width')).toBe('48');
    expect(svg.getAttribute('fill')).toBe('red');
    expect(svg.getAttribute('stroke')).toBe('none');
  });

  it('should forward other props to the svg element', () => {
    const { container } = render(<IconAccessible opacity={0.5} />);
    const svg = container.getElementsByTagName('svg')[0];

    expect(svg.getAttribute('opacity')).toBe('0.5');
  });

  it('should render children after the icon nodes', () => {
    const { container } = render(
      <IconAccessible>
        <Path d="M0 0h24" />
      </IconAccessible>,
    );
    const paths = container.getElementsByTagName('path');

    expect(paths.length).toBe(4);
    expect(paths[3].getAttribute('d')).toBe('M0 0h24');
  });

  it('should add title child element to svg when title prop is passed', () => {
    const { container } = render(<IconAccessible title="Accessible Icon" />);
    const svg = container.getElementsByTagName('svg')[0];
    const title = svg.getElementsByTagName('title')[0];

    expect(title).toHaveTextContent('Accessible Icon');
  });

  it('should set display name of the component', () => {
    expect(IconAccessible.displayName).toBe('Accessible');
    expect(createReactComponent('outline', 'test', 'Test', []).displayName).toBe('Test');
  });
});
