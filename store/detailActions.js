import axios from "axios";
import {
  DETAILS_FAILURE,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  UPDATED_DETAILS_SUCCESS,
} from "./types";

export const details_request = () => {
  return {
    type: DETAILS_REQUEST,
  };
};
const details_failure = (error) => {
  return {
    type: DETAILS_FAILURE,
    payload: error,
  };
};

const _readDetail = (users) => {
  return {
    type: DETAILS_SUCCESS,
    payload: users,
  };
};
const _updateDetail = (data) => {
  return {
    type: UPDATED_DETAILS_SUCCESS,
    payload: data,
  };
};

export const readDetail = (id = 1) => {
  return async (dispatch) => {
    try {
      dispatch(details_request());
      id = { id: +id };
      const { data } = await axios.post("/api/detail", { data: id });
      dispatch(_readDetail(data));
    } catch (err) {
      const errMsg = err.message;
      return dispatch(details_failure(errMsg));
    }
  };
};

export const updateDetail = (user = null) => {
  return async (dispatch) => {
    try {
      dispatch(details_request());
      const { data } = await axios.put("/api/detail", user);
      dispatch(_updateDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
};
