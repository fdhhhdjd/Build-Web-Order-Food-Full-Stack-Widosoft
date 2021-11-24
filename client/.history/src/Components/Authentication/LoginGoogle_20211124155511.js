import React from "react";
import Lottie from "react-lottie";
const LoginGoogle = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: google.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="login  ">
        <div className="google-btn ">
          <div className="google-icon-wrapper ">
            <Lottie options={defaultOptions} />
          </div>
          <p className="btn-text">
            <b>Sign in with Google +</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginGoogle;
