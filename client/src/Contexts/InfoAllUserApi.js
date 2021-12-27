import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPaymentInitiate,
  GetAllInfoAppInitiate,
} from "../redux/Action/ActionInfoAllUser";

const InfoAllUserApi = (token, callback) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllPaymentInitiate());
    dispatch(GetAllInfoAppInitiate());
  }, [callback]);

  return {};
};

export default InfoAllUserApi;
