import { configureStore } from "@reduxjs/toolkit";
// Fix: Import the default export (which is the reducer) and name it counterReducer
import counterReducer from "./CounterSlice"; 

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});