import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/AllTypes';
import React, { useContext } from 'react';

const ButtonRemoveRead = ({book}:{book:IBook}) => {
  const {readList, setReadList}=useContext(BooksContext);
  const handleRemove=(book:IBook)=>{
    const newReadList=readList.filter(each=>each.bookId!==book.bookId)
    setReadList(newReadList)
  }
  return (
    <button onClick={()=>handleRemove(book)} className="w-full rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700 sm:w-auto">
      Remove book
    </button>
  );
};

export default ButtonRemoveRead;