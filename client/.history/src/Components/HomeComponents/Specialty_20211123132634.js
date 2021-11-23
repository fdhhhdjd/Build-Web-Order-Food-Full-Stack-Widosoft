import React from "react";
import { Specialty } from "../../Styles/Speciallty";
import {
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  Img,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
} from "../../Imports/Image";
const Specialtys = () => {
  return (
    <>
      <Specialty>
        <section className="speciality" id="speciality">
          <h1 className="heading">
            our <span>speciality</span>
          </h1>

          <div className="box-container">
            <div className="box">
              <img className="image" src={Img} alt="" />
              <div className="content">
                <img src={img} alt="" />
                <h3>tasty burger</h3>
                <p>
                  It is a dish with a foreign flavor, but our chefs still add
                  Vietnamese flavor to the dish to have a bit of national
                  identity.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img1} alt="" />
              <div className="content">
                <img src={img1} alt="" />
                <h3>tasty pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img2} alt="" />
              <div className="content">
                <img src={img2} alt="" />
                <h3>cold ice-cream</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img3} alt="" />
              <div className="content">
                <img src={img3} alt="" />
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img4} alt="" />
              <div className="content">
                <img src={img4} alt="" />
                <h3>tasty sweets</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img5} alt="" />
              <div className="content">
                <img src={img5} alt="" />
                <h3>healty breakfast</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Specialty>
    </>
  );
};

export default Specialtys;
