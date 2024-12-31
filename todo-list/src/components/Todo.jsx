import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../redux/todo/todoActions";
import { useState } from "react";

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTodo({ ...todo, task: editedTask }));
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
          }}
        >
          {todo.task}
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
    </div>
  );
}
