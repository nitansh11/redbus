import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { busDetailsReducer } from "./BookBus/reducer";
import { updateFilterDetailsReducer } from "./FilterAndSort/reducer";
import { routesReducer } from "./routes/routesReducer";
import { busServiceReducer } from "./busService/busServicereducer";
const rootReducer = combineReducers({
  authReducer,
  busDetailsReducer,
  updateFilterDetailsReducer,
  routesReducer,
  busServiceReducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
