import React from "react";
import { CheckoutStyle } from "../../Styles/StylePages/CheckoutStyle";

const CheckOutItem = () => {
  return (
    <>
      <CheckoutStyle>
        <div id="wrapper">
          <div className="container1">
            <div className="order">
              <h2>Your order summary</h2>
              <div className="item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/balle.png"
                  alt=""
                />
                <div className="info">
                  <h4>Trixie Soccer Ball, Vinyl</h4>
                  <p className="quantity">Quantity: 1</p>
                  <p className="price">1.99€</p>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/frisbee.png"
                  alt=""
                />
                <div className="info">
                  <h4>Trixie Dog Activity Dog Disc</h4>
                  <p className="quantity">Quantity: 3</p>
                  <p className="price">26.97€</p>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/harnais.png"
                  alt=""
                />
                <div className="info">
                  <h4>Julius K9 Powerharness, Mini/M</h4>
                  <p className="quantity">Quantity: 1</p>
                  <p className="price">31.95€</p>
                </div>
              </div>

              <h4 className="ship">Shipping: FREE</h4>
              <hr />
              <h3 className="total">TOTAL: 60.91€</h3>
            </div>
          </div>
          <div className="container2">
            <div className="checkout">
              <p>
                <i className="fas fa-check-circle" />
                Checkout
              </p>

              <div className="payment">
                <div className="content">
                  <div className="infos">
                    <div className="method">
                      <h2>Choose a payment method</h2>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/visa.png"
                        alt=""
                        className="visa"
                      />
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/mastercard.png"
                        alt=""
                        className="mastercard"
                      />
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/paypal.png"
                        alt=""
                        className="paypal"
                      />
                    </div>
                    <div className="cardNumber">
                      <p className="title">Credit card number</p>
                      <br />
                      <input type="text" className="number" />
                      <input type="text" className="number" />
                      <input type="text" className="number" />
                      <input type="text" className="number" />
                    </div>
                    <div className="cardHolderName">
                      <p className="title">Card holder name</p>
                      <input type="text" />
                    </div>

                    <div className="expiration">
                      <p className="title">Expiration date</p>
                      <select>
                        <option>Month</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                      <select>
                        <option>Year</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                      </select>
                    </div>

                    <div className="security">
                      <p className="title">Security</p>
                      <input type="text" />
                    </div>

                    <button>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CheckoutStyle>
    </>
  );
};

export default CheckOutItem;
