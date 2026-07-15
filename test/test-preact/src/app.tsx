import { useState } from 'preact/hooks'
import './app.css'

import { IconAd, IconAdOff, IconAdFilled, IconHeartFilled } from '@tabler/icons-preact';

const colors = ['#e64980', '#4dabf7', '#51cf66', '#ffd43b', '#845ef7']

export function App() {
  const [active, setActive] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

  return (
    <div className="App">
      <button type="button" className="toggle" onClick={() => setActive(!active)}>
        {active ? <IconAdOff size={48} /> : <IconAd size={48} />}
      </button>
      <IconAd size={48} stroke={1} />
      <IconAdOff size={48} stroke={1.5} />
      <IconAdFilled size={48} stroke={2} />
      <button type="button" className="color-toggle" onClick={() => setColorIndex((colorIndex + 1) % colors.length)}>
        <IconHeartFilled size={48} color={colors[colorIndex]} />
      </button>
    </div>
  );
}
