import React from "react";
import { DivNotFound } from "../../Styles/DivNotFound";
const NotFound = () => {
  return (
    <>
      <DivNotFound>
        <div class="body-erro">
          <nav>
            <div class="menu">
              <p class="website_name p1">LOGO</p>
            </div>
          </nav>

          <section class="wrapper">
            <div class="container">
              <div id="scene" class="scene" data-hover-only="false">
                <div class="circle" data-depth="1.2"></div>

                <div class="one" data-depth="0.9">
                  <div class="content">
                    <span class="piece"></span>
                    <span class="piece"></span>
                    <span class="piece"></span>
                  </div>
                </div>

                <div class="two" data-depth="0.60">
                  <div class="content">
                    <span class="piece"></span>
                    <span class="piece"></span>
                    <span class="piece"></span>
                  </div>
                </div>

                <div class="three" data-depth="0.40">
                  <div class="content">
                    <span class="piece"></span>
                    <span class="piece"></span>
                    <span class="piece"></span>
                  </div>
                </div>

                <p class="p404 p1" data-depth="0.50">
                  404
                </p>
                <p class="p404 p1" data-depth="0.10">
                  404
                </p>
              </div>

              <div class="text">
                <article>
                  <p class="p1">
                    Uh oh! Looks like you got lost. <br />
                    Go back to the homepage if you dare!
                  </p>
                  <button class="button1">Go Home 🔙!</button>
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
