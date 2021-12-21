import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirects from "./LoadingToRedirects";
const UserRoutes = ({ children, ...rest }) => {
  const { isLogout } = useSelector((state) => state.authAdmin);
  return !isLogout ? children : <LoadingToRedirects />;
};

export default UserRoutes;
