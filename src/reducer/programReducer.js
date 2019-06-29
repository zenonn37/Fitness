import {
  GET_PROGRAMS,
  GET_PROGRAM,
  ADD_PROGRAMS,
  UPDATE_PROGRAMS,
  DELETE_PROGRAMS,
  ERROR_PROGRAMS,
  LOADING,
  CHECK_COMPLETE,
  CURRENT
} from "../types";

export const programReducer = (
  state = {
    programs: [],
    program: "",
    errors: null,
    loading: false,
    complete: false
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
        loading: false,
        complete: true
      };

    case UPDATE_PROGRAMS:
      return {
        ...state,
        program: action.payload,
        loading: false
      };
    case DELETE_PROGRAMS:
      return {
        ...state,
        programs: state.programs.filter(
          program => program.id !== action.payload
        ),
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
    case CHECK_COMPLETE: {
      return {
        ...state,
        complete: action.payload
      };
    }

    case CURRENT: {
      let id = parseInt(action.payload);

      let result = state.programs.find(x => x.id === id);

      let index = state.programs.indexOf(result);
      console.log(index);

      return {
        ...state,
        program: result
      };
    }

    default:
      return state;
  }
};
