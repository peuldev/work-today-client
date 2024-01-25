import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { MdOutlineWallet } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";
import useAuth from "../Hooks/useAuth";
const HRdashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="bg-grey flex items-center">
        <div className="navbar">
          <Link to="/">
            <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold">
              <span className="text-red">W</span>ork{" "}
              <span className="text-red">T</span>oday
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          {user && <span>{user.displayName}</span>}
          {user && (
            <img
              className="w-12 h-12 mx-5 rounded-full"
              src={user.photoURL}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="flex">
        {/*hr dashboard side bar */}
        <div className="w-64 min-h-screen bg-[#34444c] text-white">
          <ul className="menu">
            <li>
              <NavLink to="/hrdashboard/hrhome">
                <FaHome /> Hr Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/hrdashboard/employeelist">
                <BiSolidSpreadsheet />
                Employee-List
              </NavLink>
            </li>
            <li>
              <NavLink to="/hrdashboard/details">
                <MdOutlineWallet /> Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/hrdashboard/progress">
                <MdOutlineWallet /> Progress
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
        {/*hr dashboard content  */}
        <div className="flex-1 p-5 bg-[#f2f2f2]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default HRdashboard;
