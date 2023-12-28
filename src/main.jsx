import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

/* step 3 : setup ให้reactสามารถดึงstate จาก store นำมา renderบนหน้าเว็บได้ 
ด้วย fn Provider

3.1 ระบุ props ของ Privider ให้เป็นสิ่งที่เรา import มา*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
