import React from "react";
import { ReviewStyle } from "../../Styles/StylePages/ReviewStyle";
import { DataManager } from "../../utils/DataManager";
import { ReviewItem } from "../../Imports/Index";
const Review = () => {
  return (
    <>
      <ReviewStyle>
        <section className="review" id="review">
          <h1 className="heading">
            our customers <span>reviews</span>
          </h1>

          <div className="box-container">
            {DataManager.map((item) => (
              <ReviewItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </ReviewStyle>
    </>
  );
};

export default Review;
