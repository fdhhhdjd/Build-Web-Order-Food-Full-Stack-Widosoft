import React from "react";
import { Buttons } from "../../Imports/Index";
const PopularItem = ({ item }) => {
  const { price, title, img, icon } = item;
  return (
    <>
      <div class="box">
        <span class="price">{price}</span>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <div class="stars">
        {Array.(icon).fill().map((_,index) =>(
             <i class="fas fa-star"></i>
        ))}
        
        </div>
        <Buttons css="btn" name="Order Now" />
      </div>
    </>
  );
};

export default PopularItem;
