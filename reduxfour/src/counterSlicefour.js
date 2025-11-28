import {createSlice} from "@reduxjs/toolkit";
const initialstate={
    count:0,
}
export const counterSlicefour=createSlice({
    name:"counter",
    reducers:{
        increment:(state)=>{state.count=state.count+1},
        decrement:(state)=>{state.count=state.count-1},
    
},
initialState:initialstate,
})

export default counterSlicefour.reducer;
export const{increment,decrement}=counterSlicefour.actions;
