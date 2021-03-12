import {
  GET_BUS_DETAILS_FAIL,
  GET_BUS_DETAILS_REQUEST,
  GET_BUS_DETAILS_SUCCESS,
  UPDATE_BOOKING_DETAILS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  routeDetails: {},
  matchedBuses: [],
  busIdWithSeatsObj: {},

  operatorName: "",
  seats: [],
  passengerDetails: [],
  email: "",
  phoneNumber: "",
  fare: 0,
  busId: "",
  departureDetails: {
    city: "",
    location: "",
    time: 0,
    date: "",
  },
  arrivalDetails: {
    city: "",
    location: "",
    time: 0,
    date: "",
  },
  duration: 0,
  isBusinessTravel: false,
  businessDetails: {
    gst: "",
    name: "",
    address: "",
    email: "",
  },
  isInsurance: false,
  isCovidDonated: false,
};

export const busDetailsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BUS_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case GET_BUS_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        routeDetails: payload.route,
        matchedBuses: payload.matchedBuses,
        busIdWithSeatsObj: payload.busIdWithSeatsObj,
      };

    case UPDATE_BOOKING_DETAILS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        [payload["key"]]: payload["value"],
      };

    case GET_BUS_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};
