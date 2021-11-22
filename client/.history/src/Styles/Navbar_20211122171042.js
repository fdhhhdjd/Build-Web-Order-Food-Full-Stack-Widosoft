import styled from "styled-components";
export const HeaderNavbar = styled.header`
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
  .navbar {
    a {
      font-size: 2rem;
      margin-left: 2rem;
      color: #666;
      &:hover {
        color: #ff3838;
      }
    }
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
  @media (max-width: 768px) {
    #menu-bar {
      display: none;
    }

    header .navbar {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #f7f7f7;
      border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }

    header .navbar.active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    header .navbar a {
      margin: 1.5rem;
      padding: 1.5rem;
      display: block;
      border: 0.2rem solid rgba(0, 0, 0, 0.1);
      border-left: 0.5rem solid var(--red);
      background: #fff;
    }
  }
`;
