import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import Learning from "../Page/Learning/Learning";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'learning',
                element: <Learning></Learning>,
                loader: () => fetch('../categories.json')
            }
        ]
    },
    {
        path: "*",
        element: <div>error</div>
    }

])


export default router;