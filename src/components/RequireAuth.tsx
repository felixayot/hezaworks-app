/* eslint-disable */
// @ts-nocheck

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.username && auth?.roles?.find(role => allowedRoles?.includes(role))) {
    return <Outlet />;
  }
  else if (auth?.username) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

// Or you can use this code snippet: (Ternary operators with Optional chaining)
//   return (
//     auth?.roles?.find(role => allowedRoles?.includes(role)) && auth?.username
//   ?
//     <JobpostForm />
//   : auth?.username
//       ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//       : <Navigate to="/login" state={{ from: location }} replace />
// );
}

export default RequireAuth;
