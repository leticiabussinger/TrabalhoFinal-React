import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'loginasdasd',
        element: <h1>Login Exemplo</h1>,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
