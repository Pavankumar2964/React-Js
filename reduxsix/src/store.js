import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlicesix";

 export const store=configureStore({
    reducer:{
        counter:counterReducer,
       

    }
    
 })
