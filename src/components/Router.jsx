import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Collections from "./Collections";
import { CollectionsDataProvider } from "./CollectionsContext";
import CollectionProducts from "./CollectionProducts";
import { CartDataProvider } from "./CartContext";
import { useState } from "react";

const Router = () => {
  const [showCart, setShowCart] = useState(false);

  function onClick() {
    setShowCart(false);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home setShowCart={setShowCart} showCart={showCart} onClick={onClick} />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/collections",
      element: (
        <Collections
          setShowCart={setShowCart}
          showCart={showCart}
          onClick={onClick}
        />
      ),
    },
    {
      path: "/collections/:name",
      element: (
        <CollectionProducts
          setShowCart={setShowCart}
          showCart={showCart}
          onClick={onClick}
        />
      ),
    },
  ]);

  return (
    <CollectionsDataProvider>
      <CartDataProvider>
        <RouterProvider router={router} />
        {showCart ? (
          <div className="fixed right-0 top-0 h-full w-96 bg-white"></div>
        ) : null}
      </CartDataProvider>
    </CollectionsDataProvider>
  );
};

export default Router;
