import React from "react";
import useAuth from "../../../Hooks/useAuth";


const EmployeeHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl font-medium font-Jost">
        <span>Hi, Welcome </span>
        <span className="font-bold">
          {user?.displayName ? user?.displayName : "back"}
        </span>
      </h2>
    </div>
  );
};

export default EmployeeHome;
