import React, { useEffect, useState } from "react";
import { RatingStyle } from "../../Styles/StylesComponent/Rating";
import { RatingData } from "../../utils/DataRating";
const Rating = () => {
  const [feedback, setFeedback] = useState();
  const handleChange = (e) => {
    // e.target.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <RatingStyle />
      <div className="container">
        <div className="star-widget ">
          {RatingData.map((item, index) => {
            return (
              <>
                <input type={item.type} name={item.name} id={item.rate} />
                <label htmlFor={item.rate} className={item.class} />
              </>
            );
          })}
          <form action="" onSubmit={handleSubmit}>
            <header></header>
            <div className="textarea">
              <textarea
                cols="30"
                placeholder="Describe your experience.."
                value={feedback}
              ></textarea>
            </div>
            <div className="btn">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Rating;
