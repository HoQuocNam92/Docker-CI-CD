import { createBrowserRouter } from "react-router"
import Users from "../components/users";
import Products from "../components/products";
const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Users,
        },
        {
            path: "/products",
            Component: Products
        }
    ]
)
export default router;