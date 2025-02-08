"use client";

import Link from 'next/link';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { getCartItems } from '../actions/actions';
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  ProductName: string;
  ProductDescription: string;
  ProductPrice: string;
  slug: string;
  inventory: number;
  imageUrl: string;
};

function Navbar2() {
  const cartItems = getCartItems();
  const cartCount = cartItems.length;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await client.fetch(`*[_type == "post"] { 
        ProductName,
        ProductPrice,
        ProductDescription,
        inventory,
        "slug": slug.current,
        "imageUrl": ProductImage.asset->url,
        _id }`);
        
        setProducts(data);
        setFilteredProducts([]); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]); 
    } else {
      const results = products.filter((product) =>
        product.ProductName?.toLowerCase().includes(query.toLowerCase()) ||
        product.ProductDescription?.toLowerCase().includes(query.toLowerCase()) ||
        product.ProductPrice?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  const handleProductClick = () => {
    setSearchQuery('');
    setFilteredProducts([]); 
  };

  return (

    <div className="bg-gray-300 p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 w-full justify-end">
          <div className="flex items-center border-2 border-gray-300 rounded-lg w-full sm:w-1/3 lg:w-1/4">
            <input
              type="text"
              className="px-4 py-2 w-full rounded-lg focus:outline-none"
              placeholder="Search any Product..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch className="text-gray-900 p-2" />
          </div>

          <div className="flex space-x-4 pr-10 relative">
            <FaHeart className="text-pink-500 text-2xl cursor-pointer" />
            <Link href="/cart">
              <FaShoppingCart className="text-pink-500 text-2xl cursor-pointer" />
            </Link>
            <span className="absolute top-0 right-6 bg-violet-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* Only show search results if searchQuery is not empty */}
      {searchQuery && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product._id} className=" p-2 hover:bg-gray-100">
                  <Link
                    href={`/product/${product.slug}`}
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={handleProductClick} 
                  >
                    {product.ProductName} - Rs.{product.ProductPrice}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar2;