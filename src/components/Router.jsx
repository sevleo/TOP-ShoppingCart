import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Store from "./Store";
import { VeryRootApp } from "./VeryRootApp";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <VeryRootApp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/store",
      element: <Store />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
