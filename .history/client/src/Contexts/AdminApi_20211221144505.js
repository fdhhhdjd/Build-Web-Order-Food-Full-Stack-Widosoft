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
const AdminApi = (tokens) => {
  const state = useContext(GlobalState);
  console.log(state, "aaaa");
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokens) {
      dispatch(InfoAdminInitiate(tokens));
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }

    // dispatch(GetAllUserInitiate(tokens));
  }, [tokens]);
  return {};
};

export default AdminApi;
