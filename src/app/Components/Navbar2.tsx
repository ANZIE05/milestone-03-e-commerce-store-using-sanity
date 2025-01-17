"use client";

import Link from 'next/link';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';


function Navbar2() {


  const { cartCount } = useCart(); 
  return (
    <div className="bg-gray-300 p-2">
    
      <div className="flex justify-between items-center">
        {/* Right-aligned container */}
        <div className="flex items-center space-x-4 w-full justify-end">
          {/* Search Box with React Icon */}
          <div className="flex items-center border-2 border-gray-300 rounded-lg w-full sm:w-1/3 lg:w-1/4">
            <input
              type="text"
              className="px-4 py-2 w-full rounded-lg focus:outline-none"
              placeholder="Search any Product..."
            />
            <FaSearch className="text-gray-900 p-2" />
          </div>

          {/* Icons for Wishlist and Cart */}
          <div className="flex space-x-4 pr-10">
            <FaHeart className="text-pink-500 text-2xl cursor-pointer" />

        <Link href="/cart">
          <FaShoppingCart className="text-pink-500 text-2xl cursor-pointer" />    
        </Link>
        
          <span className="absolute top-18 right-8 bg-violet-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
