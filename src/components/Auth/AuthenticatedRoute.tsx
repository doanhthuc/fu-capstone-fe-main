import {Navigate, Outlet} from "react-router-dom";

const AuthenticatedRoute = () => {
  let auth_token = window.localStorage.getItem("auth_token");
  return auth_token == null ? <Outlet /> : <Navigate to="/" />;
};

export default AuthenticatedRoute;
