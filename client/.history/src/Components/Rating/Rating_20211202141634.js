import React, { useEffect, useState } from "react";
import { RatingStyle } from "../../Styles/StylesComponent/Rating";
import { DataRating } from "../../utils/DataRating";
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
        <div class="star-widget">
          {DataRating.map((item) => {
            return (
              <div>
                <input type="radio" name="rate" id="rate-5" />
                <label htmlFor="rate-5" className="fas fa-star" />
              </div>
            );
          })}

          {/* <input type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-1" />
          <label htmlFor="rate-1" className="fas fa-star" /> */}
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
