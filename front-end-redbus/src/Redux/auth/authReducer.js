import * as actionTypes from "./actionTypes";
const initState = {
  isLoggedIn: false,
  currentCustomer: null,
  error: false,
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentCustomer: {
          name: action.payload.name,
          googleId: action.payload.googleId,
          email: action.payload.email,
          profilePicture: action.payload.imageUrl,
        },
        error: false,
      };

    case actionTypes.LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, error: true };

    case actionTypes.LOGOUT:
      return { ...state, isLoggedIn: false, currentCustomer: null };
    default:
      return state;
  }
};
export { authReducer };
