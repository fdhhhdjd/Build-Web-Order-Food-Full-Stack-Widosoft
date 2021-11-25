import React from "react";
import { EmptyCartStyle } from "../../Styles/StylePages/EmptyCartStyle";
const EmptyCart = () => {
  return (
    <>
      <EmptyCartStyle>
        <div className="emptyCart">
          <img
            src="https://merchlist.co/assets/emptycart.png"
            alt=""
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </EmptyCartStyle>
    </>
  );
};

export default EmptyCart;
