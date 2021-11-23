import React from "react";
import Contents from "../../Styles/ContentHome";
const Content = () => {
  return (
    <>
      <Contents>
        <section class="home" id="home">
          <div class="content">
            <h3>food made with love</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              accusamus tempore temporibus rem amet laudantium animi optio
              voluptatum. Natus obcaecati unde porro nostrum ipsam itaque
              impedit incidunt rem quisquam eos!
            </p>
            <a href="#" class="btn">
              order now
            </a>
          </div>

          <div class="image">
            <img src="images/home-img.png" alt="" />
          </div>
        </section>
      </Contents>
    </>
  );
};

export default Content;
