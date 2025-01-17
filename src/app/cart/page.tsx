"use client";

import React from "react";
import { useCart } from "./../context/CartContext";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // const calculateTotal = () => {
  //   console.log(cart);
  //   return cart
  //     .reduce((total: number, item: { ProductPrice: string }) => {
  //       const product = item.ProductPrice.replace(/[^\d.-]/g, ""); 
  //       const price = parseFloat(product);
  //       return total + (isNaN(price) ? 0 : price);
  //     }, 0);
  // };
  
  return (
    <div className="container mx-auto mt-10 px-4 lg:px-16">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center mt-10 text-lg mb-20">Your cart is empty!</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1">
            {cart.map(
              (item: { _id: string; ProductName: string; ProductPrice: string; imageUrl: string }) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between p-4 mb-4 border rounded-lg bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.ProductName}
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.ProductName}</h2>
                      <p className="text-pink-500 font-medium">
                        {item.ProductPrice}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-pink-500 text-lg hover:text-gray-600"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              )
            )}
          </div>

          {/* Checkout Section */}
          {/* <div className="flex-1 max-w-sm w-full p-6 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg">SubTotal:</span>
              <span className="text-lg font-semibold text-gray-700">
              Rs.{calculateTotal()}
              </span>
            </div>
            <button
              className="w-full bg-violet-900 text-white py-2 mt-4 rounded hover:bg-pink-500 transition font-medium"
              onClick={() => {
                clearCart();
                alert("Order placed successfully!");
              }}
            >
              Proceed Checkout
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
}