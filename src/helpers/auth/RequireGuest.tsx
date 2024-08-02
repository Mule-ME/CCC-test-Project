import { Navigate, Outlet } from "react-router-dom";
import { IRequireGuest } from "../types";

const RequireGuest = ({ children }: IRequireGuest) => {
  const token = localStorage.getItem("accessToken");

  console.log(token);
  if (token) {
    return <Navigate to="/chat" replace />;
  }

  return <>{children || <Outlet />}</>;
};

export default RequireGuest;
