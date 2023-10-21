
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Layout/Root";
import BrandProducts from "../Pages/Home/BrandProducts";
import Details from "../Pages/Home/Details";
import Update from "../Pages/Home/Update";
import PrivateRoute from "./PrivateRoute";



const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>
              
            },
            {
                path: "/brand/:id",
                element: <PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
                loader: () => fetch('https://touchup-brand-server.vercel.app/products')
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
               path: '/product/:id',
               element: <PrivateRoute><Details></Details></PrivateRoute>,
               loader: ({params}) => fetch(`https://touchup-brand-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://touchup-brand-server.vercel.app/products/${params.id}`)
                
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
    },
])

export default route;