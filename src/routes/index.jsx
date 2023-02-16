import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
]);
