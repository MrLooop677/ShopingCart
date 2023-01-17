import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage, { HomePageLoader } from "../pages/HomePage";
import Cart from "../pages/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: HomePageLoader,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);
