// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

//เก็บค่าเริ่มต้นตัว input
const initialState = "";
// state ตัว input
export const textSlice = createSlice({
  name: "typingSlice",
  initialState: initialState,
  reducers: {
    // ในช่อง input
    addText: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// export ตัว action
export const { addText } = textSlice.actions;
// export ก้อน state ใช้ setup ใน store
export default textSlice.reducer;
