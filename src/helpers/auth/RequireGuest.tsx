import { Navigate, Outlet } from "react-router-dom";
import { IRequireGuest } from "../types";

const RequireGuest = ({ children }: IRequireGuest) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <>{children || <Outlet />}</>;
};

export default RequireGuest;
