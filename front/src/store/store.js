import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducer from "reducers/combineReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  combineReducer,
  compose(composeEnhancer(applyMiddleware(thunk.withExtraArgument())))
);

export default store;
