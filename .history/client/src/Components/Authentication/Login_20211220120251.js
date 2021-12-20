import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginGoogle } from "../../Imports/Index";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../redux/Action/ActionAdmin";
import axios from "axios";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const passwords = useRef({});
  passwords.current = watch("password");
  const { Admin } = useSelector((state) => state.authAdmin);
  console.log(Admin, "aaaa");
  const handleSubmitForm = async (data) => {
    const { email, password } = data;
    dispatch(loginInitiate(email, password));
  };
  return (
    <>
      <form
        className="sign-in-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign in</h2>
        <div className="loginGoogleFb">
          <div className="login_google">
            <LoginGoogle />
          </div>
        </div>

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
          {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
          {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Mời bạn nhập đầy đủ mật khẩu. "}
        </span>
        <input type="submit" name="signin" className="btn solid" />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/forget">
            <a href="" style={{ color: "#4590ef" }}>
              Forgot Password?
            </a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
