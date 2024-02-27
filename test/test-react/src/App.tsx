import { useState } from 'react'
import './App.css'
import { IconAd, IconAdOff, IconAdFilled } from '@tabler/icons-react';

function App() {
  const [active, setActive] = useState(false)

  return (
    <div className="App">
      <a onClick={() => setActive(!active)}>
        {active ? <IconAdOff size={48} /> : <IconAd size={48} />}
      </a>
      <IconAd size={48} stroke={1} />
      <IconAdOff size={48} stroke={1.5} />
      <IconAdFilled size={48} stroke={2} />
    </div>
  );
}

export default App
