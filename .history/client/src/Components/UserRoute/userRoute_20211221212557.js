import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const { Admin } = useSelector((state) => state.authAdmin);
  return Admin ? children : <LoadingToRedirect />;
};

export default UserRoute;
