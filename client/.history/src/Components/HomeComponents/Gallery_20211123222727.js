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
          <div class="box">
            <img src="images/g-1.jpg" alt="" />
            <div class="content">
              <h3>tasty food</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
              <a href="#" class="btn">
                ordern now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
