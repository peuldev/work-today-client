import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="font-Poppins">
      {hideHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {hideHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
