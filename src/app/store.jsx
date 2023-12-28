// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../slices/messageBoardSlice";
import displayTextSlice from "../slices/displayTextSlice";

export const store = configureStore({
  reducer: { text: textSlice, display: displayTextSlice },
});
