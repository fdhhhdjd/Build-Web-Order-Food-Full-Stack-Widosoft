import React from "react";
import { GalleryItem } from "../HomeComponents/GalleryItem";
const Gallery = () => {
  return (
    <>
      <section class="gallery" id="gallery">
        <h1 class="heading">
          our food <span> gallery </span>
        </h1>

        <div class="box-container">
          <GalleryItem />
        </div>
      </section>
    </>
  );
};

export default Gallery;
