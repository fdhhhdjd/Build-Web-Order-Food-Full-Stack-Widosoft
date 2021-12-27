import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllBillInitiate,
  GetAllRatingInitiate,
} from "../redux/Action/ActionInfoAllUser";

const CheckoutApi = (token, callback) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllRatingInitiate(token));
    dispatch(GetAllBillInitiate(token));
  }, [callback]);
  return {};
};

export default CheckoutApi;
