export const programReducer = (
  state = {
    programs: [],
    errors: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case "GETPROGRAMS":
      return {
        ...state,
        programs: action.payload
      };

    default:
      return state;
  }
};
