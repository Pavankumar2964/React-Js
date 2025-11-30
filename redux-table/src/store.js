import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Import the default export (which is the reducer)

export const store = configureStore({
    reducer: {
        userInfo: userReducer, // Pass the reducer function
    }
});