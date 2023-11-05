import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ],
    },
  ]);
  
  export default Router;