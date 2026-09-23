import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  //   const book = booksData.find(book => book.bookId === Number(id))
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  return (
    <div className="container mx-auto mt-20 px-4 pb-20">
      <div className="card lg:card-side overflow-hidden border border-base-300 bg-base-100 shadow-xl">
        {/* Book Image */}
        <figure className="lg:w-1/2 bg-base-200 p-6 lg:p-10">
          <Image
            width={700}
            height={500}
            src={book.image}
            alt={book.bookName}
            className="max-h-150 w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-[1.02]"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body lg:w-1/2 p-6 lg:p-10">
          {/* Category & Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-primary badge-lg">
              {book.category}
            </span>

            <span className="badge badge-outline badge-lg">
              ⭐ {book.rating} / 5
            </span>
          </div>

          {/* Book Name */}
          <h1 className="mt-4 text-3xl font-bold leading-tight lg:text-5xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-2 text-lg text-base-content/60">
            Written by{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          <div className="divider"></div>

          {/* Review */}
          <div>
            <h3 className="mb-2 text-xl font-bold">About this book</h3>

            <p className="text-base leading-7 text-base-content/70">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <h3 className="mb-3 font-semibold">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline badge-primary px-4 py-3"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Book Information */}
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-base-200 p-5">
            <div>
              <p className="text-sm text-base-content/50">Pages</p>
              <p className="mt-1 font-bold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Publisher</p>
              <p className="mt-1 font-bold">{book.publisher}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Published</p>
              <p className="mt-1 font-bold">{book.yearOfPublishing}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Rating</p>
              <p className="mt-1 font-bold">⭐ {book.rating}</p>
            </div>
          </div>

          {/* Action */}
          <div className="grid grid-cols-2 card-actions mt-6">
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
