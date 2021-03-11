import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
const rootReducer = combineReducers({ authReducer });

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
