import { DETAILS_SUCCESS, UPDATED_DETAILS_SUCCESS } from "./types";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_SUCCESS:
      return {
        user: action.payload,
      };
    case UPDATED_DETAILS_SUCCESS:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
