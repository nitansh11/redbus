import * as actionTypes from "./actionTypes";
import axios from "axios";
const getRoutesRequest = () => {
  return {
    type: actionTypes.GET_ROUTES_REQUEST,
  };
};
const getRoutesSuccess = (routes) => {
  return {
    type: actionTypes.GET_ROUTES_SUCCESS,
    payload: routes,
  };
};
const getRoutesFailure = () => {
  return {
    type: actionTypes.GET_ROUTES_FAILURE,
  };
};
const getRoutes = () => {
  console.log("heloooo");
  return async (dispatch) => {
    dispatch(getRoutesRequest());
    try {
      const res = await axios.get("http://localhost:8000/v1/api/routes");
      dispatch(getRoutesSuccess(res.data));
    } catch (err) {
      dispatch(getRoutesFailure());
    }
  };
};

export { getRoutes };
