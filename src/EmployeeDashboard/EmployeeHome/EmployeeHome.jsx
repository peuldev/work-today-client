import React from "react";
import useAuth from "../../Hooks/useAuth";

const EmployeeHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "back"}
      </h2>
    </div>
  );
};

export default EmployeeHome;
