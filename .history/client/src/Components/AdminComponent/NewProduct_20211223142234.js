import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingImage } from "../../Imports/Index";
import axios from "axios";
import swal from "sweetalert";

const initialState = {
  tensp: "",
  chitiet: "",
  gia: 0,
  size: "",

  id_dm: "",
};
const NewProduct = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalState);
  const { product } = useSelector((state) => state.products);
  const [onEdit, setOnEdit] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [callback, setCallback] = state.callback;
  // const productsAdmin = products;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {}, [id]);
  const handleUpload = async (e) => {
    e.preventDefault();
  };
  const handleDestroy = async () => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChangeInput = (e) => {};

  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
            />
            {loading ? (
              <div id="file_img">
                <LoadingImage />
              </div>
            ) : (
              <div id="file_img" style={styleUpload}>
                <img src={images ? images.url : ""} alt="" />
                <span onClick={handleDestroy}>X</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id">Name Product</label>
              <input
                type="text"
                name="tensp"
                id="tensp"
                required
                value={product.product_id}
                onChange={handleChangeInput}
                disabled={onEdit}
              />
            </div>

            <div className="row">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={product.title}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="title">Size</label> &nbsp;
              <select
                name="category"
                value={product.category}
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                <option value="X">X</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                required
                value={product.price}
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
              {/* <select
                name="category"
                value={product.category}
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                {categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select> */}
            </div>

            <button type="submit">{onEdit ? "Update" : "Create"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
