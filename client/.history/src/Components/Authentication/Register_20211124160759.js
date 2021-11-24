import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { registerInitial } from "../Redux/Actions";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const passwords = useRef({});
  passwords.current = watch("password");
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { displayName, email, password, passwordConfirm } = state;
  const dispatch = useDispatch();
  const { current, errorRegister } = useSelector((state) => state.user);
  const history = useHistory();
  const handleSubmitForm = (data) => {
    const { displayName, email, password } = data;
    dispatch(registerInitial(displayName, email, password));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  useEffect(() => {
    if (current) {
      history.push("/");
    }
  }, [current, history]);
  return (
    <>
      <form
        actions=""
        className="sign-up-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("displayName", { required: true, maxLength: 15 })}
            type="text"
            placeholder="Full Name"
            name="displayName"
            id="displayName"
            // value={displayName}
            // onChange={handleChange}
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.displayName?.type === "required" &&
            "Mời bạn nhập đầy đủ tên vào!"}
          {errors?.displayName?.type === "maxLength" &&
            "Tên của bạn không được quá 15 kí tự"}
        </span>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            // value={email}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
          {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
          {errorRegister && "Tài khoản của bạn đã có người đăng ký"}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            // value={password}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Mời bạn nhập đầy đủ mật khẩu. "}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === passwords.current || "The passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
            // value={passwordConfirm}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.passwordConfirm?.type === "required" &&
            "Mời bạn nhập lại mật khẩu."}
          {errors.passwordConfirm?.type === "validate" &&
            "Mật khẩu nhập lại không khớp!   "}
        </span>
        <input type="submit" className="btn" name="signup" />
      </form>
    </>
  );
};

export default Register;
