import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllUserInitiate,
  InfoAdminInitiate,
  RefreshTokenInitiate,
} from "../redux/Action/ActionAdmin";
import AdminApi from "./AdminApi";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const [token, setToken] = useState(false);
  const { Admin } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/admin/refreshToken");
        console.log(res);
        setToken(res.data.accessToken);
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);
  useEffect(() => {
    if (token) {
      // dispatch(InfoAdminInitiate(token));
      dispatch(GetAllUserInitiate(token));
    }
  }, [callback]);

  const data = {
    callback: [callback, setCallback],
    AdminApi: AdminApi(token),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
