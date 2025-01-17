import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TodoContext } from "../Context/TodoContext";

export default function TodoDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { todos, removeTodo, updateTodo } = useContext(TodoContext);
  const todo = todos.find((t) => t.id === id);

  const [isEditingTask, setIsEditingTask] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [task, setTask] = useState(todo?.task || "");
  const [description, setDescription] = useState(todo?.description || "");

  const handleDelete = () => {
    removeTodo(id);
    history.push("/");
  };

  const handleUpdate = (info) => {
    if (info === "task") {
      updateTodo({ ...todo, task });
      setIsEditingTask(false);
    } else if (info === "completed")
      updateTodo({ ...todo, completed: !todo.completed });
    else if (info === "description") {
      updateTodo({ ...todo, description: description });
      setIsEditingDescription(false);
    }
  };

  const handleCheckBox = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <p>
        Task:{" "}
        {isEditingTask ? (
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onBlur={() => handleUpdate("task")}
            onKeyPress={(e) => e.key === "Enter" && handleUpdate("task")}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setIsEditingTask(true)}>{todo.task}</span>
        )}
      </p>
      <p>
        Description:
        {isEditingDescription ? (
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => handleUpdate("description")}
            onKeyPress={(e) => e.key === "Enter" && handleUpdate("description")}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setIsEditingDescription(true)}>
            {todo.description}
          </span>
        )}
      </p>
      <p>Date: {todo.date}</p>
      <p>
        completed:{" "}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckBox}
        />
      </p>
      <button onClick={handleDelete}>Delete</button>
      <br />
      <button onClick={() => history.push("/")}>Go back</button>
    </div>
  );
}
