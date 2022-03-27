import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isTokenAvailable } from "../utils/helper";

const PrivateRoute = () => {
  const isAuthenticated = isTokenAvailable();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
