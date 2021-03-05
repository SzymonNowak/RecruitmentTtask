export const addBookToCart = (state, { type, payload }) => {
  let id = payload.id;
  const book = {
    id: payload.id,
    quantity: 1,
    title: payload.tittle,
    author: payload.author,
    price: payload.price,
  };

  if (checkIsItemInArray(state.order, id)) {
    let newCart = increaseIfFound(state.order, id);
    return {
      ...state,
      order: newCart,
    };
  } else {
    return {
      ...state,
      order: [...state.order, book],
    };
  }
};

const increaseIfFound = (order, id) => {
  for (let i = 0; i < order.length; i++) {
    if (order[i].id == id) {
      order[i].quantity += 1;
      return order;
    }
  }
  return order;
};

const checkIsItemInArray = (order, id) => {
  const isItemInArray = order.filter((item) => item.id == id);
  return isItemInArray.length > 0 ? true : false;
};
