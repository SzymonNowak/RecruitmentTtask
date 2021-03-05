import styled from "styled-components";

export const GoNextButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  outline: none;
  border: 1px solid green;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 60px;
  cursor: pointer;
  transition: ease 0.5s;

  &:hover {
    background-color: green;
    color: white;
  }
`;
