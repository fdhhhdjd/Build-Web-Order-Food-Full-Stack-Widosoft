import React from "react";

const CheckoutItems = ({ item }) => {
  const { img, title, quantity, price } = item;
  return (
    <>
      <div className="item">
        <img src={img} alt="" />
        <div className="info">
          <h4>{title}</h4>
          <p className="quantity">Quantity: {quantity}</p>
          <p className="price">{price}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutItems;
