'use client'
import { IBook } from '@/types/AllTypes';
import React, { ReactNode, SetStateAction, useState } from 'react';
import { createContext } from 'react';


//Remember these
interface IBooksContext{
  wishList:IBook[];
  setWishList:React.Dispatch<SetStateAction<IBook[]>>;
  readList:IBook[];
  setReadList:React.Dispatch<SetStateAction<IBook[]>>
}

//And these
export const BooksContext= createContext<IBooksContext> ({
  wishList:[],
  setWishList:()=>{},
  readList:[],
  setReadList:()=>{}
});


const BooksProvider = ({children}:{children:ReactNode}) => {

  const [wishList, setWishList]=useState<IBook[]>([]);
  const [readList, setReadList]=useState<IBook[]>([])

  const sharedData:IBooksContext={
    wishList, setWishList, readList, setReadList
  }

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;