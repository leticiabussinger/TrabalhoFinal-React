import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/LoginPage/RegisterPage.jsx";
import Teste from "./components/Teste/Teste.jsx";
import Teste2 from "./components/Teste/Teste2.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import { UserProvider } from "./context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Teste />,
      },
      {
        path: "/:categoria",
        element: <ProductsPage />,
      },
      {
        path: "/:categoria/produto/:id",
        element: <ProductPage />,
      },
      {
        path: "/finalizar-compra/:id",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
