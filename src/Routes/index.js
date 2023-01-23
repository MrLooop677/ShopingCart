import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage, { HomePageLoader } from "../pages/HomePage";
import Cart from "../pages/Cart";
import LoginPage from "../pages/LoginPage";
import CheckoutPage from "../pages/CheckoutPage";

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
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
