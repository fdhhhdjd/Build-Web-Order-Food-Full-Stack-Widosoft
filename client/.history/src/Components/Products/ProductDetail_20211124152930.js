import React, { useState } from "react";
import { ProductsDetail } from "../../Styles/StylePages/ProductsDetail";
import { image } from "../../utils/ImgDetail";
const ProductDetail = () => {
  const [select, setSelect] = useState(image[0]);
  return (
    <>
      <ProductsDetail>
        <div class="main-wrapper">
          <div class="container">
            <div class="product-div">
              <div class="product-div-left">
                <div class="img-container">
                  <img src={select} alt="watch" />
                </div>
                <div class="hover-container">
                  <div>
                    {image.map((item, index) => (
                      <img
                        src={item}
                        key={index}
                        style={{
                          border: select === item ? "4px solid purple" : "",
                        }}
                        onClick={() => setSelect(item)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div class="product-div-right">
                <span class="product-name">(New) Pizza beef</span>
                <span class="product-price">$ 50.25</span>
                <div class="product-rating">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star-half-alt"></i>
                  </span>
                  <span>(350 ratings)</span>
                </div>
                <p class="product-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae animi ad minima veritatis dolore. Architecto facere
                  dignissimos voluptate fugit ratione molestias quis quidem
                  exercitationem voluptas.
                </p>
                <div class="btn-groups">
                  <button type="button" class="add-cart-btn">
                    <i class="fas fa-shopping-cart"></i>add to cart
                  </button>
                  <button type="button" class="buy-now-btn">
                    <i class="fas fa-wallet"></i>buy now
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
