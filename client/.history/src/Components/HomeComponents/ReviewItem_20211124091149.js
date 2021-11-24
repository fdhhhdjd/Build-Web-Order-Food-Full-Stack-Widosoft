import React from "react";
import { ReviewStyle } from "../../Styles/StylePages/ReviewStyle";
const ReviewItem = ({ item }) => {
  const { name, img, star, title } = item;
  return (
    <>
      <ReviewStyle>
        <div class="box">
          <img src={img} alt="" />
          <h3>{name}</h3>
          {Array(star)
            .fill()
            .map(() => (
              <i class="fas fa-star"></i>
            ))}
          <p>{title}</p>
        </div>
      </ReviewStyle>
    </>
  );
};

export default ReviewItem;
