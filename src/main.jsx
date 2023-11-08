import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import RegisterPage from './pages/LoginPage/RegisterPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import ErrorPage from './pages/ErrorPage/index.jsx';
import OrderPage from './pages/OrderPage/OrderPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/:categoria',
        element: <ProductsPage />,
      },
      {
        path: '/:categoria/produto/:id',
        element: <ProductPage />,
      },
      {
        path: '/finalizar-compra',
        element: (
          <CartProvider>
            <CartPage />
          </CartProvider>
        ),
      },
      {
        path: '/pedidos',
        element: <OrderPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
