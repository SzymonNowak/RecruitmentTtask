import styled from "styled-components";

const AddToCartButton = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  border: none;
  border: 1px solid green;
  color: green;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ease 0.5s;
  &:hover {
    background-color: green;
    color: white;
  }
`;
export default AddToCartButton;
