import { css } from "styled-components";

export const Tablet = (props) => {
  return css`
    @media only screen and (max-width: 991px) {
      ${props}
    }
  `;
};
