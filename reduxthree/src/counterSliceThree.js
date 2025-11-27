import {createSlice} from "@reduxjs/toolkit";


const initialStatevalue = {
    count: 0,
}
export const counterSliceThree = createSlice({
    name: "counter",
   
    reducers:{
        increment:(state)=>{state.count=state.count+1}, 
        decrement:(state)=>{state.count=state.count-1},
        reset:(state)=>{state.count=0}  
    },
     initialState: initialStatevalue,
})
export default counterSliceThree.reducer
export const{increment,decrement,reset}=counterSliceThree.actions