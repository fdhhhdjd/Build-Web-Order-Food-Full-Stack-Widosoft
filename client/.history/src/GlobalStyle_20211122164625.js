import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    outline: none;
    border:none;
    text-decoration: none;
    text-transform: capitalize;
    transition:all .2s linear;
  }
`;
