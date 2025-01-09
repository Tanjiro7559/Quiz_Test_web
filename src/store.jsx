// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create an authentication slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Export actions for components to dispatch
export const { login, logout } = authSlice.actions;

// Create and export the Redux store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
