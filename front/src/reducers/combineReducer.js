import { combineReducers } from "redux";
import BookReducer from "reducers/BookReducer/BookReducer";
import CartReducer from "reducers/CartReducer/CartReducer";
import OrderReducer from "reducers/OrderReducer/OrderReducer";
export default combineReducers({
  BookReducer,
  CartReducer,
  OrderReducer,
});
