import React from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./TodoList/AddTodo";
import TodoContextProvider from "./TodoList/TodoContext";
function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
