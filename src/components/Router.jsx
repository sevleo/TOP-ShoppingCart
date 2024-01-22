import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Collections from "./Collections";
import { CollectionsDataProvider } from "./CollectionsContext";
import CollectionProducts from "./CollectionProducts";
import { CartDataProvider } from "./CartContext";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/collections",
      element: <Collections />,
    },
    {
      path: "/collections/:name",
      element: <CollectionProducts />,
    },
    {
      path: "/collections/test",
      element: <CollectionProducts />,
    },
  ]);

  return (
    <CollectionsDataProvider>
      <CartDataProvider>
        <RouterProvider router={router} />
      </CartDataProvider>
    </CollectionsDataProvider>
  );
};

export default Router;
