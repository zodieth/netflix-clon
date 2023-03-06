import * as ActionTypes from "../ActionTypes";

export const Products = (
  state = {
    isLoading: true,
    errMess: null,
    allProducts: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.PRODUCTS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        allProducts: action.payload,
      };

    case ActionTypes.PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
      };

    case ActionTypes.PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };

    default:
      return state;
  }
};
