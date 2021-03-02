import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "components/Molecules/BookCard/BookCard";
import { getAllBooks } from "actions/books";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.BookReducer);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <MainWrapper>
      {books &&
        books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            img={book.cover_url}
            tittle={book.title}
            author={book.author}
            pages={book.pages}
            price={book.price}
          />
        ))}
    </MainWrapper>
  );
};

export default Main;
