export const removeBookFromCart = (state, { type, payload }) => {
  return {
    ...state,
    order: state.order.filter((book) => book.id !== payload.id),
  };
};
