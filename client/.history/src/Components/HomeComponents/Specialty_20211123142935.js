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
                    <img className="image" src={item.img} alt="" />
                    <div className="content">
                      <img src={item.logo} alt="" />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
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
