import React from "react";
import { PopularHome } from "../../Styles/PopularHome";
import DataPopularHome from "../../utils/DataPopular";
import PopularItem from "./PopularItem";
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
              {DataPopularHome.map((item) => (
                <PopularItem item={item} />
              ))}
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
