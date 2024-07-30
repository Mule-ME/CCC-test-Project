import { Navigate, useLocation, Outlet } from "react-router-dom";

function RequireAuth({ children }) {
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!token) {
    // Redirect them to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children ? children : <Outlet />;
}

export default RequireAuth;
