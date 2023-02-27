import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/index";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
  {
    path: "/login",
    element: <Login />,
    exact: true,
  },
]);
