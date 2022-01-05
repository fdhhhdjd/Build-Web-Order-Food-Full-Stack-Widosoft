import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginGoogle, Metadata } from "../../Imports/Index";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../redux/Action/ActionAdmin";
import { toast } from "react-toastify";
import axios from "axios";
import { GlobalState } from "../../Contexts/GlobalState";
const Login = (flag) => {
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
  const { Admin } = useSelector((state) => state.authAdmin);
  const handleSubmitForm = async (data) => {
    const { email, password } = data;
    dispatch(loginInitiate(email, password));
  };
  const handleIsLock = () => {
    setIsLock(!isLock);
  };
  useEffect(() => {
    if (Admin.status === 200) {
      navigator("/admin");
      localStorage.setItem("firstLogin", true);
      setCallback(!callback);
      toast.success(`${Admin.message} 🥰`);
    } else if (Admin.status === 401) {
      toast.error(Admin.message);
    }
  }, [Admin]);
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
          {isLock ? (
            <i className="fa fa-unlock" onClick={handleIsLock} />
          ) : (
            <i className="fas fa-lock" onClick={handleIsLock} />
          )}
          <input
            {...register("password", { required: true })}
            type={isLock ? "type" : "password"}
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
