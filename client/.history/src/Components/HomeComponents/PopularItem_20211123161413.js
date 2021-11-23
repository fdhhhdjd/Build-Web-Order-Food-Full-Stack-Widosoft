import React from "react";
import { Buttons } from "../../Imports/Index";
const PopularItem = ({ item }) => {
  const { price, title, img, icon } = item;
  return (
    <>
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
    </>
  );
};

export default PopularItem;
