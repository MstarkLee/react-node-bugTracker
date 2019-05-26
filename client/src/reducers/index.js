import { combineReducers } from "redux";
import bugReducer from "./bugReducers";

export default combineReducers({
  item: bugReducer
});
