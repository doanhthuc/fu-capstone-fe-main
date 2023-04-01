import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
  let auth_token = window.localStorage.getItem("auth_token");
  return auth_token != null ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
