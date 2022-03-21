//ES6
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

//The provider takes it in as a prop and provides it to the app
export default store;
