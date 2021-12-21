import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenInitiate } from "../redux/Action/ActionAdmin";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const { Admin } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  console.log(Admin.accessToken);
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      dispatch(RefreshTokenInitiate());
    }
  }, []);
  const data = {};
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
