import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import NavbarLayouts from "./components/Layouts/NavbarLayouts.jsx";
import ProfilePage from "./pages/profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavbarLayouts />
        <h1 className="text-center text-4xl font-bold">Hello World</h1>
      </div>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/profile",
    element : <ProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
