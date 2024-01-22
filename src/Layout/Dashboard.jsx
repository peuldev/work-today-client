import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { MdOutlineWallet } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-grey">
        <div className="navbar">
          <Link to="/">
            <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold">
              <span className="text-red">W</span>ork{" "}
              <span className="text-red">T</span>oday
            </p>
          </Link>
        </div>
      </div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-[#34444c] text-white">
          <ul className="menu mt-7">
            <li>
              <NavLink to="/dashboard/employeehome">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/worksheet">
                <BiSolidSpreadsheet />
                Work Sheet
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymenthistory">
                <MdOutlineWallet /> Payment History
              </NavLink>
            </li>
            <div className="divider divider-neutral"></div>
            <li>
              <NavLink to="/services">
                <MdOutlineMedicalServices />
                <a>Services</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <PiNewspaperClipping /> <a>Blog</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <BiSolidContact /> <a>Contact</a>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content  */}
        <div className="flex-1 p-5 bg-[#f2f2f2]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
