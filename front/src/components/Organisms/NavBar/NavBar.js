import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";

const MainWrapper = styled.nav`
  display: flex;
  width: 1200px;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledLink = styled(NavLink)`
  &.active {
  }
`;

const NavBar = () => {
  return (
    <MainWrapper>
      <StyledLink to={routes.main}>Home</StyledLink>
      <StyledLink to={routes.cart}>Cart</StyledLink>
    </MainWrapper>
  );
};

export default NavBar;
