import React from "react";
import { Buttons } from "../../Imports/Index";
const PopularItem = ({ item }) => {
  const { price, title, img, icon } = item;
  return (
    <>
      <div className="box">
        <span className="price">{price}</span>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <div className="stars">
          {Array(icon)
            .fill()
            .map((_, index) => (
              <i className="fas fa-star" key={index}></i>
            ))}
        </div>
        <Buttons css="btn" name="Order Now" />
      </div>
    </>
  );
};

export default PopularItem;
