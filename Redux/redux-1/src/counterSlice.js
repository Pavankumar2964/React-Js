import { createSlice } from "@reduxjs/toolkit";

// REMOVED: import { increment } ... (Causes naming conflict)
// REMOVED: import { store } ... (Causes circular dependency)

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        // Renamed 'store' to 'state' to be semantically correct
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count--;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;