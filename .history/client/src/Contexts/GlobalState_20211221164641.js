import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllUserInitiate,
  RefreshTokenInitiate,
} from "../redux/Action/ActionAdmin";
import AdminApi from "./AdminApi";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const { Admin, token } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        dispatch(RefreshTokenInitiate(Admin.accessToken));
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, [callback]);
  useEffect(() => {
    dispatch(GetAllUserInitiate(Admin.accessToken));
  }, [callback]);
  const data = {
    callback: [callback, setCallback],
    AdminApi: AdminApi(token.accessToken, callback, setCallback),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
