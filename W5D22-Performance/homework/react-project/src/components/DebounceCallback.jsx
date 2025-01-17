import { useCallback } from "react";
import { useState } from "react";

function debounce(func, delay) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function apiCall(query) {
  console.log("api called...", query);
}

export default function DebounceCallback() {
  const [text, setText] = useState("");

  const debounceApiCall = useCallback(debounce(apiCall, 1000), []);

  const handleChange = (e) => {
    setText(e.target.value);
    debounceApiCall(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
