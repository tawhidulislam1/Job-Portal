import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../MyApplication/MyApplication";
import AddJobs from "../AddJobs/AddJobs";
import MyJobs from "../MyJobs/MyJobs";
import ViewApplication from "../ViewApplication/ViewApplication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: "/job-details/:id",
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/job-apply/:id",
                element: <PrivateRouter><JobApply></JobApply></PrivateRouter>,
            },
            {
                path: "/view-application/:job_id",
                element: <PrivateRouter><ViewApplication></ViewApplication></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
            },
            {
                path: "/my-application",
                element: <PrivateRouter><MyApplication></MyApplication></PrivateRouter>,
            },
            {
                path: "/posted-jobs",
                element: <PrivateRouter><MyJobs></MyJobs></PrivateRouter>,
            },
            {
                path: "/add-a-job",
                element: <PrivateRouter><AddJobs></AddJobs></PrivateRouter>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;