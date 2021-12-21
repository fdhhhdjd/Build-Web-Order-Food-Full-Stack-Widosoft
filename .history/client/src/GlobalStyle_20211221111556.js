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
  background: #ff3838;
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

.heading {
  text-align: center;
  font-size: 3.5rem;
  padding: 1rem;
  color: #666;
}

.heading span {
  color: #ff3838;
}
@media(max-width:991px){

  html{
    font-size: 55%;
  }

  header{
    padding:2rem;
  }

  section{
    padding:2rem;
  }

}
@media(max-width:450px){

  html{
    font-size: 50%;
  }

  .order .row form .inputBox input{
    width:100%;
  }

}
`;
