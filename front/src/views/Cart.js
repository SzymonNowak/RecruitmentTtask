import React, { useEffect } from "react";
import styled from "styled-components";
import { addBookToCart, removeBookFromCart, increaseDown } from "actions/cart";
import { useDispatch, useSelector } from "react-redux";
import RemoveFromCartButton from "components/Atoms/RemoveFromCartButton/RemoveFromCartButton";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 550px;
  margin-top: 10px;
`;

const Cart = () => {
  const order = useSelector((state) => state.CartReducer.order);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeBookFromCart(id));
  };
  return (
    <Wrapper>
      {order.length <= 0 && <p>twoj koszyk jest pusty</p>}
      {order.map((item, index) => (
        <BoxWrapper key={item.id}>
          <p>
            <b>Tittle:</b>
            {item.tittle}
          </p>
          <p>
            <b>Author:</b>
            {item.author}
          </p>
          <p>
            <b>Price:</b>
            {item.price}
          </p>
          <p>
            <b>quantity:</b>
            {item.quantity}
          </p>
          <RemoveFromCartButton onClick={() => dispatch(increaseDown(item.id))}>
            -1
          </RemoveFromCartButton>
          <RemoveFromCartButton
            onClick={() => dispatch(addBookToCart({ id: item.id }))}
          >
            +1
          </RemoveFromCartButton>
          <RemoveFromCartButton
            onClick={() => dispatch(removeBookFromCart(item.id))}
          >
            remove
          </RemoveFromCartButton>
        </BoxWrapper>
      ))}
      <p>go next</p>
    </Wrapper>
  );
};

export default Cart;
