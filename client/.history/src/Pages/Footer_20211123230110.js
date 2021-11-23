import React from "react";
import { Buttons } from "../Imports/Index";
import { FooterStyle } from "../Styles/FooterStyle";
const Footer = () => {
  return (
    <>
      <FooterStyle>
        <section className="footer">
          <div className="share">
            <Buttons css="btn" name="facebook" />
            <Buttons css="btn" name="twitter" />
            <Buttons css="btn" name="instagram" />
            <Buttons css="btn" name="pinterest" />
            <Buttons css="btn" name="linkedin" />
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
