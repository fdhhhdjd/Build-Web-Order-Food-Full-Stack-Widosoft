import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { API_URL } from "../../utils/Config";
const initialState = {
  value: "",
};
const Info = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalState);
  const { infoApp } = useSelector((state) => ({ ...state.info }));
  const { token } = useSelector((state) => state.authAdmin);
  const [onEdit, setOnEdit] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setOnEdit(true);
      infoApp.forEach((product) => {
        if (product.slug == id) {
          setProducts(product);
          console.log(product);
        }
      });
    } else {
      setOnEdit(false);
      setProducts(initialState);
      setImages(false);
    }
  }, [id, infoApp]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onEdit) {
      await axios.patch(
        `${API_URL}/appInfo/${products.slug}`,
        { ...products },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      swal("Edit Info successfully 🤩", {
        icon: "success",
      });
    } else {
      await axios.post(
        `${API_URL}/appInfo/add`,
        { ...products },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      swal("Create Info successfully 🤩", {
        icon: "success",
      });
    }

    setCallback(!callback);
    navigate("/infoapp");
  };

  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id">Name Info App</label>
              <input
                type="text"
                name="value"
                id="value"
                required
                value={products.value}
                onChange={handleChangeInput}
              />
            </div>

            <button type="submit">Update </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Info;
