import { useState } from 'react'
import './App.css'
import { IconAd, IconAdOff } from '@tabler/icons-react-native';
import IconAdFilled from '@tabler/icons-react-native/IconAdFilled'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div className="App">
      <a onClick={() => setActive(!active)}>
        {active ? <IconAdOff size={48} /> : <IconAd size={48} />}
      </a>
      <IconAd size={48} strokeWidth={1} />
      <IconAdOff size={48} strokeWidth={1.5} />
      <IconAdFilled size={48} strokeWidth={2} />
    </div>
  );
}

export default App
