import React from "react";

const LoginGoogle = () => {
  return (
    <>
      <div className="login  ">
        <div className="google-btn " onClick={handleLoginGoogle}>
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
