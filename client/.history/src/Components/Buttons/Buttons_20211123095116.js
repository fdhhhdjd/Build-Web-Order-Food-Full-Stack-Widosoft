import React from "react";
import { Button } from "../../Styles/Button";
const Buttons = ({ css, name }) => {
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

export default Buttons;
