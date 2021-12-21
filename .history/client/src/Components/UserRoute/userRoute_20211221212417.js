import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const { InfoAdmin } = useSelector((state) => state.authAdmin);
  return InfoAdmin ? children : <LoadingToRedirect />;
};

export default UserRoute;
