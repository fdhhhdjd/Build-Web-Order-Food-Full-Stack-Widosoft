import React from "react";
import { ProductsDetail } from "../../Styles/StylePages/ProductsDetail";
const ProductDetail = () => {
  return (
    <>
      <div class="main-wrapper">
        <div class="container">
          <div class="product-div">
            <div class="product-div-left">
              <div class="img-container">
                <img src="images/w1.png" alt="watch" />
              </div>
              <div class="hover-container">
                <div>
                  <img src="images/w1.png" />
                </div>
                <div>
                  <img src="images/w2.png" />
                </div>
                <div>
                  <img src="images/w3.png" />
                </div>
                <div>
                  <img src="images/w4.png" />
                </div>
                <div>
                  <img src="images/w5.png" />
                </div>
              </div>
            </div>
            <div class="product-div-right">
              <span class="product-name">(New) Analog Watch - For Men</span>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                animi ad minima veritatis dolore. Architecto facere dignissimos
                voluptate fugit ratione molestias quis quidem exercitationem
                voluptas.
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
    </>
  );
};

export default ProductDetail;
