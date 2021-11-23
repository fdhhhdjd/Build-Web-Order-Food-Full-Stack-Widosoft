import React from "react";
import { Button } from "../../Styles/Button";
const Buttons = ({ css, name, id }) => {
  return (
    <>
      <Button>
        <button className={css} id={id}>
          {name}
        </button>
      </Button>
    </>
  );
};

export default Buttons;
