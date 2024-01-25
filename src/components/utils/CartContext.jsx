import React from "react";
import { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  // Update cart when adding items to cart from collection view
  const updateCart = (newCartValue) => {
    // Check if this item is already in cart...
    const existingItem = cart.find((item) => item.title === newCartValue.title);
    // and if it is, update its quantity value
    if (existingItem) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.title === newCartValue.title
            ? {
                ...item,
                quantity: newCartValue.quantity + item.quantity,
                totalPrice: newCartValue.totalPrice + item.totalPrice,
              }
            : item
        );
      });
    } else {
      // and if it is not, add the new item to the cart
      setCart([...cart, newCartValue]);
    }
    // finally, update total cart quantity value
    setQuantity(quantity + newCartValue.quantity);
    setTotalCartPrice(totalCartPrice + newCartValue.totalPrice);
  };

  // Update cart when adding items to cart from cart view
  const updateQuantity = (newCartValue, increment) => {
    const priceNumber = parseFloat(newCartValue.price.replace("$", ""));

    // Update item quantity value
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.title === newCartValue.title
          ? {
              ...item,
              quantity: newCartValue.quantity,
              totalPrice: priceNumber * newCartValue.quantity,
            }
          : item
      );
    });
    // Update total cart quantity value
    setQuantity(contextValue.quantity + increment);
    setTotalCartPrice(contextValue.totalCartPrice + priceNumber * increment);
  };

  // Update cart when deleting items
  const removeCartItem = (title, subtractQuantity, subtractTotalPrice) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => {
        return item.title !== title;
      });
    });
    setQuantity(quantity - subtractQuantity);
    setTotalCartPrice(totalCartPrice - subtractTotalPrice);
  };

  const contextValue = {
    cart,
    setCart: updateCart,
    updateQuantity: updateQuantity,
    quantity,
    totalCartPrice,
    removeCartItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
