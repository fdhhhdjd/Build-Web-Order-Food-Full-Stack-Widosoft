import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return <Loading />;
};

export default LoadingToRedirect;
