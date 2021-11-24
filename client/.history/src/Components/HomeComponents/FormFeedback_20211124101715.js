import React, { useEffect, useRef } from "react";
import { FormFeedbacks } from "../../Styles/StylePages/FormFeedBacks";
import { Buttons } from "../../Imports/Index";
import lottie from "lottie-web";
import { useForm } from "react-hook-form";
const FormFeedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const form = useRef(null);
  const handleSubmitEmailJs = (data, e) => {
    console.log(data);
  };
  useEffect(() => {
    lottie.loadAnimation({
      container: form.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/Json/marketing.json"),
    });
  }, [form]);
  return (
    <>
      <FormFeedbacks>
        <section class="order" id="order">
          <h1 class="heading">
            <span>Feed</span>back
          </h1>

          <div class="row">
            <div class="image">
              <div ref={form} />
            </div>

            <form action="" onSubmit={handleSubmit(handleSubmitEmailJs)}>
              <div class="inputBox">
                <input
                  {...register("user_name", {
                    required: true,
                    maxLength: 25,
                  })}
                  type="text"
                  placeholder="name"
                  id="user_name"
                  name="user_name"
                />

                <input
                  {...register("user_email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  })}
                  type="email"
                  placeholder="email"
                  id="user_email"
                  id="user_email"
                />
              </div>
              <div class="inputBox">
                <p>
                  {errors.user_name?.type === "required" &&
                    "Please Enter Your FullName !"}
                  {errors?.user_name?.type === "maxLength" &&
                    "Your Name Can't Be More Than 25 Characters !"}
                </p>
                <p>
                  {errors.user_email?.type === "required" &&
                    "Please Eter Your Email ! "}
                  {errors?.user_email?.type === "pattern" &&
                    "Your Email Is Not Valid !"}
                </p>
              </div>

              <div class="inputBox">
                <input
                  {...register("user_subject", {
                    required: true,
                    maxLength: 25,
                  })}
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                />
                <input type="text" placeholder="food name" />
              </div>
              <div class="inputBox">
                <p>
                  {errors.user_name?.type === "required" &&
                    "Please Enter Your FullName !"}
                  {errors?.user_name?.type === "maxLength" &&
                    "Your Name Can't Be More Than 25 Characters !"}
                </p>
                <p>
                  {errors.user_email?.type === "required" &&
                    "Please Eter Your Email ! "}
                  {errors?.user_email?.type === "pattern" &&
                    "Your Email Is Not Valid !"}
                </p>
              </div>

              <textarea
                placeholder="address"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <Buttons css="btn" name="Submit" />
            </form>
          </div>
        </section>
      </FormFeedbacks>
    </>
  );
};

export default FormFeedback;
