import React, { useEffect, useRef } from "react";
import { FormFeedbacks } from "../../Styles/StylePages/FormFeedBacks";
import { Buttons } from "../../Imports/Index";
import lottie from "lottie-web";

const FormFeedback = () => {
  const form = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: form.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/Json/marketing.json"),
    });
  }, []);
  return (
    <>
      <FormFeedbacks>
        <section class="order" id="order">
          <h1 class="heading">
            <span>Feed</span>back
          </h1>

          <div class="row">
            <div class="image">
              {/* <img src="images/order-img.jpg" alt="" /> */}
              <div ref={form} />
            </div>

            <form action="">
              <div class="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>

              <div class="inputBox">
                <input type="text" placeholder="number" />
                <input type="text" placeholder="food name" />
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
