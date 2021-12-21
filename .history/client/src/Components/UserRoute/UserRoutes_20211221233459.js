import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoutes = ({ children, ...rest }) => {
  const { isLogout } = useSelector((state) => state.authAdmin);
  return !isLogout ? children : <LoadingToRedirect />;
};

export default UserRoutes;
