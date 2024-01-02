import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);
  const focusInput = useRef(null);

  const changeInput = (e) => {
    setValue(e.target.value);
  };

  const addList = () => {
    if (value.trim().length > 0) setLists((prev) => [...prev, value]);
    setValue("");
    focusInput.current.focus();
  };

  const removeItem = (index) => {
    setLists((prev) => prev.filter((_, i) => i !== index));
  };

  const removeAll = () => {
    setLists([]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>ToDo React</h1>
      <div className="main-wrapper">
        <div className="input-add">
          <input
            ref={focusInput}
            type="text"
            value={value}
            onChange={changeInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") addList();
            }}
          ></input>
          <button onClick={addList}>Add ToDo</button>
        </div>

        <div className="lists">
          <ol>
            {lists.map((item, index) => (
              <div className="list-remove" key={index}>
                <li>{item}</li>
                <button className="remove" onClick={() => removeItem(index)}>
                  X
                </button>
              </div>
            ))}
          </ol>
        </div>

        <button onClick={removeAll}>Remove All</button>
      </div>
    </>
  );
}

export default App;
