import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        // Renamed argument 'store' to 'state' to avoid confusion
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

// FIXED: typo changed from .acticons to .actions
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;