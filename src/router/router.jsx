import { createBrowserRouter } from "react-router";
import Layout from "../components/layout";
import Homepage from "../views/Homepage";
import Info from "../views/Info";
import { getAllPosts } from "./loaders";
import Details from "../views/Details";
import { getSinglePost } from "./loaders";
import Register from '../views/Register'
import Login from '../views/Login'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "info",
                Component: Info,
                loader :getAllPosts
            },
            {
                path: "info/details/:id",
                Component: Details,
                loader : getSinglePost
            },
            {
               path : "register",
               Component : Register
            },
             {
               path : "login",
               Component : Login
            },
        ]
    }
]);

export default router;