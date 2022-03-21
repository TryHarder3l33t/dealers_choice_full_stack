import {
  FAILURE,
  REQUEST,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
        error: "",
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => action.payload.id !== user.id),
        error: "",
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default reducer;
