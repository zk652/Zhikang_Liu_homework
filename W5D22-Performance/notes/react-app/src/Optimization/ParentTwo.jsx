import React from "react";
import { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export default function ParentTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>Change name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
}
