import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  // Update cart when adding items to cart from collection view
  const updateCart = (newCartValue) => {
    // Check if this item is already in cart...
    const existingItem = cart.find((item) => item.title === newCartValue.title);
    // and if it is, update its quantity value
    if (existingItem) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.title === newCartValue.title
            ? { ...item, quantity: newCartValue.quantity + item.quantity }
            : item
        );
      });
    } else {
      // and if it is not, add the new item to the cart
      setCart([...cart, newCartValue]);
    }
    // finally, update total cart quantity value
    setQuantity(quantity + newCartValue.quantity);
  };

  // Update cart when adding items to cart from cart view
  const updateQuantity = (newCartValue, increment) => {
    // Update item quantity value
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.title === newCartValue.title
          ? { ...item, quantity: newCartValue.quantity }
          : item
      );
    });
    // Update total cart quantity value
    setQuantity(contextValue.quantity + increment);
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
