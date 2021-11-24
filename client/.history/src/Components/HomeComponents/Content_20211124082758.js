import React, { useEffect, useState } from "react";
import { ContentHome } from "../../Styles/StylePages/ContentHome";
import {
  content,
  content2,
  content3,
  content4,
  content5,
} from "../../Imports/Image";
import { Buttons } from "../../Imports/Index";
const champImgs = [content, content2, content3, content4, content5];
const Content = () => {
  const [current, setCurrent] = useState(0);
  const length = champImgs.length;
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);
    console.log(current);
    return () => {
      clearInterval(slider);
    };
  }, [current, length]);
  return (
    <>
      <ContentHome>
        <section className="home" id="home">
          <div className="content">
            <h3>Food Pizza Vietnamese </h3>
            <p>
              We always have a love for pizza, the dishes we make are all
              dedicated to giving you rewards with preferential prices as well
              as quality, coming to the shop not to eat pizza is a bit of a
              wastes!
            </p>
            <Buttons css="btn" name="order now" />
          </div>
          <div className="image" id="welcome__img__slide">
            {champImgs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={index === current ? "slide active" : "slide"}
                >
                  {index === current && (
                    <img
                      src={item}
                      key={index}
                      alt="Travel image"
                      className="image"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </ContentHome>
    </>
  );
};

export default Content;
