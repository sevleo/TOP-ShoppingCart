import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Store from "./Store";
import { CollectionsDataProvider } from "./Context";
import CollectionProducts from "./CollectionProducts";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/store/:name",
      element: <CollectionProducts />,
    },
  ]);

  return (
    <CollectionsDataProvider>
      <RouterProvider router={router} />
    </CollectionsDataProvider>
  );
};

export default Router;
