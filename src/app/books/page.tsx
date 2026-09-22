import React from 'react';
import { booksPromise } from '../page';
import Card from '@/components/Card';
import { IBook } from '@/types/AllTypes';

const Books = async() => {
  const bookList= await booksPromise() as IBook[];
  return (
    <div>
      <h1 className='text-6xl text-center my-5'>All Books</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3'>
        {
          bookList.map(book=><Card key={book.bookId} book={book}/>)
        }
      </div>
    </div>
  );
};

export default Books;