import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (newCartValue) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.title === newCartValue.title
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.title === newCartValue.title
            ? { ...item, quantity: newCartValue.quantity + item.quantity }
            : item
        );
      }
      return [...prevCart, newCartValue];
    });
  };

  const contextValue = {
    cart,
    setCart: updateCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
