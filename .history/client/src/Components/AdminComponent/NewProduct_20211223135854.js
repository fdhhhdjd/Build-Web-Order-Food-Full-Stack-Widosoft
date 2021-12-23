import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingImage } from "../../Imports/Index";
import axios from "axios";
import swal from "sweetalert";

const initialState = {
  product_id: "",
  title: "",
  price: 0,
  description: "",
  content: "",
  category: "",
  _id: "",
};
const NewProduct = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalState);
  const { categories, productAdmin } = useSelector((state) => state.product);
  const [onEdit, setOnEdit] = useState(false);
  const [product, setProduct] = useState(initialState);
  const { isAdmin } = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [callback, setCallback] = state.productsApi.callback;
  const [token] = state.token;
  // const productsAdmin = products;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setOnEdit(true);
      productAdmin.forEach((product) => {
        console.log(product._id === id, "allllo");
        if (product._id === id) {
          setProduct(product);
          setImages(product.images);
        }
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages(false);
    }
  }, [id, productAdmin]);
  console.log(productAdmin, "product");
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return swal("You're not an admin");
      const file = e.target.files[0];

      if (!file) return swal("File not Exists... 😥 !");
      if (file.size > 1024 * 1024) return swal("Size too large 😥 !");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return swal("File format is incorrect 😥!! ");
      let formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      console.log(res);
      setLoading(false);
      setImages(res.data);
    } catch (error) {
      swal("Add Image Failed 😥", `${error.response.data.msg}`);
    }
  };
  const handleDestroy = async () => {
    try {
      if (!isAdmin) return swal("You're not an admin");
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (error) {
      swal("Add Image Failed 😥", `${error.response.data.msg}`);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert("You're not an admin");
      if (!images) return alert("No Image Upload");
      setLoadingForm(true);
      if (onEdit) {
        await axios.put(
          `/api/products/${product._id}`,
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
        swal("Edit product successfully 🤩", {
          icon: "success",
        });
      } else {
        await axios.post(
          "/api/products",
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
        swal("Add product successfully 🤩", {
          icon: "success",
        });
      }

      setCallback(!callback);
      setLoadingForm(false);
      navigate("/products");
    } catch (error) {
      alert(error.response.data.msg);
      setLoadingForm(false);
    }
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

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
              <label htmlFor="product_id">Product ID</label>
              <input
                type="text"
                name="product_id"
                id="product_id"
                required
                value={product.product_id}
                onChange={handleChangeInput}
                disabled={onEdit}
              />
            </div>

            <div className="row">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                required
                value={product.description}
                rows="5"
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                name="content"
                id="content"
                required
                value={product.content}
                rows="7"
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
              <select
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
              </select>
            </div>

            <button type="submit">{onEdit ? "Update" : "Create"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
