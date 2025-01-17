import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { useHistory } from "react-router-dom";

export default function AddTodo() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const { todos, addTodo } = useContext(TodoContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: String(+todos[todos.length - 1].id + 1),
      task: task,
      date: new Date().toISOString(),
      description: description,
      completed: false,
    });

    history.push("/");
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>Task: </label>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <label>Description: </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
