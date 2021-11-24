import React, { useState } from "react";
import { ProductsDetail } from "../../Styles/StylePages/ProductsDetail";
import { image } from "../../utils/ImgDetail";
const ProductDetail = () => {
  const [select, setSelect] = useState(image[0]);
  return (
    <>
      <ProductsDetail>
        <div className="main-wrapper">
          <div className="container">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img src={select} alt="watch" />
                </div>
                <div className="hover-container">
                  <div>
                    {image.map((item, index) => (
                      <img
                        src={item}
                        key={index}
                        style={{
                          border: select === item ? "3px solid orange" : "",
                        }}
                        onClick={() => setSelect(item)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="product-div-right">
                <span className="product-name">(New) Pizza beef</span>
                <span className="product-price">$ 50.25</span>
                <div className="product-rating">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star-half-alt"></i>
                  </span>
                  <span>(4.5 ratings)</span>
                </div>
                <p className="product-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae animi ad minima veritatis dolore. Architecto facere
                  dignissimos voluptate fugit ratione molestias quis quidem
                  exercitationem voluptas.
                </p>
                <div className="btn-groups">
                  <button type="button" className="add-cart-btn">
                    <i className="fas fa-shopping-cart"></i>add to cart
                  </button>
                  <button type="button" className="buy-now-btn">
                    <i className="fas fa-wallet"></i>buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductsDetail>
    </>
  );
};

export default ProductDetail;
