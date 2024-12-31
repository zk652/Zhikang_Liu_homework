import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask, editTask } from "../redux/task/taskActions";

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(todo.id, { title: todoTitle }));
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTask(todo.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          style={{ marginLeft: "10px", marginTop: "8px" }}
        >
          {todo.title}
        </span>
      )}
      <button
        onClick={() => dispatch(removeTask(todo.id))}
        style={{ marginLeft: "auto" }}
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
