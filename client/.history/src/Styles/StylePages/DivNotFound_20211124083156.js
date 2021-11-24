import styled from "styled-components";
import { imgs } from "../../Imports/Image";
export const DivNotFound = styled.div`
  background-image: url(${imgs});
  .h11,
  .h21,
  .h31,
  .h41,
  .h51,
  .h61,
  .p1,
  .ul1,
  .li1,
  .button1,
  .a1,
  .i1,
  .input1,
  .body-error {
    margin: 0;
    padding: 0;
    list-style: none;
    border: 0;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  h1:focus,
  h2:focus,
  h3:focus,
  h4:focus,
  h5:focus,
  h6:focus,
  p:focus,
  ul:focus,
  li:focus,
  button:focus,
  a:focus,
  i:focus,
  input:focus,
  body:focus {
    outline: 0;
  }

  body {
    margin: 0;
    padding: 0;
    height: auto;
    font-family: "Barlow", sans-serif;
    background: #695681;
  }

  .logo {
    position: fixed;
    z-index: 5;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .logo img {
    width: 55%;
    height: 55%;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    opacity: 0.8;
  }

  nav .menu {
    width: 100%;
    height: 80px;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 3;
  }

  nav .menu .website_name {
    color: #695681;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    background: white;
    padding: 4px 8px;
    border-radius: 2px;
    opacity: 0.5;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    cursor: pointer;
  }

  nav .menu .website_name:hover {
    opacity: 1;
  }

  nav .menu .menu_links {
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    opacity: 0.5;
  }

  nav .menu .menu_links:hover {
    opacity: 1;
  }

  @media screen and (max-width: 799px) {
    nav .menu .menu_links {
      display: none;
    }
  }

  nav .menu .menu_links .link {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 50px;
    letter-spacing: 2px;
    position: relative;
    -webkit-transition: all 0.3s 0.2s ease;
    transition: all 0.3s 0.2s ease;
  }

  nav .menu .menu_links .link:last-child {
    margin-right: 0;
  }

  nav .menu .menu_links .link:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 4px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffedc0),
      to(#ff9d87)
    );
    background: linear-gradient(90deg, #ffedc0 0%, #ff9d87 100%);
    bottom: -10px;
    border-radius: 4px;
    -webkit-transition: all 0.4s cubic-bezier(0.82, 0.02, 0.13, 1.26);
    transition: all 0.4s cubic-bezier(0.82, 0.02, 0.13, 1.26);
    left: 100%;
  }

  nav .menu .menu_links .link:hover {
    opacity: 1;
    color: #fb8a8a;
  }

  nav .menu .menu_links .link:hover:before {
    width: 40px;
    left: 0;
  }

  nav .menu .menu_icon {
    width: 40px;
    height: 40px;
    position: relative;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (max-width: 799px) {
    nav .menu .menu_icon {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }

  nav .menu .menu_icon .icon {
    width: 24px;
    height: 2px;
    background: white;
    position: absolute;
  }

  nav .menu .menu_icon .icon:before,
  nav .menu .menu_icon .icon:after {
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    position: absolute;
    -webkit-transition: all 0.3s cubic-bezier(0.49, 0.04, 0, 1.55);
    transition: all 0.3s cubic-bezier(0.49, 0.04, 0, 1.55);
  }

  nav .menu .menu_icon .icon:before {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  nav .menu .menu_icon .icon:after {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  nav .menu .menu_icon:hover .icon {
    background: #ffedc0;
  }

  nav .menu .menu_icon:hover .icon:before {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  nav .menu .menu_icon:hover .icon:after {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }

  .wrapper {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;
  }

  .wrapper .container {
    margin: 0 auto;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }

  .wrapper .container .scene {
    position: absolute;
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
  }

  .wrapper .container .one,
  .wrapper .container .two,
  .wrapper .container .three,
  .wrapper .container .circle,
  .wrapper .container .p404 {
    width: 60%;
    height: 60%;
    top: 20% !important;
    left: 20% !important;
    min-width: 400px;
    min-height: 400px;
  }

  .wrapper .container .one .content,
  .wrapper .container .two .content,
  .wrapper .container .three .content,
  .wrapper .container .circle .content,
  .wrapper .container .p404 .content {
    width: 600px;
    height: 600px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-animation: content 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;
    animation: content 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;
  }

  @-webkit-keyframes content {
    0% {
      width: 0;
    }
  }

  @keyframes content {
    0% {
      width: 0;
    }
  }

  .wrapper .container .one .content .piece,
  .wrapper .container .two .content .piece,
  .wrapper .container .three .content .piece,
  .wrapper .container .circle .content .piece,
  .wrapper .container .p404 .content .piece {
    width: 200px;
    height: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    border-radius: 80px;
    z-index: 1;
    -webkit-animation: pieceLeft 8s cubic-bezier(1, 0.06, 0.25, 1) infinite both;
    animation: pieceLeft 8s cubic-bezier(1, 0.06, 0.25, 1) infinite both;
  }

  @-webkit-keyframes pieceLeft {
    0% {
    }
    50% {
      left: 80%;
      width: 10%;
    }
    100% {
    }
  }

  @keyframes pieceLeft {
    0% {
    }
    50% {
      left: 80%;
      width: 10%;
    }
    100% {
    }
  }

  @-webkit-keyframes pieceRight {
    0% {
    }
    50% {
      right: 80%;
      width: 10%;
    }
    100% {
    }
  }

  @keyframes pieceRight {
    0% {
    }
    50% {
      right: 80%;
      width: 10%;
    }
    100% {
    }
  }

  @media screen and (max-width: 799px) {
    .wrapper .container .one,
    .wrapper .container .two,
    .wrapper .container .three,
    .wrapper .container .circle,
    .wrapper .container .p404 {
      width: 90%;
      height: 90%;
      top: 5% !important;
      left: 5% !important;
      min-width: 280px;
      min-height: 280px;
    }
  }

  @media screen and (max-height: 660px) {
    .wrapper .container .one,
    .wrapper .container .two,
    .wrapper .container .three,
    .wrapper .container .circle,
    .wrapper .container .p404 {
      min-width: 280px;
      min-height: 280px;
      width: 60%;
      height: 60%;
      top: 20% !important;
      left: 20% !important;
    }
  }

  .wrapper .container .text {
    width: 60%;
    height: 40%;
    min-width: 400px;
    min-height: 500px;
    position: absolute;
    margin: 40px 0;
    -webkit-animation: text 0.6s 1.8s ease backwards;
    animation: text 0.6s 1.8s ease backwards;
  }

  @-webkit-keyframes text {
    0% {
      opacity: 0;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
    }
  }

  @keyframes text {
    0% {
      opacity: 0;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
    }
  }

  @media screen and (max-width: 799px) {
    .wrapper .container .text {
      min-height: 400px;
      height: 80%;
    }
  }

  .wrapper .container .text article {
    width: 400px;
    position: absolute;
    bottom: 0;
    z-index: 4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  @media screen and (max-width: 799px) {
    .wrapper .container .text article {
      width: 100%;
    }
  }

  .wrapper .container .text article p {
    color: white;
    font-size: 18px;
    letter-spacing: 0.6px;
    margin-bottom: 40px;
    text-shadow: 6px 6px 10px #32243e;
  }

  .wrapper .container .text article button {
    height: 40px;
    padding: 0 30px;
    border-radius: 50px;
    cursor: pointer;
    -webkit-box-shadow: 0px 15px 20px rgba(54, 24, 79, 0.5);
    box-shadow: 0px 15px 20px rgba(54, 24, 79, 0.5);
    z-index: 3;
    color: #695681;
    background-color: white;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .wrapper .container .text article button:hover {
    -webkit-box-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);
    box-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    background: #fb8a8a;
    color: white;
  }

  .wrapper .container .p404 {
    font-size: 200px;
    font-weight: 700;
    letter-spacing: 4px;
    color: white;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    -webkit-animation: anime404 0.6s cubic-bezier(0.3, 0.8, 1, 1.05) both;
    animation: anime404 0.6s cubic-bezier(0.3, 0.8, 1, 1.05) both;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }

  @media screen and (max-width: 799px) {
    .wrapper .container .p404 {
      font-size: 100px;
    }
  }

  @-webkit-keyframes anime404 {
    0% {
      opacity: 0;
      -webkit-transform: scale(10) skew(20deg, 20deg);
      transform: scale(10) skew(20deg, 20deg);
    }
  }

  @keyframes anime404 {
    0% {
      opacity: 0;
      -webkit-transform: scale(10) skew(20deg, 20deg);
      transform: scale(10) skew(20deg, 20deg);
    }
  }

  .wrapper .container .p404:nth-of-type(2) {
    color: #36184f;
    z-index: 1;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    opacity: 0.8;
  }

  .wrapper .container .circle {
    position: absolute;
  }

  .wrapper .container .circle:before {
    content: "";
    position: absolute;
    width: 800px;
    height: 800px;
    background-color: rgba(54, 24, 79, 0.2);
    border-radius: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-box-shadow: inset 5px 20px 40px rgba(54, 24, 79, 0.25),
      inset 5px 0px 5px rgba(50, 36, 62, 0.3),
      inset 5px 5px 20px rgba(50, 36, 62, 0.25),
      2px 2px 5px rgba(255, 255, 255, 0.2);
    box-shadow: inset 5px 20px 40px rgba(54, 24, 79, 0.25),
      inset 5px 0px 5px rgba(50, 36, 62, 0.3),
      inset 5px 5px 20px rgba(50, 36, 62, 0.25),
      2px 2px 5px rgba(255, 255, 255, 0.2);
    -webkit-animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;
    animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;
  }

  @-webkit-keyframes circle {
    0% {
      width: 0;
      height: 0;
    }
  }

  @keyframes circle {
    0% {
      width: 0;
      height: 0;
    }
  }

  @media screen and (max-width: 799px) {
    .wrapper .container .circle:before {
      width: 400px;
      height: 400px;
    }
  }

  .wrapper .container .one .content:before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    background-color: rgba(54, 24, 79, 0.3);
    border-radius: 100%;
    -webkit-box-shadow: inset 5px 20px 40px rgba(54, 24, 79, 0.25),
      inset 5px 0px 5px rgba(50, 36, 62, 0.3),
      inset 5px 5px 20px rgba(50, 36, 62, 0.25),
      2px 2px 5px rgba(255, 255, 255, 0.2);
    box-shadow: inset 5px 20px 40px rgba(54, 24, 79, 0.25),
      inset 5px 0px 5px rgba(50, 36, 62, 0.3),
      inset 5px 5px 20px rgba(50, 36, 62, 0.25),
      2px 2px 5px rgba(255, 255, 255, 0.2);
    -webkit-animation: circle 0.8s 0.4s cubic-bezier(1, 0.06, 0.25, 1) backwards;
    animation: circle 0.8s 0.4s cubic-bezier(1, 0.06, 0.25, 1) backwards;
  }

  @media screen and (max-width: 799px) {
    .wrapper .container .one .content:before {
      width: 300px;
      height: 300px;
    }
  }

  .wrapper .container .one .content .piece {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(13.7%, #8077ea),
      color-stop(94.65%, #eb73ff)
    );
    background: linear-gradient(90deg, #8077ea 13.7%, #eb73ff 94.65%);
  }

  .wrapper .container .one .content .piece:nth-child(1) {
    right: 15%;
    top: 18%;
    height: 30px;
    width: 120px;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    -webkit-animation-name: pieceRight;
    animation-name: pieceRight;
  }

  .wrapper .container .one .content .piece:nth-child(2) {
    left: 15%;
    top: 45%;
    width: 150px;
    height: 50px;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-name: pieceLeft;
    animation-name: pieceLeft;
  }

  .wrapper .container .one .content .piece:nth-child(3) {
    left: 10%;
    top: 75%;
    height: 20px;
    width: 70px;
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
    -webkit-animation-name: pieceLeft;
    animation-name: pieceLeft;
  }

  .wrapper .container .two .content .piece {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffedc0),
      to(#ff9d87)
    );
    background: linear-gradient(90deg, #ffedc0 0%, #ff9d87 100%);
  }

  .wrapper .container .two .content .piece:nth-child(1) {
    left: 0%;
    top: 25%;
    height: 40px;
    width: 120px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-name: pieceLeft;
    animation-name: pieceLeft;
  }

  .wrapper .container .two .content .piece:nth-child(2) {
    right: 15%;
    top: 35%;
    width: 180px;
    height: 50px;
    -webkit-animation-delay: 2.5s;
    animation-delay: 2.5s;
    -webkit-animation-name: pieceRight;
    animation-name: pieceRight;
  }

  .wrapper .container .two .content .piece:nth-child(3) {
    right: 10%;
    top: 80%;
    height: 20px;
    width: 160px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-name: pieceRight;
    animation-name: pieceRight;
  }

  .wrapper .container .three .content .piece {
    background: #fb8a8a;
  }

  .wrapper .container .three .content .piece:nth-child(1) {
    left: 25%;
    top: 35%;
    height: 20px;
    width: 80px;
    -webkit-animation-name: pieceLeft;
    animation-name: pieceLeft;
    -webkit-animation-delay: 3.5s;
    animation-delay: 3.5s;
  }

  .wrapper .container .three .content .piece:nth-child(2) {
    right: 10%;
    top: 55%;
    width: 140px;
    height: 40px;
    -webkit-animation-name: pieceRight;
    animation-name: pieceRight;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  .wrapper .container .three .content .piece:nth-child(3) {
    left: 40%;
    top: 68%;
    height: 20px;
    width: 80px;
    -webkit-animation-name: pieceLeft;
    animation-name: pieceLeft;
    -webkit-animation-delay: 4.5s;
    animation-delay: 4.5s;
  }
`;
