import React from "react";

const SpecialtyItem = () => {
  return (
    <>
      <div className="box">
        <img className="image" src={item.img} alt="" />
        <div className="content">
          <img src={item.logo} alt="" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};

export default SpecialtyItem;
