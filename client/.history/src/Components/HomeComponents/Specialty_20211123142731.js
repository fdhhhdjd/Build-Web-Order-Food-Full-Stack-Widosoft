import React from "react";
import { Specialty } from "../../Styles/Speciallty";
import dataSpecialty from "../../utils/DataSpecialty";
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
                  This is the main dish, it can be said that this is the best
                  dish in our store, the pizza has many flavors for you to
                  choose from.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img2} alt="" />
              <div className="content">
                <img src={img2} alt="" />
                <h3>cold ice-cream</h3>
                <p>
                  Ice-cream Desserts have many varieties for you to choose to
                  eat through this hot summer.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img3} alt="" />
              <div className="content">
                <img src={img3} alt="" />
                <h3>cold drinks</h3>
                <p>
                  Drinks include fruit juice and beer for refreshment, the shop
                  also sells milk tea to serve girls who have a preference for
                  milk tea.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img4} alt="" />
              <div className="content">
                <img src={img4} alt="" />
                <h3>tasty sweets</h3>
                <p>
                  My store has a custom birthday cake design to choose from
                  depending on the price that the customer chooses and do it
                  quickly when the customer needs it urgently.
                </p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={Img5} alt="" />
              <div className="content">
                <img src={img5} alt="" />
                <h3>healty breakfast</h3>
                <p>
                  Our coffee sells many kinds of coffee, including weasel
                  coffee,... slowly serving people with high and low income.
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
