import { configureStore } from "@reduxjs/toolkit";
import inputTextSlice from "../slices/messageBoardSlice";
import submitMessage from "../slices/submitMessage";

/* step 2 : import fn ไว้สร้าง store ขึ้นมา 
แล้ว import slice ที่เราสร้างไว้มาใส่ให้กับreducer */

export const store = configureStore({
  reducer: {
    inputMessage: inputTextSlice,
    addMessage: submitMessage,
  },
});
