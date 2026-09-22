import React from 'react';
import hero from '@/assets/hero_img.jpg';
import Image from 'next/image';
import { IBook } from '@/types/AllTypes';
import Card from '@/components/Card';

export const booksPromise=async()=>{
  try{
    const res=await fetch('http://localhost:3000/booksData.json');
    return res.json()
  } catch(err){
    console.log(err);
  }
}

const Home = async() => {

  const bookList =await booksPromise() as IBook[];
  
  return (
    <>
    <div className="hero my-10 container mx-auto bg-slate-100">

      <div className="hero-content grid grid-cols-2 py-10">
        <div className='space-y-4'>
          <h1 className="text-5xl font-bold">Books to freshen up<br></br> your bookshelf</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <Image
          alt="Tailwind CSS hero component"
          src={hero}
          className="w-full rounded-lg shadow-2xl"
        />
      </div>

    </div>


    <h1 className='text-6xl text-center my-10'>Books</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto'>
      {
        bookList.slice(0,9).map(book=><Card key={book.bookId} book={book}/>)
      }
    </div>
    </>
  );
};

export default Home;