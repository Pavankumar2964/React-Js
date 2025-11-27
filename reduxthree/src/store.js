import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSliceThree";
export const store=configureStore({
    reducer:{
        counter:counterReducer,

    }
})
