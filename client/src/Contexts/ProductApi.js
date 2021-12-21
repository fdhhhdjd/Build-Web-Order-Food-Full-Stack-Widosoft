import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductInitiate } from "../redux/Action/ActionProduct";
const ProductApi = () => {
  const [callbacks, setCallbacks] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductInitiate());
  }, [callbacks]);

  return {
    callback: [callbacks, setCallbacks],
  };
};

export default ProductApi;
