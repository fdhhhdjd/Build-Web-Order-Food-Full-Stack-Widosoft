import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPaymentInitiate,
  GetAllBillInitiate,
  GetAllRatingInitiate,
  GetAllInfoAppInitiate,
} from "../redux/Action/ActionInfoAllUser";

const InfoAllUserApi = (token, callback) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllPaymentInitiate());
    dispatch(GetAllInfoAppInitiate());
  }, [callback]);
  useEffect(() => {
    dispatch(GetAllRatingInitiate(token));
    dispatch(GetAllBillInitiate(token));
  }, [callback]);
  return {};
};

export default InfoAllUserApi;
