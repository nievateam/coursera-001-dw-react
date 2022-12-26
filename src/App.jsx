import { useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'
import ContactInfo from './components/ContactInfo'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <ContactInfo />
      <Menu />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
