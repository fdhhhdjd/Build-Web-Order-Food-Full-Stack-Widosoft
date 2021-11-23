import React from "react";
import { Button } from "../../Styles/Button";
const Buttons = ({ css, name, id }) => {
  return (
    <>
      <Button>
        <a href="">
          {" "}
          <button className={css} id={id}>
            {name}
          </button>
        </a>
      </Button>
    </>
  );
};

export default Buttons;
