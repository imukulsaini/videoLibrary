import { useAuth } from "../../../context/auth/auth";

import { Route } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ path, ...props }) {
  const {
    authState: { isUserLogin },
  } = useAuth();

  let location = useLocation();

  return isUserLogin ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
}
