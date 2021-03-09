import { actionTypes } from "constants/actionTypes";

export const addBookToCart = (book) => {
  return {
    type: actionTypes.ADD_BOOK_TO_CART,
    payload: book,
  };
};

export const removeBookFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_BOOK_FROM_CART,
    payload: {
      id,
    },
  };
};

export const increaseDown = (id) => {
  return {
    type: actionTypes.INCREASE_DOWN,
    payload: {
      id,
    },
  };
};
