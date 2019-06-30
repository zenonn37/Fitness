import { combineReducers } from "redux";
import { programReducer } from "./programReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  programs: programReducer,
  auth: authReducer
});
