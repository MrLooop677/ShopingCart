import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes";
import { Provider } from "react-redux";
import { store } from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
);
