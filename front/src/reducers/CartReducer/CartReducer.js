import { actionTypes } from "constans/actionTypes";
import { increasingDown } from "reducers/CartReducer/increaseDown";
import { addBookToCart } from "reducers/CartReducer/addBookToCart";
import { removeBookFromCart } from "reducers/CartReducer/removeBookFromCart";
const initialState = {
  order: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK_TO_CART:
      return addBookToCart(state, action);
    case actionTypes.REMOVE_BOOK_FROM_CART:
      return removeBookFromCart(state, action);
    case actionTypes.INCREASE_DOWN:
      return increasingDown(state, action);
    default:
      return state;
  }
};

export default CartReducer;
