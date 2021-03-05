import { actionTypes } from "constans/actionTypes";

const initialState = {
  order: [],
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

const addBookToCart = (state, { type, payload }) => {
  let id = payload.id;
  const item = {
    id: payload.id,
    quantity: 1,
  };

  if (checkIsItemInArray(state.order, id)) {
    let newCart = increaseIfFound(state.order, id);
    return {
      ...state,
      order: newCart,
    };
  } else {
    return {
      ...state,
      order: [...state.order, item],
    };
  }
};
const increaseIfFound = (order, id) => {
  for (let i = 0; i < order.length; i++) {
    if (order[i].id == id) {
      order[i].quantity += 1;
      return order;
    }
  }
  return order;
};

const checkIsItemInArray = (order, id) => {
  const isItemInArray = order.filter((item) => item.id == id);
  return isItemInArray.length > 0 ? true : false;
};

const removeBookFromCart = (state, { type, payload }) => ({
  ...state,
  booksInCart: state.booksInCart.filter(
    (book, index) => index !== payload.book.index
  ),
});

export default CartReducer;
