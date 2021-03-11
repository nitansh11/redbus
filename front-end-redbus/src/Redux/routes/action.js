import * as actionTypes from "./actionTypes";
import axios from "axios";
const getRoutesRequest = () => {
  return {
    type: actionTypes.GET_ROUTES_REQUEST,
  };
};
const getRoutesSuccess = () => {
  return {
    type: actionTypes.GET_ROUTES_SUCCESS,
  };
};
const getRoutesFailure = () => {
  return {
    type: actionTypes.GET_ROUTES_FAILURE,
  };
};
const getRoutes = () => {
  return async (dispatch) => {
    // dispatch(getRoutesRequest());
    try {
      const res = await axios.get("http://localhost:8000/v1/api/routes");
      console.log("in action: ", res);
      //   dispatch(getRoutesSuccess(res));
    } catch (err) {
      //   dispatch(getRoutesFailure());
    }
  };
};

export { getRoutes };
