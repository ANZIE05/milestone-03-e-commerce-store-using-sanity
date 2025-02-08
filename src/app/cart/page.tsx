'use client';
import { Product } from "../Components/ProductDetailUI";
import React, { useEffect, useState } from 'react'
import { getCartItems,removeFromCart, updateCartQuantity} from './../actions/actions'
import { ToastContainer ,toast } from 'react-toastify'
import Image from "next/image";

const CartPage = () => { 

  const [cartItems, setCartItems] = useState<Product[]>([])
 
  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  const handleRemove = (id : string) => {
    toast.info('Item removed!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      removeFromCart(id);
      setCartItems([...getCartItems()]);
  }

  const handleQuantityChange = (id : string, quantity : number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  }

  const handleIncrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id);
    if(product) handleQuantityChange(id, product.inventory + 1);
  }

  const handleDecrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id);
    if(product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat (item.ProductPrice) * item.inventory, 0);
  }

  const handleProceed = () => {
    setCartItems([])
    localStorage.removeItem("cart")
    toast.success('Order placed successfully!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setCartItems([])
  }

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-44 h-screen">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">Your Cart</h1>
      <div className=" bg-gray-100 shadow-md rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center font-semibold text-xl text-gray-500">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between items-center bg-white rounded-lg mb-4">


                <div className="flex items-center gap-4 p-2">
                   <Image
                      src={item.imageUrl}
                      alt={item.ProductName}
                     width={100}
                      height={100}
                      className="w-16 h-16 rounded object-cover"
                    />
                
                  <div className="ml-2">
                    <h2 className="text-lg font-semibold">{item.ProductName}</h2>
                    <p className="text-gray-500">Rs.{item.ProductPrice}</p>
                  </div>
                </div >
                <div className="flex items-center ">
                  <button onClick={() => handleDecrement(item._id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                  <span className="mx-2 text-lg">{item.inventory}</span>
                  <button onClick={() => handleIncrement(item._id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                </div>
                <button onClick={() => handleRemove(item._id)} className="text-white bg-violet-900 rounded px-3 p-2 mr-3">Remove</button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold">Total: Rs.{calculateTotal().toFixed()}</h2>
              <button onClick={handleProceed} className="bg-pink-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
            </div>
            
          </div>
        )}
    
      </div>
      <ToastContainer/>
    </div>
  )
}

export default CartPage;