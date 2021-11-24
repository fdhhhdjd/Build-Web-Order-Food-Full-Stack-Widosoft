import React from "react";
const ReviewItem = ({ item }) => {
  const { name, img, star, title } = item;
  return (
    <>
      <div class="box">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div class="stars">
          {Array(star)
            .fill()
            .map(() => (
              <i class="fas fa-star"></i>
            ))}
        </div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default ReviewItem;
