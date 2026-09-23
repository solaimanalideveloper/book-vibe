import { IBook } from "@/types/books.type";
import BooksCard from "../shared/BooksCard";

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <section className="container mx-auto mt-20 px-4">
      <div>
        <h2 className="mb-20 text-center text-4xl font-bold">Books</h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {booksData.slice(0, 6).map((book: IBook) => {
            return <BooksCard key={book.bookId} book={book}></BooksCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
