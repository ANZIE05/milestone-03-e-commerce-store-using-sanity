"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-violet-900 p-3 flex justify-between items-center h-16">
      {/* Left: Brand Name */}
      <div className="text-gray-300 font-bold text-xl pl-4 md:pl-10">
        <span className="text-pink-500 text-2xl">*</span>
        Ann Fashion Store
        <span className="text-pink-500 text-2xl">*</span>
      </div>

      {/* Burger Menu Icon for Small Screens */}
      <div className="md:hidden pr-4">
        <button
          onClick={handleMenuToggle}
          className="text-pink-500 text-3xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Center: Links (Desktop) */}
      <div
        className={`${
          isMenuOpen
            ? 'absolute top-16 left-0 w-full bg-violet-900 text-center flex flex-col space-y-6 py-6 md:hidden'
            : 'hidden'
        }`}
      >
        <Link href="/" className="text-pink-500 font-semibold text-xl hover:text-gray-300"
            onClick={closeMenu}>
            Home
        </Link>
        <Link href="/catalogue" className="text-pink-500 font-semibold text-xl hover:text-gray-300"
            onClick={closeMenu}>       
            Catalogue
         </Link>
        <Link href="/contact" className="text-pink-500 font-semibold text-xl hover:text-gray-300"
            onClick={closeMenu}>
            
            Contact Us
        </Link>
        <button
          className="text-white font-semibold bg-gray-400 px-4 py-2 w-3/4 mx-auto rounded-lg hover:bg-pink-500 "
          onClick={closeMenu}
        >
          Log In
        </button>
        <button
          className="text-white font-semibold bg-gray-400 px-4 py-2 w-1/2 mx-auto rounded-lg hover:bg-pink-500"
          onClick={closeMenu}
        >
          Sign Up
        </button>
      </div>

      {/* Right: Links (Desktop) */}
      <div className="hidden md:flex space-x-8 text-center">
        <Link href="/"className="text-pink-500 font-semibold text-xl hover:text-gray-300">
            Home
      
        </Link>
        <Link href="/catalogue" className="text-pink-500 font-semibold text-xl hover:text-gray-300">
            Catalogue
         
        </Link>
        <Link href="/contact" className="text-pink-500 font-semibold text-xl hover:text-gray-300">
            Contact Us
       
        </Link>
      </div>

      {/* Right: Buttons (Desktop) */}
      <div className="hidden md:flex space-x-6 pr-10">
        <button className="text-white font-semibold bg-gray-400 px-4 py-1 rounded-lg hover:bg-pink-500">
          Log In
        </button>
        <button className="text-white font-semibold bg-gray-400 px-4 py-1 rounded-lg hover:bg-pink-500">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;