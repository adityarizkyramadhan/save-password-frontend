import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isTokenAvailable } from "../utils/helper";

const AuthRoute = () => {
  const isAuthenticated = isTokenAvailable();

  if (isAuthenticated) {
    return <Navigate to="/data" />;
  }

  return <Outlet />;
};

export default AuthRoute;
