import * as actionTypes from "./actionTypes";

import axios from "axios";

const getBusMongoRequest = () => {
  return {
    type: actionTypes.GET_BUS_MONGO_REQUEST,
  };
};

const getBusMongoSuccess = (payload) => {
  return {
    type: actionTypes.GET_BUS_MONGO_SUCCESS,
    payload: payload,
  };
};

const getBusMongoFailure = () => {
  return {
    type: actionTypes.GET_BUS_MONGO_SUCCESS,
  };
};

const getBusOnId = (payload) => {
  return {
    type: actionTypes.GET_BUS_MONGO_ID_SUCCESS,
    payload,
  };
};

const getBusData = () => (dispatch) => {
  dispatch(getBusMongoRequest());
  axios
    .get("http://localhost:8000/v1/api/busservice/")
    .then((res) => {
      console.log("rsponse from db");
      dispatch(getBusMongoSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getBusMongoFailure());
    });
};
const getBusOnIdThunk = (id) => (dispatch) => {
  dispatch(getBusMongoRequest());
  axios
    .get(`http://localhost:8000/v1/api/busservice/${id}`)
    .then((res) => {
      console.log("response for id");
      dispatch(getBusOnId(res.data));
    })
    .catch((err) => dispatch(getBusMongoFailure()));
};
export { getBusData, getBusOnIdThunk };
