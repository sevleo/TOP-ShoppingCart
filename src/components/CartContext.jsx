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
        // Update global quantity count
        setQuantity((prevQuantity) => {
          return prevQuantity + newCartValue.quantity;
        });
        return prevCart.map((item) =>
          item.title === newCartValue.title
            ? { ...item, quantity: newCartValue.quantity + item.quantity }
            : item
        );
      }
      // Update global quantity count
      setQuantity((prevQuantity) => {
        return prevQuantity + newCartValue.quantity;
      });
      return [...prevCart, newCartValue];
    });
  };

  // Update quantity
  const updateQuantity = (newCartValue) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.title === newCartValue.title
      );
      if (existingItem) {
        console.log(contextValue);
        // Update global quantity count
        setQuantity(contextValue.quantity + 1);
        // Update item quantity
        return prevCart.map((item) =>
          item.title === newCartValue.title
            ? { ...item, quantity: newCartValue.quantity }
            : item
        );
      }
    });
  };

  const contextValue = {
    cart,
    setCart: updateCart,
    updateQuantity: updateQuantity,
    quantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
