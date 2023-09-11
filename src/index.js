import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
   
    
  },
  {
    path: "/Login",
    element: <Login />,
   
    
  },
  {
    path: "/Register",
    element: <Register />,
   
    
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
