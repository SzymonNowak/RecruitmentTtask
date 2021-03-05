import styled, { css } from "styled-components";

const SmallButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
  margin-right: 20px;
  margin-left: 20px;

  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ease 0.5s;
  &:hover {
    border: 1px solid red;

    background-color: red;
    color: white;
  }

  ${({ increaseUp }) =>
    increaseUp &&
    css`
      border: 1px solid green;
      color: green;
      &:hover {
        border: 1px solid green;

        background-color: green;
        color: white;
      }
    `}
`;
export default SmallButton;
