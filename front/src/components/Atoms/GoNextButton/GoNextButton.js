import styled from "styled-components";

export const GoNextButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.green};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.margin.xl};
  cursor: pointer;
  transition: ease 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`;
