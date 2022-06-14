import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { LoadingImage } from "../../Imports/Index";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { API_URL } from "../../utils/Config";
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
  const { product, categories } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.authAdmin);
  const [onEdit, setOnEdit] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setOnEdit(true);
      product.forEach((product) => {
        if (product.id == id) {
          setProducts(product);
          console.log(product);
          if (product.url === "") {
            setImages(product.url);
          } else {
            setImages(product);
          }
        }
      });
    } else {
      setOnEdit(false);
      setProducts(initialState);
      setImages(false);
    }
  }, [id, product]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/cloud/uploadUserImage/admin`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );

      setLoading(false);
      setImages(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images)
      return swal("No Image Upload 😅.", {
        icon: "error",
      });
    try {
      if (onEdit) {
        await axios.patch(
          `${API_URL}/product/${products.id}`,
          { ...products, public_id: images.public_id, url: images.url },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
        swal("Edit product successfully 🤩", {
          icon: "success",
        });
      } else {
        await axios.post(
          `${API_URL}/product`,
          { ...products, public_id: images.public_id, url: images.url },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
        swal("Add product successfully 🤩", {
          icon: "success",
        });
      }

      setCallback(!callback);
      navigate("/products");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${API_URL}/cloud/destroy/admin`,
        { public_id: images.public_id },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
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
              <label htmlFor="product_id">Name Product</label>
              <input
                type="text"
                name="tensp"
                id="tensp"
                required
                value={products.tensp}
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                name="chitiet"
                id="chitiet"
                required
                value={products.chitiet}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="title">Size</label> &nbsp;
              <select
                name="size"
                value={products.size}
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
                name="gia"
                id="gia"
                required
                value={products.gia}
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
              <select
                name="id_dm"
                value={products.id_dm}
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.tendm}
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
