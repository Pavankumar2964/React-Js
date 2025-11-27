import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0,
}
export const counterSliceOne=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementcount:(state)=>{state.value=state.value+1
            
        },
        decrementcount:(state)=>{state.value=state.value-1

        },
        reset:(state)=>{state.value=state.value= 0}
    }
})
export default counterSliceOne.reducer;
export const{incrementcount,decrementcount,reset}=counterSliceOne.actions;