import { forwardRef, createElement } from 'react';
import PropTypes from 'prop-types';
import defaultAttributes from './defaultAttributes';

export default (iconName, iconNamePascal, iconNode) => {
  const Component = forwardRef(
      ({ color = 'currentColor', size = 24, stroke = 2, children, ...rest }, ref) =>
          createElement(
              'svg',
              {
                ref,
                ...defaultAttributes,
                width: size,
                height: size,
                stroke: color,
                strokeWidth: stroke,
                className: `tabler-icon tabler-icon-${iconName}`,
                ...rest,
              },
              [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...(children || [])],
          ),
  );

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  Component.displayName = `${iconNamePascal}`;

  return Component;
};
