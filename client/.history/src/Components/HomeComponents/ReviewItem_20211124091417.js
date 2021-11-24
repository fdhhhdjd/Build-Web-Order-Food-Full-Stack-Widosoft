import React from "react";
const ReviewItem = ({ item }) => {
  const { name, img, star, title } = item;
  return (
    <>
      <div className="box">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="stars">
          {Array(star)
            .fill()
            .map((item) => (
              <i className="fas fa-star" key={item}></i>
            ))}
        </div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default ReviewItem;
