import React from "react";
import styled from "styled-components";
import LongButton from "components/Atoms/LongButton/LongButton";
import { useDispatch } from "react-redux";
import { addBookToCart } from "actions/cart";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 700px;
  height: 100%;
  margin: ${({ theme }) => theme.margin.m};
`;

const ColumnInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.margin.m};
`;
const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  margin-top: 10px;
`;

const StyledImg = styled.img`
  width: 20%;
`;

const BookCard = ({ img, id, tittle, author, pages, price }) => {
  const book = {
    id,
    tittle,
    author,
    price,
  };
  const dispatch = useDispatch();

  const handleClick = (book) => {
    dispatch(addBookToCart(book));
  };
  return (
    <MainWrapper>
      <CardWrapper>
        <StyledImg alt="photo" src={img} />

        <ColumnInfoBox>
          <Info>
            <b>pages:</b> {pages}
          </Info>
          <Info>
            <b>title:</b> {tittle}
          </Info>
          <Info>
            <b>author</b>: {author}
          </Info>
          <Info>
            <b>price:</b> {price}
          </Info>
          <LongButton onClick={() => handleClick(book)}>add to cart</LongButton>
        </ColumnInfoBox>
      </CardWrapper>
    </MainWrapper>
  );
};

export default BookCard;
