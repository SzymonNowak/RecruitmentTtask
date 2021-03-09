import styled, { css } from "styled-components";

const SmallButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin-right: ${({ theme }) => theme.margin.s};
  margin-left: ${({ theme }) => theme.margin.s};

  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ease 0.5s;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.red};

    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ increaseQuantity }) =>
    increaseQuantity &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.green};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.green};

        background-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
export default SmallButton;
