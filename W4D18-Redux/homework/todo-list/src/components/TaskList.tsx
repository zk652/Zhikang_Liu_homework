import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { addTask, fetchTask } from "../redux/task/taskActions";
import axios from "axios";

const TaskList = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.task.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: String(+todos[todos.length - 1].id + 1),
      title: input,
      completed: false,
    };
    dispatch(addTask(newTask));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;
