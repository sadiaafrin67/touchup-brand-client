
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Layout/Root";
import BrandProducts from "../Pages/Home/BrandProducts";



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
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>
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