import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IRequireAuth } from "../types";

const RequireAuth = ({ children }: IRequireAuth) => {
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (location.pathname === "/" && token) {
    return <Navigate to="/chat" replace />;
  }

  return <>{children ?? <Outlet />}</>;
};

export default RequireAuth;
