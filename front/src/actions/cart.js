import { actionTypes } from "constans/actionTypes";

export const addBookToCart = (book) => {
  return {
    type: actionTypes.ADD_BOOK_TO_CART,
    payload: book,
  };
};

export const removeBookFromCart = (book) => {
  return {
    type: actionTypes.REMOVE_BOOK_FROM_CART,
    payload: {
      book,
    },
  };
};
