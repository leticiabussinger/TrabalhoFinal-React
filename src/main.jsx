import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/LoginPage/RegisterPage.jsx';
import Teste from './components/Teste/Teste.jsx';
import Teste2 from './components/Teste/Teste2.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Teste />,
      },
      {
        path: 'produtos',
        element: <ProductsPage />,
      },
      {
        path: 'produtos/:id',
        element: <ProductPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
