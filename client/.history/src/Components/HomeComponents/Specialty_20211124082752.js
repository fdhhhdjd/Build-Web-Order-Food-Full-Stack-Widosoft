import React from "react";
import { Specialty } from "../../Styles/StylePages/Speciallty";
import dataSpecialty from "../../utils/DataSpecialty";
import { SpecialtyItem } from "../../Imports/Index";
const Specialtys = () => {
  return (
    <>
      <Specialty>
        <section className="speciality" id="speciality">
          <h1 className="heading">
            our <span>speciality</span>
          </h1>
          <div className="box-container">
            {dataSpecialty.map((item) => (
              <SpecialtyItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </Specialty>
    </>
  );
};

export default Specialtys;
