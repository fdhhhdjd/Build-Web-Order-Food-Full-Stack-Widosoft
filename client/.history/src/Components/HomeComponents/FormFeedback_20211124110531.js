import React, { useEffect, useRef } from "react";
import { FormFeedbacks } from "../../Styles/StylePages/FormFeedBacks";
import { Buttons } from "../../Imports/Index";
import lottie from "lottie-web";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import emailjs from "emailjs-com";
const FormFeedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const form = useRef(null);
  const handleSubmitEmailJs = (data, e) => {
    emailjs
      .sendForm(
        "service_ic2vgjx",
        "template_e7dm6qf",
        e.target,
        "user_mgukRQItt0fMQ6EEaWr2P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal({
      title: "Your Email Has Been Sent SuccessFully ☑️",
      text: "Thank You For Your FeedBack, I Will Reply As Soon As Possible .",
      icon: "success",
    });
    e.target.reset();
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
            <span>Feed</span>back email
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
                  name="user_subject"
                />
                <input
                  {...register("user_food", {
                    required: true,
                    maxLength: 25,
                  })}
                  type="text"
                  placeholder="food name"
                  id="food"
                  name="user_food"
                />
              </div>
              <div class="inputBox">
                <p>
                  {errors.user_subject?.type === "required" &&
                    "Please Enter Your Subject !"}
                  {errors?.user_subject?.type === "maxLength" &&
                    "Your Subject Can't Be More Than 25 Characters "}
                </p>
                <p>
                  {errors.user_food?.type === "required" &&
                    "Please Enter Your food !"}
                  {errors?.user_food?.type === "maxLength" &&
                    "Your food Can't Be More Than 25 Characters "}
                </p>
              </div>

              <textarea
                {...register("message", {
                  required: true,
                })}
                placeholder="Your Content Enter"
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <p>
                {errors.message?.type === "required" &&
                  "Please Enter A Full Message So I Know What You Need !"}
              </p>
              <Buttons css="btn" name="Submit" />
            </form>
          </div>
        </section>
      </FormFeedbacks>
    </>
  );
};

export default FormFeedback;
