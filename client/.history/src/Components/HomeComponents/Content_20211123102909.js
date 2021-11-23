import React, { useEffect } from "react";
import { ContentHome } from "../../Styles/ContentHome";
import { content, content1, content2 } from "../../Imports/Image";
import Buttons from "../Buttons/Buttons";
import hoverEffect from "hover-effect";
const champImgs = [content1, content2, content];
const Content = () => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll(".image > img");
    let animates = [];
    welcomeImgs.forEach((item, index) => {
      let nextImg =
        welcomeImgs[
          index === welcomeImgs.length - 1 ? 0 : index + 1
        ].getAttribute("src");
      let animation = new hoverEffect({
        parent: document.querySelector(".image"),
        intensity: 0.75,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: content],
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImgs.forEach((e) => e.remove());

    let currItem = 0;

    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome__img__slide > canvas");
        document.querySelector("#welcome__img__slide").appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);
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

          <div className="image">
            <img src={content} alt="" />
          </div>
        </section>
      </ContentHome>
    </>
  );
};

export default Content;
