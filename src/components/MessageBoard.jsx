import { useSelector, useDispatch } from "react-redux";
import { addText } from "../slices/messageBoardSlice";
import { submitText, deleteText } from "../slices/displayTextSlice";
function MessageBoard() {
  // state ของ input
  const textResult = useSelector((state) => {
    return state.text;
  });
  // state ของ ที่โชว์ข้อความ
  const display = useSelector((state) => {
    return state.display;
  });
  const dispatch = useDispatch();
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => dispatch(addText(event.target.value))}
            value={textResult}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => dispatch(submitText(textResult))}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {display.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(deleteText(index));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
