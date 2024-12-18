import axios from "axios";
import { useState } from "react";

export default function Excuse() {
  const [excuse, setExcuse] = useState("");

  const fetchData = (ex: string) => {
    axios.get(`https://jsonplaceholder.typicode.com//${ex}`).then((res) => {
      setExcuse(res.data[0].title);
    });
  };

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchData("posts")}>Posts</button>
      <button onClick={() => fetchData("albums")}>Albums</button>
      <button onClick={() => fetchData("todos")}>Todos</button>
      <p>{excuse}</p>
    </div>
  );
}
