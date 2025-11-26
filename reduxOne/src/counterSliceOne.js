import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
}
export const counterSliceOne = createSlice({
    name: "counter",
    reducers: {

    },
    initialState: initialState,

})
export default counterSliceOne.reducer;