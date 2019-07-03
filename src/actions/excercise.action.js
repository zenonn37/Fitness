import plank from "../api/plank";
import history from "./history";

import {
  GET_EXCERCISES,
  ADD_EXCERCISES,
  UPDATE_EXCERCISES,
  SHOW_EXCERCISES,
  DELETE_EXCERCISES,
  ERRORS
} from "../types";

plank.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access_token");

export const getExcercise = () => {
  return async dispatch => {
    try {
      const res = await plank.get("/excercises");
      dispatch({
        type: GET_EXCERCISES,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: error.message
      });
    }
  };
};
export const addExcercise = () => {
  return async dispatch => {
    try {
      const res = await plank.post("/excercises");
      dispatch({
        type: ADD_EXCERCISES,
        payload: res.data.data
      });
      history.push("/");
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: error.message
      });
    }
  };
};
export const updateExcercise = excercise => {
  return async dispatch => {
    try {
      const res = await plank.patch(`/excercises/${excercise.id}`, excercise);
      dispatch({
        type: UPDATE_EXCERCISES,
        payload: res.data.data
      });
      history.push("/");
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: error.message
      });
    }
  };
};
export const deleteExcercise = id => {
  return async dispatch => {
    try {
      const res = await plank.patch(`/excercises/${id}`);
      dispatch({
        type: DELETE_EXCERCISES,
        payload: res.data.data
      });
      history.push("/");
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: error.message
      });
    }
  };
};
export const showExcercise = id => {
  return async dispatch => {
    try {
      const res = await plank.patch(`/excercises/${id}`);
      dispatch({
        type: SHOW_EXCERCISES,
        payload: res.data.data
      });
      history.push("/");
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: error.message
      });
    }
  };
};
