import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../../redux/Action/ActionAdmin";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    reset,
  } = useForm();
  const passwords = useRef({});
  const dispatch = useDispatch();
  const { AdminRegister } = useSelector((state) => state.authAdmin);
  passwords.current = watch("password");
  const [state, setState] = useState({
    email: "",
    hoten: "",
    username: "",
    password: "",
    ngaysinh: "",
    gioitinh: "",
    dienthoai: "",
  });
  const handleSubmitForm = async (data) => {
    const { email, hoten, username, password, ngaysinh, gioitinh, dienthoai } =
      data;
    dispatch(
      RegisterInitiate(
        email,
        hoten,
        username,
        password,
        ngaysinh,
        gioitinh,
        dienthoai
      )
    );
  };
  useEffect(() => {
    if (AdminRegister.Status === 200) {
      reset();
    }
  }, [AdminRegister]);

  return (
    <>
      <form
        actions=""
        className="sign-up-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign up</h2>
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
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
          {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
        </span>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("hoten", { required: true, maxLength: 15 })}
            type="text"
            placeholder="hoten"
            name="hoten"
            id="hoten"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.hoten?.type === "required" && "Mời bạn nhập đầy đủ tên vào!"}
          {errors?.hoten?.type === "maxLength" &&
            "Tên của bạn không được quá 15 kí tự"}
        </span>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("username", { required: true, maxLength: 15 })}
            type="text"
            placeholder="username"
            name="username"
            id="username"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.username?.type === "required" &&
            "Mời bạn nhập đầy đủ tên vào!"}
          {errors?.username?.type === "maxLength" &&
            "Tên của bạn không được quá 15 kí tự"}
        </span>

        {/* <div className="input-field">
          <i class="fas fa-table"></i>
          <input
            {...register("ngaysinh", { required: true })}
            type="date"
            placeholder="ngaysinh"
            name="ngaysinh"
            id="ngaysinh"
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.date?.type === "required" &&
            "Mời bạn nhập đầy đủ ngày sinh vào!"}
        </span> */}
        {/* <div className="input-field">
          <i class="fas fa-genderless"></i>
          <select
            name="gioitinh"
            {...register("gioitinh", { required: true })}
            className="select"
          >
            <option name="gioitinh" value="1" className="select">
              Nam
            </option>
            <option name="gioitinh" value="0" className="select">
              Nữ
            </option>
          </select>
        </div>

        <span style={{ color: "red" }}>
          {errors.gioitinh && (
            <p style={{ color: "red" }}> {errors.gioitinh.message}</p>
          )}
        </span> */}
        {/* <div className="input-field">
          <i class="fas fa-phone-alt"></i>
          <Controller
            name="dienthoai"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="TH"
                id="phone-input"
              />
            )}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors["dienthoai"] && (
            <p className="error-message">Invalid Phone</p>
          )}
        </span> */}

        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
              },
            })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Mời bạn nhập đầy đủ mật khẩu. "}
          {errors?.password?.type === "minLength" &&
            "Mật khẩu của bạn phải 6 kí tự trở lên !!"}
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
