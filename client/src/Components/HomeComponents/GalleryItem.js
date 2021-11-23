import React from "react";
import { Buttons } from "../../Imports/Index";
const GalleryItem = ({ item }) => {
  const { img, title, description } = item;
  return (
    <>
      <div className="box">
        <img src={img} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Buttons css="btn" name="ordern now" />
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
