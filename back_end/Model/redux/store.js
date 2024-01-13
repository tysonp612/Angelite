// import store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define a slice for managing color
const colorSlice = createSlice({
  name: "color",
  initialState: { value: "red" },
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
  },
});

export const { setColor } = colorSlice.actions;

export default store;
