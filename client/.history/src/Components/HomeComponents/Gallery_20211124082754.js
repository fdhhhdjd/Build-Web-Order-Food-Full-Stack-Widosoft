import React from "react";
import { GalleryItem } from "../../Imports/Index";
import DataGallery from "../../utils/DataGallery";
import { GalleryStyle } from "../../Styles/StylePages/GalleryStyle";
const Gallery = () => {
  return (
    <>
      <GalleryStyle>
        <section className="gallery" id="gallery">
          <h1 className="heading">
            our food <span> gallery </span>
          </h1>
          <div className="box-container">
            {DataGallery.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </GalleryStyle>
    </>
  );
};

export default Gallery;
