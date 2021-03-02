import { actionTypes } from "constans/actionTypes";

export const addBookToCart = (id) => {
  return {
    type: actionTypes.ADD_BOOK_TO_CART,
    payload: {
      id,
    },
  };
};
