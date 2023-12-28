import { createSlice } from "@reduxjs/toolkit";

/* สร้าง Slice และ Reducer ก่อน 
และประกาศตัวแปรเพื่อมาเก็บค่าตัวแปร Stateตั้งต้น*/
const initialState = "";

/*ให้ export ตัว slice objectที่จะเก็บ action
ตั้งชื่อให้กับ slice
*/

export const inputTextSlice = createSlice({
  name: "inputMessage",
  initialState,
  reducers: {
    inputText: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { inputText } = inputTextSlice.actions;
export default inputTextSlice.reducer;
