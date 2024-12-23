import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import PosterJobs from "../pages/PosterJobs";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        indext: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Register></Register>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job/${params.id}`)
      },{
        path:"/addjob",
        element:<PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute> 
      },{
        path:"/addjob/posted-jobs",
        element:<PosterJobs></PosterJobs>,
      },{
        path:"/mybids",
        element:<PrivateRoute>
          <MyBids></MyBids>
        </PrivateRoute>
      }
    ],
  },
  {},
]);

export default router;