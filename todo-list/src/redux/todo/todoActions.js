export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_CHECKED_TODOS = "REMOVE_CHECKED_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const removeCheckedTodos = () => {
  return {
    type: REMOVE_CHECKED_TODOS,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const editTodo = (newTodo) => {
  return {
    type: EDIT_TODO,
    payload: newTodo,
  };
};
