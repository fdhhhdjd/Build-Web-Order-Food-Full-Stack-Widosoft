import React from "react";

const Button = ({ css, name }) => {
  return (
    <>
      <Button>
        <a href="" className={css}>
          {name}
        </a>
      </Button>
    </>
  );
};

export default Button;
