import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import Learning from "../Page/Learning/Learning";
import LessonSection from "../Components/LessonSection/LessonSection";

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
                element: <LessonSection></LessonSection>,
                loader: () => fetch('../data.json')
            }
        ]
    },
    {
        path: "*",
        element: <div>error</div>
    }

])


export default router;