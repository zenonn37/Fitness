import plank from "../api/plank";
import history from "./history";

import {
  GET_PROGRAMS,
  GET_PROGRAM,
  ADD_PROGRAMS,
  UPDATE_PROGRAMS,
  DELETE_PROGRAMS,
  ERROR_PROGRAMS,
  CHECK_COMPLETE,
  CURRENT,
  CLEAR_PROGRAMS
} from "../types";

plank.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("access_token");

export const clearPrograms = () => {
  console.log("called");

  return {
    type: CLEAR_PROGRAMS
  };
};

export const checkComplete = com => {
  return {
    type: CHECK_COMPLETE,
    payload: com
  };
};

export const updateProgram = program => {
  return async dispatch => {
    try {
      const res = await plank.patch(`/programs/${program.id}`, program);
      dispatch({
        type: UPDATE_PROGRAMS,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: ERROR_PROGRAMS,
        payload: error
      });
    }
  };
};

export const testProgam = program => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      plank
        .post("/programs", program)
        .then(res => {
          resolve(res);
          dispatch({
            type: ADD_PROGRAMS,
            payload: res.data.data
          });
        })
        .catch(error => {
          reject(error);
          dispatch({
            type: ERROR_PROGRAMS,
            payload: error
          });
        });
    });
  };
};

export const createProgram = program => {
  return async dispatch => {
    try {
      const res = await plank.post("/programs", program);

      dispatch({
        type: ADD_PROGRAMS,
        payload: res.data.data
      });
      history.push("/programs");
    } catch (error) {
      dispatch({
        type: ERROR_PROGRAMS,
        payload: error
      });
    }
  };
};
export const getPrograms = () => {
  return async (dispatch, getData) => {
    try {
      const res = await plank.get("/programs");
      console.log(res.data.data);

      dispatch({
        type: GET_PROGRAMS,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: ERROR_PROGRAMS,
        payload: error
      });
    }
  };
};

export const setCurrent = id => {
  return {
    type: CURRENT,
    payload: id
  };
};

export const getProgram = id => {
  return async (dispatch, getData) => {
    try {
      const res = await plank.get(`/programs/${id}`);
      console.log(res.data.data);

      dispatch({
        type: GET_PROGRAM,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: ERROR_PROGRAMS,
        payload: error
      });
    }
  };
};

export const deleteProgram = id => {
  return async dispatch => {
    try {
      const res = await plank.delete(`/programs/${id}`);
      dispatch({
        type: DELETE_PROGRAMS,
        payload: id
      });
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
