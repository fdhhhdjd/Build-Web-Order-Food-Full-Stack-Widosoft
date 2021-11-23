import React from "react";
import { Specialty } from "../../Styles/Speciallty";
import dataSpecialty from "../../utils/DataSpecialty";
import SpecialtyItem from "./SpecialtyItem";
const Specialtys = () => {
  return (
    <>
      <Specialty>
        <section className="speciality" id="speciality">
          <h1 className="heading">
            our <span>speciality</span>
          </h1>
          <div className="box-container">
            {dataSpecialty.map((item) => {
              return (
                <>
                  <SpecialtyItemkey={ Math.random().toString(36).substr(2, 9) } item={item} />
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
