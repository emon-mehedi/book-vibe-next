import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/book.ico'

const Nav = () => {
  return (
    <div className='shadow'>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <Link href={''} className="btn btn-ghost text-xl"><Image src={logo} alt='logo'></Image>Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className='border border-green-400 text-green-400' href={'/'}>Home</Link></li>
            <li><Link href={'/books'}>All Books</Link></li>
            <li><Link href={'/listedBooks'}>Listed Books</Link></li>
            <li><Link href={'/pagesToRead'}>Pages to Read</Link></li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link href={''} className="btn bg-green-500 text-white">Sign Up</Link>
          <Link href={''} className="btn bg-blue-500 text-white">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;