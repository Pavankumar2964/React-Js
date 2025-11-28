import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlicefour";
export const store=configureStore({
    reducer:{counter:counterReducer,

    }
} )