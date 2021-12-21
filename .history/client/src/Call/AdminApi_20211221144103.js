import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  GetAllUserInitiate,
  InfoAdminInitiate,
} from "../redux/Action/ActionAdmin";
import { GlobalState } from "../Contexts/GlobalState";
const AdminApi = (tokens) => {
  const state = useContext(GlobalState);
  console.log(state, "aaaa");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InfoAdminInitiate(tokens));
    dispatch(GetAllUserInitiate(tokens));
  }, [tokens]);
  return {};
};

export default AdminApi;
