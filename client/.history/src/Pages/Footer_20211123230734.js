import React from "react";
import { Buttons } from "../Imports/Index";
import { FooterStyle } from "../Styles/FooterStyle";
const Footer = () => {
  return (
    <>
      <FooterStyle>
        <section className="footer">
          <div className="share">
            <Buttons
              css="btn"
              name="facebook"
              id="id"
              href="https://www.facebook.com/profile.php?id=100006139249437"
            />
            <Buttons
              css="btn"
              name="Profile"
              id="id"
              href="https://profile-forme.surge.sh/"
            />
            <Buttons
              css="btn"
              name="instagram"
              id="id"
              href="https://www.instagram.com/nguyentientai10/"
            />
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
