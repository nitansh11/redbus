import * as actionTypes from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  routes: null,
};

const routesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROUTES_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case actionTypes.GET_ROUTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        routes: action.payload,
      };
    case actionTypes.GET_ROUTES_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { routesReducer };
