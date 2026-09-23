"use client";
import { IBook } from "@/types/books.type";
import React, { ReactNode, useState, createContext } from "react";

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => [],
  wishList: [],
  setWishList: () => [],
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishList] = useState<IBook[]>([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};
export default BooksProvider;

// <{
//   readBooks: any[];
//   setReadBooks:React.Dispatch<React.SetStateAction<any[]>>;
//    wishList: any[];
//   setWishList:React.Dispatch<React.SetStateAction<any[]>>;
// }>
