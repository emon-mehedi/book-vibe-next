import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/AllTypes';
import React, { useContext } from 'react';

const ButtonRemoveWish = ({book}:{book:IBook}) => {
  const {wishList, setWishList}=useContext(BooksContext);
  const handleRemove=(book:IBook)=>{
    const newWishList=wishList.filter(each=>each.bookId!==book.bookId)
    setWishList(newWishList)
  }
  return (
    <button onClick={()=>handleRemove(book)} className="w-full rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700 sm:w-auto">
      Remove book
    </button>
  );
};

export default ButtonRemoveWish;