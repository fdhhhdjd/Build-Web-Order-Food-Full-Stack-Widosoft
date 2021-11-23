import React from "react";
const Home = (props) => {
  return (
    <>
      {/* <h1>{props.name}</h1> */}
      {/* <h1>my nam -{props.name}</h1> */}
      <a href={props.link} target="_blank">
        {props.name}
      </a>
    </>
  );
};

export default Home;
