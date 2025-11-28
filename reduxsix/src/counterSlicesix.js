import {createSlice} from "@reduxjs/toolkit";
const initialState={
    count:0,
}
export const counterSlicesix=createSlice({
    name:"counter",
    reducers:{
increment:(state)=>{state.count=state.count+1},
decrement:(state)=>{state.count=state.count-1},
reset:(state)=>{state.count=0}
    },
    initialState:initialState,
    
})
export default counterSlicesix.reducer;
export const {increment,decrement,reset}=counterSlicesix.actions;