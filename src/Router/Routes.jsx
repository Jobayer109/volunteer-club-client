import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Events from "../Pages/Home/Events";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Home/Registration";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Interests from "../Pages/Subscribe/Interests";
import Subscribe from "../Pages/Subscribe/Subscribe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'events',
        element: <Events></Events>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'subscribe/:id',
        loader: ({params})=> fetch(`http://localhost:5000/events/${params.id}`),
        element: <Subscribe></Subscribe>
      },
      {
        path: 'interests',
        element: <Interests></Interests>
      },
      {
        path: 'registration',
        element:<Registration></Registration>
      }
    ],
  },
]);

