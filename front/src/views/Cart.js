import React from "react";
import styled from "styled-components";
import { removeBookFromCart } from "actions/cart";
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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.booksInCart);
  const handleClick = (book) => {
    dispatch(removeBookFromCart(book));
  };
  return (
    <Wrapper>
      {cart.length <= 0 && <p>twoj koszyk jest pusty</p>}
      {cart.map((item, index) => (
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
          <RemoveFromCartButton
            onClick={() =>
              handleClick({
                id: item.id,
                index: index,
              })
            }
          >
            usun z koszyka
          </RemoveFromCartButton>
        </BoxWrapper>
      ))}
    </Wrapper>
  );
};

export default Cart;
