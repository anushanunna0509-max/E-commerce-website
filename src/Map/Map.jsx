
import { createBrowserRouter, Navigate } from "react-router-dom";
import  Login  from "../Componnets/NavbarComp/pages/Auth/Login";

import  Layout  from "../Componnets/NavbarComp/pages/Layout";
import Register from "../Componnets/NavbarComp/pages/Auth/Register";
import Home from "../Component/HomeContainer/Home";
import ProductDetails from "../Component/HomeContainer/ProductDetails";
import Cart from "../Component/Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Payment from "../Payment/Payment";



export let Mymap = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            }, 
            {
                path:"/Cart",
                element:<Cart/>
            },
            {
                path:"/Wishlist",
                element:<Wishlist/>
            },
           
            {
                path: "/product_Details/:id",
                element: <ProductDetails/>
            }, 
            {
                path:"/Payment",
                element:<Payment/>
            },
            {
                path: '/Login',
                element: <Login />
            }, 
            {
                path: '/Register',
                element:<Register/>
            }
        ]
    }
])  