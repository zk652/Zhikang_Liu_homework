import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const EDIT_TASK = "EDIT_TASK";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(apiUrl);
  dispatch({
    type: FETCH_USERS,
    payload: response.data,
  });
};
