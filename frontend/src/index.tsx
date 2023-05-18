import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCategories from "./Components/AddCategories";
import Addons from "./Components/AddOns";
import MenuCategories from "./Components/MenuCategories";
import Menus from "./Components/Menus";
import Orders from "./Components/Orders";
import Register from "./Components/Register";
import Location from "./Components/Location";
import Login from "./Components/Login";
import Settings from "./Components/Setting";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },

  {
    path: "/menus",
    element: <Menus />,
  },
  {
    path: "/menu-categories",
    element: <MenuCategories />,
  },
  {
    path: "/addons",
    element: <Addons />,
  },
  {
    path: "/addon-categories",
    element: <AddCategories />,
  },
  {
    path: "/locations",
    element: <Location />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routes} />
);
