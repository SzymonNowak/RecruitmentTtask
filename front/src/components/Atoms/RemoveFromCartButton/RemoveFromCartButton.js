import styled from "styled-components";

const RemoveFromCartButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid red;
  color: red;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ease 0.5s;
  &:hover {
    background-color: red;
    color: white;
  }
`;
export default RemoveFromCartButton;
