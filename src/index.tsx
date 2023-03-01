import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import { router } from "./routes/index";
import { Route, RouterProvider, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AuthProvider } from "./app/hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/index";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
