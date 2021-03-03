import { actionTypes } from "constans/actionTypes";

const initialState = {
  booksInCart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK_TO_CART:
      return addBookToCart(state, action);
    case actionTypes.REMOVE_BOOK_FROM_CART:
      return removeBookFromCart(state, action);
    default:
      return state;
  }
};

const addBookToCart = (state, { type, payload }) => ({
  ...state,
  booksInCart: [...state.booksInCart, payload],
});

const removeBookFromCart = (state, { type, payload }) => ({
  ...state,
  booksInCart: state.booksInCart.filter(
    (book, index) => index !== payload.book.index
  ),
});

export default CartReducer;
