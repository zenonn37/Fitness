import { combineReducers } from "redux";
import { programReducer } from "./programReducer";

export default combineReducers({
  programs: programReducer
});
