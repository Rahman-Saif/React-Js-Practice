import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },{
    path:'/addcoffee',
    element:<AddCoffee></AddCoffee>
    
  },{
    path:'updatecoffee',
    element:<UpdateCoffee></UpdateCoffee>
  }
]);



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);