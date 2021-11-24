import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import { ForgetStyle } from "../../Styles/StylePages/ForgetStyle";
import { Link } from "react-router-dom";
import { defaultOptions3 } from "../../Imports/Lottie";
const Forget = () => {
  const InputFocus = useRef();
  useEffect(() => {
    InputFocus.current.focus();
  }, []);
  return (
    <>
      <ForgetStyle>
        <div className="container1">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form">
                <h2 className="title">Reset Password</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    required
                    ref={InputFocus}
                  />
                </div>
                <input
                  type="submit"
                  name="resetPassword"
                  className="btn solid"
                />
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Link to="/login">
                    <a href="" style={{ color: "#4590ef" }}>
                      Back Login ?
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Forgot Password ?</h3>
                <p>
                  You forgot the password? do not worry, I will help you now.
                </p>
              </div>
              <div className="image">
                <Lottie options={defaultOptions3} />
              </div>
            </div>
          </div>
        </div>
      </ForgetStyle>
    </>
  );
};

export default Forget;
