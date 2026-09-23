import React from "react";
import { IBook } from "@/types/books.type";
import BooksCard from "@/components/shared/BooksCard";

const getBooks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
  );
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
        <p className="text-2xl font-bold text-slate-800 md:text-4xl text-center mb-15">
          Explore All Books
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book: IBook) => {
            return <BooksCard key={book.bookId} book={book}></BooksCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
