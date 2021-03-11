import * as actionTypes from "./actionTypes";

const loginSuccess = (response) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: response.profileObj,
  };
};

const loginFailure = (response) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: response.error,
  };
};

const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
export { loginSuccess, loginFailure, logout };
