import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner text-red"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
