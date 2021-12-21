import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const ProductApi = () => {
  const [products, setProducts] = useState([]);
  const [callbacks, setCallbacks] = useState(false);

  useEffect(() => {}, [callbacks]);

  return {
    callback: [callbacks, setCallbacks],
  };
};

export default ProductApi;
