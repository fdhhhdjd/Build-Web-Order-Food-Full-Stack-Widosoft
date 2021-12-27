import React, { useState, useRef, useEffect, useContext } from "react";
import Lottie from "react-lottie";
import { ForgetStyle } from "../../Styles/StylePages/ForgetStyle";
import { Link } from "react-router-dom";
import { defaultOptions3 } from "../../Imports/Lottie";
const Forget = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [isLock, setIsLock] = useState(false);
  const states = useContext(GlobalState);
  const [callback, setCallback] = states.callback;
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const passwords = useRef({});
  passwords.current = watch("password");
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
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    })}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                  />
                </div>
                <span style={{ color: "red" }}>
                  {errors.email?.type === "required" &&
                    "Mời bạn nhập Email đầy đủ! "}
                  {errors?.email?.type === "pattern" &&
                    "Email của ban không hợp lệ!"}
                </span>
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
