import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  FETCH_TASK,
} from "./taskTypes";
import axios from "axios";

const apiUrl = "http://localhost:5000/todos";

export const fetchTask = () => async (dispatch) => {
  const response = await axios.get(apiUrl);
  dispatch({
    type: FETCH_TASK,
    payload: response.data,
  });

  // return {
  //   type: FETCH_TASK,
  //   payload: response.data,
  // };
};

export const addTask = (task) => async (dispatch) => {
  const response = await axios.post(apiUrl, task);
  dispatch({
    type: ADD_TASK,
    payload: response.data,
  });
};

export const removeTask = (id) => async (dispatch) => {
  await axios.delete(`${apiUrl}/${id}`);
  dispatch({
    type: REMOVE_TASK,
    payload: id,
  });
};

export const toggleTask = (id) => async (dispatch, getState) => {
  const todo = getState().task.todos.find((t) => t.id === id);
  const response = await axios.patch(`${apiUrl}/${id}`, {
    completed: !todo.completed,
  });
  dispatch({
    type: TOGGLE_TASK,
    payload: response.data,
  });
};

export const editTask = (id, updates) => async (dispatch) => {
  const response = await axios.patch(`${apiUrl}/${id}`, updates);
  dispatch({
    type: EDIT_TASK,
    payload: response.data,
  });
};
