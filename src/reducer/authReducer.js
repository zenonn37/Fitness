import { REGISTER, LOGIN, AUTH, LOGOUT } from "../types";

export const authReducer = (
  state = {
    user: null,
    error: "",
    token: localStorage.getItem("access_token") || false
  },
  action
) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload
      };
    case AUTH:
      console.log(action.payload);

      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,

        error: null
      };

    default:
      return state;
  }
};
