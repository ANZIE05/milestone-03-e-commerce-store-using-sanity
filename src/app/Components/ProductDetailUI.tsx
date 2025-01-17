// components/ProductDetailUI.tsx (Client Component)
"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "./../context/CartContext";

interface Product {
  ProductName: string;
  ProductPrice: string;
  ProductDescription: string;
  imageUrl: string;
  _id: string;
}

export default function ProductDetailUI({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-4 md:p-10">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={product.imageUrl || "/placeholder-image.jpg"}
            alt={product.ProductName || "Product image"}
            width={400}
            height={400}
            className="rounded shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {product.ProductName}
          </h1>
          <p className="text-xl text-pink-500 font-semibold mt-4">
            {product.ProductPrice}
          </p>
          <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
            {product.ProductDescription}
          </p>
          <p className="text-gray-600 text-base mt-6 font-semibold">
            <span className="text-black">Availability:</span> 25 in stock
          </p>

          <div className="mt-6 flex gap-4">
            <button
              className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-gray-500"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="border border-pink-500 text-pink-500 py-2 px-4 rounded hover:bg-gray-200">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}