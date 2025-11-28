import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from "react-redux";
import { store } from './store';
import { decrement, increment } from './counterSlicefour';

function App() {
 const count =useSelector((store)=>store.counter.count);
 const dispatch=useDispatch();
 console.log(count);

  return (
    <>
<h2>
  counter value:{count}
</h2>
<button onClick={()=>{dispatch(increment())}}>Increment</button>
<button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App
