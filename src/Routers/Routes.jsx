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
import EmployeeHome from "../Dashboard/EmployeeDashboard/EmployeeHome/EmployeeHome";
import PaymentHistory from "../Dashboard/EmployeeDashboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Dashboard/EmployeeDashboard/WorkSheet/WorkSheet";
import HrHome from "../Dashboard/HrDashboard/HrHome/HrHome";
import HRdashboard from "../Layout/HRdashboard";
import EmployeeList from "../Dashboard/HrDashboard/EmployeeList/EmployeeList";
import EmployeeDetails from "../Dashboard/HrDashboard/EmployeeDetails/EmployeeDetails";
import EmployeeProgress from "../Dashboard/HrDashboard/EmployeeProgress/EmployeeProgress";
import Admin from "../Layout/Admin";
import AddminHome from "../Dashboard/AdminDashboard/AddminHome/AddminHome";
import AllEmployeeList from "../Dashboard/AdminDashboard/AllEmployeeList/AllEmployeeList";

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
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/worksheet",
        element: <WorkSheet></WorkSheet>,
      },
    ],
  },
  {
    path: "hrdashboard",
    element: <HRdashboard></HRdashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/hrdashboard/hrhome",
        element: <HrHome></HrHome>,
      },
      {
        path: "employeelist",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "/hrdashboard/details",
        element: <EmployeeDetails></EmployeeDetails>,
      },
      {
        path: "/hrdashboard/progress",
        element: <EmployeeProgress></EmployeeProgress>,
      },
    ],
  },
  {
    path: "admindashboard",
    element: <Admin></Admin>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/admindashboard/adminhome",
        element: <AddminHome></AddminHome>,
      },
      {
        path: "/admindashboard/allemployeelist",
        element: <AllEmployeeList></AllEmployeeList>,
      },
    ],
  },
]);

export default router;
