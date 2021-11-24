import React from "react";
import { StepContainers } from "../../Styles/StylePages/StepContainers";
import { step, step1, step2, step3 } from "../../Imports/Image";
const StepContainer = () => {
  return (
    <>
      <StepContainers>
        <div className="step-container">
          <h1 className="heading">
            how it <span>works</span>
          </h1>
          <section className="steps">
            <div className="box">
              <img src={step} alt="" />
              <h3>choose your favorite food</h3>
            </div>
            <div className="box">
              <img src={step1} alt="" />
              <h3>free and fast delivery</h3>
            </div>
            <div className="box">
              <img src={step2} alt="" />
              <h3>easy payments methods</h3>
            </div>
            <div className="box">
              <img src={step3} alt="" />
              <h3>and finally, enjoy your food</h3>
            </div>
          </section>
        </div>
      </StepContainers>
    </>
  );
};

export default StepContainer;
