import { createSlice, configureStore } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "counter",
  initialState: {
    activeNav: "My Agents",
  },
  reducers: {
    changeNav: (state, action) => {
      state.activeNav = action.payload;
    },
  },
});

export const { changeNav } = navigationSlice.actions;

export const store = configureStore({
  reducer: navigationSlice.reducer,
});
