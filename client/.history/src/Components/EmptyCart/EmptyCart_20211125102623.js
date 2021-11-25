import React from "react";
import { EmptyCartStyle } from "../../Styles/StylePages/EmptyCartStyle";
import { Navigate } from "react-router-dom";
const EmptyCart = () => {
  return (
    <>
      <EmptyCartStyle>
        <div className="emptyCart">
          <img
            src="https://merchlist.co/assets/emptycart.png"
            alt=""
            onClick={() => Navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </EmptyCartStyle>
    </>
  );
};

export default EmptyCart;
