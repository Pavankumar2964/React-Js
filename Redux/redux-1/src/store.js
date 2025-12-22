import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the default export

export const store = configureStore({
    reducer: {
        counter: counterReducer, // Key must match the selector in App.jsx
    },
});