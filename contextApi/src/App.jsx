import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainComponentFive from './Component5/MainComponentFive'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        {/* <MainComponentTwo/> */}
        {/* <MainCompoThree/> */}
        {/* <MainComponentFour/> */}
        <MainComponentFive/>
      </div>
   
    </>
  )
}

export default App
