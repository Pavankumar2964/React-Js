import {configureStore} from "@reduxjs/toolkit";
import counterReducer from"./counterSliceTwo";
export const store= configureStore({
    reducer:{
        counter:counterReducer
    }
});