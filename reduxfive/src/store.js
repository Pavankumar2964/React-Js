import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlicefive";
export const store =configureStore({
    reducer:{counter:counterReducer

    }
})