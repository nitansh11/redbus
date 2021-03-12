import * as actionTypes from "./actionTypes";

const initState = {
  currentBus: {},
  error: false,
  isLoading: false,
  busList: [],
};

const busServiceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_BUS_MONGO_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case actionTypes.GET_BUS_MONGO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        busList: [...payload],
      };
    case actionTypes.GET_BUS_MONGO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.GET_BUS_MONGO_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        currentBus: { ...payload },
      };
    default:
      return state;
  }
};

export { busServiceReducer };
