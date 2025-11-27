import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment, reset } from './counterSliceThree';

function App() {
  const counter= useSelector((state)=>state.counter.count);
  const dispatch=useDispatch();
  console.log(counter)

  return (
    <>
     <h2>count value :{counter}</h2>
     <button onClick={()=>{dispatch(increment())}}>Increment</button>
     <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
     <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </>
  )
}

export default App
