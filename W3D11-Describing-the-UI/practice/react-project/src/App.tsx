import { useState } from "react";
import "./App.css";
import { UnclickableButton } from "./UnclickableButton";
import NewComponet from "./NewComponent";

function App() {
  const [showText, setShowText] = useState(true);

  const handleClick = (): void => {
    setShowText(!showText);
  };

  return (
    <div>
      <UnclickableButton />
      <br />
      <button onClick={handleClick}>Show/Hide</button>
      {showText && (
        <p>
          Create a component with a button and a paragraph of text. Clicking the
          button should toggle the visibility of the paragraph.
        </p>
      )}

      <NewComponet />
    </div>
  );
}

export default App;
