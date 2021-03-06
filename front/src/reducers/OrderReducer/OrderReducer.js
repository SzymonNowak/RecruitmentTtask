import { actionTypes } from "constants/actionTypes";

const OrderReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.MAKE_ORDER:
      return payload;
    default:
      return state;
  }
};

export default OrderReducer;
