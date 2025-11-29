import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './UserSlice';

// 1. Import your reducers (Slices) here once you create them
// import userReducer from './userSlice'; 

const store = configureStore({
  reducer: {
    users:userSlice
  },
});

// CRITICAL: This must be a default export to match "import store from..." in main.jsx
export default store