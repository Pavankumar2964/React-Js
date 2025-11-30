import { configureStore} from "@reduxjs/toolkit";
import  userReducer from "./userSliceOne";

export const store = configureStore({
    reducer:{
        userInfo:userReducer,
    }
})