import React from "react";
import { Buttons } from "../../Imports/Index";
const PopularItem = ({ item }) => {
  const { price, title, img, icon } = item;
  return (
    <>
      <span class="price">{price}</span>
      <img src={img} alt="" />
      <h3>{title}</h3>
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
