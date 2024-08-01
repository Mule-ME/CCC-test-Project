import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IRequireAuth } from "../types";

const RequireAuth = ({ children }: IRequireAuth) => {
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //THIS PARE OF THE CODE IS JUST OR THE PURPOSE OF THIS UI IT DOSE'T MEAN I USE IT FOR ENTIRE PROJECT
  if (location.pathname === "/") {
    return <Navigate to="/chat" replace />;
  }

  return children ?? <Outlet />;
};

export default RequireAuth;
