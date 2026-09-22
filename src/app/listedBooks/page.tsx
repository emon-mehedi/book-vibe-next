'use client'
import CardReadList from '@/components/CardReadList';
import CardWishList from '@/components/CardWishList';
import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/AllTypes';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {

  const { wishList, readList } = useContext(BooksContext);
  const [list, setList] = useState<string>('wishList');
  const [sortby, setSortby] = useState<'rating' | 'pages' | 'year'>('rating');

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortby === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating)
    } else if (sortby === 'pages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
    } else if (sortby === 'year') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
    }

    return sortedBooks
  }

  const sortedWishList = sortBooks(wishList);
  const sortedReadList = sortBooks(readList);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl text-center'>Listed Books</h1>
      <div className='text-center'>
        <h3>Sort by</h3>
        <select onChange={(e) => setSortby(e.target.value as 'rating' | 'pages' | 'year')}>
          <option value={'rating'}>Rating</option>
          <option value={'pages'}>Number of pages</option>
          <option value={'year'}>Published year</option>
        </select>
      </div>
      <div>

      <div className='flex flex-row'>
        <div className={`${list === 'wishList' ? 'bg-amber-500' : ''} border p-2`}>
          <button onClick={() => setList('wishList')} 
            >Wishlist
          </button> 
          ({sortedWishList.length})
        </div>
        <div className={`${list === 'readList' ? 'bg-amber-500' : ''} border p-2`}>
          <button onClick={() => setList('readList')} 
            >Readlist
          </button> 
          ({sortedReadList.length})
        </div>
      </div>

      </div>
      <div>
        {
          list === 'wishList'
            ? <div className='space-y-3'>
              {
               sortedWishList.length===0
                ?<div className='text-3xl text-center mt-10'>
                  <h2>No books in wishlist</h2>
                </div> 
                : sortedWishList.map(book => <CardWishList key={book.bookId} book={book} />)
              }
            </div>

            : <div className='space-y-3'>
              {
              sortedReadList.length===0
                ?<div className='text-3xl text-center mt-10'>
                  <h2>No books in readlist</h2>
                </div> 
                : 
                sortedReadList.map(book => <CardReadList key={book.bookId} book={book} />)
              }
            </div>
        }
      </div>
    </div>
  );
};

export default ListedBooks;