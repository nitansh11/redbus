import { UPDATE_FILTER_DETAILS } from "./actionTypes";

export const updateFilterDetails = (payload) => {
  return {
    type: UPDATE_FILTER_DETAILS,
    payload,
  };
};
