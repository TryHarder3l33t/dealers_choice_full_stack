import {
  FAILURE,
  REQUEST,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from "./types";

import axios from "axios";

export const request = () => {
  return {
    type: REQUEST,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  };
};

const _fetchUsers = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

//async action creator aka thunk
//Returns functions (dispatch)=> and takes dispatch as an argument vs normal action creators that return actions {}
//https://jsonplaceholder.typicode.com/users
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(request());
      const { data } = await axios.get("api/users");
      const users = data;
      dispatch(_fetchUsers(users));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(failure(errMsg));
    }
  };
};

const _createUser = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUser = (name = "Unicorn default") => {
  return async (dispatch) => {
    try {
      dispatch(request());
      name = { name: name };
      const { data } = await axios.post("/api/users", name);
      dispatch(_createUser(data));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(failure(errMsg));
    }
  };
};

const _deleteUser = (user) => {
  console.log("this is the payload");
  console.log(user);
  return {
    type: DELETE_USER_SUCCESS,
    payload: user,
  };
};

export const deleteUser = (id = 1) => {
  return async (dispatch) => {
    console.log(id);

    try {
      dispatch(request());
      id = { id: +id };
      console.log(id.id);
      const { data } = await axios.delete("/api/users", { data: id });
      console.log("This is after");
      console.log(data);
      dispatch(_deleteUser(data));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(failure(errMsg));
    }
  };
};
