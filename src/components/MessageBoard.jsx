import { useSelector, useDispatch } from "react-redux";
import { inputText } from "../slices/messageBoardSlice";
import { addText, delText } from "../slices/submitMessage";

/* step 4 : import useSelector fn เพื่อมาเลือกstate ที่เราสร้าง*/

function MessageBoard() {
  const inputTextMessage = useSelector((state) => {
    return state.inputMessage;
  });

  const dispatch = useDispatch();

  const addTextMessage = useSelector((state) => {
    return state.addMessage;
  });
  console.log(addTextMessage);
  // const [inputText, setInputText] = useState("");
  // const [addText, setAddText] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newAddText = [...addText];
  //   newAddText.push(inputText);
  //   setAddText(newAddText);
  // };

  // const handleDel = (textIndex) => {
  //   const newAddText = [...addText];
  //   newAddText.splice(textIndex, 1);
  //   setAddText(newAddText);
  // };

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
            onChange={(e) => {
              dispatch(inputText(e.target.value));
            }}
            value={inputTextMessage}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => dispatch(addText(inputTextMessage))}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {addTextMessage.map((item, index) => {
          return (
            <div className="message">
              {<h1>{item}</h1>}
              <button
                className="delete-button"
                onClick={() => dispatch(delText(index))}
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
