import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  GetAllAdminInitiate,
  GetAllUserInitiate,
  InfoAdminInitiate,
} from "../redux/Action/ActionAdmin";
const AdminApi = (tokens, callback) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokens) {
      dispatch(InfoAdminInitiate(tokens));
      dispatch(GetAllUserInitiate(tokens));
      dispatch(GetAllAdminInitiate(tokens));
    }
  }, [tokens, callback]);
  return {
    call: [call, setCall],
  };
};

export default AdminApi;
