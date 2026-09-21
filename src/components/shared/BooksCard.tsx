import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBooksCardProps {
  book: IBook;
}

const BooksCard = ({ book }: IBooksCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <Image
          width={800}
          height={600}
          src={book.image}
          alt={book.bookName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-4 left-4 rounded-full bg-black/70 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          {book.category}
        </span>

        <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-800 shadow">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 line-clamp-1 text-2xl font-bold text-gray-900">
          {book.bookName}
        </h3>

        <p className="mb-4 text-sm text-gray-500">
          By <span className="font-semibold text-gray-700">{book.author}</span>
        </p>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="mb-6 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-gray-400">Publisher</p>
            <p className="font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-gray-400">Rating</p>
            <p className="font-semibold">{book.rating} / 5</p>
          </div>
        </div>

        <button className="w-full rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-600">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default BooksCard;
