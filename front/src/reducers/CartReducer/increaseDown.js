export const increasingDown = (state, { type, payload }) => {
  let id = payload.id;
  let newCart = increaseDown(state.order, id);

  return {
    order: Object.assign([], newCart),
  };
};
const increaseDown = (order, id) => {
  const reducedQuantityOrder = reduceQuantity(order, id);
  const filteredOrder = reducedQuantityOrder.filter(
    (item) => item.quantity > 0
  );
  return filteredOrder;
};

const reduceQuantity = (order, id) => {
  for (let i = order.length - 1; i >= 0; i--) {
    if (order[i].id == id) {
      if (order[i].quantity > 0) {
        order[i].quantity -= 1;
        return order;
      }
    }
  }
};
