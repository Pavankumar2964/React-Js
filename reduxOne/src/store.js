import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSliceOne";
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})