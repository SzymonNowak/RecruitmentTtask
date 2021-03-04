import * as api from "api/api";
import { actionTypes } from "constans/actionTypes";

export const makeOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.makeOrder(order);
    dispatch({
      type: actionTypes.MAKE_ORDER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
