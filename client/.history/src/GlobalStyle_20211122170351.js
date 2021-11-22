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
    transition:all .4s linear;
  }
  
*::selection{
  background:var(--red);
  color:#fff;
}
html{
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
}

body{
  background:#f7f7f7;
}

section{
  padding:2rem 9%;
}

`;
