import { combineReducers } from "redux";
import BookReducer from "reducers/BookReducer/BookReducer";
import CartReducer from "reducers/CartReducer/CartReducer";
export default combineReducers({
  BookReducer,
  CartReducer,
});
