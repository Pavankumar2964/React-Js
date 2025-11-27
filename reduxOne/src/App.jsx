import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementcount, incrementcount, reset } from './counterSliceOne'

function App() {
const counter=useSelector((state)=>state.counter.value)
const dispatch=useDispatch()
console.log(counter)

  return (
    <>
     <h2>counter value:{counter}</h2>
     <button onClick={()=>{dispatch(incrementcount())}}>Increment</button>
      <button onClick={()=>{dispatch(decrementcount())}}>Decrement</button>
       <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </>
  )
}

export default App
