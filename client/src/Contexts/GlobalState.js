import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAccountNewInitiate,
  InfoAdminInitiate,
  RefreshTokenInitiate,
} from "../redux/Action/ActionAdmin";
import { ProductApi, AdminApi, InfoAllUserApi } from "../Imports/Index";
import { GetAccountMuchInitiate } from "../redux/Action/ActionInfoAllUser";
import {
  CompareMothBeforeInitiate,
  CompareMothTotalCancelBeforeInitiate,
  CompareMothTotalNotReceivedBeforeInitiate,
  ProductTotalCancelInitiate,
  ProductTotalInitiate,
  ProductTotalMothInitiate,
  ProductTotalNotReceivedInitiate,
  VoucherAllInitiate,
} from "../redux/Action/ActionProduct";
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
    if (token.accessToken) {
      dispatch(InfoAdminInitiate(token.accessToken));
      dispatch(GetAccountNewInitiate(token.accessToken));
      dispatch(GetAccountMuchInitiate(token.accessToken));
      dispatch(ProductTotalInitiate(token.accessToken));
      dispatch(VoucherAllInitiate(token.accessToken));

      dispatch(ProductTotalCancelInitiate(token.accessToken));
      dispatch(ProductTotalNotReceivedInitiate(token.accessToken));
      dispatch(ProductTotalMothInitiate(token.accessToken));

      dispatch(CompareMothBeforeInitiate(token.accessToken));
      dispatch(CompareMothTotalCancelBeforeInitiate(token.accessToken));
      dispatch(CompareMothTotalNotReceivedBeforeInitiate(token.accessToken));
    }
  }, [token.accessToken, callback]);
  const data = {
    callback: [callback, setCallback],
    AdminApi: AdminApi(token.accessToken, callback),
    ProductApi: ProductApi(callback),
    InfoAllUserApi: InfoAllUserApi(token, callback),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
