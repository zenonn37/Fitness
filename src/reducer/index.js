import { combineReducers } from "redux";
import { programReducer } from "./programReducer";
import { authReducer } from "./authReducer";
import { excerciseReducer } from "./excerciseReducer";

export default combineReducers({
  programs: programReducer,
  auth: authReducer,
  excercise: excerciseReducer
});
