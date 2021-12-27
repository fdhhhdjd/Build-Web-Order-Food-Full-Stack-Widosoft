import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPaymentInitiate,
  GetAllBillInitiate,
  GetAllRatingInitiate,
} from "../redux/Action/ActionInfoAllUser";

const InfoAllUserApi = (token, callback) => {
  const dispatch = useDispatch();
  const [a, seta] = useState([]);
  useEffect(() => {
    dispatch(GetAllPaymentInitiate(token));
    dispatch(GetAllBillInitiate(token));
    dispatch(GetAllRatingInitiate(token));
  }, [callback]);

  return {};
};

export default InfoAllUserApi;
