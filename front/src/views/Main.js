import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "actions/books";

const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.BookReducer);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div>
      <p>main</p>
    </div>
  );
};

export default Main;
