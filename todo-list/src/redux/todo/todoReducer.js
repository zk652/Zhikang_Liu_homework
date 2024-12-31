import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_CHECKED_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./todoActions";

const initialState = {
  todos: [
    {
      id: 1,
      task: "read the book(at least 5 pages)",
      completed: false,
    },
    {
      id: 2,
      task: "buy dog food",
      completed: true,
    },
    {
      id: 3,
      task: "call my parents",
      completed: false,
    },
    {
      id: 4,
      task: "clean my working place",
      completed: false,
    },
    {
      id: 5,
      task: "kill Bill",
      completed: true,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case REMOVE_CHECKED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
