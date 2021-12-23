import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategoryInitiate,
  GetAllProductInitiate,
} from "../redux/Action/ActionProduct";
const ProductApi = (callback) => {
  const [callbacks, setCallbacks] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductInitiate());
    dispatch(GetAllCategoryInitiate());
  }, [callback]);

  return {
    callback: [callbacks, setCallbacks],
  };
};

export default ProductApi;
