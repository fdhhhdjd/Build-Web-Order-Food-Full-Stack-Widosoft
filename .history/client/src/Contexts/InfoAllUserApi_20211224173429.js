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
    // dispatch(GetAllBillInitiate(token));
    dispatch(GetAllRatingInitiate(token));
  }, [callback]);
  useEffect(() => {
    const getBill = async () => {
      const res = await axios.get("http://localhost:5000/bill/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      seta(res);
    };
    getBill();
  }, [callback]);
  console.log(a, "oo");
  return {};
};

export default InfoAllUserApi;
