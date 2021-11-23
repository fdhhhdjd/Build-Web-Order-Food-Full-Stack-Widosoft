import React from "react";
import { Buttons } from "../../Imports/Index";
const GalleryItem = ({ item }) => {
  const { img, title, description } = item;
  return (
    <>
      <div class="box">
        <img src={img} alt="" />
        <div class="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Buttons css="btn" name="ordern now" />
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
