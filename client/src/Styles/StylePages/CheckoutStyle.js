import styled from "styled-components";
import { mobile } from "../../Styles/StylePages/MobileReponsive";
import { Tablet } from "../../Styles/StylePages/TabletReponsive";
const img = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/chien.png";
export const CheckoutStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #242424;
  margin: 10rem 0 5rem 0;
  font-size: 2rem;
  ${mobile({ fontSize: "1.5rem" })}
  ${Tablet({ fontSize: "1.5rem" })}
  #wrapper {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: auto;
    display: flex;
    ${mobile({
      flexDirection: "column",
      margin: "0 0 10rem 0",
      height: "auto",
    })}
    ${Tablet({
      flexDirection: "column",
      margin: "0 0 6rem 0",
      height: "auto",
    })}
  }

  .container1 {
    background-color: white;
    float: none;
    display: table-cell;
    vertical-align: middle;
    width: 33.333%;
    ${mobile({ width: "33.333%" })}
    ${Tablet({ marginBottom: "20px", width: "100%" })}
  }

  .container2 {
    background-color: #ea6153;
    float: none;
    display: table-cell;
    vertical-align: middle;
    width: 66.666%;
    ${mobile({ width: "100%", padding: "35px" })}
    ${Tablet({ width: "100%", padding: "35px" })}
  }

  .order {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }

  .order h2 {
    font-size: 1.8em;
    text-align: center;
    margin-bottom: 10%;
  }

  .item {
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 10%;
    overflow: hidden;
    position: relative;
  }

  .item:last-of-type {
    margin-bottom: 0;
  }

  .item img {
    float: left;
    margin-right: 3%;
    width: 200px;
  }

  .item .info {
    padding: 3%;
  }

  .item .quantity {
    font-size: 0.8em;
  }

  .item .price {
    background-color: #3fb158;
    position: absolute;
    padding: 1% 2%;
    color: white;
    bottom: 5%;
    right: 2%;
  }

  hr {
    border-top: 1px solid #a8a8a8;
  }

  .ship,
  .total {
    margin: 10% 0;
    text-align: right;
  }

  .total {
    font-size: 1.5em;
  }

  .checkout {
    width: 90%;
    margin: 0 auto;
  }

  .checkout p {
    display: inline-flex;
    flex-direction: row;
    margin-right: 4%;
  }

  .checkout p,
  .checkout i {
    color: white;
    font-size: 1.6em;
  }

  .checkout i {
    margin-right: 4%;
  }

  .checkout p:last-of-type,
  .checkout i:nth-of-type(3) {
    opacity: 0.5;
  }

  .payment {
    background-color: white;
    width: 100%;
    height: auto;
    background-image: url (${img});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
    margin-top: 3.8%;
  }

  .infos {
    width: 50%;
    padding: 3% 5% 0 5%;
  }

  .infos h2 {
    color: #ea6153;
    font-size: 1.8em;
    margin-bottom: 10%;
  }

  .visa,
  .mastercard,
  .paypal {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    width: 25%;
    height: auto;
    background-color: white;
    cursor: pointer;
    margin-right: 5%;
    margin-bottom: 10%;
  }

  .mastercard,
  .paypal {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }

  .mastercard:hover,
  .paypal:hover {
    opacity: 1;
  }

  .paypal {
    margin-right: 0;
  }

  .title {
    color: #242424 !important;
    opacity: 1 !important;
    font-size: 1em !important;
  }

  input,
  select {
    border: none;
    padding: 2%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    margin-top: 2%;
  }

  input:focus,
  select:focus {
    outline: none;
  }

  .number {
    width: 20%;
    margin-right: 5.3%;
    margin-bottom: 10%;
  }

  .number:last-of-type {
    margin-right: 0;
  }

  .cardHolderName {
    margin-bottom: 10%;
  }

  .cardHolderName input {
    width: 100%;
  }

  select {
    margin-right: 2%;
  }

  select:last-of-type {
    margin-right: 0;
  }

  .expiration,
  .security {
    margin-bottom: 10%;
  }

  .security input {
    width: 25%;
  }

  button {
    background-color: #ea6153;
    width: 100%;
    padding: 5%;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    margin-bottom: 4%;
  }

  button:hover {
    background-color: #c64f46;
  }
`;
