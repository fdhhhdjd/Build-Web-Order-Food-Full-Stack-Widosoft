import React from "react";
import { leader, leader1, leader2 } from "../../Imports/Image";
const Review = () => {
  return (
    <>
      <ReviewStyle>
        <section class="review" id="review">
          <h1 class="heading">
            our customers <span>reviews</span>
          </h1>

          <div class="box-container">
            <div class="box">
              <img src={leader1} alt="" />
              <h3>john deo</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti delectus, ducimus facere quod ratione vel laboriosam?
                Est, maxime rem. Itaque.
              </p>
            </div>
            <div class="box">
              <img src={leader} alt="" />
              <h3>john deo</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti delectus, ducimus facere quod ratione vel laboriosam?
                Est, maxime rem. Itaque.
              </p>
            </div>
            <div class="box">
              <img src={leader2} alt="" />
              <h3>john deo</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti delectus, ducimus facere quod ratione vel laboriosam?
                Est, maxime rem. Itaque.
              </p>
            </div>
          </div>
        </section>
      </ReviewStyle>
    </>
  );
};

export default Review;
