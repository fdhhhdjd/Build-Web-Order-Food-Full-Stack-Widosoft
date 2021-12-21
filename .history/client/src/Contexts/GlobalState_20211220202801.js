import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenInitiate } from "../redux/Action/ActionAdmin";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const { Admin } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/admin/refreshToken");
        setToken(res.data.accesstoken);
        console.log(res);
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);

  const data = {};
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
