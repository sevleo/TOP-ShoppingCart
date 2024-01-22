import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (newCartValue) => {
    setCart((prevValue) => [...prevValue, newCartValue]);
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
