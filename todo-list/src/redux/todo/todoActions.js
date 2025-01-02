import axios from "axios";

export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_CHECKED_TODOS = "REMOVE_CHECKED_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";

const apiUrl = "http://localhost:5000/todos";

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get(apiUrl);
  dispatch({
    type: FETCH_TODOS,
    payload: response.data,
  });
};

export const addTodo = (todo) => async (dispatch) => {
  const response = await axios.post(apiUrl, todo);
  dispatch({
    type: ADD_TODO,
    payload: response.data,
  });
};

export const removeTodo = (id) => async (dispatch) => {
  await axios.delete(`${apiUrl}/${id}`);
  dispatch({
    type: REMOVE_TODO,
    payload: id,
  });
};

export const removeCheckedTodos = () => async (dispatch, getState) => {
  const checkedTodos = getState().todo.todos.filter((todo) => todo.completed);
  await Promise.all(
    checkedTodos.map((todo) => axios.delete(`${apiUrl}/${todo.id}`))
  );
  dispatch({
    type: REMOVE_CHECKED_TODOS,
  });
};

export const toggleTodo = (id) => async (dispatch, getState) => {
  const todo = getState().todo.todos.find((t) => t.id === id);
  const response = await axios.patch(`${apiUrl}/${id}`, {
    completed: !todo.completed,
  });
  console.log(response);
  dispatch({
    type: TOGGLE_TODO,
    payload: response.data,
  });
};

export const editTodo = (newTodo) => async (dispatch) => {
  const response = await axios.patch(`${apiUrl}/${newTodo.id}`, newTodo);
  dispatch({
    type: EDIT_TODO,
    payload: response.data,
  });
};
