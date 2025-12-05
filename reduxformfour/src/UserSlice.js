// UserSlice.js (Corrected)
import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react"; // Not needed

const initialUsers = {
    usersArry: [
       {
      id: 1,
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      role: "admin",
      age: 32,
      city: "Bangalore",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      role: "user",
      age: 27,
      city: "Hyderabad",
    },
    {
      id: 3,
      name: "Rohit Reddy",
      email: "rohit.reddy@example.com",
      role: "editor",
      age: 29,
      city: "Chennai",
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      email: "lakshmi.devi@example.com",
      role: "user",
      age: 24,
      city: "Vijayawada",
    },
    {
      id: 5,
      name: "Manoj Varma",
      email: "manoj.varma@example.com",
      role: "admin",
      age: 34,
      city: "Mumbai",
    },
    ],
};
export const UserSlice = createSlice({
    name: "users",
    initialState: initialUsers,
    reducers: {
        createUserAction: (state, action) => {
            // 1. Calculate the new ID
            action.payload.id = state.usersArry.length + 1;
            // 2. Add the new user to the array
            state.usersArry.push(action.payload); // <-- **THIS IS THE FIX**
        },
        deleteUserAction: (state, action) => {
            console.log(action.payload);
            state.usersArry = state.usersArry.filter((user) => {
                return user.id !== action.payload.id;
            });
        },
    }

});
export const { createUserAction, deleteUserAction } = UserSlice.actions;
export default UserSlice.reducer;