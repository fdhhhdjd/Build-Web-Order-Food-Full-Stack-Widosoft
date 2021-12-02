import React, { useEffect, useState } from "react";
import { RatingStyle } from "../../Styles/StylesComponent/Rating";
import { RatingData } from "../../utils/DataRating";
const Rating = () => {
  const [state, setState] = useState();
  return (
    <>
      <RatingStyle />
      <div className="container">
        <div className="post none">
          <div className="text">Thanks for rating us!</div>
          <div className="edit">EDIT</div>
        </div>
        {/* <div className="star-widget ">
          {RatingData.map((item, index) => {
            return (
              <>
                <input type={item.type} name={item.name} id={item.rate} />
                <label htmlFor={item.rate} className={item.class} />
              </>
            );
          })}
          <form action="#">
            <header></header>
            <div className="textarea">
              <textarea
                cols="30"
                placeholder="Describe your experience.."
              ></textarea>
            </div>
            <div className="btn">
              <button type="submit">Post</button>
            </div>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default Rating;
