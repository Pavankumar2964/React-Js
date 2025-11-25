import {configureStore} from "@reduxjs/toolkit";
import { counterSliceOne } from "./counterSliceOne";


export const store= configureStore({
  
    reducers:{
        counter:counterSliceOne,
    }
})