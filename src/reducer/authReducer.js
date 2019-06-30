import { REGISTER, LOGIN, AUTH } from "../types";

export const authReducer = (
  state = {
    user: null,
    error: "",
    token: localStorage.getItem("access_token") || null
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
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
