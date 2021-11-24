import React from "react";
import { FormFeedbacks } from "../../Styles/StylePages/FormFeedBacks";
import { Buttons } from "../../Imports/Index";
const FormFeedback = () => {
  return (
    <>
      <FormFeedbacks>
        <section class="order" id="order">
          <h1 class="heading">
            <span>order</span> now
          </h1>

          <div class="row">
            <div class="image">
              <img src="images/order-img.jpg" alt="" />
            </div>

            <form action="">
              <div class="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>

              <div class="inputBox">
                <input type="number" placeholder="number" />
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
