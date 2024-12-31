import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import axios from "axios";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodoContext);

  const addTodo = () => {
    axios
      .post("http://localhost:5000/todos", { title, completed: false })
      .then((res) => {
        dispatch({ type: "ADD_TODO", payload: res.data });
        setTitle("");
      });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
