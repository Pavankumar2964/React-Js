import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponentOne from './Component1/MainComponentOne'
import MainComponentTwo from './Component2/MainComponentTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <MainComponentTwo/>
      </div>
   
    </>
  )
}

export default App
