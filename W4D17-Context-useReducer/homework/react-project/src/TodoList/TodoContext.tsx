import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import axios from "axios";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => {
      dispatch({ type: "SET_TODOS", payload: res.data });
    });
  }, []);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
