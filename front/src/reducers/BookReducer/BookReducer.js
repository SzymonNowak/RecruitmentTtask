import { actionTypes } from "constans/actionTypes";

const BookReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_BOOKS:
      return action.payload.data;

    default:
      return state;
  }
};

export default BookReducer;
