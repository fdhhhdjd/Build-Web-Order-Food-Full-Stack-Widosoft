import { createGlobalStyle } from "styled-components";

export const GlobalStyleAmin = createGlobalStyle`
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
.container{
    display: flex;
    margin-top: 10px;
}
.link{
    text-decoration: none;
    color: inherit;
}
`;
