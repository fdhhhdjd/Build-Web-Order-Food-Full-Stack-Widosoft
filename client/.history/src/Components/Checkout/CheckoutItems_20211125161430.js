import React from "react";

const CheckoutItems = () => {
  return (
    <>
      <div className="item">
        <img src={Img} alt="" />
        <div className="info">
          <h4>Trixie Soccer Ball, Vinyl</h4>
          <p className="quantity">Quantity: 1</p>
          <p className="price">1.99€</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutItems;
