import React, { useEffect, useState } from "react";
import { RatingStyle } from "../../Styles/StylesComponent/Rating";
import { RatingData } from "../../utils/DataRating";
const Rating = () => {
  const [state, setState] = useState();
  return (
    <>
      <RatingStyle />
      <div class="container">
        <div class="post">
          <div class="text">Thanks for rating us!</div>
          <div class="edit">EDIT</div>
        </div>
        <div class="star-widget none">
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
            <div class="textarea">
              <textarea
                cols="30"
                placeholder="Describe your experience.."
              ></textarea>
            </div>
            <div class="btn">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Rating;
