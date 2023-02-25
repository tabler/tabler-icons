import { Icon } from './Icon.js'

export const Toolbar = ({ items, strokeWidth, setIcon }) => {
  return <div className="toolbar">
    {items.split('|').map((group, i) => (
        <div className="buttons" key={i}>
          {group.split(',').map(i =>
              <div className="button" key={i} onClick={() => setIcon(i)}>
                <Icon name={i} strokeWidth={strokeWidth} />
              </div>
          )}
        </div>
    ))}
  </div>
}
