import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { Link } from "react-router-dom";
export default function Main() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h1>Main Page</h1>
      <h2>Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Link to={`/todos/${todo.id}`}>
                {todo.task} - {todo.completed ? "True" : "False"}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/add">
        <h3>Add Todo</h3>
      </Link>
    </div>
  );
}
