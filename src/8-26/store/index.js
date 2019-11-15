import { createStore, applyMiddleware } from "redux";
import userReducer from "./userReducer";
import thunk from "redux-thunk";
export default createStore(userReducer, applyMiddleware(thunk));
