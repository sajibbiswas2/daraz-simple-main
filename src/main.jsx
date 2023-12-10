import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/shop/shop.jsx';
import Home from './components/Home/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Invantory from './components/Invantory/Invantory.jsx';
import cartproductLoder from './loder/cartproductLoder.js';

const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  children: ([
    {
      path: 'shop',
      element: <Shop></Shop>
    },

    {
      path: "Orders",
      element: <Orders></Orders>,
      loader: cartproductLoder
    },
    {
      path: "invantoey",
      element: <Invantory></Invantory>
    },
    {
      path: "login",
      element: <login></login>
    }
  ])

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
