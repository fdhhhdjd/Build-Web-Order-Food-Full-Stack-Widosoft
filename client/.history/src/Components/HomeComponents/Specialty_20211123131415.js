import React from "react";
import { Specialty } from "../../Styles/Speciallty";
import { img, img1, img2, img3, img4, img5 } from "../../Imports/Image";
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
              <img className="image" src={img} alt="" />
              <div className="content">
                <img src="" alt="" />
                <h3>tasty burger</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={img1} alt="" />
              <div className="content">
                <img src="images/s-2.png" alt="" />
                <h3>tasty pizza</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="images/s-img-3.jpg" alt="" />
              <div className="content">
                <img src="images/s-3.png" alt="" />
                <h3>cold ice-cream</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="images/s-img-4.jpg" alt="" />
              <div className="content">
                <img src="images/s-4.png" alt="" />
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="images/s-img-5.jpg" alt="" />
              <div className="content">
                <img src="images/s-5.png" alt="" />
                <h3>tasty sweets</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                  tempore libero labore aut.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src="images/s-img-6.jpg" alt="" />
              <div className="content">
                <img src="images/s-6.png" alt="" />
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
