import axios from "axios";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { ProductIdStyle } from "../../Styles/StylePages/Admin/ProductIdStyle";
import { API_URL } from "../../utils/Config";
const Category = () => {
  const { categories } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.authAdmin);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const [category, setCategory] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState("");
  const navigate = useNavigate();
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.patch(
          `${API_URL}/category/${id}`,
          { tendm: category },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
        setOnEdit(false);
        setCategory("");
        swal(`${res.data.msg} 🤩`, {
          icon: "success",
        });
      } else {
        const res = await axios.post(
          `${API_URL}/category`,
          { tendm: category },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
        swal(`${res.data.msg} 🤩`, {
          icon: "success",
        });
        setCategory("");
      }
      setCallback(!callback);
      navigate("/category");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const deleteCategory = async (id) => {
    try {
      return await swal({
        title: "Are you sure you want delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`${API_URL}/category/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
          swal("Delete successfully, wait Loading... 😉 !", {
            icon: "success",
          });
          setCallback(!callback);
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (err) {
      swal("Oh no lucky Thank you for 🥴!");
    }
  };
  const editCategory = async (id, name) => {
    setID(id);
    setCategory(name);
    setOnEdit(true);
  };
  return (
    <>
      <ProductIdStyle />
      <div className="categories">
        <form onSubmit={createCategory}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="tendm"
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
