import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import Learning from "../Page/Learning/Learning";
import LessonSection from "../Components/LessonSection/LessonSection";
import Login from "../Page/Log/Login";
import Register from "../Page/Res/Register";
import Profile from "../Page/Profile/Profile";
import Private from "./Private/Private";

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
                path: 'lessons',
                element: <Learning></Learning>,
                loader: () => fetch('../categories.json')

            },
            {
                path: '/lessons/:id',
                element: <Private><LessonSection></LessonSection></Private>,
                loader: () => fetch('../data.json')
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/profile',
        element: <Private> <Profile></Profile></Private>
    },
    {
        path: "*",
        element: <div>error</div>
    }

])


export default router;