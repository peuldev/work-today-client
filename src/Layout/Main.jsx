import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.includes("login");
  return (
    <div className="font-Poppins">
      {<Navbar></Navbar>}
      <Outlet></Outlet>
      {<Footer></Footer>}
    </div>
  );
};

export default Main;
