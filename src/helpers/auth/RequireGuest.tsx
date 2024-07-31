import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IRequireGuest } from "../types";
import Cookies from "universal-cookie";

const RequireGuest = ({ children }: IRequireGuest) => {
  ``;
  const location = useLocation();
  const cookies = new Cookies();
  const token = cookies.get("Token");

  if (token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <>{children || <Outlet />}</>;
};

export default RequireGuest;
