import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";

const MainWrapper = styled.nav`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: darkgray;

  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 100px;
`;
const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &.active {
    color: green;
  }
`;

const NavBar = () => {
  const order = useSelector((state) => state.CartReducer.order);

  return (
    <MainWrapper>
      <StyledLink to={routes.main}>Home</StyledLink>
      <StyledLink to={routes.cart}>
        Cart {order.length >= 0 && <p>{order.length} item</p>}
      </StyledLink>
    </MainWrapper>
  );
};

export default NavBar;
