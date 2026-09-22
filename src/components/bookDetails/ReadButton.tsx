"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);
  const { readBooks, setReadBooks } = booksProvider;
  console.log(booksProvider);

  const handleReadBook = () => {
    console.log("read book button triggered", book);

    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-primary btn-lg "
      onClick={() => handleReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButton;
