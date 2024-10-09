// src/store/slices/browserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth || 0,
  breakpoint: "xl", // default breakpoint
};

const breakpointsSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    setWidth(state, action) {
      state.width = action.payload;
    },
    setBreakpoint(state, action) {
      state.breakpoint = action.payload;
    },
  },
});

export const { setWidth, setBreakpoint } = breakpointsSlice.actions;

export default breakpointsSlice.reducer;
