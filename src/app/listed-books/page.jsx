"use client";
import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  console.log(readBooks, wishList, "readBooks", "wishList");
  return (
    <div className="container mx-auto">
      <h2></h2>
      Read Books: {readBooks.length} <br /> Wish List: {wishList.length}
    </div>
  );
};

export default ListedBooks;
