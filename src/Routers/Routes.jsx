import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/home";
import Services from "../Pages/Services/Services/Services";
import Blog from "../Pages/Blog/Blog/Blog";
import Contact from "../Pages/Contact/Contact/Contact";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import EmployeeHome from "../EmployeeDashboard/EmployeeHome/EmployeeHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "employeehome",
        element: <EmployeeHome></EmployeeHome>,
      },
    ],
  },
]);

export default router;
