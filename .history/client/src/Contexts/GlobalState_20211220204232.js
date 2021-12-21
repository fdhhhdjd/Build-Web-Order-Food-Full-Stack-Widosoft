import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenInitiate } from "../redux/Action/ActionAdmin";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [callback, setCallback] = useState(false);
  const { Admin } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    console.log(firstLogin, "get");
    // if (firstLogin) {
    //   const refreshToken = async () => {
    //     const res = await axios.get("/admin/refreshToken", {
    //       headers: { Authorization: `Bearer ${Admin.accessToken}` },
    //     });
    //     setToken(res.data.accesstoken);
    //     console.log(res);
    //     setTimeout(() => {
    //       refreshToken();
    //     }, 10 * 60 * 1000);
    //   };
    //   refreshToken();
    // }
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

  const data = {
    callback: [callback, setCallback],
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
