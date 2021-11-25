import React from "react";
import { CheckoutStyle } from "../../Styles/StylePages/CheckoutStyle";
import { DataCheckout } from "../../utils/DataCheckout";
import CheckoutItems from "./CheckoutItems";
const CheckOutItem = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(cart.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="number" onClick={handleNextbtn}>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="number" onClick={handlePrevbtn}>
        &hellip;
      </li>
    );
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  const renderData = (cart) => {
    return cart.map((item) => <CheckoutProduct key={item.id} item={item} />);
  };
  return (
    <>
      <CheckoutStyle>
        <div id="wrapper">
          <div className="container1">
            <div className="order">
              <h2>Your order summary</h2>
              {DataCheckout.map((item, index) => {
                return <CheckoutItems key={index} item={item} />;
              })}
              <h4 className="ship">Shipping: FREE</h4>
              <hr />
              <h3 className="total">TOTAL: 60.91€</h3>
            </div>
          </div>
          <div className="container2">
            <div className="checkout">
              <div className="payment">
                <div className="content">
                  <div className="infos">
                    <div className="method">
                      <h2>Choose Card</h2>
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
