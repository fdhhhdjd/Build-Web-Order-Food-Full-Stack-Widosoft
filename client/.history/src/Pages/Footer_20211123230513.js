import React from "react";
import { Buttons } from "../Imports/Index";
import { FooterStyle } from "../Styles/FooterStyle";
const Footer = () => {
  return (
    <>
      <FooterStyle>
        <section className="footer">
          <div className="share">
            <Buttons css="btn" name="facebook" id="id" />
            <Buttons css="btn" name="twitter" id="id" />
            <Buttons css="btn" name="instagram" id="id" />
            <Buttons css="btn" name="pinterest" id="id" />
            <Buttons css="btn" name="linkedin" id="id" />
          </div>

          <h1 className="credit">
            created by <span> mr. web designer </span> | all rights reserved!
          </h1>
        </section>
      </FooterStyle>
    </>
  );
};

export default Footer;
