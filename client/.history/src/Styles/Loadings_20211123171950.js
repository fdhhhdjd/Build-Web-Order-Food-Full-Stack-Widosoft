import styled from "styled-components";
const Loadings = styled.div`
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .loader-container.fade-out {
    top: -120%;
  }
`;
