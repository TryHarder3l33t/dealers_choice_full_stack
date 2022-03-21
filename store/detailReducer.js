import {
  DETAILS_FAILURE,
  DETAILS_REQUEST,
  DETAILS_SUCCESS,
  UPDATED_DETAILS_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        users: {},
        error: action.payload,
      };
    case DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case UPDATED_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
