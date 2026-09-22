'use client'
import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/AllTypes';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const ButtonWishlist = ({book}:{book:IBook}) => {

  const {wishList,setWishList}=useContext(BooksContext);
  function handleWishlist(book:IBook){
    const exists=wishList.find(each=>each.bookId===book.bookId);
    if(exists){
      toast.error("Allready exists in wishlist")
    } else {
      setWishList([...wishList, book]);
      toast.success("Book added to wishlist")
    }
    console.log("Button pressed")
    console.log(wishList)
  }

  return (
    <button onClick={()=>handleWishlist(book)} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
                Add to Wishlist
    </button>
  );
};

export default ButtonWishlist;