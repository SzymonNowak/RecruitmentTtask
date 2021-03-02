import React from "react";
import styled from "styled-components";
import AddToCartButton from "components/Atoms/AddToCartButton/AddToCartButton";
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 600px;
  min-width: 550px;
  margin: 25px 25px 25px 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 7px rgba(0, 0, 0, 0.07);
`;
const Info = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;

const StyledImg = styled.img`
  max-width: 40%;
`;

const BookCard = ({ img, tittle, author, pages, price }) => {
  return (
    <CardWrapper>
      <StyledImg alt="zdjecie" src={img} />
      <p>
        <Info>pages:</Info> {pages}
      </p>
      <p>
        <Info>tittle:</Info> {tittle}
      </p>
      <p>
        <Info>author:</Info>: {author}
      </p>
      <p>
        <Info>price:</Info>: {price}
      </p>
      <AddToCartButton>DODAJ DO KOSZYKA</AddToCartButton>
    </CardWrapper>
  );
};

export default BookCard;
