import { createSlice } from "@reduxjs/toolkit";

//เก็บค่าเริ่มต้นตัว ที่แสดงข้อความ
const initialState = [];

export const displayTextSlice = createSlice({
  name: "displaySlice",
  initialState: initialState,
  reducers: {
    // ปุ่ม Submit
    submitText: (state, action) => {
      const inputText = action.payload;
      state.push(inputText);
    },
    // ปุ่ม Delete
    deleteText: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
// export ตัว action ของที่แสดงข้อความ
export const { submitText, deleteText } = displayTextSlice.actions;
// export ก้อน state ใช้ setup ใน store
export default displayTextSlice.reducer;
