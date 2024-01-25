import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Collections from "../pages/Collections.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import { CollectionsDataProvider } from "./CollectionsContext.jsx";
import CollectionProducts from "../pages/CollectionProducts.jsx";
import { CartDataProvider } from "./CartContext.jsx";
import { useState } from "react";
import Cart from "../sections/Cart.jsx";

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
