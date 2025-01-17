import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const TodoContext = createContext();

const url = "http://localhost:5000/todos";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }, []);

  const addTodo = (todo) => {
    axios.post(url, todo).then((res) => {
      setTodos((prev) => [...prev, res.data]);
    });
  };

  const updateTodo = (updatedTodo) => {
    axios.put(`${url}/${updatedTodo.id}`, updatedTodo).then((res) => {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === updatedTodo.id ? res.data : todo))
      );
    });
  };

  const removeTodo = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then(() => setTodos((prev) => prev.filter((todo) => todo.id !== id)));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
