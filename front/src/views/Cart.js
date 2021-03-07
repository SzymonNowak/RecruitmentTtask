import React from "react";
import styled from "styled-components";
import { addBookToCart, removeBookFromCart, increaseDown } from "actions/cart";
import { useDispatch, useSelector } from "react-redux";
import SmallButton from "components/Atoms/SmallButton/SmallButton";
import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";
import { GoNextButton } from "components/Atoms/GoNextButton/GoNextButton";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.margin.m};
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  margin-top: ${({ theme }) => theme.margin.m};
  align-items: flex-start;
  width: 600px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  align-items: flex-start;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Info = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
`;

const Cart = () => {
  const order = useSelector((state) => state.CartReducer.order);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {order.length <= 0 && <Info>Your cart is empty </Info>}
      {order.map((item, index) => (
        <div key={item.id}>
          <Row>
            <SmallButton onClick={() => dispatch(removeBookFromCart(item.id))}>
              x
            </SmallButton>
            <ColumnWrapper>
              <p>
                <Info>Title:</Info>
                {item.title}
              </p>
              <p>
                <Info>Price:</Info>
                {item.price}
              </p>
            </ColumnWrapper>
            <ButtonWrapper>
              <SmallButton onClick={() => dispatch(increaseDown(item.id))}>
                -1
              </SmallButton>
              <p>
                <Info> {item.quantity}</Info>x
              </p>
              <SmallButton
                increaseUp
                onClick={() => dispatch(addBookToCart({ id: item.id }))}
              >
                +1
              </SmallButton>
            </ButtonWrapper>
          </Row>
        </div>
      ))}
      {order.length > 0 && (
        <NavLink to={routes.makeOrder}>
          <GoNextButton>go next</GoNextButton>
        </NavLink>
      )}
    </Wrapper>
  );
};

export default Cart;
