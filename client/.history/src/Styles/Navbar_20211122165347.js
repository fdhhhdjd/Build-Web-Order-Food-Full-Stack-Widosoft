import styled from "styled-components";
export const HeaderNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 2rem 9%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  .logo {
    font-size: 2.5rem;
    font-weight: bolder;
    color: #666;
  }
  i {
    padding-right: 0.5rem;
    color: #ff3838;
  }
  #menu-bar {
    font-size: 3rem;
    cursor: pointer;
    color: #666;
    border: 0.1rem solid #666;
    border-radius: 0.3rem;
    padding: 0.5rem 1.5rem;
    display: none;
  }
`;
