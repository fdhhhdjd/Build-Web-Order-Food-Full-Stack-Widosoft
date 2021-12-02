import React from "react";
import { RatingStyle } from "../../Styles/StylesComponent/Rating";
const Rating = () => {
  return (
    <>
      <RatingStyle />
      <div class="container">
        <div class="post">
          <div class="text">Thanks for rating us!</div>
          <div class="edit">EDIT</div>
        </div>
      </div>
    </>
  );
};

export default Rating;
