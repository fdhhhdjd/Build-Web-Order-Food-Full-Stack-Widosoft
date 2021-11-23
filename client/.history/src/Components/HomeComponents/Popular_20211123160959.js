import React from "react";
import { Buttons } from "../../Imports/Index";
import { PopularHome } from "../../Styles/PopularHome";
const Popular = () => {
  return (
    <>
      <PopularHome>
        <section class="popular" id="popular">
          <h1 class="heading">
            most <span>popular</span> foods
          </h1>

          <div class="box-container">
            <div class="box">
              <span class="price"> $5 - $20 </span>
              <img src="images/p-1.jpg" alt="" />
              <h3>tasty burger</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <Buttons css="btn" name="Order Now" />
            </div>
            {/* <div class="box">
              <span class="price"> $5 - $20 </span>
              <img src="images/p-2.jpg" alt="" />
              <h3>tasty cakes</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a href="#" class="btn">
                order now
              </a>
            </div>
            <div class="box">
              <span class="price"> $5 - $20 </span>
              <img src="images/p-3.jpg" alt="" />
              <h3>tasty sweets</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a href="#" class="btn">
                order now
              </a>
            </div>
            <div class="box">
              <span class="price"> $5 - $20 </span>
              <img src="images/p-4.jpg" alt="" />
              <h3>tasty cupcakes</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a href="#" class="btn">
                order now
              </a>
            </div>
            <div class="box">
              <span class="price"> $5 - $20 </span>
              <img src="images/p-5.jpg" alt="" />
              <h3>cold drinks</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a href="#" class="btn">
                order now
              </a>
            </div>
            <div class="box">
              <span class="price"> $5 - $20 </span>
              <img src="images/p-6.jpg" alt="" />
              <h3>cold ice-cream</h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <a href="#" class="btn">
                order now
              </a>
            </div> */}
          </div>
        </section>
      </PopularHome>
    </>
  );
};

export default Popular;
