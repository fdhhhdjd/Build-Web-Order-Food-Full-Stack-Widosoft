import React, { useEffect, useState } from "react";
import { ContentHome } from "../../Styles/ContentHome";
import { content, content1, content2 } from "../../Imports/Image";
import Buttons from "../Buttons/Buttons";
import hoverEffect from "hover-effect";
const champImgs = [content1, content2, content];
const Content = () => {
  const [current, setCurrent] = useState(0);
  const length = champImgs.length;
  useEffect(() => {
    const slider = setInterval(() => {
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome__img__slide"),
        intensity: 0.75,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: current,
        hover: false,
      });
      setCurrent(current === length - 1 ? 0 : current + 1, animation);
    }, 2500);
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
            {/* <img src={content} alt="" /> */}

            {champImgs.map((item, index) => {
              return (
                <>
                  {index === current && (
                    <img
                      src={item}
                      key={index}
                      alt="Travel image"
                      className="image"
                    />
                  )}
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
