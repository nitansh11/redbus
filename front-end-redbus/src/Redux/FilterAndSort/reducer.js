import { UPDATE_FILTER_DETAILS } from "./actionTypes";

const initState = {
  busType: {
    seater: false,
    sleeper: false,
    ac: false,
    nonac: false,
  },
  departureTime: {
    before6am: false,
    "6amto12pm": false,
    "12pmto6pm": false,
    after6pm: false,
  },
  arrivalTime: {
    before6am: false,
    "6amto12pm": false,
    "12pmto6pm": false,
    after6pm: false,
  },
  liveTracking: false,
  reschedulable: false,
  sortingProperty: "None",
};

export const updateFilterDetailsReducer = (
  state = initState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_FILTER_DETAILS:
      return {
        ...state,
        [payload["key"]]: payload["value"],
      };

    default:
      return state;
  }
};
