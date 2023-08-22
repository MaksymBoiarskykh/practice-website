import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "toolkit",
  initialState: {
    value: "ligthTheme",
  },
  reducers: {
    lightTheme(state) {
      state.value = "ligthTheme";
    },
    darkTheme(state) {
      state.value = "darkTheme";
    },
  },
});

export const sliceTheme = themeSlice.reducer;
export const { lightTheme, darkTheme } = themeSlice.actions;
