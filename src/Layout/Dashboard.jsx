import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-grey">
        <div>
          <Link to="/">
            <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold text-center py-4">
              <span className="text-red">W</span>ork{" "}
              <span className="text-red">T</span>oday
            </p>
          </Link>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/employeehome">Home</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content  */}
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
