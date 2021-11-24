import React from "react";
import { ReviewStyle } from "../../Styles/StylePages/ReviewStyle";
import DataManager from "../../utils/DataManager";
import { ReviewItem } from "../../Imports/Index";
const Review = () => {
  return (
    <>
      <ReviewStyle>
        <section class="review" id="review">
          <h1 class="heading">
            our customers <span>reviews</span>
          </h1>

          <div class="box-container">
            <ReviewItem />
          </div>
        </section>
      </ReviewStyle>
    </>
  );
};

export default Review;
