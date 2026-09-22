"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);
  const { wishList, setWishList } = booksProvider;
  console.log(booksProvider);

  const handleAddToWishlist = () => {
    console.log("read book button triggered", book);

    setWishList([...wishList, book]);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };

  return (
    <button
      className="btn btn-primary btn-lg "
      onClick={() => handleAddToWishlist()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;
