import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Store from "./Store";
import { VeryRootApp } from "./VeryRootApp";

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
  ]);

  return (
    <VeryRootApp>
      <RouterProvider router={router} />
    </VeryRootApp>
  );
};

export default Router;
