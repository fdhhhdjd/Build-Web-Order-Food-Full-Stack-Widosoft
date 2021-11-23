import React from "react";
import { GalleryItem } from "../../Imports/Index";
import DataGallery from "../../utils/DataGallery";
const Gallery = () => {
  return (
    <>
      <section class="gallery" id="gallery">
        <h1 class="heading">
          our food <span> gallery </span>
        </h1>

        <div class="box-container">
          {DataGallery.map((item) => (
            <GalleryItem key={item.id}={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
