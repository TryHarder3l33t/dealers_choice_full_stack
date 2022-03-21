import axios from "axios";
import { DETAILS_SUCCESS, UPDATED_DETAILS_SUCCESS } from "./types";

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
      //dispatch(request());
      id = { id: +id };
      const { data } = await axios.post("/api/detail", { data: id });
      dispatch(_readDetail(data));
    } catch (err) {
      const errMsg = err.message;
      //return dispatch(failure(errMsg));
    }
  };
};

export const updateDetail = (user = null) => {
  return async (dispatch) => {
    try {
      console.log("this is the user");
      console.log(user);
      const { data } = await axios.put("/api/detail", user);
      console.log("almost there");
      console.log(data);
      dispatch(_updateDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
};
