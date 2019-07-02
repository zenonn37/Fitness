import plank from "../api/plank";
import { REGISTER, LOGIN, AUTH, LOGOUT, CLEAR_PROGRAMS } from "../types";
import { clearPrograms } from "./programsActions";
import history from "./history";

export const registerAction = register => {
  return async (dispatch, getData) => {
    try {
      const res = await plank.post("/register", register);
      const result = res.data.data;
      if (result) {
        const data = {
          username: result.email,
          password: register.password
        };
        try {
          const res = await plank.post("/login", data);
          const result = res.data.access_token;
          console.log(result);

          localStorage.setItem("access_token", result);
          dispatch({
            type: LOGIN,
            payload: result
          });
          history.push("/");
        } catch (error) {
          console.log(error);
        }
      }

      console.log(result);

      dispatch({
        type: REGISTER,
        payload: result
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginAction = login => {
  return async dispatch => {
    try {
      const res = await plank.post("/login", login);
      const result = res.data.access_token;
      localStorage.setItem("access_token", result);
      console.log(result);

      dispatch({
        type: LOGIN,
        payload: result
      });
      try {
        plank.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("access_token");
        const res = await plank.get("/user");
        const result = res.data;

        console.log(result);

        dispatch({
          type: AUTH,
          payload: result
        });
      } catch (error) {
        console.log(error);
      }
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const userAction = () => {
  console.log("called");

  return async dispatch => {
    try {
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + localStorage.getItem("access_token");
      const res = await plank.get("/user");
      const result = res.data;

      console.log(result);

      dispatch({
        type: AUTH,
        payload: result
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const logOut = () => {
  return async (dispatch, getData) => {
    try {
      plank.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");
      await plank.post("/logout");

      dispatch({
        type: LOGOUT
      });
      dispatch({
        type: CLEAR_PROGRAMS
      });
      localStorage.removeItem("access_token");
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
};
