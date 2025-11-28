import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment, reset } from './counterSlicesix';

function App() {
  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch();
console.log(count)
  return (
    <>
      <h2>
        count value:{count}
      </h2>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </>
  )
}

export default App
