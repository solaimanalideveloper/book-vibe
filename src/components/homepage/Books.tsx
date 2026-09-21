import React from "react";
import BooksCard from "../shared/BooksCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Data fetch Failed");
  }
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <section className="container mx-auto mt-20 px-4">
      <div>
        <h2 className="mb-20 text-center text-4xl font-bold">Books</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book : IBook) => {
            return <BooksCard key={book.bookId} book={book}></BooksCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
