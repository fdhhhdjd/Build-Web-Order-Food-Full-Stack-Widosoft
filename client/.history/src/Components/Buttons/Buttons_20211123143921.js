import React from "react";
import { Button } from "../../Styles/Button";
const Buttons = ({ css, name }) => {
  return (
    <>
      <Button>
        <button className={css}>{name}</button>
      </Button>
    </>
  );
};

export default Buttons;
