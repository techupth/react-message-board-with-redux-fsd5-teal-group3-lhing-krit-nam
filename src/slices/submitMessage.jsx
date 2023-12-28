import { createSlice } from "@reduxjs/toolkit";
// handdle submit
const initialState = [];

export const addTextSlice = createSlice({
  name: "addMessage",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
      return state;
    },
    delText: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const { addText, delText } = addTextSlice.actions;
export default addTextSlice.reducer;
