import React from "react";
import styled from "styled-components";
import { removeBookFromCart } from "actions/cart";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.booksInCart);
  const handleClick = (book) => {
    dispatch(removeBookFromCart(book));
  };
  return (
    <Wrapper>
      {cart.map((item, index) => (
        <div key={item.id}>
          <p> Tittle:{item.tittle}</p>
          <p> Author:{item.author}</p>
          <p> Price:{item.price}</p>
          <button
            onClick={() =>
              handleClick({
                id: item.id,
                index: index,
              })
            }
          >
            usun z koszyka
          </button>
        </div>
      ))}
    </Wrapper>
  );
};

export default Cart;
