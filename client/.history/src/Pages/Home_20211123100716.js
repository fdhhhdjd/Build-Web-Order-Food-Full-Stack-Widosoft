import React from "react";
import Content from "../Components/HomeComponents/Content";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
SwiperCore.use([Mousewheel, Pagination, EffectFade]);
const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "cube",
  speed: 1000,
};
const Home = () => {
  return (
    <>
      {/* <Content /> */}
      <Swiper {...swiperOptions} pagination={{ clickable: true }}>
        <SwiperSlide>
          {({ isActive }) => <Content isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
