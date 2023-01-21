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
      <IconMoodSmile size={48} strokeWidth={1} />
    </div>
  )
}
