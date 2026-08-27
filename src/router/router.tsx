import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Product/Product";
import Advertise from "../pages/Advertise/Advertise";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "../pages/Product/ProductDetails";
import ProductCategory from "../pages/Product/ProductCategory";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:slug',
        element: <ProductDetails />,
      },
      {
        path: '/products/category/:slug',
        element: <ProductCategory />,
      },
      {
        path: '/advertise',
        element: <Advertise />,
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
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profil",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
