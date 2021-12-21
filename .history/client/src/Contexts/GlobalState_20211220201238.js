import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const { Admin } = useSelector((state) => state.authAdmin);
  const data = {};
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
