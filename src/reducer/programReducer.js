import {
  GET_PROGRAMS,
  GET_PROGRAM,
  ADD_PROGRAMS,
  UPDATE_PROGRAMS,
  DELETE_PROGRAMS,
  ERROR_PROGRAMS,
  LOADING
} from "../types";

export const programReducer = (
  state = {
    programs: [],
    program: "",
    errors: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case GET_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
        loading: false
      };
    case GET_PROGRAM:
      return {
        ...state,
        program: action.payload,
        loading: false
      };

    case ADD_PROGRAMS:
      return {
        ...state,
        programs: [...state.programs, action.payload],
        loading: false
      };

    case UPDATE_PROGRAMS:
      return {
        ...state,
        programs: [...state.programs, action.payload],
        loading: false
      };
    case DELETE_PROGRAMS:
      return {
        ...state,
        programs: [...state.programs, action.payload],
        loading: false
      };

    case ERROR_PROGRAMS:
      return {
        ...state,
        errors: action.payload
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
