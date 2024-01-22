import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-grey">
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
