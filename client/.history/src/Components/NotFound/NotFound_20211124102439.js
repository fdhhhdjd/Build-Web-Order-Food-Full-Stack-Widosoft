import React from "react";
import { DivNotFound } from "../../Styles/StylePages/DivNotFound";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
const NotFound = () => {
  return (
    <>
      <GlobalStyle />
      <DivNotFound>
        <div className="body-erro">
          <nav>
            <div className="menu">
              <p className="website_name p1">
                <i className="fas fa-utensils" style={{ color: "red" }}></i>
              </p>
            </div>
          </nav>

          <section className="wrapper">
            <div className="container">
              <div id="scene" className="scene" data-hover-only="false">
                <div className="circle" data-depth="1.2"></div>

                <div className="one" data-depth="0.9">
                  <div className="content">
                    <span className="piece"></span>
                    <span className="piece"></span>
                    <span className="piece"></span>
                  </div>
                </div>

                <div className="two" data-depth="0.60">
                  <div className="content">
                    <span className="piece"></span>
                    <span className="piece"></span>
                    <span className="piece"></span>
                  </div>
                </div>

                <div className="three" data-depth="0.40">
                  <div className="content">
                    <span className="piece"></span>
                    <span className="piece"></span>
                    <span className="piece"></span>
                  </div>
                </div>

                <p className="p404 p1" data-depth="0.50">
                  404
                </p>
                <p className="p404 p1" data-depth="0.10">
                  404
                </p>
              </div>

              <div className="text">
                <article>
                  <p className="p1">
                    Uh oh! Looks like you got lost. <br />
                    Go back to the homepage if you dare!
                  </p>
                  <Link to="/">
                    <button className="button1">Go Home 🔙!</button>
                  </Link>
                </article>
              </div>
            </div>
          </section>
        </div>
      </DivNotFound>
    </>
  );
};

export default NotFound;
