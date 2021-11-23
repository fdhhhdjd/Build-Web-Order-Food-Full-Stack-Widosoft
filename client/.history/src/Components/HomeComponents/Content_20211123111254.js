import React, { useEffect, useState } from "react";
import { ContentHome } from "../../Styles/ContentHome";
import {
  content,
  content2,
  content3,
  content4,
  content5,
} from "../../Imports/Image";
import Buttons from "../Buttons/Buttons";
const champImgs = [content, content2, , content3, content4, content5];
const Content = () => {
  const [current, setCurrent] = useState(2);
  const length = champImgs.length;
  // useEffect(() => {
  //   const slider = setInterval(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   }, 2500);
  //   console.log(current);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [current, length]);
  return (
    <>
      <ContentHome>
        <section className="home" id="home">
          <div className="content">
            <h3>food made with love</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              accusamus tempore temporibus rem amet laudantium animi optio
              voluptatum. Natus obcaecati unde porro nostrum ipsam itaque
              impedit incidunt rem quisquam eos!
            </p>

            <Buttons css="btn" name="order now" />
          </div>

          <div className="image" id="welcome__img__slide">
            {champImgs.map((item, index) => {
              return (
                <>
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
                </>
              );
            })}
          </div>
        </section>
      </ContentHome>
    </>
  );
};

export default Content;
