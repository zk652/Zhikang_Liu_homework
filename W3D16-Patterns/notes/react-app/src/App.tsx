import { useEffect, useRef, useState } from "react";
import "./App.css";
import useLocalStorage from "./customHook/useLocalStorage";
import useUpdateLogger from "./customHook/useUpdateLogger";
import useToggle from "./customHook/useToggle";
import useCounter from "./customHook/useCounter";
import HOC from "./HOC/hoc-app";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  // cause infinite loop
  // const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(1);

  const prevName = useRef("");

  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  const [counter, increase, decrease, restart] = useCounter();

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current += 1;
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>

      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden text</h1>}
      <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
      {isVisible2 && <h1>Hidden text</h1>}

      <hr />
      <h1>Custom Hook</h1>
      <div>
        <p>{counter}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={restart}>Restart</button>
      </div>

      <hr />
      <h1>HOC</h1>
      <HOC />
    </>
  );
}

export default App;
