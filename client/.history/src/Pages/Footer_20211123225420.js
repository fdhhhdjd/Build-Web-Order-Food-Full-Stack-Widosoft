import React from "react";
import { FooterStyle } from "../Styles/FooterStyle";
const Footer = () => {
  return (
    <>
      <FooterStyle>
        <section class="footer">
          <div class="share">
            <a href="#" class="btn">
              facebook
            </a>
            <a href="#" class="btn">
              twitter
            </a>
            <a href="#" class="btn">
              instagram
            </a>
            <a href="#" class="btn">
              pinterest
            </a>
            <a href="#" class="btn">
              linkedin
            </a>
          </div>

          <h1 class="credit">
            created by <span> mr. web designer </span> | all rights reserved!
          </h1>
        </section>
      </FooterStyle>
    </>
  );
};

export default Footer;
