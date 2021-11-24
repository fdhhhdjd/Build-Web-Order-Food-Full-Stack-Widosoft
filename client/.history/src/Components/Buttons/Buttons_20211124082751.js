import React from "react";
import { Button } from "../../Styles/StylesComponent/Button";
const Buttons = ({ css, name, id, href }) => {
  return (
    <>
      <Button>
        <a href={href} target="_blank">
          <button className={css} id={id}>
            {name}
          </button>
        </a>
      </Button>
    </>
  );
};

export default Buttons;
