import { useState, useEffect } from "react";
import axios from "axios";
const ProductApi = () => {
  const [products, setProducts] = useState([]);
  const [callbacks, setCallbacks] = useState(false);
  useEffect(() => {}, [callbacks]);

  return {
    products: [products, setProducts],
    callback: [callbacks, setCallbacks],
  };
};

export default ProductApi;
