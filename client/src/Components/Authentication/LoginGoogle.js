import React from "react";
import Lottie from "react-lottie";
import { defaultOptions4 } from "../../Imports/Lottie";
import { LogonGoogles } from "../../Styles/StylePages/LogonGoogles";
const LoginGoogle = () => {
  return (
    <>
      <LogonGoogles>
        <div className="login  ">
          <div className="google-btn ">
            <div className="google-icon-wrapper ">
              <Lottie options={defaultOptions4} />
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
