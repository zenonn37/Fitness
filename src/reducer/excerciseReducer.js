import {
  GET_EXCERCISES,
  ADD_EXCERCISES,
  UPDATE_EXCERCISES,
  SHOW_EXCERCISES,
  DELETE_EXCERCISES,
  SET_EXCERCISE
} from "../types";

const init = {
  excercises: [],
  excercise: "",
  errors: "",
  loading: false
};
export const excerciseReducer = (state = init, action) => {
  switch (action.type) {
    case GET_EXCERCISES: {
      return {
        ...state,
        excercises: action.payload
      };
    }
    case ADD_EXCERCISES: {
      return {
        ...state,
        excercises: [...state.excercises, action.payload]
      };
    }
    case UPDATE_EXCERCISES: {
      return {
        ...state,
        excercise: action.payload
      };
    }
    case DELETE_EXCERCISES: {
      return {
        ...state,
        excercises: state.excercises.filter(
          excercise => excercise.id !== action.payload
        )
      };
    }
    case SHOW_EXCERCISES: {
      return {
        ...state,
        excercise: action.payload
      };
    }

    case SET_EXCERCISE: {
      let id = parseInt(action.payload);

      let result = state.excercises.find(x => x.id === id);

      // let index = state.excercises.indexOf(result);
      // console.log(index);
      return {
        ...state,
        excercise: result
      };
    }

    default:
      return state;
  }
};
