"use client";

import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Define the provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array
  const [cartCount, setCartCount] = useState(0); // Track cart count

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount) => prevCount + 1); // Update cart count
  };

  // Remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    setCartCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrement cart count safely
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    setCartCount(0); // Reset cart count
  };

  // Provide context values
  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
