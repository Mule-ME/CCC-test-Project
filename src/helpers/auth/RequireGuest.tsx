import React from "react";
// import Cookies from "universal-cookie/es6";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireGuest = () => {
  // let location = useLocation();
  // const cookie = new Cookies();
  // const token = cookie.get("Token");
  const token = "";
  // const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);

  if (token) {
    return <Navigate to="/" replace={true} state={{ from: location }} />;
  } else return <Outlet />;
};

export default RequireGuest;
