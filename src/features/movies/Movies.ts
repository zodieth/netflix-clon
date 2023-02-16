import * as ActionTypes from "../ActionTypes";

export const Movies = (
  state = {
    isLoading: true,
    errMess: null,
    allMovies: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.MOVIES_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        allMovies: state.allMovies.concat(action.payload),
      };

    case ActionTypes.MOVIES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
      };

    case ActionTypes.MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };

    default:
      return state;
  }
};
