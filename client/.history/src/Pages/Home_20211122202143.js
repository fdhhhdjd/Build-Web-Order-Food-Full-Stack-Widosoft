import React from "react";
import Footer from "./Footer";
const Home = (props) => {
  const { name, link } = props;
  return (
    <>
      {/* <h1>{props.name}</h1> */}
      {/* <h1>my nam -{props.name}</h1> */}
      <a href={link} target="_blank">
        {name}
      </a>
    </>
  );
};

export default Home;
