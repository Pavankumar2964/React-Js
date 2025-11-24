import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store";

const initialState={
    count:0,
};
export const counterSlice=createSlice({
    name:"counter",
    reducers:{
        increment:(store)=>{
            store.count+=1;
        },
        decrement:(store)=>{
            store.count--;
        },
        reset:(store)=>{
            store.count=0;
        },
    },
    initialState:initialState,
});

export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;