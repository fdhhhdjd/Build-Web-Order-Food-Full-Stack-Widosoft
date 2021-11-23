import React from "react";

const SpecialtyItem = ({ item }) => {
  const { img, logo, title, description } = item;
  return (
    <>
      <div className="box">
        <img className="image" src={img} alt="" />
        <div className="content">
          <img src={logo} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SpecialtyItem;
