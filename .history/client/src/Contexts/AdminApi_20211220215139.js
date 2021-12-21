import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { InfoAdminInitiate } from "../redux/Action/ActionAdmin";
import { GlobalState } from "./GlobalState";
const AdminApi = (token) => {
  const dispatch = useDispatch();
  const [call, setCall] = useState(false);
  useEffect(() => {
    dispatch(InfoAdminInitiate(token));
    setCall(!call);
  }, [token]);
  return {
    call: [call, setCall],
  };
};

export default AdminApi;
