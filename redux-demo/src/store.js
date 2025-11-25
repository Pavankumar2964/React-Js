import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
// import userReducer from "./userSlice"; // This file wasn't provided, so I commented "; // Import the counter reducer

export const store = configureStore({
  reducer: {
    // user: userReducer, 
    counter: counterSlice, // Register the counter reducer
  },
});