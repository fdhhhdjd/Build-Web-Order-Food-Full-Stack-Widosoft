import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { InfoAdminInitiate } from "../redux/Action/ActionAdmin";
import { GlobalState } from "./GlobalState";
const AdminApi = (token) => {
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InfoAdminInitiate(token));
    setCallback(!callback);
  }, [token]);
  return {};
};

export default AdminApi;
