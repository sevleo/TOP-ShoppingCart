import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Collections from "./Collections";
import { CollectionsDataProvider } from "./CollectionsContext";
import CollectionProducts from "./CollectionProducts";
import { CartDataProvider } from "./CartContext";
import { useState } from "react";
import Cart from "./Cart";

const Router = () => {
  const [showCart, setShowCart] = useState(false);

  function onClick() {
    setShowCart(false);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      setShowCart(false);
    }
  }

  document.addEventListener("keydown", handleKeyPress);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setShowCart={setShowCart} showCart={showCart} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/collections",
      element: <Collections setShowCart={setShowCart} showCart={showCart} />,
    },
    {
      path: "/collections/:name",
      element: (
        <CollectionProducts setShowCart={setShowCart} showCart={showCart} />
      ),
    },
  ]);

  return (
    <CollectionsDataProvider>
      <CartDataProvider>
        <RouterProvider router={router} />
        {showCart ? <Cart onClick={onClick} /> : null}
      </CartDataProvider>
    </CollectionsDataProvider>
  );
};

export default Router;
