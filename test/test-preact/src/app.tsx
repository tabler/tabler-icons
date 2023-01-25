import { useState } from 'preact/hooks'
import './app.css'

import { IconHeart, IconHeartFilled, IconMoodSmile } from '@tabler/icons-preact'


export function App() {
  const [active, setActive] = useState(false)

  return (
    <div className="App">
      <a onClick={() => setActive(!active)}>
        {active ? <IconHeartFilled size={48} /> : <IconHeart size={48} />}
      </a>
      <IconMoodSmile size={48} stroke={1} />
      <IconMoodSmile size={48} stroke={1.5} />
      <IconMoodSmile size={48} stroke={2} />
    </div>
  )
}
