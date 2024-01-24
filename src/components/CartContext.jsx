import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const updateCart = (newCartValue) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.title === newCartValue.title
      );
      if (existingItem) {
        setQuantity((prevQuantity) => {
          return prevQuantity + newCartValue.quantity;
        });
        return prevCart.map((item) =>
          item.title === newCartValue.title
            ? { ...item, quantity: newCartValue.quantity + item.quantity }
            : item
        );
      }
      setQuantity((prevQuantity) => {
        return prevQuantity + newCartValue.quantity;
      });
      return [...prevCart, newCartValue];
    });
  };

  const contextValue = {
    cart,
    setCart: updateCart,
    quantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
