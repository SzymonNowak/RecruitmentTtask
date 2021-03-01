import * as api from "api/api";
import { actionTypes } from "constans/actionTypes";

export const getAllBooks = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBooks();
    dispatch({
      type: actionTypes.GET_ALL_BOOKS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
