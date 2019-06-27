import plank from "../api/plank";
import {
  GET_PROGRAMS,
  GET_PROGRAM,
  ADD_PROGRAMS,
  UPDATE_PROGRAMS,
  DELETE_PROGRAMS,
  ERROR_PROGRAMS
} from "../types";

export const getPrograms = () => {
  return async (dispatch, getData) => {
    const res = await plank.get("/programs");
    console.log(res.data.data);

    dispatch({
      type: GET_PROGRAMS,
      payload: res.data.data
    });
    try {
    } catch (error) {
      dispatch({
        type: ERROR_PROGRAMS,
        payload: error
      });
    }
  };
};

export const getProgram = id => {
  return async (dispatch, getData) => {
    const res = await plank.get(`/programs/${id}`);
    console.log(res.data.data);

    dispatch({
      type: GET_PROGRAM,
      payload: res.data.data
    });
    try {
    } catch (error) {
      dispatch({
        type: ERROR_PROGRAMS,
        payload: error
      });
    }
  };
};

export const loading = () => {
  return {
    type: "LOADING"
  };
};
