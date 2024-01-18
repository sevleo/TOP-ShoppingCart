import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home.jsx";
import Store from "./Store";
import { VeryRootApp } from "./VeryRootApp";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <VeryRootApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "store",
          element: <Store />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
