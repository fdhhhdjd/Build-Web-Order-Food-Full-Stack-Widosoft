import React, { useRef } from "react";
import Lottie from "react-lottie";
import * as google from "../../utils/Json/google.json";
import { LogonGoogles } from "../../Styles/StylePages/LogonGoogles";
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
      <LogonGoogles>
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
      </LogonGoogles>
    </>
  );
};

export default LoginGoogle;
