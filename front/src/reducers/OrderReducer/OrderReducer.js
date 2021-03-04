import { actionTypes } from "constans/actionTypes";

const initialState = {
  booksInCart: [],
};

const OrderReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.MAKE_ORDER:
      return state;
    default:
      return state;
  }
};

export default OrderReducer;
