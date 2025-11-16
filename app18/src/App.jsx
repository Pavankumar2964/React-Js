import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCount from './HocComponent/ClickCount'
import HoverCount from './HocComponent/HoverCount'
import HandleCounter from './RenderProps/HandleCounter'
import ClickCounterTwo from './RenderProps/ClickCounterTwo'
import HoverCounter from './RenderProps/HoverCounter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <ClickCount/>
        <br/>
        <hr/>
        <HoverCount/> */}
        <hr />

        <HandleCounter
          render={(count, increse, decrese, reset) => (
            <ClickCounterTwo
              count={count}
              increse={increse}
              decrese={decrese}
              reset={reset} />
          )} />
        <hr />
        <br />
        <HandleCounter
          render={(count, increse, decrese, reset) => (
            <HoverCounter
              count={count}
              increse={increse}
              decrese={decrese}
              reset={reset} />
          )}

        />

      </div>
    </>
  )
}

export default App
