import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  FETCH_TASK,
} from "./taskTypes";

const initialState = {
  todos: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case TOGGLE_TASK:
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

export default taskReducer;
