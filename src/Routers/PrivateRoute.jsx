import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return <span className="loading loading-ring loading-md"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
