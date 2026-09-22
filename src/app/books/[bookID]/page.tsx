import { booksPromise } from '@/app/page';
import { IBook } from '@/types/AllTypes';
import React from 'react';
import Image from 'next/image';
import ButtonWishlist from '@/components/ButtonWishlist';
import ButtonReadlist from '@/components/ButtonReadlist';

interface IBookDetails{
  params:Promise<{
    bookID:string
  }>
}

const BookDetails = async({params}:IBookDetails) => {

  const {bookID}= await params;
  const bookList=await booksPromise() as IBook[];
  const book=bookList.find(book=>String(book.bookId)===String(bookID))

  if(!book){
    return(<div className='text-9xl min-h-dvh flex items-center justify-center'><h1>Book not found</h1></div>)
  } else{
  return (
    <div className="min-h-dvh bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="grid md:grid-cols-2">

          {/* Book Image */}
          <div className="flex items-center justify-center bg-gray-100 p-8 md:p-12">
            <div className="relative h-200 w-140 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="p-6 md:p-10">

            {/* Category */}
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
              {book.category}
            </span>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-2 text-lg text-gray-500">
              by{" "}
              <span className="font-semibold text-gray-800">
                {book.author}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl font-bold">{book.rating}</span>
              </div>

              <span className="text-gray-400">|</span>

              <span className="text-gray-600">
                {book.totalPages} pages
              </span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gray-200" />

            {/* Review */}
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                Review
              </h2>

              <p className="leading-7 text-gray-600">
                {book.review}
              </p>
            </div>

            {/* Book Details */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-5">
              <div>
                <p className="text-sm text-gray-400">Publisher</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.publisher}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Published</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Pages</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.totalPages}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Category</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {book.category}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-7">
              <h2 className="mb-3 font-semibold text-gray-900">
                Tags
              </h2>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonWishlist book={book}/>
              <ButtonReadlist book={book}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
  }
};

export default BookDetails;
















