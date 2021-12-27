import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const InfoAllUserApi = (token, callback) => {
  useEffect(() => {
    dispatch(GetAllPaymentInitiate(token));
  }, [callback]);
  return {};
};

export default InfoAllUserApi;
