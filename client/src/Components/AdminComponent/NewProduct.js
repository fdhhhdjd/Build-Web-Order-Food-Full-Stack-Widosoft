import React from "react";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
const NewProduct = () => {
  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Category</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addProductItem">
            <label>Name Product</label>
            <input type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addProductItem">
            <label>Size</label>
            <input type="text" placeholder="123" />
          </div>

          <div className="addProductItem">
            <label>Price</label>
            <input type="text" placeholder="123" />
          </div>
          <button className="addProductButton">Create</button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
