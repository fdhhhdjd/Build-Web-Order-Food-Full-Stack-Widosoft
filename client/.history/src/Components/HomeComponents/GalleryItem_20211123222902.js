import React from "react";

const GalleryItem = ({ item }) => {
  const { img, title, description } = item;
  return (
    <>
      <div class="box">
        <img src={img} alt="" />
        <div class="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" class="btn">
            ordern now
          </a>
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
