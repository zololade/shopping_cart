import { createBrowserRouter } from "react-router";

import { App } from "./App";
import { Cart } from "./pages/cart/Cart";
import { ErrorPage } from "./pages/error/ErrorPage";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export { router };
