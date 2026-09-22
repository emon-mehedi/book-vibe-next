'use client'
import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/AllTypes';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ButtonReadlist = ({book}:{book:IBook}) => {

  const {readList, setReadList}=useContext(BooksContext);
  
  const handleReadlist=(book:IBook)=>{
    const exists=readList.find(each=>each.bookId===book.bookId);
    if(exists) {
      toast.error("Already exists in readlist")
    } else {
      setReadList([...readList,book]);
      toast.success("Book added to readlist")
    }
  }

  return (
    <button onClick={()=>handleReadlist(book)} className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
                Add to Readlist
              </button>
  );
};

export default ButtonReadlist;