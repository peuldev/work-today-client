import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-Poppins">
      <Navbar></Navbar>
      <div className="mx-2">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
