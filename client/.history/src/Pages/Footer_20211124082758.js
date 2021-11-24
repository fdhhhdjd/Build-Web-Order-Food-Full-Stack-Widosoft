import React from "react";
import { Buttons } from "../Imports/Index";
import { FooterStyle } from "../Styles/StylePages/FooterStyle";
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
            <Buttons css="btn" name="phone" id="id" href="tel:0798805741" />
            <Buttons
              css="btn"
              name="email"
              id="id"
              href="mailto:nguyentientai10@gmail.com"
            />
          </div>

          <h1 className="credit">
            created by <span> Mr.Tai Dev Web </span> | all rights reserved!
          </h1>
        </section>
      </FooterStyle>
    </>
  );
};

export default Footer;
