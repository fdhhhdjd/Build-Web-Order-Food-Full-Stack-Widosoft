import React from "react";

const ReviewItem = (item) => {
  const { name, img, star, title } = item;
  return (
    <>
      <div class="box">
        <img src={leader1} alt="" />
        <h3>john deo</h3>
        {Array(star)
          .fill()
          .map(() => (
            <i class="fas fa-star"></i>
          ))}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem.
          Itaque.
        </p>
      </div>
    </>
  );
};

export default ReviewItem;
