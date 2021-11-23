import React from "react";
import { Button } from "../../Styles/Button";
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
