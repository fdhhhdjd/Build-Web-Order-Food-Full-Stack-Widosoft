import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  GetAllUserInitiate,
  InfoAdminInitiate,
} from "../redux/Action/ActionAdmin";
import { GlobalState } from "./GlobalState";
const AdminApi = (tokens, callback, setCallback) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokens) {
      dispatch(InfoAdminInitiate(tokens));
      dispatch(GetAllUserInitiate(tokens));
    }
  }, [tokens]);
  return {
    call: [call, setCall],
  };
};

export default AdminApi;
