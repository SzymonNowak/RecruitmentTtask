export const increasingDown = (state, { type, payload }) => {
  let id = payload.id;
  let newCart = increaseDown(state.order, id);

  return {
    ...state.order,
    order: Object.assign([], newCart),
  };
};
const increaseDown = (order, id) => {
  for (let i = 0; i < order.length; i++) {
    if (order[i].id == id) {
      if (order[i].quantity > 0) {
        order[i].quantity -= 1;
        if (order[i].quantity <= 0) {
          order.splice(order[i], 1);
          return order;
        }
        return order;
      }
    }
  }
};
