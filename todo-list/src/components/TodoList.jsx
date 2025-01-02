import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import {
  addTodo,
  fetchTodos,
  removeCheckedTodos,
} from "../redux/todo/todoActions";
import ProgressBar from "./ProgressBar";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(
      addTodo({
        id: String(+todos[todos.length - 1].id + 1),
        task: newTask,
        completed: false,
      })
    );
    setNewTask("");
  };
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>+</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <ProgressBar completedTasks={completedTodos} totalTasks={todos.length} />
      <button onClick={() => dispatch(removeCheckedTodos())}>
        Remove checked X
      </button>
    </div>
  );
}
