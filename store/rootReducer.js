import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import reducer from "./userReducer";

const rootReducer = combineReducers({
  detail: detailReducer,

  user: reducer,
});

export default rootReducer;
