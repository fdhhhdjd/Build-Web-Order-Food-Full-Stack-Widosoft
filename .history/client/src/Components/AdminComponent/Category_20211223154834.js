import React, { useState, useContext, useEffect } from "react";
import { ProductIdStyle } from "../../Styles/StylePages/Admin/ProductIdStyle";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingImage } from "../../Imports/Index";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
const Category = () => {
  const { categories } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.authAdmin);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const [category, setCategory] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState("");
  const createCategory = async (e) => {
    try {
      if (onEdit) {
        await axios.patch(
          `/product/${products.id}`,
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
          "/product",
          { tendm: category },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
      }

      setCallback(!callback);
      navigate("/category");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const deleteCategory = async (id) => {};
  const editCategory = async (id, name) => {};
  return (
    <>
      <ProductIdStyle />
      <div className="categories">
        <form onSubmit={createCategory}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">{onEdit ? "Update" : "Create"}</button>
        </form>

        <div className="col">
          {categories.map((category) => (
            <div className="row" key={category.id}>
              <p>{category.tendm}</p>
              <div>
                <button
                  onClick={() => editCategory(category.id, category.tendm)}
                >
                  Edit
                </button>
                <button onClick={() => deleteCategory(category.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
