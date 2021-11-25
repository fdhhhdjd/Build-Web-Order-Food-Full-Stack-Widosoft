import styled from "styled-components";
import { Home } from "../../Imports/Image";
export const Loadings = styled.div`
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    background: url(${Home}) no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .fade-out {
    top: -120%;
  }
`;
