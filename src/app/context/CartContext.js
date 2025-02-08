"use client";

import { createContext, useContext, useState } from "react";

// Context create karein
const CartContext = createContext(null);

// CartProvider ka function
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart function
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove from Cart function (optional)
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
