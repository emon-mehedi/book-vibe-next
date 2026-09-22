import { IBook } from "@/types/AllTypes";
import Image from "next/image";
import Link from "next/link";
import ButtonRemoveRead from "./ButtonRemoveRead";

interface BookCardProps {
  book: IBook;
}

const CardReadList = ({ book }: BookCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">
      {/* Image Container */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-gray-100 md:h-auto md:w-64 lg:w-72">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="line-clamp-1 text-2xl font-bold text-gray-900">
                {book.bookName}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                by <span className="font-medium text-gray-700">{book.author}</span>
              </p>
            </div>
          </div>

          {/* Review */}
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {book.review}
          </p>

          {/* Book info */}
          <div className="mt-4 grid grid-cols-2 gap-4 border-y border-gray-100 py-3 sm:grid-cols-4">
            <div>
              <p className="text-xs text-gray-400">Pages</p>
              <p className="mt-0.5 font-semibold text-gray-800">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Published</p>
              <p className="mt-0.5 font-semibold text-gray-800">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Publisher</p>
              <p className="mt-0.5 truncate font-semibold text-gray-800">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Book ID</p>
              <p className="mt-0.5 font-semibold text-gray-800">
                #{book.bookId}
              </p>
            </div>
          </div>
        </div>

        {/* Tags & Action Button */}
        <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="space-x-2">
            <Link href={`/books/${book.bookId}`} className="shrink-0">
              <button className="w-full rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700 sm:w-auto">
                View Details
              </button>
            </Link>
            <ButtonRemoveRead book={book}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReadList;