import icons from '../data/icons.json'

export const Sprite = () => {

  return <svg style={{ display: 'none' }}>
    {icons.map(i => (
        <symbol
            key={i.name}
            id={`icon-${i.name}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{ __html: i.content }}
        />
    ))}
  </svg>
}


