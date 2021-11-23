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
            {dataSpecialty.map((item, index) => {
              return (
                <>
                  <div className="box">
                    <img className="image" src={Img} alt="" />
                    <div className="content">
                      <img src={img} alt="" />
                      <h3>tasty burger</h3>
                      <p>
                        It is a dish with a foreign flavor, but our chefs still
                        add Vietnamese flavor to the dish to have a bit of
                        national identity.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </Specialty>
    </>
  );
};

export default Specialtys;
